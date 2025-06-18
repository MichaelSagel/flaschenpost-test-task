import type { TProductList } from '@/pages/product-area/product-area.ts';
import { api } from './axios.ts';
import type { AxiosResponse } from 'axios';

/**
 * Query parameters used to filter or sort products.
 */
export type TProductQuery = {
  onlyCheap?: boolean;
  sortOrder?: "ascending" | "descending";
};

/**
 * Fetch products from backend with optional filtering and sorting.
 *
 * @param query - Object containing optional `onlyCheap` and `sortOrder` fields
 * @returns List of products from the API
 */
export async function getProductData(query: TProductQuery = {}): Promise<AxiosResponse<TProductList>> {
  const response = await api.get<TProductList>("/products", {
    params: query,
  });
  return response;
}
