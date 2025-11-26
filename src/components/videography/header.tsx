import { Typography } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";
import Divider from "@/components/ui/divider";

const VideographyHeader = async () => {
  const t = await getTranslations();

  return (
    <div className='text-center space-y-4'>
      <Typography
        variant='h1'
        className='font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-50'
      >
        {t("videography_title")}
      </Typography>
      <div className='flex justify-center'>
        <Divider width='sixth' />
      </div>
    </div>
  );
};

export default VideographyHeader;
