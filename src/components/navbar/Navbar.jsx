import { Search } from "@material-ui/icons";
import React from "react";
import "./navbar.css";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Logo from "../../assets/Logo_4_70x70.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="wrapper">
        <div className="left">
          <img src={Logo} alt="Logo" clssName="logo"></img>
        </div>
        <div className="center">
          <div className="search_container">
            <input className="input"></input>
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <div className="right">
          <div className="menu_item">Kayıt Ol</div>
          <div className="menu_item">Giriş Yap</div>
          <div className="menu_item">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
