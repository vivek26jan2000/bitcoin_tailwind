import React from "react";
// import lineImg from "../images/svg/line.svg";
// import facebookImg from "../images/svg/fb.svg";
// import instaImg from "../images/svg/ig.svg";
// import twitterImg from "../images/svg/twittter.svg";
import headerBottomImg from "../images/headbottomimg.png";
import partnerImg from "../images/svg/partner.svg";
import dotsImg from "../images/dots.png";

const Feature = () => {
  return (
    <>
      <div>
        {/* <div className=" flex flex-col space-y-4 items-end justify-center px-10">
        <div>
          <img src={facebookImg} alt="facebook" />
        </div>
        <div>
          <img src={instaImg} alt="inata" />
        </div>
        <div>
          <img src={twitterImg} alt="twitter" />
        </div>
        <div className="pr-3">
          <img src={lineImg} alt="line" />
        </div>
      </div> */}

        <div>
          <img
            src={headerBottomImg}
            alt="bottom"
            className="object-fit w-full"
          />
        </div>
        <div className="px-4 flex flex-row justify-center -space-x-10 md:-space-x-20">
          <div className="w-3/4 z-20">
            <img src={partnerImg} alt="partner" className="object-fit w-full" />
          </div>
          <div className="w-1/4 z-10">
            <img src={dotsImg} alt="dots" className="object-fit w-2/4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
