/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { FormEvent, useReducer } from "react";
import { getImageUrl } from "../../utils/getImageUrl";
import { useAddCategoryMutation } from "../../redux/api/categoryApi";

type TInitialState = {
  categoryName: string;
  categoryImage: null | any;
};
type TAction = {
  type: string;
  payload: string;
};

const initialState: TInitialState = {
  categoryName: "",
  categoryImage: null,
};
const reducer = (currentState: TInitialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, categoryName: action.payload };
    case "addImage":
      return { ...currentState, categoryImage: action.payload };
    default:
      return currentState;
  }
};

const AddCategory = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // getImageUrl(state.categoryImage).then((imageUrl) => {});

    const newCategory = {
      name: state.categoryName,
      image: "imageUrl",
    };

    addCategory(newCategory);
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-300 text-gray-900 h-fit py-2 px-2 rounded transition-all duration-300 hover:bg-gray-900 hover:text-white">
          <span className="mr-2">
            <TiPlus />
          </span>
          <span>Add Category</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Category name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter category name"
                className="border py-2 px-2 rounded"
                onChange={(e) =>
                  dispatch({ type: "addName", payload: e.target.value })
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
                onChange={(e) =>
                  dispatch({ type: "addImage", payload: e.target.files[0] })
                }
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
