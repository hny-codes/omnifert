import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  fullname: z
    .string()
    .min(2, {
      message: 'Name must be longer than 2 characters.',
    })
    .max(50, {
      message: 'Name cannot exceed 50 characters.',
    }),
  email: z.string().email(),
  subject: z.string().min(2, {
    message: 'Subject must be longer than 2 characters.',
  }),
  body: z
    .string()
    .min(10, {
      message: 'Body must be longer than 2 characters.',
    })
    .max(300, {
      message: 'Body cannot exceed 300 characters.',
    }),
});

export default function MessageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      subject: '',
      body: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 px-4 py-10 md:mx-2 2xl:mx-20 mt-14'
      >
        <div>
          <strong className='font-gothamBook text-[--clr-green-01] text-lg'>
            Get in Touch
          </strong>
          <h2 className='capitalize font-gothamRounded text-3xl lg:text-5xl font-medium text-[--clr-green-03]'>
            Send us a message
          </h2>
        </div>
        <div className='font-gothamBook [&>*]:my-4 lg:[&>*]:my-0 lg:flex gap-4 w-full'>
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem className='flex-grow'>
                <FormControl>
                  <Input
                    className='placeholder:text-[#6A6A6A] text-[#6A6A6A] h-14 pl-8'
                    placeholder='Full Name Here'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex-grow'>
                <FormControl>
                  <Input
                    className='placeholder:text-[#6A6A6A] text-[#6A6A6A] h-14 pl-8'
                    placeholder='Enter Your Email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='placeholder:text-[#6A6A6A] text-[#6A6A6A] font-gothamBook h-14 pl-8'
                  placeholder='Subject'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='body'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className='placeholder:text-[#6A6A6A] text-[#6A6A6A] font-gothamBook h-[250px] py-4 pl-8'
                  placeholder='Write Message'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' variant={'leaf'} className='uppercase py-10 px-8'>
          Send Message
        </Button>
      </form>
    </Form>
  );
}
