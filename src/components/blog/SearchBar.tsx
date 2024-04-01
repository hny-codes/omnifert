import { Input } from '../ui/input';
import { Button } from '../ui/button';
import SearchIcon from '@/assets/blog/search.png';

export default function SearchBar() {
  return (
    <form action='' className='font-montserrat flex py-8 border px-8 shadow-sm'>
      <Input
        type='text'
        placeholder='Search'
        className='placeholder:text-sm bg-[#F4F5F0] rounded-none py-8 pl-8'
      />

      <Button className='rounded-none bg-[--clr-green-01] p-8'>
        <img src={SearchIcon.src} alt='' className='scale-150' />
      </Button>
    </form>
  );
}
