import { Typography } from "@/components/ui/typography";
import { QuickLinkCard } from "./quick-link-card";

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
}

interface QuickLinksSectionProps {
  links: QuickLink[];
  sectionTitle: string;
  sectionDescription?: string;
}

export function QuickLinksSection({
  links,
  sectionTitle,
  sectionDescription
}: QuickLinksSectionProps) {
  return (
    <section className='py-12 sm:py-16 md:py-20 pt-8 sm:pt-10 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950 overflow-x-hidden max-w-full'>
      <div className='container mx-auto px-4 sm:px-6 w-full'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-10 md:mb-12'>
          <div className='h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6 sm:mb-8 mx-auto' />
          <Typography
            variant='h2'
            className='mb-3 sm:mb-4 px-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
          >
            {sectionTitle}
          </Typography>
          {sectionDescription && (
            <Typography
              variant='subtitle1'
              className='text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 text-sm sm:text-base'
            >
              {sectionDescription}
            </Typography>
          )}
          <div className='h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-6 sm:mt-8 mx-auto' />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto'>
          {links.map((link, index) => (
            <div key={link.id} className='h-full flex'>
              <QuickLinkCard link={link} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
