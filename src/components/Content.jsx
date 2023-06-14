import React from "react";
import introImg from "../images/introimg.png";
import contentImg_first from "../images/contentArea/c1.png";
import contentImg_sec from "../images/contentArea/c2.png";
import contentImg_third from "../images/contentArea/c3.png";

const Content = () => {
  return (
    <>
      <div className="p-6 md:p-20 grid grid-cols-1  md:grid-cols-2 gap-6 md:gap-20 justify-center items-center">
        {/* first */}
        <div>
          <h3 className="text-white text-2xl font-semibold">
            We provide The Best To Protect Your Users And Their Investments
          </h3>

          <p className="text-white text-xl font-normal mt-4">
            Merklabs is a reputed name in the field of blockchain technology
            encompassing all the segments of this revolutionary field.
            Pioneering the essence of blockchain security and audits, we secure
            your present and future through the parameters of technology.
          </p>
        </div>
        {/* second */}
        <div className="relative">
          <div>
            <img
              src={introImg}
              alt="introduction"
              className="object-fit w-48 md:w-80"
            />
          </div>
          <div className="absolute top-10 left-14 md:left-24 flex flex-col space-y-10 md:space-y-24 ">
            <div>
              <p className="text-white text-2xl font-semibold">100+</p>
              <p className="text-white text-xl font-thin">
                Blockchain companies protected
              </p>
            </div>

            <div>
              <p className="text-white text-2xl font-semibold">200+</p>
              <p className="text-white text-xl font-thin">Issues discovered</p>
            </div>
            <div>
              <p className="text-white text-2xl font-semibold">1000+</p>
              <p className="text-white text-xl font-thin">
                Analysis availabel per month
              </p>
            </div>
          </div>
        </div>

        {/* third  */}
        <div>
          <img
            src={contentImg_first}
            alt="introduction"
            className="object-fit w-1/2 md:w-full"
          />
        </div>

        {/* fourth */}
        <div>
          <h2 className="text-rose-500 text-3xl font-semibold">DEFI</h2>
          <h3 className="text-white text-3xl font-bold">
            Scale the world of Defi
          </h3>
          <p className="text-white text-xl font-normal">
            Being the veterans in the blockchain industry, we understand the
            hype of decentralized finance and the contemporary optimizations in
            the financial sector and hence taking the grasp of the moment , we
            have developed exceptional projects in the world of DeFi.
          </p>
        </div>

        {/* fifth */}
        <div>
          <h2 className="text-orange-400 text-3xl font-semibold">DAPPS</h2>
          <h3 className="text-white text-3xl font-bold">
            Technology made easier
          </h3>
          <p className="text-white text-xl font-normal">
            Decentralized applications have found a huge user base right in the
            initial stage , and therefore we as a team have gained extensive
            expertise into the creation of dapps.
          </p>
        </div>

        {/* sixth */}
        <div>
          <img
            src={contentImg_sec}
            alt="introduction"
            className="object-fit w-1/2 md:w-full"
          />
        </div>

        {/* seveth */}
        <div>
          <img
            src={contentImg_third}
            alt="introduction"
            className="object-fit w-1/2 md:w-full"
          />
        </div>

        <div>
          <h2 className="text-green-400 text-3xl font-semibold">AUDIT</h2>
          <h3 className="text-white text-3xl font-bold">
            Stay secure and safe
          </h3>
          <p className="text-white text-xl font-normal">
            Above all that matters is a secure and safe smart contract that is
            free from any vulnerability and does not hamper the investment of
            the various people who have trusted you. We also provide auditing
            services , so that you can stay assured of the security as we are
            quick in auditing and exposing the bugs of your smart contract.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
