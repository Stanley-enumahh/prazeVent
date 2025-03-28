import { Link, NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const TopBarNavLinks = ({ handleModalOpen }) => {
  return (
    <div className="flex w-[85%] border flex-row items-center justify-between gap-10 font-light">
      <ul className="flex flex-row gap-5 items-center ">
        <button
          to="/"
          className="buttons bg-[#014A94] text-[15px] cursor-pointer"
        >
          Customer
        </button>
        <button
          to="/"
          className="buttons text-[15px] flex flex-row gap-4 items-center cursor-pointer"
        >
          <span>Businesses</span>
          <GoArrowRight size={22} />
        </button>
      </ul>
      <ul>
        <Link
          to="/explore-businesses"
          className="buttons text-[15px] cursor-pointer"
        >
          Explore businesses
        </Link>
        <button to="/" className="buttons text-[15px] cursor-pointer">
          How it works
        </button>
      </ul>
      <ul className="flex flex-row gap-4 items-center">
        <button
          to="/"
          className="buttons  text-sm brand-blue-light cursor-pointer"
        >
          Sign up
        </button>
        <button
          onClick={handleModalOpen}
          // to="/"
          className="buttons  text-sm border border-[#017bf6] cursor-pointer"
        >
          Login
        </button>
      </ul>
    </div>
  );
};

export default TopBarNavLinks;
