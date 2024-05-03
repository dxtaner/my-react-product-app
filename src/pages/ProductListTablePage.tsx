import React, { useState, useEffect } from "react";
import { Product } from "../utils/Product";
import { getProductList } from "../services/productService";
import ProductTableHeader from "../components/ProductsTable/ProductTableHeader";
import ProductTableRow from "../components/ProductsTable/ProductTableRow";
import "../styles/ProductListTablePage.css";

const ProductListTablePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productList = await getProductList();
      setProducts(productList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  return (
    <div className="product-list-container">
      <h1>Product List Table</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <table className="product-table">
          <ProductTableHeader />
          <tbody>
            {products.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductListTablePage;
