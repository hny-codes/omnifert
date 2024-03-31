import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Item } from '@/pages/shop.astro';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

export default function ShopItems({
  itemList,
}: {
  'client:load': true;
  itemList: Item[];
}) {
  const [items, setItems] = useState(itemList);
  const [order, setOrder] = useState<'ORDER' | 'REVERSE'>('ORDER');

  useEffect(() => {
    const orderedList = itemList.sort((a, b) => {
      return a.title === b.title ? 0 : a.title < b.title ? 1 : -1;
    });

    setItems(orderedList);
  }, []);

  useEffect(() => {
    if (order === 'REVERSE') {
      const reverseList = itemList.sort((a, b) => {
        return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
      });

      setItems(reverseList);
    }

    if (order === 'ORDER') {
      const orderedList = itemList.sort((a, b) => {
        return a.title === b.title ? 0 : a.title < b.title ? 1 : -1;
      });

      setItems(orderedList);
    }
  }, [order]);

  return (
    <section className='my-20'>
      <div className='px-4 max-w-[--max-width-content] mx-auto'>
        <div className='flex flex-col sm:flex-row justify-between mb-10'>
          <div className='p-4 border-2'>
            <p className='font-gothamRounded text-sm font-medium text-[--clr-font] uppercase'>
              Showing {items.length} of {itemList.length} results
            </p>
          </div>
          <Select onValueChange={(value: 'ORDER') => setOrder(value)}>
            {/* https://github.com/shadcn-ui/ui/issues/977 */}
            <SelectTrigger className='w-[250px] h-14 rounded-none text-[--clr-green-03] font-gothamRounded font-medium self-end'>
              <SelectValue placeholder='DEFAULT SORTING' />
            </SelectTrigger>
            <SelectContent className='text-[--clr-green-03] font-gothamRounded font-medium'>
              <SelectItem value='ORDER'>A-Z</SelectItem>
              <SelectItem value='REVERSE'>Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ul className='[&>*]:mb-6 grid grid-cols-1 place-items-center md:grid-cols-2 gap-6 xl:grid-cols-3'>
          {items.map((item, idx) => (
            <li key={idx} className='text-center py-6 border-2 max-w-[400px]'>
              <a href={item.slug} className='flex flex-col items-center '>
                <div className=''>
                  <img
                    src={item.image.src}
                    alt={item.alt}
                    className='object-cover w-[368px] h-[368px]'
                  />
                </div>
                <h2 className='mt-6 font-gothamRounded text-lg font-medium text-[--clr-green-03]'>
                  {item.title}
                </h2>
                <p className='font-gothamBook text-sm text-[--clr-green-01] mt-2'>
                  GHS{' '}
                  {item.price.toLocaleString('en', {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-4 justify-center font-montserrat font-medium mt-10'>
          <Button className='rounded-full py-4 w-[61px] h-[60px] text-center border bg-[--clr-green-01] text-white'>
            1
          </Button>
          <Button className='rounded-full py-4 w-[61px] h-[60px] text-center border bg-white text-[--clr-font]'>
            2
          </Button>
          <Button className='rounded-full py-4 w-[61px] h-[60px] text-center border bg-white text-[--clr-font]'>
            →
          </Button>
        </div>
      </div>
    </section>
  );
}
