import { GoArrowRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import heroImage from "./images/Group (2).png";
import { Link } from "react-router-dom";

export const HeroHome = () => {
  return (
    <div className="flex justify-center w-full h-[400px]">
      <div className="flex w-[88%] mt-[160px] h-[80%] flex-row justify-between">
        <div className="w-[53%] h-fit mt-[36px] flex flex-col gap-7">
          <h1 className="text-[43px] text-[#002B56] hero-header leading-13">
            Find & Share{" "}
            <span className="brand-blue-light-text">Honest Reviews</span> on
            <br /> Businesses You've Experienced.
          </h1>
          <p className="text-[#2B323E] text-[16px]">
            Discover real customer feedback and help others make informed
            choices. <br /> Share your experience—good or bad—and be part of a
            community built on trust.
          </p>
          <div className="flex flex-row gap-[19px]">
            <Link
              to="/explore-businesses"
              className=" buttons items-center text-[15px] brand-blue-light flex flex-row gap-2 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              <span className="font-normal">Write a Review </span>{" "}
              <GoArrowRight size={23} />
            </Link>
            <button className=" buttons brand-green-bg items-center flex flex-row gap-2 text-white px-4 py-2 rounded-md cursor-pointer">
              <span className="font-normal">Explore Businesses </span>{" "}
              <IoSearchOutline size={23} />
            </button>
          </div>
        </div>
        <div className=" h-full w-[43%]">
          <img src={heroImage} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};
