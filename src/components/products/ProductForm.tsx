import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';
import { addToCart } from '@/nanostores/cartStorePersist';
import type { CartItem } from '@/nanostores/cartStorePersist';

export default function ProductForm({
  id,
  title,
  image,
  price,
}: Partial<CartItem>) {
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

        if (
          id != undefined &&
          title != undefined &&
          image != undefined &&
          price != undefined
        ) {
          addToCart({ id, title, image, quantity, price });
        }
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
