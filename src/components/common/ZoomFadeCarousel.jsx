import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ZoomFadeCarousel({
  slides = [],
  autoplayInterval = 6000,
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDelta = useRef(0);

  // autoplay logic
  useEffect(() => {
    if (!slides.length || isPaused) return;

    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(autoplayRef.current);
  }, [slides.length, autoplayInterval, isPaused]);

  // reset autoplay on manual navigation
  useEffect(() => {
    clearInterval(autoplayRef.current);
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % slides.length);
      }, autoplayInterval);
    }
    return () => clearInterval(autoplayRef.current);
  }, [current]);

  // swipe events
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      touchStartX.current = e.clientX;
      touchDelta.current = 0;
      setIsPaused(true);
    };

    const onPointerMove = (e) => {
      if (touchStartX.current == null) return;
      touchDelta.current = e.clientX - touchStartX.current;
    };

    const onPointerUp = () => {
      if (touchStartX.current == null) return;
      const THRESHOLD = 50;

      if (touchDelta.current > THRESHOLD) {
        setCurrent((c) => (c - 1 + slides.length) % slides.length);
      } else if (touchDelta.current < -THRESHOLD) {
        setCurrent((c) => (c + 1) % slides.length);
      }

      touchStartX.current = null;
      touchDelta.current = 0;
      setTimeout(() => setIsPaused(false), 500);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [slides.length]);

  if (!slides.length) {
    return (
      <div className="w-full h-[40vh] grid place-items-center bg-gray-100">
        <p className="text-gray-600">No slides provided</p>
      </div>
    );
  }

  const goPrev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((c) => (c + 1) % slides.length);

  const variants = {
    enter: { opacity: 0, scale: 1.03 },
    center: {
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1 },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-[60vh] overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {slides.map((slide, i) =>
            i === current ? (
              <motion.div
                key={slide.id}
                className="absolute inset-0 flex items-center"
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.9 }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="container relative z-10 max-w-3xl px-6 mx-auto text-white">
                  <motion.h2
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="text-3xl font-extrabold leading-tight md:text-5xl"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.6, delay: 0.18 }}
                    className="mt-4 text-lg text-emerald-300"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.6, delay: 0.28 }}
                    className="mt-2 text-gray-200"
                  >
                    {slide.description}
                  </motion.p>

                  {slide.cta && (
                    <motion.a
                      href={slide.ctaHref || "#"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.6, delay: 0.36 }}
                      className="inline-flex items-center px-5 py-3 mt-6 text-white rounded-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      {slide.cta}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <button
          aria-label="previous slide"
          onClick={goPrev}
          className="absolute z-20 p-2 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/40"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          aria-label="next slide"
          onClick={goNext}
          className="absolute z-20 p-2 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/40"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute z-20 flex gap-3 -translate-x-1/2 left-1/2 bottom-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`go to slide ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "scale-125 bg-emerald-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
