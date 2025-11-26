import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";

interface StoriesHeaderProps {
  title: string;
}

export function StoriesHeader({ title }: StoriesHeaderProps) {
  // Split title by "&" to create two-line layout
  const [firstPart, secondPart] = title.split("&").map((part) => part.trim());

  return (
    <div className='mb-16 md:mb-24'>
      <div className='space-y-2 text-center'>
        <Typography
          variant='h1'
          className='font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-50 leading-tight'
        >
          {firstPart}
        </Typography>
        {secondPart && (
          <Typography
            variant='h1'
            className='font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-400 leading-tight'
          >
            {secondPart}
          </Typography>
        )}
        <div className='flex justify-center'>
          <Divider width='sixth' />
        </div>
      </div>
    </div>
  );
}
