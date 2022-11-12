import React from "react";
import "./categoryitem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="category_item-container">
      <img src={item.img} alt="CategoryImg" className="img"></img>
      <div className="info">
        <h1 className="category_item-title">{item.title}</h1>
        <button className="btn">Ürünleri Gör</button>
      </div>
    </div>
  );
};

export default CategoryItem;
