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
import { toast } from "sonner";
import defaultImage from "../../assets/default_image.jpg";
import Loading from "../../utils/Loading";
import { TProduct } from "../../types";

const ProductManagement = () => {
  // get all products
  const { data: productData, isLoading } = useGetAllProductsQuery(undefined);
  // get all categories
  const { data: categoryData, isLoading: isLoadingCategory } =
    useGetAllCategoriesQuery(undefined);
  // from redux to remove product
  const [removeProduct] = useRemoveProductMutation();
  // from redux to update product's featured status
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  // delete product
  const handleDeleteItem = (item: Record<string, unknown>) => {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed) {
      removeProduct(item._id);
      toast.warning("Product has been deleted!");
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
    checked
      ? toast.success("Product has been added as a featured item.")
      : toast.success("Removed from featured product group.");
  };

  if (isLoading || isLoadingCategory || isUpdating) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-20 lg:pt-32 min-h-[65vh] mb-10">
      <section>
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
              {productData?.data?.map((product: TProduct, idx: number) => (
                <TableRow key={product._id}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>
                    <div>
                      <img
                        src={product?.image ? product?.image : defaultImage}
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
                      <label
                        htmlFor={`featured_product_${idx}`}
                        className="inline-flex items-center space-x-4 cursor-pointer"
                      >
                        <span className="relative">
                          <input
                            id={`featured_product_${idx}`}
                            type="checkbox"
                            className="hidden peer"
                            checked={product?.isFeaturedProduct}
                            onChange={(e) =>
                              handleFeaturedProduct(
                                e.target.checked,
                                product._id
                              )
                            }
                          />
                          <div className="w-12 h-6 rounded-full shadow-inner bg-gray-300 peer-checked:bg-gray-900"></div>
                          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                        </span>
                      </label>
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
