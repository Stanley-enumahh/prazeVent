import stripeLogo from "../../assets/image (5).png";
import { PiCoins } from "react-icons/pi";
import verified from "../../assets/Vector (2).png";
import { PiPencilSimpleLight } from "react-icons/pi";
import { GoLink } from "react-icons/go";
import { UseBusiness } from "./Contexts/SingleBusinessContext";

export const SingleBusinessDetailBoard = () => {
  const { handleModalOpen } = UseBusiness();
  return (
    <div className="w-[50%] flex flex-col gap-10">
      <span className="text-sm bold text-[#017BF6]">
        <p>
          Customer / Explore business /
          <span className="text-[#475367]">Stripe</span>
        </p>
      </span>

      <div className="flex flex-row gap-6">
        <img
          src={stripeLogo}
          alt=""
          className="rounded-[7px] w-[135px] h-[135px] object-cover"
        />
        <div className="flex flex-col gap-3">
          <span className="border border-[#E3E5E8] rounded-[40px] px-3 py-2 flex flex-row items-center gap-2 text-sm bold">
            <img src={verified} alt="" />{" "}
            <p className="text-[#002B56]">Verified Business</p>
          </span>

          <h1 className="text-[#031D3D] bold text-[34px]">Stripe</h1>
          <span className="text-[#475367] bold text-sm gap-2 flex flex-row items-center">
            <PiCoins size={22} /> <p>Finance & Payment</p>
          </span>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <button
          onClick={handleModalOpen}
          className="px-[18px] py-[10px] bg-[#017BF6] rounded-[50px] text-white cursor-pointer text-[16px] light-font flex flex-row items-center gap-2"
        >
          <span> Write a Review</span> <PiPencilSimpleLight size={22} />
        </button>
        <button className="px-[18px] py-[10px] border border-[#017BF6] rounded-[50px] text-[#017bf6] cursor-pointer text-[16px] light-font flex flex-row items-center gap-2">
          <span>Visit Website</span> <GoLink size={22} />
        </button>
      </div>
    </div>
  );
};
