import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";

const Description = () => {
  const t = useTranslations();

  const content = t("about_content");
  const lightVision = t("about_lightvision");
  const parts = content.split(lightVision);

  return (
    <div className='space-y-6 md:space-y-8 flex flex-col justify-center'>
      <div className='space-y-2'>
        <Typography
          variant='h1'
          className='font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-50 leading-tight'
        >
          {t("about_heading")}
        </Typography>
      </div>

      <Divider width='default' color='divider' className='h-0.5 md:h-1' />

      <Typography
        variant='body1'
        className='text-zinc-400 dark:text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl'
      >
        {parts[0]}
        {parts[1]}
      </Typography>
    </div>
  );
};
export default Description;
