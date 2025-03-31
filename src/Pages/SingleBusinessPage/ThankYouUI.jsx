import { HiMiniXMark } from "react-icons/hi2";
import { UseBusiness } from "./Contexts/SingleBusinessContext";
import thankYouAnimation from "../../assets/Online Review-rafiki 1.png";
import stripe from "../../assets/image (1).png";
import { SuccessFulReview } from "./SuccessFulReview";

export const ThankYouUi = () => {
  const { handleCloseModal } = UseBusiness();
  return (
    <div className=" flex flex-col w-full py-8 h-fit px-7 gap-6">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-[#031D3D] font-semibold text-2xl">
          Thanks for your review
        </h1>
        <HiMiniXMark
          onClick={handleCloseModal}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div className="w-full flex justify-center">
        <img
          src={thankYouAnimation}
          alt=""
          className="object-cover w-[380px] h-[305px]"
        />
      </div>

      <span className="w-full border h-[100px] rounded-[12px] px-4 border-[#E3E5E8] flex flex-row gap-4 mt-12 items-center">
        <img
          src={stripe}
          alt="company logo"
          className="w-[67px] h-[67px] object-cover"
        />
        <h1 className="text-[30px] font-semibold text-[#031D3D]">Stripe</h1>
      </span>

      <SuccessFulReview />
    </div>
  );
};
