import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cardapio } from "../../components/Body";

interface CartItem extends Cardapio {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem(state, action: PayloadAction<Cardapio>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1; 
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
