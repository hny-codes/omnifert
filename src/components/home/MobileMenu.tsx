import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import Location from '../../assets/home/location.png';
import Email from '../../assets/home/email.png';
import Phone from '../../assets/home/phone.png';
import Facebook from '../../assets/home/facebook.png';
import LinkedIn from '../../assets/home/linkedin.png';

export default function MobileMenu() {
  return (
    <aside className='font-montserrat text-[--clr-white-01] flex justify-between py-2'>
      <Popover>
        <PopoverTrigger className='lg:hidden'>@Contact</PopoverTrigger>
        <PopoverContent className='[&>*]:mb-4 bg-[--clr-green-01] text-[--clr-white-01] border-none mt-2 ml-4'>
          <div className='flex gap-4 items-center'>
            <img src={Location.src} alt='' />
            <p>No.28 Church Cres St, North Labone, Accra, Ghana</p>
          </div>
          <a
            className='flex gap-4 items-center'
            href='mailto:sales@omnifert.com'
          >
            <img src={Email.src} alt='' />
            <p>sales@omnifert.com</p>
          </a>
          <a className='flex gap-4 items-center' href='tel:233302767400'>
            <img src={Phone.src} alt='' />
            <p>+233 302 767 400</p>
          </a>
        </PopoverContent>
      </Popover>

      <div className='hidden lg:flex gap-8'>
        <div className='flex gap-2 items-center'>
          <img src={Location.src} alt='' />
          <p>No.28 Church Cres St, North Labone, Accra, Ghana</p>
        </div>
        <a className='flex gap-2 items-center' href='mailto:sales@omnifert.com'>
          <img src={Email.src} alt='' />
          <p>sales@omnifert.com</p>
        </a>
        <a className='flex gap-2 items-center' href='tel:233302767400'>
          <img src={Phone.src} alt='' />
          <p>+233 302 767 400</p>
        </a>
      </div>
      <div className='flex items-center gap-6'>
        <a href='/'>
          <img src={Facebook.src} alt='facebook link' />
        </a>
        <a href='/'>
          <img src={LinkedIn.src} alt='linkedin link' />
        </a>
      </div>
    </aside>
  );
}
