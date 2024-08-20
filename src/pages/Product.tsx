/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

import Dropdown from "@components/atoms/dropdown";
import ProductList from "@components/molecules/ProductList";

function Product() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  console.log("product: ", product);

  const [selectedCategory, setSelectedCategory] = useState("");
  const groupByCategoryRef = useRef<any>({});

  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (products.length) {
      groupByCategoryRef.current = products.reduce((acc: any, product: any) => {
        if (!acc[product?.category]) {
          acc[product?.category] = 1;
        } else {
          acc[product?.category]++;
        }
        return acc;
      }, {});
    }
  }, [products?.length]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((categoriesArray) => {
        setCategories(
          categoriesArray.map((c: any) => ({
            label: c,
            value: c,
          })),
        );
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((x) => {
        setProducts(
          x?.products.map((p: any) => {
            return {
              productName: `${p.title}`,
              amount: `Rs . ${p.price}`,
              category: p.category,
              id: p?.id,
              ...p,
            };
          }),
        );
      });
  }, []);

  const handleProductCategory = (category: string) => {
    setSelectedCategory(category);
    setFilterProducts(
      products.filter((prod: any) => {
        return prod.category === category;
      }),
    );
  };

  return (
    <div className="flex">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: 800,
          height: "100%",
          minHeight: "100vh",
          paddingInline: 50,
        }}
      >
        <h2 className="t-white">
          Selected Category:&nbsp; &nbsp;{selectedCategory}: (
          {groupByCategoryRef?.current?.[selectedCategory] ?? 0})
        </h2>
        <Dropdown options={categories} onChange={handleProductCategory} />
        <ProductList
          products={filterProducts}
          handleClick={(p) => {
            setProduct(p);
          }}
        />
      </div>
      <div
        className="t-white"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: 400,
        }}
      >
        <h2>Product Details</h2>
      </div>
    </div>
  );
}

export default Product;
