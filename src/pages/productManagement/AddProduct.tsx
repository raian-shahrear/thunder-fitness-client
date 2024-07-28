import { TiPlus } from "react-icons/ti";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { FormEvent, useEffect, useReducer, useState } from "react";
import { getImageUrl } from "../../utils/getImageUrl";
import { useAddProductMutation } from "../../redux/api/productApi";
import { toast } from "sonner";
import Loading from "../../utils/Loading";
import {
  TActionForProduct,
  TCategory,
  TInitialStateForProduct,
} from "../../types";

const initialState: TInitialStateForProduct = {
  selectedCategory: "",
  productName: "",
  productPrice: "",
  productStock: "",
  productDescription: "",
  productImage: null,
};
const reducer = (
  currentState: TInitialStateForProduct,
  action: TActionForProduct
) => {
  switch (action.type) {
    case "addCategory":
      return { ...currentState, selectedCategory: action.payload };
    case "addName":
      return { ...currentState, productName: action.payload };
    case "addPrice":
      return { ...currentState, productPrice: action.payload };
    case "addStock":
      return { ...currentState, productStock: action.payload };
    case "addDescription":
      return { ...currentState, productDescription: action.payload };
    case "addImage":
      return { ...currentState, productImage: action.payload };
    default:
      return currentState;
  }
};

const AddProduct = ({ categoryData }: { categoryData: TCategory[] }) => {
  // create reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // from redux to create product
  const [addProduct, { isLoading }] = useAddProductMutation();
  // disable/enable submit button by formValid
  const [isFormValid, setIsFormValid] = useState(false);

  // control the formValid
  useEffect(() => {
    state.selectedCategory &&
    state.productName &&
    state.productPrice &&
    state.productStock &&
    state.productDescription &&
    state.productImage
      ? setIsFormValid(true)
      : setIsFormValid(false);
  }, [state]);

  // create product
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getImageUrl(state.productImage).then((imageUrl) => {
      const newProduct = {
        category: state.selectedCategory,
        name: state.productName,
        description: state.productDescription,
        price: parseFloat(state.productPrice),
        stock: parseInt(state.productStock),
        image: imageUrl,
      };
      addProduct(newProduct);
      toast.success("Product has been added.");
      // clearing the form
      dispatch({ type: "addCategory", payload: "" });
      dispatch({ type: "addName", payload: "" });
      dispatch({ type: "addPrice", payload: "" });
      dispatch({ type: "addStock", payload: "" });
      dispatch({ type: "addDescription", payload: "" });
      dispatch({ type: "addImage", payload: null });
      setIsFormValid(false);
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-fit py-2 px-2">
          <span className="mr-2">
            <TiPlus />
          </span>
          <span>Add Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="font-semibold">
                Category <span className="text-red-700">*</span>
              </label>
              <select
                name="category"
                id="category"
                onChange={(e) =>
                  dispatch({ type: "addCategory", payload: e.target.value })
                }
                className="border py-2 px-2 rounded"
              >
                <option value="">Select a category</option>
                {categoryData?.map((category: TCategory) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Product Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter product name"
                className="border py-2 px-2 rounded"
                onChange={(e) =>
                  dispatch({ type: "addName", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="font-semibold">
                Price (USD) <span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter product price"
                className="border py-2 px-2 rounded"
                onChange={(e) =>
                  dispatch({ type: "addPrice", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="stock" className="font-semibold">
                Stock <span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                name="stock"
                id="stock"
                placeholder="Enter product stock"
                className="border py-2 px-2 rounded"
                onChange={(e) =>
                  dispatch({ type: "addStock", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="font-semibold">
                Image <span className="text-red-700">*</span>
              </label>
              <input
                type="file"
                name="image"
                id="image"
                placeholder="Enter product description"
                className="border py-2 px-2 rounded"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  dispatch({ type: "addImage", payload: file });
                }}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-semibold">
                Description <span className="text-red-700">*</span>
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Enter product description"
                className="border py-2 px-2 rounded"
                onChange={(e) =>
                  dispatch({ type: "addDescription", payload: e.target.value })
                }
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" disabled={!isFormValid}>
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
