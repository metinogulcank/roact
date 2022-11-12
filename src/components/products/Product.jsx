import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import "./products.css";

const Product = ({ item }) => {
  return (
    <div className="product_container">
      <div className="product_circle"></div>
      <img className="product_image" alt="ProductImg" src={item.img}></img>
      <div className="product_info">
        <div className="product_icon">
          <ShoppingCartOutlined />
        </div>
        <div className="product_icon">
          <SearchOutlined />
        </div>
        <div className="product_icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
