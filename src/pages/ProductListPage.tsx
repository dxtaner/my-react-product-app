import React, { useState, useEffect } from "react";
import { Product } from "../utils/Product.ts";
import {
  getProductList,
  searchProducts,
  getProductCategories,
  getProductsByCategory,
} from "../services/productService.ts";
import SearchFilter from "../components/ProductList/SearchFilter";
import ProductItem from "../components/ProductList/ProductItem";
import "../styles/ProductListPage.css";

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  const fetchProducts = async () => {
    setLoading(true);
    setNotFound(false);
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
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const categoryList = await getProductCategories();
      setCategories(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
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
        {!loading && notFound && (
          <div className="not-found">No products found.</div>
        )}
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
      </div>
    </div>
  );
};

export default ProductListPage;
