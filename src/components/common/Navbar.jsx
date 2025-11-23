import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"about"}>About</NavLink>
      <NavLink to={"categories"}>Categories</NavLink>
      <NavLink to={"cart"}>Cart</NavLink>
      <NavLink to={"productsdetails"}>Product Details</NavLink>
    </div>
  );
}

export default Navbar;
