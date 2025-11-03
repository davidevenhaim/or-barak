"use client";

import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

interface PartnershipSectionProps {
  partners: Partner[];
  sectionTitle: string;
}

export function PartnershipSection({
  partners,
  sectionTitle
}: PartnershipSectionProps) {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className='py-20 bg-white dark:bg-black overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <Typography
            variant='h3'
            className='mb-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
          >
            {sectionTitle}
          </Typography>
        </div>

        <div className='relative'>
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10' />
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10' />

          <div className='flex animate-infinite-scroll hover:pause-animation'>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className='flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300'
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className='object-contain w-full h-full'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
