import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FiMenu } from "react-icons/fi";

const TopBarNavLinks = ({ handleModalOpen, mobileNav }) => {
  return (
    <div
      className={`flex md:w-[85%] md:p-0 p-6 md:h-fit h-screen md:static md:bg-transparent bg-[#002B56] absolute ${
        mobileNav ? "right-0" : "right-[-100%]"
      }  right-0 w-[239px] border flex-col md:flex-row items-center md:justify-between gap-12 md:gap-10 font-light top-[95px] transition-all duration-200`}
    >
      <ul className="flex w-full text-white md:w-fit items-start flex-col md:flex-row gap-5 md:items-center ">
        <button
          to="/"
          className="font-normal flex items-start md:w-fit w-full md:px-[18px] py-[10px] rounded-[50px] bg-[#014A94] px-5 text-[15px] cursor-pointer"
        >
          Customer
        </button>
        <button
          to="/"
          className="py-[10px] px-0 md:px-[18px] text-[15px] flex flex-row gap-4 items-center cursor-pointer"
        >
          <span>Businesses</span>
          <GoArrowRight size={22} />
        </button>
      </ul>
      <ul className="flex gap-4 md:flex-row text-white flex-col w-full items-start md:w-fit">
        <Link
          to="/explore-businesses"
          className="px-0 py-[10px] md:buttons text-[15px] cursor-pointer"
        >
          Explore businesses
        </Link>
        <button
          to="/"
          className="px-0 py-[10px] md:buttons  text-[15px] cursor-pointer"
        >
          How it works
        </button>
      </ul>
      <ul className="flex md:mt-0 mt-[80px] text-white flex-col md:flex-row gap-3 md:gap-4 items-start w-full md:w-fit md:items-center">
        <button
          to="/"
          className="px-5 py-[10px] rounded-[50px] items-start flex w-full md:w-fit md:buttons text-sm bg-[#017BF6] cursor-pointer"
        >
          Sign up
        </button>
        <button
          onClick={handleModalOpen}
          // to="/"
          className="px-5 py-[10px] rounded-[50px] items-start flex w-full md:w-fit md:buttons text-sm border border-[#017bf6] cursor-pointer"
        >
          Login
        </button>
      </ul>
    </div>
  );
};

export default TopBarNavLinks;
