// ProductItem.tsx
import React from "react";
import { Link } from "react-router-dom";
import PropsProductItem from "../../utils/PropsProductItem";

const ProductItem: React.FC<PropsProductItem> = ({ product, searchQuery }) => {
  const highlightSearch = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <li key={product.id}>
      <div className="product-item">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-info-list">
          <Link to={`/products/${product.id}`} className="product-link">
            <h3>{highlightSearch(product.title, searchQuery)}</h3>
          </Link>
          <p>{highlightSearch(product.description, searchQuery)}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
