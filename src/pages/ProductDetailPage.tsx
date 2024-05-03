import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../utils/Product.ts";
import { getProductById } from "../services/productService.ts";
import ProductInfoDetail from "../components/ProductDetail/ProductInfoDetail";
import EnlargedImageViewer from "../components/ProductDetail/EnlargedImageViewer";
import "../styles/ProductDetailPage.css";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productId = parseInt(id);
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();

    return () => {
      setProduct(null);
    };
  }, [id]);

  const handleImageClick = (image: string) => {
    setEnlargedImage(image);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-detail">
      <ProductInfoDetail
        product={product}
        handleImageClick={handleImageClick}
      />

      {enlargedImage && (
        <EnlargedImageViewer
          image={enlargedImage}
          handleCloseEnlargedImage={handleCloseEnlargedImage}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;
