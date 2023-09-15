import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoffeeSize } from '../../types';

interface CoffeeProduct {
  id: number;
  addedToCart: boolean;
  title: string;
  btn_txt: string;
  description: string;
  sizes: CoffeeSize[];
  imgSrc: string;
}

// New interface to include price and selectedSize
interface CartItem extends CoffeeProduct {
  price: number;
  selectedSize: string;
}

// Use an object to store cart items with IDs as keys
interface CartState {
  cartItems: Record<number, CartItem>;
}

const initialState: CartState = {
  // Initialize the cartItems object with an empty object
  cartItems: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;

      // Check if the product with the same ID already exists in the cart
      if (state.cartItems[id]) {
        // Product already exists, update quantity
        state.cartItems[id].addedToCart = true;
      } else {
        // Product doesn't exist, add it to the cart with addedToCart set to true
        state.cartItems[id] = { ...action.payload, addedToCart: true };
      }

      // Persist the cartItems object to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      // Check if the product with the same ID exists in the cart
      if (state.cartItems[id]) {
        // Remove the product from the cart by deleting it from the object
        delete state.cartItems[id];
      }

      // Persist the updated cartItems object to local storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    updateCartItemPriceAndSize: (
      state,
      action: PayloadAction<{ id: number; price: number; selectedSize: string }>
    ) => {
      const { id, price, selectedSize } = action.payload;

      // Update price and selectedSize for the specific product in the cart
      if (state.cartItems[id]) {
        state.cartItems[id].price = price;
        state.cartItems[id].selectedSize = selectedSize;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemPriceAndSize } = cartSlice.actions;

// Select cart items as an array
export const selectCartItems = (state: { cart: CartState }) => {
  // Convert the cartItems object into an array of products
  return Object.values(state.cart.cartItems);
};

export default cartSlice.reducer;
