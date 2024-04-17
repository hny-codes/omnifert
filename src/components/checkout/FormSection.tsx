import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useStore } from '@nanostores/react';
import { cartItems, cartPrice } from '@/nanostores/cartStorePersist';
import type { CartItem } from '@/nanostores/cartStorePersist';
import { useState, useEffect } from 'react';
import Cart from '@/assets/home/cart.png';

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be longer than 2 characters.' })
    .max(50, { message: 'First name must be shorter than 50 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be longer than 2 characters.' })
    .max(50, { message: 'First name must be shorter than 50 characters.' }),
  companyName: z.string().optional(),
  country: z.string(),
  streetAddr: z
    .string()
    .min(2, { message: 'Street must be longer than 2 characters.' })
    .max(30, { message: 'Street must be shorter than 30 characters.' }),
  streetUnit: z.string().optional(),
  city: z
    .string()
    .min(2, { message: 'City must be longer than 2 characters.' })
    .max(50, { message: 'City must be shorter than 50 characters.' }),
  phone: z
    .string()
    .min(2, { message: 'Phone number must be longer than 2 characters.' }),
  email: z.string().email(),
  info: z
    .string()
    .max(200, { message: 'Your message must be shorter than 200 characters.' })
    .optional(),
});

export default function FormSection() {
  const [cart, setCart] = useState<CartItem[]>();
  const [total, setTotal] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [loading, setLoading] = useState(false);

  const cartStore = useStore(cartItems);
  const cartTotal = useStore(cartPrice);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      country: '',
      streetAddr: '',
      streetUnit: '',
      city: '',
      phone: '',
      email: '',
      info: '',
    },
  });

  // Add stores to state to prevent hydration errors
  useEffect(() => {
    // Simulate cart item loading
    setTimeout(() => {
      setCart(cartStore);
      setTotal(cartTotal);
      setLoading(true);
    }, 500);

    console.log(total);
  }, [total, cart]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setCheckout(true);

    localStorage.clear();
  }

  return !loading ? (
    <Loading />
  ) : total ? (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='md:grid grid-cols-2 gap-20 my-10'>
          {/* First name */}
          <div className='font-montserrat text-sm text-[--clr-font] font-light [&>*]:mb-4'>
            <h2 className='font-gothamBold text-2xl text-[--clr-green-03] mt-10 md:mt-0 mb-4'>
              Billing details
            </h2>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    First Name <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Last Name */}
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Last Name <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Company Name */}
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company name (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Country Select */}
            <FormField
              control={form.control}
              name='country'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Country / Region{' '}
                    <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Ghana' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='benin'>Benin</SelectItem>
                        <SelectItem value='nigeria'>Nigeria</SelectItem>
                        <SelectItem value='togo'>Togo</SelectItem>
                        <SelectItem value='ghana'>Ghana</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Street address */}
            <FormField
              control={form.control}
              name='streetAddr'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Street Address{' '}
                    <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='House number and street name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Apartment, unit, suite, etc */}
            <FormField
              control={form.control}
              name='streetUnit'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Apartment, suite, unit, etc. (optional)'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Town / City */}
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Town / City{' '}
                    <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email address{' '}
                    <span className='text-red-600 font-bold'>*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='font-montserrat text-sm text-[--clr-font] font-light'>
            <h2 className='font-gothamBold text-2xl text-[--clr-green-03] mt-10 md:mt-0 mb-4'>
              Additional Information
            </h2>

            {/* Additional Info */}
            <FormField
              control={form.control}
              name='info'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Order notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='Notes about your order, e.g. special notes for delivery.'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className='font-montserrat mb-4 text-[--clr-font]'>
          <h2 className='font-gothamBold text-2xl text-[--clr-green-03] mt-10 md:mt-0 mb-4'>
            Your order
          </h2>
          <div className='flex justify-between border-2 py-2 px-4 border-b-0'>
            <h3 className='font-semibold'>Product</h3>
            <h3 className='font-semibold'>Subtotal</h3>
          </div>
          <ul className='flex flex-col justify-between border-2 py-2 pl-2 pr-4 border-b-0 gap-4'>
            {cart !== undefined &&
              cart.map((item, idx) => (
                <li key={idx} className='flex justify-between w-full'>
                  <p>
                    {item.title}{' '}
                    <span className='font-bold'>x {item.quantity}</span>
                  </p>
                  <p>
                    GHS{' '}
                    {(item.price * item.quantity).toLocaleString('en', {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </li>
              ))}
          </ul>
          <div className='flex justify-between border-2 py-2 px-4 border-b-0 font-semibold'>
            <h3>Subtotal</h3>
            <p>
              GHS {total.toLocaleString('en', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className='flex justify-between border-2 py-2 px-4'>
            <h3 className='font-semibold'>Total</h3>
            <p className='font-black'>
              GHS {total.toLocaleString('en', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        <div className='bg-[#E9E6ED] font-montserrat text-right px-7 pt-8 pb-2 text-sm mb-20'>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div className='flex gap-4 justify-end'>
            <span
              className={`flex-col place-self-center bg-[--clr-green-01] text-white py-2 px-3 rounded-full animate-bounce ${
                checkout ? 'flex' : 'hidden'
              }`}
            >
              ✔
            </span>
            <Button
              type='submit'
              className='w-fit bg-[--clr-green-01] font-montserrat font-semibold capitalize rounded-none text-white my-4 '
            >
              Place Order
            </Button>
          </div>
        </div>
      </form>
    </Form>
  ) : (
    <EmptyCart />
  );
}

const EmptyCart = () => (
  <section className='px-4 text-center my-32'>
    <div className=''>
      <h2 className='font-gothamBold text-4xl xl:text-6xl text-[--clr-green-03] relative'>
        Your Cart is Empty!
      </h2>

      <p className='font-montserrat text-xl xl:text-3xl font-medium text-[--clr-green-03] mt-4'>
        Check out our shop!
      </p>
    </div>
    <div className='font-montserrat flex gap-6 justify-center items-center mt-10 relative'>
      <a
        href='/'
        className='hover:underline text-lg xl:text-xl text-[--clr-font]'
      >
        Home
      </a>
      <img src={Cart.src} alt='' className='h-fit -bottom-7' />
      <a
        href='/shop'
        className='hover:underline text-lg xl:text-xl text-[--clr-font]'
      >
        Shop
      </a>
    </div>
  </section>
);

const Loading = () => (
  <div className='text-center my-32'>
    <h2 className='font-gothamBold text-4xl xl:text-6xl text-[--clr-green-03]'>
      Loading your cart ...
    </h2>
    <ShoppingBasket className='w-full h-[100px] animate-bounce mt-14 text-[--clr-green-03]' />
  </div>
);
