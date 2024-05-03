// PropsProduct.ts
import { Product } from "./Product";

interface PropsProduct {
  product: Product;
  handleImageClick: (image: string) => void;
}

export default PropsProduct;
