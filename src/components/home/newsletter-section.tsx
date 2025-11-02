"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
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
import { Icon } from "@/components/ui/icon";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .optional()
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

interface NewsletterSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  successMessage: string;
  submitButtonText: string;
  emailPlaceholder: string;
  namePlaceholder?: string;
}

export function NewsletterSection({
  sectionTitle,
  sectionDescription,
  successMessage,
  submitButtonText,
  emailPlaceholder,
  namePlaceholder
}: NewsletterSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      name: ""
    }
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Newsletter subscription:", data);
    setIsSubmitted(true);
    setIsLoading(false);
    form.reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className='py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <Card className='bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl overflow-hidden'>
            <CardContent className='p-10 md:p-16'>
              {/* Header */}
              <div className='text-center mb-10'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 mb-6'>
                  <Icon name='lucide:mail' className='w-8 h-8 text-white' />
                </div>

                <Typography
                  variant='h2'
                  className='mb-4 bg-gradient-to-r from-zinc-900 via-amber-700 to-zinc-900 dark:from-zinc-50 dark:via-amber-400 dark:to-zinc-50 bg-clip-text text-transparent'
                >
                  {sectionTitle}
                </Typography>

                <Typography
                  variant='subtitle1'
                  className='text-zinc-600 dark:text-zinc-400'
                >
                  {sectionDescription}
                </Typography>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className='mb-8 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'>
                  <div className='flex items-center gap-3'>
                    <Icon
                      name='lucide:check-circle'
                      className='w-5 h-5 text-green-600 dark:text-green-400'
                    />
                    <Typography
                      variant='body2'
                      className='text-green-800 dark:text-green-200'
                    >
                      {successMessage}
                    </Typography>
                  </div>
                </div>
              )}

              {/* Form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
                >
                  {namePlaceholder && (
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-zinc-700 dark:text-zinc-300'>
                            Name (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={namePlaceholder}
                              {...field}
                              className='h-12 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-zinc-700 dark:text-zinc-300'>
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder={emailPlaceholder}
                            {...field}
                            className='h-12 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    disabled={isLoading}
                    className='w-full h-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-base'
                  >
                    {isLoading ? (
                      <div className='flex items-center gap-2'>
                        <Icon
                          name='lucide:loader-2'
                          className='w-5 h-5 animate-spin'
                        />
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <div className='flex items-center gap-2'>
                        <span>{submitButtonText}</span>
                        <Icon name='lucide:send' className='w-5 h-5' />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              {/* Privacy Note */}
              <Typography
                variant='caption2'
                className='text-center text-zinc-500 dark:text-zinc-600 mt-6'
              >
                We respect your privacy. Unsubscribe at any time.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
