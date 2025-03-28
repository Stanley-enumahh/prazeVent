import icon1 from "../HomePage/images/Storefront (1).png";
import icon2 from "../HomePage/images/Storefront (2).png";
import icon3 from "../HomePage/images/Storefront.png";
import { TfiArrowTopRight } from "react-icons/tfi";

export const JoinSection = () => {
  return (
    <div className="w-full flex justify-center h-screen items-center mt-4">
      <div className="flex w-[51%] gap-18 items-center flex-col text-2xl h-fit">
        <h2 className="hero-header text-[24px] text-[#031D3D]">
          Join thousands of users and businesses <br /> making an impact with
          authentic reviews.
        </h2>
        <div className="flex flex-row gap-12 items-center">
          <Box>
            <img
              src={icon3}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="text-[#099137] hero-header text-[28px]">12,457</h1>
            <p className="text-sm text-center">
              Businesses <br /> Registered
            </p>
          </Box>
          <span className="w-[1px] h-[120px] bg-[#C6CAD0]"></span>
          <Box>
            <img
              src={icon1}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="text-[#017BF6] hero-header text-[28px]">89,320</h1>
            <p className="text-sm text-center">
              Customers <br /> Engaged
            </p>
          </Box>
          <span className="w-[1px] h-[120px] bg-[#C6CAD0]"></span>
          <Box>
            <img
              src={icon2}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="text-[#F3A218] hero-header text-[28px]">245,678</h1>
            <p className="text-sm text-center">
              Businesses <br /> Registered
            </p>
          </Box>
        </div>
        <button className="flex flex-row gap-5 items-center text-[#017BF6] border-[#017BF6] border px-[18px] py-[10px] text-sm rounded-[50px]">
          <span>Get started today</span>
          <TfiArrowTopRight size={14} />
        </button>
      </div>
    </div>
  );
};

function Box({ children }) {
  return (
    <div className="flex h-[156px] w-[150px] flex-col gap-3 justify-center items-center">
      {children}
    </div>
  );
}
