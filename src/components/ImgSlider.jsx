import React from "react";
import { Carousel } from "antd";
import cubeBoxImg from "../images/uintyimg.png";
import bitImg from "../images/btcimg.png";
import exporeBtn from "../images/svg/exporebtn.svg";

const ImgSlider = () => {
  return (
    <>
      <div className="p-6 md:p-10 flex-col items-start">
        <p className="text-white text-sm text-medium">PK194-ABI</p>
        <p className="text-white text-sm text-medium">San Francisco</p>
        <div>
          <img src={cubeBoxImg} alt="cue box" className="object-fix" />
        </div>
      </div>
      <Carousel>
        <div>
          <div className="px-6 py-0 md:px-20 flex flex-col items-center md:flex-row md:justify-around  space-y-4 md:space-y-0 md:space-x-10">
            <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-24">
              <h1 className="text-white text-4xl max-w-xl  tracking-widest leading-relaxed">
                MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS
              </h1>
              <img src={exporeBtn} alt="button" />
            </div>
            <div>
              <img src={cubeBoxImg} alt="cue box" className="object-fix" />
            </div>
            <div>
              <img
                src={bitImg}
                alt="bit coin"
                className="object-fix w-64 md:w-96"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-5xl text-center text-white">2</h3>
        </div>
        <div>
          <h3 className="text-5xl text-center text-white">3</h3>
        </div>
        <div>
          <h3 className="text-5xl text-center text-white">4</h3>
        </div>
      </Carousel>
    </>
  );
};

export default ImgSlider;
