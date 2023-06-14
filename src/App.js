import React from "react";
import backgroundImg from "./images/mainbg.png";
import Navbar from "./components/Navbar";
import ImgSlider from "./components/ImgSlider";
import Feature from "./components/Feature";
import Content from "./components/Content";
const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen">
      <Navbar />
      <ImgSlider />
      <Feature />
      <Content />
    </div>
  );
};

export default App;
