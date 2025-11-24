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

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  projectType: z.string().min(1, { message: "Project type is required" }),
  vision: z.string().min(20, { message: "Please provide more details" })
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
      vision: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);

    // TODO: Implement actual API call with data
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
    form.reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const socialLinks = [
    {
      name: t("contact_social_instagram"),
      href: "https://www.instagram.com/orbarak10",
      icon: "mdi:instagram"
    },
    {
      name: t("contact_social_linkedin"),
      href: "#",
      icon: "mdi:linkedin"
    },
    {
      name: t("contact_social_imdb"),
      href: "#",
      icon: "mdi:movie-open"
    }
  ];

  return (
    <section className='min-h-screen bg-black dark:bg-black py-20 px-4'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
          {/* Left Column - Info */}
          <div className='flex flex-col justify-center space-y-8 bg-black dark:bg-black p-8 lg:p-12 xl:p-16'>
            {/* Header */}
            <Typography
              variant='caption1'
              className='text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-xs md:text-sm font-sans'
            >
              {t("contact_header")}
            </Typography>

            {/* Main Title */}
            <div>
              <Typography
                variant='h1'
                className='font-serif italic text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-2'
              >
                {t("contact_title_part1")}{" "}
                <span className='text-amber-500 dark:text-amber-400'>
                  {t("contact_title_part2")}
                </span>
              </Typography>
            </div>

            {/* Description */}
            <Typography
              variant='body1'
              className='text-zinc-400 dark:text-zinc-300 text-base md:text-lg leading-relaxed max-w-lg font-sans'
            >
              {t("contact_description_text")}
            </Typography>

            {/* Contact Info */}
            <div className='space-y-6 pt-4'>
              {/* Email */}
              <div>
                <Typography
                  variant='caption1'
                  className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-1'
                >
                  {t("contact_email_label")}
                </Typography>
                <a
                  href={`mailto:${OR_CONSTANTS.EMAIL}`}
                  className='text-zinc-300 dark:text-zinc-300 italic text-base md:text-lg hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-sans'
                >
                  {OR_CONSTANTS.EMAIL}
                </a>
              </div>

              {/* Phone */}
              <div>
                <Typography
                  variant='caption1'
                  className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-1'
                >
                  {t("contact_phone_label")}
                </Typography>
                <a
                  href={`tel:${OR_CONSTANTS.PHONE.replace(/\s/g, "")}`}
                  className='text-zinc-300 dark:text-zinc-300 italic text-base md:text-lg hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-sans'
                >
                  {OR_CONSTANTS.PHONE}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex flex-wrap gap-6 pt-4'>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans hover:text-amber-500 dark:hover:text-amber-400 transition-colors'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className='flex flex-col justify-center bg-card dark:bg-card p-8 lg:p-12 xl:p-16'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                {/* Success Message */}
                {isSubmitted && (
                  <div className='mb-6 p-4 rounded-lg bg-zinc-900 border border-zinc-800'>
                    <Typography
                      variant='body2'
                      className='text-zinc-300 dark:text-zinc-300'
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
                        <div className='relative w-full'>
                          <Input
                            {...field}
                            className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-2 text-white placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-amber-500 dark:focus-visible:border-amber-400 transition-colors font-sans w-full'
                            placeholder=''
                          />
                        </div>
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
                        <div className='relative w-full'>
                          <Input
                            type='email'
                            {...field}
                            className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-2 text-white placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-amber-500 dark:focus-visible:border-amber-400 transition-colors font-sans w-full'
                            placeholder=''
                          />
                        </div>
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
                          defaultValue={field.value}
                        >
                          <SelectTrigger className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-2 text-white focus:ring-0 focus:border-amber-500 dark:focus:border-amber-400 transition-colors font-sans [&>span]:text-zinc-400 w-full'>
                            <SelectValue
                              placeholder={t(
                                "contact_form_project_type_placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent className='bg-zinc-900 border-zinc-800 text-white'>
                            <SelectItem
                              value='commercial'
                              className='text-white focus:bg-zinc-800'
                            >
                              {t("contact_project_type_commercial")}
                            </SelectItem>
                            <SelectItem
                              value='documentary'
                              className='text-white focus:bg-zinc-800'
                            >
                              {t("contact_project_type_documentary")}
                            </SelectItem>
                            <SelectItem
                              value='short_film'
                              className='text-white focus:bg-zinc-800'
                            >
                              {t("contact_project_type_short_film")}
                            </SelectItem>
                            <SelectItem
                              value='feature_film'
                              className='text-white focus:bg-zinc-800'
                            >
                              {t("contact_project_type_feature_film")}
                            </SelectItem>
                            <SelectItem
                              value='music_video'
                              className='text-white focus:bg-zinc-800'
                            >
                              {t("contact_project_type_music_video")}
                            </SelectItem>
                            <SelectItem
                              value='corporate'
                              className='text-white focus:bg-zinc-800'
                            >
                              {t("contact_project_type_corporate")}
                            </SelectItem>
                            <SelectItem
                              value='other'
                              className='text-white focus:bg-zinc-800'
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

                {/* Vision */}
                <FormField
                  control={form.control}
                  name='vision'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-zinc-500 dark:text-zinc-500 uppercase tracking-wider text-xs font-sans mb-2 block'>
                        {t("contact_form_vision_label")}
                      </FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          rows={4}
                          className='bg-transparent border-0 border-b border-zinc-700 dark:border-zinc-700 rounded-none px-0 py-2 w-full text-white placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-amber-500 dark:focus-visible:border-amber-400 transition-colors resize-none font-sans min-h-[60px]'
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
                    "w-full border-2 border-amber-500 dark:border-amber-400 bg-transparent hover:bg-amber-500/10 text-white font-sans uppercase tracking-wider text-sm py-6 rounded-none transition-all",
                    "hover:border-amber-400 dark:hover:border-amber-300"
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
