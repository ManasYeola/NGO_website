"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target when the returned `ref` enters
 * the viewport for the first time.
 *
 * @param target   - the final numeric value
 * @param duration - animation duration in ms (default 1800)
 * @param delay    - delay in ms before starting (default 0)
 */
export function useCountUp(target: number, duration = 1800, delay = 0) {
  const [count, setCount]   = useState(0);
  const [started, setStarted] = useState(false);
  const ref                 = useRef<HTMLDivElement | null>(null);

  /* ── IntersectionObserver: trigger once when element enters view ── */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  /* ── rAF animation loop ── */
  useEffect(() => {
    if (!started) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let rafId: number;

    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const run = () => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased    = easeOutExpo(progress);

        setCount(Math.round(eased * target));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    timeoutId = setTimeout(run, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [started, target, duration, delay]);

  return { ref, count };
}
