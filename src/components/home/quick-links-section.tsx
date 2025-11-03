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
    <section className='py-20 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <Typography
            variant='h2'
            className='mb-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
          >
            {sectionTitle}
          </Typography>
          {sectionDescription && (
            <Typography
              variant='subtitle1'
              className='text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto'
            >
              {sectionDescription}
            </Typography>
          )}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          {links.map((link, index) => (
            <QuickLinkCard key={link.id} link={link} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
