import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import {
  useGetAllProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} from "../../redux/api/productApi";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApi";
import AddCategory from "./AddCategory";

const ProductManagement = () => {
  const { data: productData, isLoading } = useGetAllProductsQuery(undefined);
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetAllCategoriesQuery(undefined);
  const [removeProduct] = useRemoveProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  // delete product
  const handleDeleteItem = (item: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      removeProduct(item._id);
    }
  };

  // update featured product
  const handleFeaturedProduct = (checked: boolean, productId: string) => {
    const newProduct = {
      id: productId,
      data: {
        isFeaturedProduct: checked,
      },
    };

    updateProduct(newProduct);
  };

  if (isLoading || isLoadingCategory || isUpdating) {
    return "Loading...";
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh] mb-10">
      <section className="mb-6">
        <div className="md:flex justify-between mb-10">
          <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left mb-6 md:mb-0">
            Product Cart
          </h2>
          <div className="flex gap-2 justify-center md:justify-start">
            <AddCategory />
            <AddProduct categoryData={categoryData?.data} />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">SL</TableHead>
              <TableHead className="w-32">Product</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="w-36">Featured Product</TableHead>
              <TableHead className="w-24">Action</TableHead>
            </TableRow>
          </TableHeader>
          {productData?.data?.length ? (
            <TableBody>
              {productData?.data?.map((product, idx) => (
                <TableRow key={product._id}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>
                    <div>
                      <img
                        src={product?.image}
                        alt="product"
                        className="w-full h-20 object-cover object-center rounded"
                      />
                    </div>
                  </TableCell>
                  <TableCell>{product?.name}</TableCell>
                  <TableCell>{product?.category?.name}</TableCell>
                  <TableCell>${product?.price}</TableCell>
                  <TableCell>{product?.stock}</TableCell>
                  <TableCell>
                    <div>
                      <input
                        type="checkbox"
                        name="featured_product"
                        checked={product?.isFeaturedProduct}
                        onChange={(e) =>
                          handleFeaturedProduct(e.target.checked, product._id)
                        }
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        className="px-1 py-2 h-fit bg-red-700 rounded"
                        onClick={() => handleDeleteItem(product)}
                      >
                        <RiDeleteBin5Line />
                      </Button>
                      <EditProduct
                        item={product}
                        categoryData={categoryData?.data}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={8}>
                  <div className="flex justify-center items-center h-[30vh]">
                    <p className="font-bold text-4xl text-gray-300">
                      No Data Found
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </section>
    </div>
  );
};

export default ProductManagement;
