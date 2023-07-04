import React from "react";
import navBackgroundImg from "../images/navstyleimg.png";
import closeBtn from "../images/icon-close.svg";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${navBackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="hidden md:flex md:space-x-10 md:flex-row px-24 py-8 items-center md:justify-between ">
          <h1 className="font-bold text-white text-4xl">Merka</h1>

          <div className="flex flex-col  space-y-10 md:space-x-10 md:space-y-0 md:flex-row">
            <a
              href="/"
              className=" text-white font-normal text-2xl no-underline">
              Home
            </a>
            <a
              href="/"
              className=" text-white font-normal text-2xl no-underline">
              Coins
            </a>
            <a
              href="/"
              className=" text-white font-normal text-2xl no-underline">
              Exchange
            </a>
            <a
              href="/"
              className=" text-white font-normal text-2xl no-underline">
              Blog
            </a>
          </div>
        </div>

        {!showMenu && (
          <div className="flex flex-row md:hidden justify-between px-10 py-8">
            <h1 className="font-bold text-white text-4xl">Merka</h1>
            <div onClick={() => setShowMenu(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-menu-2"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </div>
          </div>
        )}

        {showMenu && (
          <div className="relative  px-10 py-12  w-full">
            <div className="flex flex-col space-y-6 justify-center items-center">
              <div className="text-2xl text-white font-medium duration-200 hover:text-grayishViolet">
                Home
              </div>
              <div className="text-2xl text-white font-medium duration-200 hover:text-grayishViolet">
                Coins
              </div>
              <div className="text-2xl text-white font-medium duration-200 hover:text-grayishViolet">
                Exchange
              </div>
              <div className="text-2xl text-white font-medium duration-200 hover:text-grayishViolet">
                Blogs
              </div>
            </div>

            <div
              className="absolute top-4 right-5"
              onClick={() => setShowMenu(false)}>
              <img src={closeBtn} alt="cross" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
