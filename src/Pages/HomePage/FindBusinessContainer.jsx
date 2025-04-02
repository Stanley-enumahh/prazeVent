import { TfiArrowTopRight } from "react-icons/tfi";
import illustrator from "../HomePage/images/Frame 53221.png";
import illustrator2 from "../HomePage/images/FrameJoinMobile.png";

export const FindBusinessContainer = () => {
  return (
    <div className="w-full md:mt-0 mt-[40px] flex justify-center text-white">
      <div className="h-[670px] md:h-[358px] bg-[#055721] flex flex-col md:flex-row w-[88%] rounded-2xl items-center justify-between relative overflow-hidden">
        <div className="h-full flex md:text-start text-center  w-[75%] md:w-[50%] flex-col justify-center md:pl-[75px] gap-6 md:gap-3">
          <h1 className="text-[18px] md:text-[25px] font-semibold">
            Discover Trusted <br className="md:hidden flex" /> Businesses in One
            Place
          </h1>
          <p className="text-[16px] font-normal">
            Find businesses you can trust or share{" "}
            <br className="md:hidden flex" /> your experience to{" "}
            <br className="md:flex hidden" /> help others make informed
            decisions.
          </p>
          <button className="w-fit cursor-pointer rounded-3xl px-[18px] py-[10px] items-center flex flex-row gap-3 border border-white mt-4">
            <span className="text-sm button-weight">Find Businesses</span>
            <TfiArrowTopRight size={20} className="font-extrabold" />
          </button>
        </div>
        <div className="bg-[#033313] md:flex hidden w-[80%] right-[-430px] absolute h-[700px] rotate-[18deg]"></div>
        <img
          src={illustrator}
          alt=""
          className="object-cover md:absolute right-[0px] bottom-0 w-full md:w-[40%] h-[86%] md:flex hidden"
        />
        <img
          src={illustrator2}
          alt=""
          className="md:hidden flex object-cover md:absolute right-[0px] bottom-0 w-full md:w-[40%] h-full"
        />
      </div>
    </div>
  );
};
