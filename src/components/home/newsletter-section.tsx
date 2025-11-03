"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
    <div>
      {/* Header */}
      <div className='mb-8'>
        <Typography
          variant='h2'
          className='mb-3 text-zinc-900 dark:text-zinc-100'
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
        <div className='mb-6 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'>
          <div className='flex items-center gap-2'>
            <Icon
              name='lucide:check-circle'
              className='w-4 h-4 text-zinc-700 dark:text-zinc-300'
            />
            <Typography
              variant='body2'
              className='text-zinc-700 dark:text-zinc-300'
            >
              {successMessage}
            </Typography>
          </div>
        </div>
      )}

      {/* Form */}
      <Card className='border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950'>
        <CardContent className='p-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              {namePlaceholder && (
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm text-zinc-700 dark:text-zinc-300'>
                        Name (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={namePlaceholder}
                          {...field}
                          className='h-10 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
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
                    <FormLabel className='text-sm text-zinc-700 dark:text-zinc-300'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder={emailPlaceholder}
                        {...field}
                        className='h-10 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full h-10 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium'
              >
                {isLoading ? (
                  <div className='flex items-center gap-2'>
                    <Icon
                      name='lucide:loader-2'
                      className='w-4 h-4 animate-spin'
                    />
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  <span>{submitButtonText}</span>
                )}
              </Button>
            </form>
          </Form>

          {/* Privacy Note */}
          <Typography
            variant='caption2'
            className='text-zinc-500 dark:text-zinc-500 mt-4 block'
          >
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
