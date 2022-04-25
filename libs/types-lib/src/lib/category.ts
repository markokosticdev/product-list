import { Product } from './product';

export interface CategoryListQuery {
  getCategoryList: CategoryList;
}

export interface CategoryList {
  items: Category[];
  total: number;
}

export interface CategoryQuery {
  getCategory: Category;
}

export interface Category {
  _id: string;
  slug: string;
  name: string;
  products: Product[];
}
