import { TCategoryOption } from "../../types";

type TFilterObj = {
  searchTerm?: string;
  categories?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
};

// creating a filter object for product filtering
export const productFilterFun = (
  search: string,
  filterByCategory: TCategoryOption[],
  filterByMinPrice: string,
  filterByMaxPrice: string,
  sortByPrice: string
) => {
  const filterObj: TFilterObj = {};

  if (search) {
    filterObj.searchTerm = search;
  }
  if (filterByCategory?.length) {
    filterObj.categories = filterByCategory.map((val) => val.value).join(",");
  }
  if (filterByMinPrice) {
    filterObj.minPrice = parseFloat(filterByMinPrice);
  }
  if (filterByMaxPrice) {
    filterObj.maxPrice = parseFloat(filterByMaxPrice);
  }
  if (sortByPrice) {
    filterObj.sort = sortByPrice;
  }

  return filterObj;
};
