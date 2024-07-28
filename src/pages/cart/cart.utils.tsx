import { TProduct } from "../../types";

// return available stock
export const getProductStock = (productId: string, productData:TProduct[]) => {
  const product = productData?.find((p) => p._id === productId);
  return product?.stock || 0;
};
