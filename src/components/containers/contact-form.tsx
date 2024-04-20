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
  Button,
  Input,
  TextArea,
} from '../../components';

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  language: z.string({
    required_error: 'Please select a language.',
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export default function ContactForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    JSON.stringify(data, null, 2);
  }

  return (
    <>
      <div className='overflow-hidden flex flex-col items-center flex-grow-1 md:pt-16'>
        <div className='flex relative min-h-fit items-center'>
          <div className='overflow-hidden relative min-h-fit min-w-fit'>
            <h1 className='title-xl txt-outline-tertiary text-center leading-[0.86]'>
              Say <br /> Hello
            </h1>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='pt-12 grid-inner gap-y-4 md:pb-16'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='lg:col-start-3 lg:col-end-11 col-span-full'>
                <FormControl>
                  <Input placeholder='Enter Name' {...field} type='text' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='lg:col-start-3 lg:col-end-11 col-span-full'>
                <FormControl>
                  <Input placeholder='Enter Email' {...field} type='email' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='lg:col-start-3 lg:col-end-11 col-span-full'>
                <FormControl>
                  <Input
                    placeholder='Enter Phone Number'
                    {...field}
                    type='text'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='lg:col-start-3 lg:col-end-11 col-span-full'>
                <FormControl>
                  <TextArea placeholder='Enter Message' {...field} rows={10} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            font='heading'
            fontSize='xxl'
            className=' border-black border-[1px] bg-black rounded-[4px] text-white btn  btn-box-shadow lg:py-5 lg:px-12 lg:col-start-3 lg:col-end-11 lg:mt-10 mt-6 col-span-full'>
            Submit A Message
          </Button>
        </form>
      </Form>
    </>
  );
}
