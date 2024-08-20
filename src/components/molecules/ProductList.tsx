/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import ProductCard from "./ProductCard";

interface Product {
  productName: string;
  amount: number;
  category: string;
  id: string;
}

interface ProductListProps {
  products: Product[];
  handleClick: (product: any) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  handleClick = () => {},
}) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleClick(product)}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
/**
 const products = [
  { productName: "T-Shirt", amount: 19.99 },
  { productName: "Jeans", amount: 49.99 },
  { productName: "Dress", amount: 79.99 },
  { productName: "Jacket", amount: 99.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
  { productName: "Shoes", amount: 59.99 },
];
 */
