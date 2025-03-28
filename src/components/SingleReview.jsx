import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

export const SingleReview = () => {
  return (
    <di className="flex flex-col w-[383px] h-[302px] rounded-2xl px-4 py-6 justify-between border border-[#E3E5E8]">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row gap-4 items-center">
          <span className="rounded-full text-[21px] bg-[#FFE8D4] text-[#FF7700] justify-center w-[61px] h-[61px] items-center flex">
            ER
          </span>
          <span className="flex flex-col gap-1">
            <h2 className="text-[#2B323E] bold text-[16px]">Emily Rose</h2>
            <p className="light-font text-sm text-[#475367]">14 Hours ago</p>
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
      <p className="light text-justify text-[#475367] text-sm gap-4 leading-[28px]">
        Stripe has been a game-changer for my online store! The integration was
        smooth, the dashboard is intuitive, and transactions process instantly.
        Their fraud detection is top-notch, giving me peace of mind. Highly
        recommended!{" "}
        <button className="text-[#017BF6] ml-2 font-semibold">See more</button>
      </p>
    </di>
  );
};
