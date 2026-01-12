import React from "react";

const BookmarkProducts = ({ sProduct }) => {
  return (
    <div className="sProduct">
      <h4>{sProduct.name} </h4>
      <h4>${sProduct.price}</h4>
    </div>
  );
};

export default BookmarkProducts;
