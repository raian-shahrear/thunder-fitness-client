/* eslint-disable @typescript-eslint/no-explicit-any */

export type TInitialStateForCategory = {
  categoryName: string;
  categoryImage: null | any;
};

export type TActionForCategory =
  | { type: "addName"; payload: string }
  | { type: "addImage"; payload: File | null };

export type TInitialStateForProduct = {
  selectedCategory: string;
  productName: string;
  productPrice: string;
  productStock: string;
  productDescription: string;
  productImage: null | any;
};

export type TActionForProduct =
  | { type: "addCategory"; payload: string }
  | { type: "addName"; payload: string }
  | { type: "addPrice"; payload: string }
  | { type: "addStock"; payload: string }
  | { type: "addDescription"; payload: string }
  | { type: "addImage"; payload: File | null };
