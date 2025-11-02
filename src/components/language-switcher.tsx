"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Language, LANGUAGES, LANGUAGE_NAMES } from "@/i18n/config";
import { setLocaleCookie } from "@/i18n/actions";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale() as Language;
  const router = useRouter();

  const handleLocaleChange = (newLocale: Language) => {
    startTransition(async () => {
      await setLocaleCookie(newLocale);
      router.refresh();
    });
  };

  return (
    <div className='relative'>
      <Select
        value={currentLocale}
        onValueChange={handleLocaleChange}
        disabled={isPending}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select language' />
        </SelectTrigger>
        <SelectContent>
          {LANGUAGES.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {LANGUAGE_NAMES[lang]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
