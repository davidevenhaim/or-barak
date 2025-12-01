"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { OR_CONSTANTS } from "@/lib/constants/or.constants";
import { getEmailLink, getWhatsappLink } from "@/lib/utils/links.utils";
import { createNewLead } from "@/lib/db/actions";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/lib/content/about";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Please enter a valid email address" }),
  projectType: z.string().min(1, { message: "Project type is required" }),
  description: z.string().nullable()
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      description: null
    },
    mode: "onBlur"
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);

    try {
      await createNewLead({
        name: data.name,
        email: data.email,
        projectType: data.projectType,
        description: data.description
      });

      setIsSubmitted(true);
      form.reset();
      toast.success(t("contact_form_success"));
    } catch (error) {
      console.error("Failed to submit lead:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='min-h-screen bg-black dark:bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-x-hidden max-w-full'>
      <div className='container mx-auto max-w-7xl w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
          <div className='flex flex-col justify-center space-y-6 sm:space-y-8 bg-black dark:bg-black p-6 sm:p-8 lg:p-12 xl:p-16'>
            <Typography
              variant='caption1'
              className='text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-xs sm:text-sm font-sans'
            >
              {t("contact_header")}
            </Typography>
            <div>
              <Typography
                variant='h2'
                className='font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-2'
              >
                {t("contact_title_part1")}{" "}
                <span className='text-amber-500 dark:text-amber-400'>
                  {t("contact_title_part2")}
                </span>
              </Typography>
            </div>
            <Typography
              variant='body1'
              className='text-zinc-400 dark:text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-sans whitespace-pre-line'
            >
              {t("contact_description_text")}
            </Typography>
            <div className='space-y-4 sm:space-y-6 pt-2 sm:pt-4'>
              <div>
                <Typography
                  variant='caption1'
                  className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-1'
                >
                  {t("contact_email_label")}
                </Typography>
                <Link
                  href={getEmailLink(OR_CONSTANTS.EMAIL)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-zinc-300 dark:text-zinc-300 text-sm sm:text-base md:text-lg hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-sans break-all touch-manipulation'
                >
                  {OR_CONSTANTS.EMAIL}
                </Link>
              </div>
              <div>
                <Typography
                  variant='caption1'
                  className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-1'
                >
                  {t("contact_phone_label")}
                </Typography>
                <Link
                  href={getWhatsappLink(OR_CONSTANTS.WHATSAPP)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-zinc-300 dark:text-zinc-300 text-sm sm:text-base md:text-lg hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-sans touch-manipulation'
                >
                  {OR_CONSTANTS.PHONE}
                </Link>
              </div>
            </div>
            <div className='flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4'>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-2 touch-manipulation'
                >
                  {t(link.name)}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className='flex flex-col justify-center bg-card dark:bg-card p-6 sm:p-8 lg:p-12 xl:p-16'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6 sm:space-y-8'
                noValidate
              >
                {/* Success Message */}
                {isSubmitted && (
                  <div className='mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-zinc-900 border border-zinc-800'>
                    <Typography
                      variant='body2'
                      className='text-zinc-300 dark:text-zinc-300 text-sm sm:text-base'
                    >
                      {t("contact_form_success")}
                    </Typography>
                  </div>
                )}

                {/* Name / Organization */}
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-2 block'>
                        {t("contact_form_name_label")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-3 text-base sm:text-lg text-white placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-amber-500 dark:focus-visible:border-amber-400 transition-colors font-sans w-full touch-manipulation'
                          placeholder=''
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 text-xs' />
                    </FormItem>
                  )}
                />

                {/* Email Address */}
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-2 block'>
                        {t("contact_form_email_label")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type='email'
                          className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-3 text-base sm:text-lg text-white placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-amber-500 dark:focus-visible:border-amber-400 transition-colors font-sans w-full touch-manipulation'
                          placeholder=''
                          autoComplete='email'
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 text-xs' />
                    </FormItem>
                  )}
                />

                {/* Project Type */}
                <FormField
                  control={form.control}
                  name='projectType'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-2 block'>
                        {t("contact_form_project_type_label")}
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-3 text-base sm:text-lg text-white focus:ring-0 focus:border-amber-500 dark:focus:border-amber-400 transition-colors font-sans [&>span]:text-zinc-400 w-full touch-manipulation'>
                            <SelectValue
                              placeholder={t(
                                "contact_form_project_type_placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent
                            className='bg-zinc-900 border-zinc-800 text-white'
                            sideOffset={4}
                            position='popper'
                          >
                            <SelectItem
                              value='commercial'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_commercial")}
                            </SelectItem>
                            <SelectItem
                              value='documentary'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_documentary")}
                            </SelectItem>
                            <SelectItem
                              value='short_film'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_short_film")}
                            </SelectItem>
                            <SelectItem
                              value='feature_film'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_feature_film")}
                            </SelectItem>
                            <SelectItem
                              value='music_video'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_music_video")}
                            </SelectItem>
                            <SelectItem
                              value='corporate'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_corporate")}
                            </SelectItem>
                            <SelectItem
                              value='other'
                              className='text-white focus:bg-zinc-800 py-3'
                            >
                              {t("contact_project_type_other")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className='text-red-400 text-xs' />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-2 block'>
                        {t("contact_form_vision_label")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          value={field.value ?? ""}
                          rows={4}
                          className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-2 w-full text-base sm:text-lg text-white placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-amber-500 dark:focus-visible:border-amber-400 transition-colors resize-none font-sans min-h-[80px] sm:min-h-[100px] touch-manipulation'
                          placeholder=''
                        />
                      </FormControl>
                      <FormMessage className='text-red-400 text-xs' />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type='submit'
                  disabled={isLoading}
                  className={cn(
                    "w-full border-2 border-amber-500 dark:border-amber-400 bg-transparent hover:bg-amber-500/10 text-white font-sans uppercase tracking-wider text-sm sm:text-base py-5 sm:py-6 rounded-none transition-all min-h-[52px] touch-manipulation",
                    "hover:border-amber-400 dark:hover:border-amber-300 active:bg-amber-500/20"
                  )}
                >
                  {isLoading ? (
                    <span className='flex items-center gap-2'>
                      <span className='animate-spin'>⟳</span>
                      {t("contact_form_submit")}
                    </span>
                  ) : (
                    t("contact_form_submit")
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
