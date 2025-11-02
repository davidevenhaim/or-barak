import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

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
        {/* Section Header */}
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

        {/* Quick Links Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          {links.map((link, index) => (
            <Link key={link.id} href={link.href} className='group'>
              <Card
                className='h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.05]'
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardContent className='p-8 flex flex-col items-center text-center h-full'>
                  {/* Icon */}
                  <div
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={link.icon} className='w-8 h-8 text-white' />
                  </div>

                  {/* Title */}
                  <Typography
                    variant='h5'
                    className='mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors'
                  >
                    {link.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant='body2'
                    className='text-zinc-600 dark:text-zinc-400 flex-grow'
                  >
                    {link.description}
                  </Typography>

                  {/* Arrow */}
                  <div className='mt-6 flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium text-sm group-hover:gap-4 transition-all duration-300'>
                    <span>Explore</span>
                    <Icon
                      name='lucide:arrow-right'
                      className='transform group-hover:translate-x-1 transition-transform duration-300 w-4 h-4'
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
