// src/pages/AboutPage.tsx
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Welcome to Our Product Catalog</h1>
        <p>
          <FaRegLightbulb className="icon" />
          Are you looking for high-quality products? You're in the right place!
          At Our Product Catalog, we strive to provide the best products for our
          customers. From electronics to fashion, home goods to outdoor
          equipment, we have a wide range of products to meet your needs. Our
          products are sourced from trusted manufacturers and suppliers,
          ensuring both quality and reliability.
        </p>
        <p>
          <FaRegLightbulb className="icon" />
          Explore our extensive collection of products and find exactly what
          you're looking for. Whether you need the latest smartphone, trendy
          fashion items, stylish home decor, or practical gadgets, we have
          something for everyone. Our user-friendly website makes it easy to
          browse, compare, and purchase products from the comfort of your home.
        </p>
        <p>
          <FaRegLightbulb className="icon" />
          Shopping with us is not just about buying products – it's about
          enjoying a seamless and satisfying shopping experience. We offer fast
          and reliable shipping, secure payment options, and excellent customer
          service. If you have any questions or need assistance, our dedicated
          support team is here to help.
        </p>
        <p>
          <Link to="/products">Explore Our Products</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
