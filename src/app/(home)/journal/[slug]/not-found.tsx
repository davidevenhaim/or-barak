import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BackLink } from "@/components/journal";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 flex items-center justify-center'>
      <Container className='py-20'>
        <div className='max-w-2xl mx-auto text-center'>
          {/* Animated 404 Card */}
          <Card className='bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl'>
            <CardContent className='p-12'>
              {/* Glitch Effect 404 */}
              <div className='relative mb-8'>
                <Typography
                  variant='h1'
                  className='text-8xl md:text-9xl font-black bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-clip-text text-transparent animate-pulse'
                >
                  404
                </Typography>
                {/* Decorative Lines */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent' />
              </div>

              {/* Title with Gradient */}
              <Typography
                variant='h3'
                className='mb-6 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
              >
                {t("journal_not_found_title")}
              </Typography>

              {/* Description */}
              <Typography
                variant='body1'
                className='mb-10 text-zinc-600 dark:text-zinc-400 leading-relaxed'
              >
                {t("journal_not_found_description")}
              </Typography>

              {/* Back Button */}
              <BackLink
                href='/journal'
                text={t("journal_back_link")}
                variant='button'
              />
            </CardContent>

            <CardFooter className='justify-center pb-6'>
              {/* Decorative Dots */}
              <div className='flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-amber-500 animate-pulse' />
                <div className='h-2 w-2 rounded-full bg-amber-500 animate-pulse delay-100' />
                <div className='h-2 w-2 rounded-full bg-amber-500 animate-pulse delay-200' />
              </div>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
}
