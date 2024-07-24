/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useReducer } from "react";
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
import { FaEdit } from "react-icons/fa";
import { getImageUrl } from "../../utils/getImageUrl";
import { useUpdateProductMutation } from "../../redux/api/productApi";

type TInitialState = {
  selectedCategory: string;
  productName: string;
  productPrice: string;
  productStock: string;
  productDescription: string;
  productImage: any | string;
};
type TAction = {
  type: string;
  payload: string;
};

const EditProduct = ({ item, categoryData }) => {
  const initialState: TInitialState = {
    selectedCategory: item.category._id,
    productName: item.name,
    productPrice: item.price,
    productStock: item.stock,
    productDescription: item.description,
    productImage: item.image,
  };
  const reducer = (currentState: TInitialState, action: TAction) => {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let imageUrl = state.productImage;

    if (state.productImage instanceof File) {
      imageUrl = await getImageUrl(state.productImage);
    }

    const newProduct = {
      id: item._id,
      data: {
        category: state.selectedCategory,
        name: state.productName,
        description: state.productDescription,
        price: parseFloat(state.productPrice),
        stock: parseInt(state.productStock),
        image: imageUrl,
      }
    };

    updateProduct(newProduct);
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-1 py-2 h-fit rounded">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="font-semibold">
                Category <span className="text-red-700">*</span>
              </label>
              <select
                name="category"
                id="category"
                className="border py-2 px-2 rounded"
                defaultValue={state.selectedCategory}
                onChange={(e) =>
                  dispatch({ type: "addCategory", payload: e.target.value })
                }
              >
                <option value="">Select category</option>
                {categoryData?.map((value) => (
                  <option key={value?._id} value={value?._id}>
                    {value?.name}
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
                defaultValue={state.productName}
                onChange={(e) =>
                  dispatch({ type: "addName", payload: e.target.value })
                }
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
                defaultValue={state.productPrice}
                onChange={(e) =>
                  dispatch({ type: "addPrice", payload: e.target.value })
                }
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
                defaultValue={state.productStock}
                onChange={(e) =>
                  dispatch({ type: "addStock", payload: e.target.value })
                }
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
                onChange={(e) =>
                  dispatch({ type: "addImage", payload: e.target.files[0] })
                }
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
                defaultValue={state.productDescription}
                onChange={(e) =>
                  dispatch({ type: "addDescription", payload: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Update</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProduct;
