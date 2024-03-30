import { atom, map, computed } from 'nanostores';
import { persistentMap, persistentAtom } from '@nanostores/persistent';

export type CartItem = {
  id: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif';
  };
  quantity: number;
  price: number;
};

export const cartItems = persistentAtom<CartItem[]>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// Function to add item to Cart
type ItemDisplay = Pick<
  CartItem,
  'id' | 'image' | 'quantity' | 'title' | 'price'
>;

export function addToCart({ id, title, image, quantity, price }: ItemDisplay) {
  const existingItem = cartItems.get().filter((items) => items.id === id);

  // If item exist (array is not 0), update its quantity, else add new cart item
  if (existingItem.length != 0) {
    const filterCart = cartItems.get().filter((items) => items.id !== id);
    const updatedQuantity = existingItem[0].quantity + quantity;
    cartItems.set([
      ...filterCart,
      { id, title, image, quantity: updatedQuantity, price },
    ]);
  } else if (quantity > 0) {
    cartItems.set([...cartItems.get(), { id, title, image, quantity, price }]);
  }
}

export function getStore() {
  return cartItems.get();
}

export const cartQuantity = computed(cartItems, (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
});

export const cartPrice = computed(cartItems, (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
});
