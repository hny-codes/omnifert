import { Button } from '@/components/ui/button';
import type { FormEvent } from 'react';
import { useState, useRef } from 'react';
import { addToCart, getStore } from '@/nanostores/cartStore';
import type { CartItem } from '@/nanostores/cartStore';

export default function ProductForm({ id, title, image }: Partial<CartItem>) {
  const [quantity, setQuantity] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Clear input box after adding to cart
  const handleClear = () => {
    if (inputRef.current != null) {
      inputRef.current.value = '';
    }
  };

  return (
    <form
      className='flex gap-4 items-center mt-6 self-start'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(quantity);

        if (id != undefined && title != undefined && image != undefined) {
          addToCart({ id, title, image, quantity });
        }
        console.table(getStore());
        setQuantity(0);
      }}
    >
      <input
        ref={inputRef}
        className='border-2 border-[#EAEDFF] w-[96px] h-[51px] px-6 [appearance:textfield]'
        type='number'
        placeholder='1 +'
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button
        className='font-inter uppercase'
        variant={'leaf'}
        size={'leafLg'}
        onClick={handleClear}
      >
        Add To Cart
      </Button>
    </form>
  );
}
