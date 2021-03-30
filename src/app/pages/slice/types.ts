/* --- STATE --- */

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface MallState {
  products: Product[];
}
