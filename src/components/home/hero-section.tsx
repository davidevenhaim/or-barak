"use client";

import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "../ui/typewriter";
import { videosSectionId } from "@/lib/content/homepage";
import { scrollToElement } from "@/components/home/scroll-handler";

const heroPoster = "/videos/hero-poster.jpg";
const heroSources = [
  { src: "/videos/hero.webm", type: "video/webm" },
  { src: "/videos/hero.mp4", type: "video/mp4" }
];

interface HeroSectionProps {
  title: string;
  subtitle: string;
  /** Muted supporting line under the gold tagline */
  subtitleDetail?: string;
  description: string;
}

/**
 * `false` on the server and during hydration (so markup matches), then the
 * device's real prefers-reduced-motion setting once mounted. Unlike
 * framer-motion's useReducedMotion, this never reads matchMedia during render.
 */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function HeroSection({
  title,
  subtitle,
  subtitleDetail,
  description
}: HeroSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className='relative isolate flex min-h-[calc(100svh-3.5rem)] w-full items-center justify-center overflow-hidden bg-black px-6 py-24 sm:min-h-[calc(100svh-4rem)] sm:px-10 md:py-28'>
      {/* Background: poster underneath, video on top unless motion is reduced.
          The CSS hide (motion-reduce) is instant; the unmount stops playback. */}
      <Image
        src={heroPoster}
        alt=''
        fill
        priority
        sizes='100vw'
        className='object-cover'
      />
      {!prefersReducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          poster={heroPoster}
          aria-hidden
          className='absolute inset-0 h-full w-full object-cover motion-reduce:hidden'
        >
          {heroSources.map((source) => (
            <source key={source.src} {...source} />
          ))}
        </video>
      )}

      {/* Dark scrim so the centered text reads over bright sky and road */}
      <div aria-hidden className='hero-scrim' />

      <div className='relative z-10 w-full max-w-2xl text-center [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant='h1'
            className='mb-3 sm:mb-4 text-white font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'
          >
            {title}
          </Typography>
        </motion.div>

        <Typewriter
          className={`${
            subtitleDetail ? "mb-2" : "mb-4 sm:mb-5"
          } text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm md:text-base`}
        >
          {subtitle}
        </Typewriter>

        {subtitleDetail && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='mb-5 sm:mb-6 text-zinc-400 tracking-wide text-[11px] sm:text-xs md:text-sm'
          >
            {subtitleDetail}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography
            variant='subtitle1'
            className='mx-auto max-w-xl text-zinc-200 leading-relaxed whitespace-pre-line sm:text-base md:text-lg'
          >
            {description}
          </Typography>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className='absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer touch-manipulation md:bottom-10'
        onClick={() => scrollToElement(videosSectionId)}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='flex flex-col items-center gap-2'
        >
          <span className='text-white/70 text-xs sm:text-sm md:text-base'>
            Scroll
          </span>
          <div className='w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 sm:p-2'>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-1.5 sm:h-2 bg-white/70 rounded-full'
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
