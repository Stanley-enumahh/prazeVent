import { RiQuestionLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { Rate } from "antd";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export const SingleBusinessRatingWithCheckbox = () => {
  return (
    <div className="bg-[#F7F7F7] items-start rounded-[13px] flex flex-col w-[368px] h-[347px] px-10 py-7 gap-6">
      {/* rating */}
      <div className="flex flex-row gap-5 items-center">
        <h1 className="bold text-[54px] text-[#031D3D]">4.7</h1>
        <div className="text-[16px] flex flex-col gap-2">
          <Rate disabled defaultValue={4} style={{ color: "#F3A218" }} />
          <span className="text-[#002B56] light-font flex flex-row gap-1">
            Based on <h3 className="bold">763 reviews</h3>
          </span>
        </div>
      </div>

      {/* rating description */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-3">
          <span className="flex flex-row gap-1 items-center">
            <MdOutlineCheckBoxOutlineBlank className="text-[#C6CAD0] text-[24px]" />
            <FaStar className="text-[12px] text-[#F3A218]" />
            <p className="text-[12px] bold">5</p>
          </span>
          <span className="w-[180px] bg-[#00C853] h-[4px] rounded-[30px]"></span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="flex flex-row gap-1 items-center">
            <MdOutlineCheckBoxOutlineBlank className="text-[#C6CAD0] text-[24px]" />
            <FaStar className="text-[12px] text-[#F3A218]" />
            <p className="text-[12px] bold">4</p>
          </span>
          <span className="w-[138px] bg-[#8BC34A] h-[4px] rounded-[30px]"></span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="flex flex-row gap-1 items-center">
            <MdOutlineCheckBoxOutlineBlank className="text-[#C6CAD0] text-[24px]" />
            <FaStar className="text-[12px] text-[#F3A218]" />
            <p className="text-[12px] bold">3</p>
          </span>
          <span className="w-[70px] bg-[#D597F8] h-[4px] rounded-[30px]"></span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="flex flex-row gap-1 items-center">
            <MdOutlineCheckBoxOutlineBlank className="text-[#C6CAD0] text-[24px]" />
            <FaStar className="text-[12px] text-[#F3A218]" />
            <p className="text-[12px] bold">2</p>
          </span>
          <span className="w-[40px] bg-[#FF7043] h-[4px] rounded-[30px]"></span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="flex flex-row gap-1 items-center">
            <MdOutlineCheckBoxOutlineBlank className="text-[#C6CAD0] text-[24px]" />
            <FaStar className="text-[12px] text-[#F3A218]" />
            <p className="text-[12px] bold">1</p>
          </span>
          <span className="w-[21px] bg-[#D32F2F] h-[4px] rounded-[30px]"></span>
        </div>
      </div>
    </div>
  );
};
