import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TCartItem = {
    id:string,
    name:string,
    image:string
    quantity:number
    price:number

}

type TInitialState = {
    cartItems:TCartItem[]
    totalPrice:number
    totalQuantity:number
}

const initialState:TInitialState = {
    cartItems :[],
    totalPrice: 0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<TCartItem>) => {
            const existingCartItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingCartItem) {
              existingCartItem.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
          },
      
          removeFromCart: (state, action: PayloadAction<string>) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload);
            if (existingItem) {
              state.totalQuantity -= existingItem.quantity;
              state.totalPrice -= existingItem.price * existingItem.quantity;
              state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
          },
      
          updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
            if (item) {
              state.totalQuantity += action.payload.quantity - item.quantity;
              state.totalPrice += (action.payload.quantity - item.quantity) * item.price;
              item.quantity = action.payload.quantity;
            }
          },
          clearCart:(state) => {
            state.cartItems = []
            state.totalPrice = 0
            state.totalQuantity = 0
          }
    }
})


export const {addToCart,removeFromCart,updateQuantity,clearCart} = cartSlice.actions

export default cartSlice.reducer


export const setTotalPrice = (state:RootState) => state.reducer.cart.totalPrice
export const setTotalQuantity = (state:RootState) => state.reducer.cart.totalQuantity
export const setCartedItems = (state:RootState) => state.reducer.cart.cartItems