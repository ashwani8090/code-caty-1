import React from "react";

interface Product {
  productName: string;
  amount: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="">
      <h3 className="product-name">{product.productName}</h3>
      <h3 className="bold uppercase category">{product?.category}</h3>

      {product?.amount && <p className="product-price">{product?.amount}</p>}
    </div>
  );
};

export default ProductCard;
