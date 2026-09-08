"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "../ui/typewriter";
import { videosSectionId } from "@/lib/content/homepage";
import { scrollToElement } from "@/components/home/scroll-handler";
import { useHeroVisibility } from "@/components/hero-visibility";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const heroPoster = "/videos/hero-poster.jpg";
/** Below md the hero is this still portrait instead of the video */
const heroPhoto = "/images/herophoto.jpg";
/** Tailwind's md breakpoint; the video only exists from here up */
const desktopQuery = "(min-width: 768px)";
// mp4 (H.264) first: iOS Safari reports it can play VP9 webm but often
// fails to autoplay it, and this webm is larger than the mp4 anyway.
const heroSources = [
  { src: "/videos/hero.mp4", type: "video/mp4" },
  { src: "/videos/hero.webm", type: "video/webm" }
];

interface HeroSectionProps {
  subtitle: string;
  /** Muted supporting line under the gold tagline */
  subtitleDetail?: string;
  description: string;
}

export function HeroSection({
  subtitle,
  subtitleDetail,
  description
}: HeroSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  // null until mounted: server HTML carries both stills, CSS shows the right
  // one, and the <video> is only ever created on a desktop-width client, so
  // phones never request the video file.
  const isDesktop = useMediaQuery(desktopQuery);
  const showVideo = isDesktop === true && !prefersReducedMotion;
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { heroVisibility, setHeroVisibility } = useHeroVisibility();

  // Report whether the hero is still on screen. The navbar shows the tagline
  // once the hero's bottom edge scrolls up under the fixed navbar. The top
  // margin is the navbar height plus a few px: an element touching the
  // boundary still counts as intersecting, and the section anchors' scroll
  // margin parks the hero's bottom edge exactly on the navbar's.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setHeroVisibility(entry.isIntersecting ? "in-view" : "out-of-view"),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
      setHeroVisibility("absent");
    };
  }, [setHeroVisibility]);

  // Mobile autoplay hardening. React sets `muted` as a JS property and may
  // not write the HTML attribute, which iOS Safari requires, so set it
  // imperatively and kick playback ourselves. If the browser still refuses
  // (Low Power Mode, Low Data Mode) the poster stays and the first tap
  // anywhere on the hero starts the video — a tap counts as a user gesture.
  useEffect(() => {
    const video = videoRef.current;
    const section = video?.closest("section");
    if (!video || !section || !showVideo) return;

    const tryPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => {});
    };
    const playOnGesture = () => {
      if (video.paused) tryPlay();
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay);
    section.addEventListener("pointerdown", playOnGesture);
    section.addEventListener("touchstart", playOnGesture, { passive: true });
    return () => {
      video.removeEventListener("loadedmetadata", tryPlay);
      section.removeEventListener("pointerdown", playOnGesture);
      section.removeEventListener("touchstart", playOnGesture);
    };
  }, [showVideo]);

  return (
    <section
      ref={sectionRef}
      className='relative isolate flex min-h-[calc(100svh-3.5rem)] w-full flex-col justify-between overflow-hidden bg-black sm:min-h-[calc(100svh-4rem)]'
    >
      {/* Background. Below md: the portrait still. From md up: the video's
          poster underneath, video on top unless motion is reduced (the CSS
          hide is instant; the unmount stops playback). Until the client
          knows its width both stills render and CSS picks; the one for the
          other breakpoint is asked for at its smallest size via `sizes`. */}
      {isDesktop !== true && (
        <Image
          src={heroPhoto}
          alt=''
          fill
          priority
          sizes='(min-width: 768px) 1px, 100vw'
          className='object-cover object-[52%_35%] md:hidden'
        />
      )}
      {isDesktop !== false && (
        <Image
          src={heroPoster}
          alt=''
          fill
          priority
          sizes='(max-width: 767px) 1px, 100vw'
          className='hidden object-cover md:block'
        />
      )}
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          poster={heroPoster}
          aria-hidden
          className='absolute inset-0 h-full w-full object-cover motion-reduce:hidden'
        >
          {heroSources.map((source) => (
            <source key={source.src} {...source} />
          ))}
        </video>
      )}

      {/* Scrims only where text sits (top-center label, bottom paragraph);
          the center of the frame stays at full brightness */}
      <div aria-hidden className='hero-scrim' />

      {/* Top-center label. Fades out once the hero scrolls away, at which
          point the navbar shows the tagline instead. */}
      <div className='relative z-10 flex w-full justify-center px-4 pt-5 sm:px-6 sm:pt-7 lg:pt-8'>
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
          animate={{ opacity: heroVisibility === "out-of-view" ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-fit text-center [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]'
        >
          <Typewriter className='text-amber-400 font-semibold tracking-wider uppercase text-[11px] sm:text-xs md:text-sm'>
            {subtitle}
          </Typewriter>
          {subtitleDetail && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='mt-1 text-zinc-400 tracking-wide text-[10px] sm:text-[11px] md:text-xs'
            >
              {subtitleDetail}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom: description, then the scroll indicator in normal flow so
          they can never overlap however many lines the paragraph wraps to */}
      <div className='relative z-10 flex flex-col items-center gap-6 px-5 pb-6 pt-10 sm:px-8 md:gap-8 md:pb-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className='mx-auto max-w-3xl text-center text-balance text-zinc-200 leading-relaxed whitespace-pre-line text-sm md:text-[15px] [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]'>
            {description}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='cursor-pointer touch-manipulation'
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
      </div>
    </section>
  );
}
