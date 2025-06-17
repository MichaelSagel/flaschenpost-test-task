import axios from 'axios';
import type { ProductList } from '@/pages/product-area/product-area.ts';

const api = axios.create({
  baseURL: "http://localhost:5174/api",
});

/**
 * Query parameters used to filter or sort products.
 */
export type ProductQuery = {
  onlyCheap?: boolean;
  sortOrder?: "ascending" | "descending";
};

/**
 * Fetch products from backend with optional filtering and sorting.
 *
 * @param query - Object containing optional `onlyCheap` and `sortOrder` fields
 * @returns List of products from the API
 */
export async function getProductData(query: ProductQuery = {}): Promise<ProductList> {
  const response = await api.get<ProductList>("/products", {
    params: query,
  });
  return response.data;
}
