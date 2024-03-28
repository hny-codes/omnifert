import { atom, map } from 'nanostores';

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
};

export const cartItems = map<Record<string, CartItem>>({});

// Function to add item to Cart
type ItemDisplay = Pick<CartItem, 'id' | 'image' | 'quantity' | 'title'>;

export function addToCart({ id, title, image, quantity }: ItemDisplay) {
  const existingItem = cartItems.get()[id];

  // If exists bump quantity by 1, else add new entry
  if (existingItem) {
    cartItems.setKey(id, {
      ...existingItem,
      quantity: existingItem.quantity + quantity,
    });

    // Only add to cart if quantity is 1 or greater
  } else if (quantity > 0) {
    cartItems.setKey(id, { id, title, image, quantity });
  }
}

export function getStore() {
  return cartItems.get();
}

export function allQuantity() {
  const items = Object.values(cartItems.get());
  const quantity = items.reduce((_, item) => {
    return item.quantity;
  }, 0);
  return quantity;
}
