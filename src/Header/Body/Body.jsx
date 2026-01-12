import React, { Suspense, useState } from "react";
import "./Body.css";
import Product from "./Products";
import Products from "./Products";
import BookmarkProducts from "./BookmarkProducts";

const fetchPromise = fetch("api.json").then((res) => res.json());

const Body = () => {
  const [countProducts, setCountProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // add, remove products in bookmarks. and total price calculation.
  const handelCountProducts = ({ product, btnColor }) => {
    if (btnColor === true) {
      const newProduct = countProducts.filter(
        (yProduct) => yProduct !== product
      );
      setCountProducts(newProduct);
      //remove price from total price.
      setTotalPrice(totalPrice - product.price);
    } else {
      setCountProducts([...countProducts, product]);
      // add total price
      setTotalPrice(totalPrice + product.price);
    }
  };

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <h2 className="headerName">Products</h2>
        <div>
          {
            <Suspense fallback={<h2>Loding...</h2>}>
              <Products
                handelCountProducts={handelCountProducts}
                fetchPromise={fetchPromise}
              ></Products>
            </Suspense>
          }
        </div>
      </div>
      <div className="rightContainer">
        <h2 className="headerName">Bookmarks</h2>
        <p>Count Products:{countProducts.length}</p>
        <div className="bookMarkContainer">
          {countProducts.map((sProduct) => (
            <BookmarkProducts sProduct={sProduct}></BookmarkProducts>
          ))}
        </div>
        <div className="bookMarkBottom">
          <button className="bookmark-btn">Buy now</button>
          <h4>Total price: {Math.ceil(totalPrice)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Body;
