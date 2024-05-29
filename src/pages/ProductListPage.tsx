import React, { useState, useEffect } from "react";
import { Product } from "../utils/Product";
import {
  getProductList,
  searchProducts,
  getProductCategories,
  getProductsByCategory,
} from "../services/productService";
import SearchFilter from "../components/ProductList/SearchFilter";
import ProductItem from "../components/ProductList/ProductItem";
import "../styles/ProductListPage.css";

interface Category {
  slug: string;
  name: string;
  url: string;
}

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInitialData();
  }, [selectedCategory, searchQuery]);

  const fetchInitialData = async () => {
    setLoading(true);
    setNotFound(false);
    setError(null);
    try {
      let productList: Product[] = [];

      if (selectedCategory) {
        productList = await getProductsByCategory(selectedCategory);
      } else if (searchQuery) {
        productList = await searchProducts(searchQuery);
      } else {
        productList = await getProductList();
      }

      setProducts(productList);
      setLoading(false);

      if (productList.length === 0) {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products. Please try again later.");
      setLoading(false);
    }

    fetchCategories();
  };

  const fetchCategories = async () => {
    try {
      const categoryList = (await getProductCategories()) as Category[];

      setCategories(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Error fetching categories. Please try again later.");
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setSelectedCategory(null);
  };

  return (
    <div>
      <h1>Product List</h1>
      <SearchFilter
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        categories={categories}
        handleSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
      />

      <div className="product-list-container">
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {!loading && !notFound && (
          <ul className="product-list">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                searchQuery={searchQuery}
              />
            ))}
          </ul>
        )}
        {!loading && notFound && (
          <div className="not-found">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
