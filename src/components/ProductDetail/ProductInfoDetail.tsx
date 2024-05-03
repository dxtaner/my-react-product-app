import React from "react";
import PropsProduct from "../../utils/PropsProduct";

const ProductInfoDetail: React.FC<PropsProduct> = ({
  product,
  handleImageClick,
}) => {
  return (
    <div className="product-info-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Discount Percentage:</strong> {product.discountPercentage}%
        </p>
        <p>
          <strong>Rating:</strong> {product.rating}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
      </div>
      <ul className="image-list">
        {product.images.map((image, index) => (
          <li key={index} onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Image ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfoDetail;
