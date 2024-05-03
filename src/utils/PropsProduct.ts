// PropsProduct.ts
import { Product } from "./types";

interface PropsProduct {
  product: Product;
  handleImageClick: (image: string) => void;
}

export default PropsProduct;
