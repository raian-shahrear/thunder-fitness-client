import { TCategory, TCategoryOption } from "./category.type";

export type TProduct = {
  _id: string;
  category: TCategory;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string;
  isFeaturedProduct?: boolean;
};

export type ProductsFilterProps = {
  categoryOptions: TCategoryOption[];
  setSearch: (value: string) => void;
  setFilterByCategory: (categories: TCategoryOption[]) => void;
  setFilterByMinPrice: (value: string) => void;
  setFilterByMaxPrice: (value: string) => void;
  setSortByPrice: (value: string) => void;
  filterByCategory: TCategoryOption[];
};
