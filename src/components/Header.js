import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div>
          <Link to="/">
            <Logo h={50} w={90} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'">
          <input
            type="text"
            className="w-full outline-none px-2"
            placeholder="Search..."
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <MdSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer relative flex justify-center">
            <FaRegCircleUser />
          </div>
          <div className="text-3xl cursor-pointer relative">
            <FaShoppingCart />
            <div className="absolute -top-2 -right-2 w-5 h-5 text-xs rounded-full bg-red-600 flex items-center justify-center text-white">
              1
            </div>
          </div>
          <div>
            <Link
              to="/login"
              className="px-3 py-1 bg-red-500 rounded-full text-white flex items-center"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
