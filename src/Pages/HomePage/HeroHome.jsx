import { GoArrowRight } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import heroImage from "./images/Group (2).png";
import { Link } from "react-router-dom";

export const HeroHome = () => {
  return (
    <div className="flex justify-center w-full h-fit md:h-[400px]">
      <div className="flex w-[90%] md:w-[88%] mt-[100px]  md:gap-0 gap-14  md:mt-[160px] h-[80%] flex-col md:flex-row justify-between">
        <div className="w-full md:w-[53%] text-center md:text-start h-fit mt-[40px] flex flex-col gap-7">
          <h1 className="text-[24px] md:text-[43px] text-[#002B56] font-semibold md:leading-13 leading-8">
            Find & Share{" "}
            <span className="brand-blue-light-text">Honest Reviews</span> on
            <br className="md:flex hidden" /> Businesses You've Experienced.
          </h1>
          <p className="text-[#2B323E] text-[14px] md:text-[16px] md:text-start text-center">
            Discover real customer feedback and help others make informed
            choices. <br className="md:flex hidden" /> Share your
            experience—good or bad <br className="md:hidden flex" />
            —and be part of a community built on trust.
          </p>
          <div className="flex flex-row w-full overflow-hidden gap-3 md:gap-[19px]">
            <Link
              to="/explore-businesses"
              className=" buttons items-center text-[14px] md:text-[15px] bg-[#017BF6] flex flex-row gap-1 md:gap-2 text-white px-2 md:px-4 py-2 rounded-md cursor-pointer"
            >
              <span className="font-normal text-nowrap">Write a Review </span>{" "}
              <GoArrowRight size={23} />
            </Link>
            <button className=" buttons bg-[#099137] items-center flex flex-row gap-2 text-white px-2 md:px-4 py-2 rounded-md cursor-pointer">
              <span className="font-normal text-nowrap">
                Explore Businesses{" "}
              </span>{" "}
              <IoSearchOutline size={23} />
            </button>
          </div>
        </div>
        <div className=" h-full justify-center flex w-full md:w-[43%]">
          <img src={heroImage} alt="" className="object-cover w-[85%]" />
        </div>
      </div>
    </div>
  );
};
