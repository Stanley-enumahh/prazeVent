import icon1 from "../HomePage/images/Storefront (1).png";
import icon2 from "../HomePage/images/Storefront (2).png";
import icon3 from "../HomePage/images/Storefront.png";
import { TfiArrowTopRight } from "react-icons/tfi";

export const JoinSection = () => {
  return (
    <div className="w-full flex justify-center  h-screen items-center md:mt-4">
      <div className="flex w-[83%] md:w-[51%] gap-12 md:gap-18 items-center flex-col text-2xl h-fit">
        <h2 className="font-semibold text-[18px] md:text-[24px] text-[#031D3D]">
          Join thousands of users and businesses <br /> making an impact with
          authentic reviews.
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <Box>
            <img
              src={icon3}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="text-[#099137] font-semibold text-[28px]">12,457</h1>
            <p className="text-sm text-center">
              Businesses <br /> Registered
            </p>
          </Box>
          <span className="w-[250px] md:w-[1px] md:h-[120px] h-[1px] bg-[#C6CAD0]"></span>
          <Box>
            <img
              src={icon1}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="text-[#017BF6]  font-semibold  text-[28px]">
              89,320
            </h1>
            <p className="text-sm text-center">
              Customers <br /> Engaged
            </p>
          </Box>
          <span className="w-[250px] md:w-[1px] md:h-[120px] h-[1px] bg-[#C6CAD0]"></span>
          <Box>
            <img
              src={icon2}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="text-[#F3A218]  font-semibold  text-[28px]">
              245,678
            </h1>
            <p className="text-sm text-center">
              Businesses <br /> Registered
            </p>
          </Box>
        </div>
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
