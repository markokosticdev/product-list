export interface ProductListQuery {
  getProductList: ProductList;
}

export interface ProductList {
  items: Product[];
  total: number;
}

export interface ProductQuery {
  getProduct: Product;
}

export interface Product {
  _id: string;
  slug: string;
  name: string;
  image: ProductImage;
  description: string;
  price: number;
}

export interface ProductImage {
  _id: string;
  sourceUrl: string;
  title: string;
}
