import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Home = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center">
      <div className="flex w-full max-w-6xl mt-4">
      <div className="flex w-full">
  <div className="w-1/2 "><LeftSection/></div>
  <div className="w-1/2 "><RightSection/></div>
</div>
      </div>
    </div>
  );
};

export default Home;
