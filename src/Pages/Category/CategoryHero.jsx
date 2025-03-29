import React from "react";
import bgElipse1 from "./images/Vector (3).png";
import bgElipse2 from "./images/Vector (4).png";
import bgElipse3 from "./images/Vector (5).png";
import bgElipse4 from "./images/Vector (6).png";

export const CategoryHero = () => {
  return (
    <div className="w-full relative bg-[#F4FFF6] overflow-hidden h-[330px] mt-[90px] flex justify-center items-center flex-col gap-6">
      <div className="flex flex-row gap-2 font-semibold absolute top-[36px] left-[100px] items-center text-sm px-4 py-2 bg-white w-fit rounded-[100px] text-[#475367] border border-[#C6CAD0] z-10">
        <span className="text-[#099137]"> Explore Businesses</span> /
        Electronics and Technology
      </div>
      <span className="absolute top-0 left-[30px] w-[250px] h-[243px]">
        <img src={bgElipse1} alt="" />
      </span>
      <span className="absolute bottom-[-180px] left-[30px] w-[250px] h-[243px]">
        <img src={bgElipse2} alt="" />
      </span>
      <span className="absolute top-[20px] right-[-70px] w-[207px] h-[219px]">
        <img src={bgElipse3} alt="" />
      </span>
      <span className="absolute bottom-[-140px] right-[160px] w-[207px] h-[219px]">
        <img src={bgElipse4} alt="" />
      </span>
      <h1 className="font-semibold text-[#031D3D] text-4xl">
        Discover Top Technology Businesses
      </h1>
      <p className="text-[#2B323E] text-center text-[16px] font-normal leading-[25px]">
        Explore trusted businesses offering the latest in <br /> gadgets,
        software, and tech support.
      </p>
    </div>
  );
};
