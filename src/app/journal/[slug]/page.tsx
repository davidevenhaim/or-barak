import { Container } from "@/components/container";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { BackLink, DateBadge, PostTags } from "@/components/journal";
import { getAllJournalPosts, getJournalPostBySlug } from "@/lib/content/post";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

interface JournalPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllJournalPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getJournalPostBySlug(slug);
  const t = await getTranslations();

  if (!post) {
    return {
      title: t("journal_not_found_title")
    };
  }

  return {
    title: `${post.title} | ${t("site_title")}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.coverImage,
          alt: post.title
        }
      ]
    }
  };
}

export default async function JournalPostPage({
  params
}: JournalPostPageProps) {
  const { slug } = await params;
  const post = await getJournalPostBySlug(slug);
  const t = await getTranslations();

  if (!post) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900'>
      <Container className='py-20'>
        <article className='max-w-4xl mx-auto'>
          {/* Back Link */}
          <BackLink href='/journal' text={t("journal_back_link")} />

          {/* Cover Image - Full Width Hero */}
          <div className='relative w-full h-[500px] mb-12 rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-2xl'>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className='object-cover'
              priority
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

            {/* Floating Date Badge */}
            <DateBadge
              date={post.publishedAt}
              variant='floating'
              className='top-6 right-6 px-5 py-3 shadow-lg'
            />
          </div>

          {/* Header Card */}
          <Card className='mb-12 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-lg'>
            <CardHeader className='pb-0'>
              <div className='mb-6'>
                <Typography
                  variant='h1'
                  className='mb-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
                >
                  {post.title}
                </Typography>
                <div className='h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full' />
              </div>

              <Typography
                variant='subtitle1'
                className='text-zinc-600 dark:text-zinc-400 leading-relaxed'
              >
                {post.description}
              </Typography>
            </CardHeader>

            {/* Tags */}
            <CardContent className='pt-0'>
              <PostTags tags={post.tags} withHash className='mt-6' />
            </CardContent>
          </Card>

          {/* Content Card */}
          <Card className='mb-12 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-lg'>
            <CardContent className='p-10'>
              <div className='prose prose-lg prose-zinc dark:prose-invert max-w-none'>
                <Typography
                  variant='body1'
                  className='whitespace-pre-wrap text-zinc-700 dark:text-zinc-300 leading-relaxed'
                >
                  {post.content}
                </Typography>
              </div>
            </CardContent>
          </Card>

          {/* Footer Card */}
          <Card className='bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-lg'>
            <CardFooter className='flex items-center justify-between p-6'>
              <BackLink
                href='/journal'
                text={t("journal_back_link")}
                variant='button'
              />

              {/* Decorative Element */}
              <div className='hidden md:flex items-center gap-2'>
                <div className='h-2 w-2 rounded-full bg-amber-500 animate-pulse' />
                <div className='h-2 w-2 rounded-full bg-amber-500 animate-pulse delay-100' />
                <div className='h-2 w-2 rounded-full bg-amber-500 animate-pulse delay-200' />
              </div>
            </CardFooter>
          </Card>
        </article>
      </Container>
    </div>
  );
}
