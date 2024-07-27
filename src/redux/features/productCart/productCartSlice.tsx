import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCart = {
  productId: string;
  productName?: string;
  unitPrice?: number;
  quantity: number;
};
type TInitialState = {
  orderedProducts: TCart[];
};
const initialState: TInitialState = {
  orderedProducts: [],
};

export const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCart>) => {
      const isProductExist =
        state.orderedProducts.length &&
        state.orderedProducts.find(
          (data) => data.productId === action.payload.productId
        );
      if (!isProductExist) {
        state.orderedProducts.push({ ...action.payload });
      } else {
        isProductExist.quantity =
          isProductExist.quantity + action.payload.quantity;
      }
    },
    removeSingleProduct: (state, action: PayloadAction<string>) => {
      state.orderedProducts = state.orderedProducts.filter(
        (item) => item.productId !== action.payload
      );
    },
    updateQuantity: (state, action: PayloadAction<TCart>) => {
      const isProductExist =
        state.orderedProducts.length &&
        state.orderedProducts.find(
          (data) => data.productId === action.payload.productId
        );
      if (isProductExist) {
        isProductExist.quantity = action.payload.quantity;
      }
    },
    clearProductCart: (state) => {
      state.orderedProducts = []
    },
  },
});

export const { addToCart, removeSingleProduct, updateQuantity, clearProductCart } = productCartSlice.actions;
export default productCartSlice.reducer;
