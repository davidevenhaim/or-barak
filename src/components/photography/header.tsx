import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Divider from "@/components/ui/divider";

const PhotographyHeader = () => {
  const t = useTranslations();

  return (
    <div className='text-center  space-y-4'>
      <Typography
        variant='h1'
        className='font-serif italic text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-zinc-50'
      >
        {t("photography_collection_title")}
      </Typography>
      <div className='flex justify-center'>
        <Divider width='sixth' />
      </div>
      <Typography
        variant='body1'
        className='text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto'
      >
        {t("photography_collection_description")}
      </Typography>
    </div>
  );
};

export default PhotographyHeader;
