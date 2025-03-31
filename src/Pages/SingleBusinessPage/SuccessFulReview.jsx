import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

export const SuccessFulReview = () => {
  return (
    <div className="flex flex-col w-full h-[350px] rounded-2xl px-4 py-6 justify-between border border-[#E3E5E8] mb-[140px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <span className="rounded-full text-[21px] bg-[#FFE8D4] text-[#FF7700] justify-center w-[61px] h-[61px] items-center flex">
            ER
          </span>
          <span className="flex flex-col gap-1">
            <h2 className="text-[#2B323E] bold text-[16px]">Emily Rose</h2>
            <p className="font-normal text-sm text-[#475367]">
              Date of experience: 21 - 03 - 2025
            </p>
          </span>
        </div>
        <span className="flex flex-row gap-1 bg-[#F7F7F7] rounded-[39px] px-3 py-2">
          <FaStar className="text-[18px] text-[#F3A218]" />
          <FaStar className="text-[18px] text-[#F3A218]" />
          <FaStar className="text-[18px] text-[#F3A218]" />
          <FaStar className="text-[18px] text-[#F3A218]" />
          <FaRegStar className="text-[18px] text-[#F3A218]" />
        </span>
      </div>
      <h1 className="text-[#2B323E] text-sm bold">
        Seamless Payment Processing!
      </h1>
      <p className="font-normal text-justify text-[#475367] text-sm leading-[28px]">
        Stripe has been a game-changer for my online store! The integration was
        smooth, the dashboard is intuitive, and transactions process instantly.
        Their fraud detection is top-notch, giving me peace of mind. Highly
        recommended!{" "}
      </p>

      <div className="flex flex-row gap-4">
        <button className="text-[#017BF6] bg-[#F2F8FF] rounded-[50px] px-5 py-3 text-[16px] flex flex-row gap-2 items-center cursor-pointer">
          <span>Edit</span> <PiPencilSimple className="text-lg" />
        </button>

        <button className="text-[#CB1A14] bg-[#FFF2F2] rounded-[50px] px-5 py-3 text-[16px] flex flex-row gap-2 items-center cursor-pointer">
          <span>Delete</span> <AiOutlineDelete className="text-lg" />
        </button>
      </div>
    </div>
  );
};
