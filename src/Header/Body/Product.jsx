import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Product = ({ product, handelCountProducts }) => {
  const { name, price, image, brand } = product;

  const [btnColor, SetBtnColor] = useState(false);

  const handelBookmarkBtn = () => {
    SetBtnColor(!btnColor);
    handelCountProducts({ product, btnColor });
  };

  return (
    <div>
      <table>
        <tr>
          <th className="table">
            <img src={image} className="p-img"></img>
            <p>{name}</p>
            <p>
              Brand:
              {brand}
            </p>
            <h3>${price}</h3>
            <button className="btn" onClick={handelBookmarkBtn}>
              <FontAwesomeIcon
                className={`btn-icon ${btnColor === true && "btn-icon-2"}`}
                icon={faBookmark}
              />
            </button>
          </th>
        </tr>
      </table>
    </div>
  );
};

export default Product;
