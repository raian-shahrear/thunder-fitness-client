export const getProductStock = (productId: string, productData) => {
    const product = productData?.data?.find((p) => p._id === productId);
    return product?.stock || 0;
  };