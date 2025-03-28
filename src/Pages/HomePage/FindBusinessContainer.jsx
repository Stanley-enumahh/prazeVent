import { TfiArrowTopRight } from "react-icons/tfi";
import illustrator from "../HomePage/images/Frame 53221.png";

export const FindBusinessContainer = () => {
  return (
    <div className="w-full flex justify-center text-white">
      <div className="h-[358px] bg-[#055721] flex flex-row w-[88%] rounded-2xl justify-between  relative overflow-hidden">
        <div className="h-full flex items-start w-[50%] flex-col justify-center pl-[75px] gap-3">
          <h1 className="text-[26px] bold">
            Discover Trusted Businesses in One Place
          </h1>
          <p className="text-sm light-font">
            Find businesses you can trust or share your experience to <br />{" "}
            help others make informed decisions.
          </p>
          <button className="w-fit cursor-pointer rounded-3xl px-[18px] py-[10px] items-center flex flex-row gap-3 border border-white mt-4">
            <span className="text-sm button-weight">Find Businesses</span>
            <TfiArrowTopRight size={20} className="font-extrabold" />
          </button>
        </div>
        <div className="bg-[#033313] w-[84%] right-[-430px] absolute h-[700px] rotate-[18deg]"></div>
        <img
          src={illustrator}
          alt=""
          className="object-cover absolute right-[0px] bottom-0 w-[40%] h-[86%]"
        />
      </div>
    </div>
  );
};
