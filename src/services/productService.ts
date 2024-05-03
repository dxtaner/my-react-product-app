import { Product } from "../utils/types";

const BASE_URL = "https://dummyjson.com";

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const getProductList = async (): Promise<Product[]> => {
  return fetchData<Product[]>(`${BASE_URL}/products`);
};

export const getProductById = async (
  productId: number
): Promise<Product | null> => {
  return fetchData<Product>(`${BASE_URL}/products/${productId}`);
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  let url = `${BASE_URL}/products`;

  if (query) {
    url += `/search?q=${encodeURIComponent(query)}`;
  }

  return fetchData<Product[]>(url);
};

export const getProductCategories = async (): Promise<string[]> => {
  return fetchData<string[]>(`${BASE_URL}/products/categories`);
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  return fetchData<Product[]>(`${BASE_URL}/products/category/${category}`);
};
