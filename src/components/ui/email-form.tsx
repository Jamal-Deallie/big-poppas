'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components';

const emailFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
});

type EmailFormValue = z.infer<typeof emailFormSchema>;

const EmailForm = () => {
  const form = useForm<EmailFormValue>({
    resolver: zodResolver(emailFormSchema),
  });


  return (
    <>
      <p className='text-lg lg:pb-4'>
        Stay connected with Refresh Studios. Sign up for our latest news and
        updates.
      </p>

      <Form {...form}>
        <form action='#' className='inline-flex w-full'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <input
                    className='focus:border-green focus:ring-green w-full items-center space-x-2 rounded-none rounded-l-full border border-white bg-transparent px-4 pl-5 text-white placeholder-gray-200 focus:outline-none md:w-full text-base lg:text-lg'
                    placeholder='Email address'
                    {...field}
                    type='email'
                    autoComplete='one-time-code'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='sm:shrink-0 min-h-full'>
            <button
              className='hover:bg-green hover:border-green relative inline-flex items-center justify-center rounded-r-full border border-transparent bg-white text-black px-6 py-2  hover:bg-primary focus:outline-none text-base lg:text-lg min-h-full'
              type='submit'>
              Subscribe
            </button>
          </div>
        </form>
      </Form>
      <p className='text-sm text-white pt-4'>
        By clicking “Submit” below, you acknowledge that you have read,
        understood, and accepted the Privacy Policy (including sensitive data
        processing) and Terms of Use.
      </p>
    </>
  );
};

export default EmailForm;
