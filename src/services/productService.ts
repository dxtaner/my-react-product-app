// productService.ts
import { Product } from "../utils/Product";
import { ProductResponse } from "../utils/ProductResponse";

export const BASE_URL = "https://dummyjson.com";

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
  const url = `${BASE_URL}/products`;
  const data: ProductResponse = await fetchData<ProductResponse>(url);
  return data.products;
};

export const getProductById = async (
  productId: number
): Promise<Product | null> => {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const data: Product = await fetchData<Product>(url);
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return null;
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  let url = `${BASE_URL}/products`;

  if (query) {
    url += `/search?q=${encodeURIComponent(query)}`;
  }

  const data: ProductResponse = await fetchData<ProductResponse>(url);
  return data.products;
};

interface Category {
  slug: string;
  name: string;
  url: string;
}

export const getProductCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) {
      throw new Error("Kategoriler alınamadı.");
    }
    const data = await response.json();
    const categoryList: Category[] = data.map((categoryData: Category) => ({
      slug: categoryData.slug,
      name: categoryData.name,
      url: categoryData.url,
    }));

    return categoryList;
  } catch (error) {
    console.error("Kategoriler alınırken bir hata oluştu:", error);
    return [];
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const url = `${BASE_URL}/products/category/${category}`;
  const data: ProductResponse = await fetchData<ProductResponse>(url);
  return data.products;
};
