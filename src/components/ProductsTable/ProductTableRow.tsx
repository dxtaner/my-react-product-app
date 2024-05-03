// ProductTableRow.tsx
import React from "react";
import { Link } from "react-router-dom";
import PropsProductList from "../../utils/PropsProductList";

const ProductTableRow: React.FC<PropsProductList> = ({ product }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </td>
      <td>{product.description}</td>
      <td>${product.price}</td>
      <td>{product.discountPercentage}%</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
      <td>{product.brand}</td>
      <td>{product.category}</td>
    </tr>
  );
};

export default ProductTableRow;
