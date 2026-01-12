import React, { use } from "react";
import Product from "./Product";

const Products = ({ fetchPromise, handelCountProducts }) => {
  const products = use(fetchPromise);

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          handelCountProducts={handelCountProducts}
          product={product}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
