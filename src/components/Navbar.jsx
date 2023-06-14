import React from "react";
import navBackgroundImg from "../images/navstyleimg.png";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${navBackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-10 md:flex-row px-24 py-8 items-center md:justify-between ">
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
      </div>
    </>
  );
};

export default Navbar;
