import { HiMiniXMark } from "react-icons/hi2";
import { UseBusiness } from "./Contexts/SingleBusinessContext";
import { Rate } from "antd";
import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { DatePicker } from "antd";
import { FaImage } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";

export const ReviewForm = () => {
  const { handleCloseModal } = UseBusiness();
  const [value, setValue] = useState(0);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className=" flex flex-col w-full py-8 h-fit px-7 gap-5">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-[#031D3D] font-semibold text-2xl">
          Share your experience
        </h1>
        <HiMiniXMark
          onClick={handleCloseModal}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-5 mt-3 mb-2">
        <h2 className="text-[16px] font-semibold text-[#2B323E]">
          Rate your recent experience
        </h2>
        <Rate onChange={setValue} style={{ fontSize: "45px" }} />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="Review-description"
          className="text-[#2B323E] text-[16px] font-semibold"
        >
          Review title
        </label>
        <input
          id="Review-description"
          type="text"
          placeholder="Review Title"
          className="border border-[#E3E5E8] placeholder:text-[#9AA1AE]  rounded-xl px-4 py-5 text-[16px] outline-none"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="Review-description"
          className="text-[#2B323E] items-center flex flex-row gap-2 text-[16px] font-semibold"
        >
          Tell us more about your experience{" "}
          <span className="text-[#017BF6]">
            <BsQuestionCircle className="font-bold text-xl cursor-pointer" />
          </span>
        </label>
        <textarea
          name=""
          id=""
          placeholder="Review Title"
          className="border border-[#E3E5E8] placeholder:text-[#9AA1AE]  rounded-xl px-4 py-5 h-[150px] text-[16px] outline-none"
        ></textarea>
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="Review-date"
          className="text-[#2B323E] items-center flex flex-row gap-2 text-[16px]  font-semibold"
        >
          Date of experience
          <span className="text-[#017BF6]">
            <BsQuestionCircle className="font-bold text-xl cursor-pointer" />
          </span>
        </label>
        <DatePicker
          onChange={onChange}
          placeholder="dd / mm / yyyy"
          style={{ borderRadius: "16px" }}
          className="border border-[#E3E5E8] placeholder:text-[#9AA1AE]  rounded-3xl px-4 h-[70px] py-4 text-[16px] hover:border-none outline-none"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="Review-date"
          className="text-[#2B323E] items-center flex flex-row gap-2 text-[16px] font-semibold"
        >
          Add images
          <span className="text-[#017BF6]">
            <BsQuestionCircle className="font-bold text-xl cursor-pointer" />
          </span>
        </label>
        <div className="flex flex-row justify-between">
          <div className="w-[150px] h-[150px] rounded-xl border border-[#E3E5E8] flex justify-center items-center flex-col gap-3">
            <FaImage className="text-[#9AA1AE] text-2xl" />
            <p className="text-xs text-[#9AA1AE] leading-[20px] text-center">
              <span className="text-[#017BF6] cursor-pointer">Upload</span>{" "}
              image or <br /> Drag and drop
            </p>
          </div>
          <div className="w-[150px] h-[150px] rounded-xl border border-[#E3E5E8] flex justify-center items-center flex-col gap-3">
            <FaImage className="text-[#9AA1AE] text-2xl" />
            <p className="text-xs text-[#9AA1AE] leading-[20px] text-center">
              <span className="text-[#017BF6] cursor-pointer">Upload</span>{" "}
              image or <br /> Drag and drop
            </p>
          </div>
          <div className="w-[150px] h-[150px] rounded-xl border border-[#E3E5E8] flex justify-center items-center flex-col gap-3">
            <FaImage className="text-[#9AA1AE] text-2xl" />
            <p className="text-xs text-[#9AA1AE] leading-[20px] text-center">
              <span className="text-[#017BF6] cursor-pointer">Upload</span>{" "}
              image or <br /> Drag and drop
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <input type="checkbox" id="anonymous" className="cursor-pointer" />
        <label
          htmlFor="anonymous"
          className="text-[#2B323E] items-center flex flex-row gap-2 text-[16px] font-semibold"
        >
          Write review anonymously
        </label>
      </div>
      <p className="text-[#9AA1AE] font-semibold mt-[40px] text-[16px] mb-4">
        By submitting this review, you confirm it's based on a genuine <br />
        experience and you haven't received an incentive to write it.
      </p>

      <button
        type="submit"
        className="cursor-pointer bg-[#017BF6] w-full text-white flex flex-row gap-2 items-center justify-center py-3 rounded-[50px] mb-12"
      >
        <span className="font-normal text-[16px]">Submit review</span>
        <MdOutlineDone className="text-2xl" />
      </button>
    </div>
  );
};
