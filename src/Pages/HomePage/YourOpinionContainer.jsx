import { TfiArrowTopRight } from "react-icons/tfi";
import illustrator from "../HomePage/images/Customer Survey-pana 1.png";

export const YourOpinionContainer = () => {
  return (
    <div className="w-full flex justify-center text-white mt-[70px] ">
      <div className="h-[362px] bg-[#016FDD] flex flex-row w-[87%] relative  overflow-hidden rounded-2xl justify-between">
        <div className="h-full flex items-start w-[55%] flex-col justify-center pl-[80px] gap-3">
          <h1 className="text-2xl bold">
            Your Opinions Matters – Share Your Experience!
          </h1>
          <p className="text-sm font-light">
            Help others make informed decisions by sharing your honest feedback.
            Rate businesses, highlight great service, or call out areas for
            improvement.
          </p>
          <button className="w-fit cursor-pointer rounded-3xl px-[18px] py-[10px] items-center flex flex-row gap-3 border border-white mt-4">
            <span className="text-sm button-weight">Write a Review</span>
            <TfiArrowTopRight size={20} className="font-extrabold" />
          </button>
        </div>
        <div className="bg-[#002B56] w-[85%] right-[-430px] absolute h-[700px] rotate-[15deg]"></div>
        <img
          src={illustrator}
          alt=""
          className="object-cover absolute right-[30px] bottom-1 w-[40%] h-[90%]"
        />
      </div>
    </div>
  );
};
