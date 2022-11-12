import React from "react";
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/announcement/Announcement";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Dropdown from "../components/dropdown/Dropdown";

export default function Home() {
  return (
    <div>
      
      <Navbar />
      <Dropdown />
      
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}
