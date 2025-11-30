"use client";

import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "../ui/typewriter";
import { videosSectionId } from "@/lib/content/homepage";
import { scrollToElement } from "@/components/home/scroll-handler";
import { useBoolean } from "@/hooks/use-boolean";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  backgroundVideo?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo
}: HeroSectionProps) {
  const isVideoLoaded = useBoolean(false);

  return (
    <section className='relative h-[calc(100vh-64px)] sm:h-[calc(100vh-64px)] md:h-[calc(100vh-50px)] w-full overflow-hidden'>
      {/* Background Media */}
      <div className='absolute inset-0'>
        {backgroundVideo ? (
          <>
            {/* Fallback Image */}
            {!isVideoLoaded.value && (
              <Image
                src={backgroundImage}
                alt='Hero background'
                fill
                className='object-cover'
                priority
              />
            )}
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className='h-full w-full object-cover'
              onLoadedData={isVideoLoaded.onTrue}
            >
              <source src={backgroundVideo} type='video/mp4' />
            </video>
          </>
        ) : (
          <Image
            src={backgroundImage}
            alt='Hero background'
            fill
            className='object-cover'
            priority
          />
        )}

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70' />
      </div>

      {/* Content */}
      <div className='relative z-10 flex h-full items-center justify-center px-4 sm:px-6 md:px-8'>
        <div className='max-w-5xl text-center w-full'>
          <Typewriter className='mb-5 sm:mb-6 text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm md:text-base'>
            {subtitle}
          </Typewriter>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant='h1'
              className='mb-4 sm:mb-6 text-white font-bold px-2'
            >
              {title}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant='subtitle1'
              className='text-zinc-200 max-w-xl mx-auto leading-relaxed whitespace-pre-line sm:text-base md:text-lg px-4 mt-30'
            >
              {description}
            </Typography>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer touch-manipulation'
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
      </div>
    </section>
  );
}
