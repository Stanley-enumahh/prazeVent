import { RiQuestionLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

export const SingleBusinessRatingBoard = () => {
  return (
    <div className="w-[50%]  items-end flex">
      <div className="bg-[#F7F7F7] rounded-[13px] flex flex-col w-[640px] h-[223px] p-4">
        <div className="flex flex-row gap-2 items-center text-[16px] px-4 py-2 bg-white w-fit rounded-[100px] border border-[#C6CAD0]">
          <span className="text-[#002B56]">Excellent</span>{" "}
          <RiQuestionLine size={20} />
        </div>

        <div className="flex flex-row justify-between items-start">
          {/* rating */}
          <div className="flex flex-row gap-5 items-center ml-6 mt-5">
            <h1 className="bold text-[54px] text-[#031D3D]">4.7</h1>
            <div className="text-[16px] flex flex-col gap-2">
              <span className="flex flex-row gap-1">
                <FaStar className="text-[22px] text-[#F3A218]" />
                <FaStar className="text-[22px] text-[#F3A218]" />
                <FaStar className="text-[22px] text-[#F3A218]" />
                <FaStar className="text-[22px] text-[#F3A218]" />
                <FaRegStar className="text-[24px] text-[#F3A218]" />
              </span>
              <span className="text-[#002B56] light-font flex flex-row gap-1">
                Based on <h3 className="bold">763 reviews</h3>
              </span>
            </div>
          </div>

          <p className="h-[140px] bg-gray-300 w-[1px] rounded-3xl"></p>
          {/* rating description */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <span className="flex flex-row gap-1 items-center">
                <FaStar className="text-[12px] text-[#F3A218]" />
                <p className="text-[12px] bold">5</p>
              </span>
              <span className="w-[180px] bg-[#00C853] h-[4px] rounded-[30px]"></span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="flex flex-row gap-1 items-center">
                <FaStar className="text-[12px] text-[#F3A218]" />
                <p className="text-[12px] bold">4</p>
              </span>
              <span className="w-[138px] bg-[#8BC34A] h-[4px] rounded-[30px]"></span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="flex flex-row gap-1 items-center">
                <FaStar className="text-[12px] text-[#F3A218]" />
                <p className="text-[12px] bold">3</p>
              </span>
              <span className="w-[70px] bg-[#D597F8] h-[4px] rounded-[30px]"></span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="flex flex-row gap-1 items-center">
                <FaStar className="text-[12px] text-[#F3A218]" />
                <p className="text-[12px] bold">2</p>
              </span>
              <span className="w-[40px] bg-[#FF7043] h-[4px] rounded-[30px]"></span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="flex flex-row gap-1 items-center">
                <FaStar className="text-[12px] text-[#F3A218]" />
                <p className="text-[12px] bold">1</p>
              </span>
              <span className="w-[21px] bg-[#D32F2F] h-[4px] rounded-[30px]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
