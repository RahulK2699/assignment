import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Logo.svg";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-end px-10 py-5">
      <img className=" w-36" src={logo} alt="logo" />
      <div className=" flex gap-10 pr-5">
        <Link to={"/"}>About us</Link>
        <Link to={"/contact-us"}>Contact us</Link>
      </div>
    </div>
  );
};

export default Navbar;
