import { ProductCategory } from './enum/product-types.enum.js';

class Product {
  id: string;
  name: string;
  price: number;
  product_category: ProductCategory;
}

export { Product };
