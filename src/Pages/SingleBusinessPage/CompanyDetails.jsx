import React from "react";
import { IoIosMail } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const CompanyDetails = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[88%] flex justify-between flex-row items-start">
        <div className="w-[58%] flex flex-col gap-5">
          <h1 className="text-[#031D3D] font-semibold text-[26px]">
            Company details
          </h1>
          <p className="text-[#475367] text-[16px] leading-[28px] font-normal text-justify">
            Stripe is a leading financial technology company that provides
            secure and scalable online payment processing solutions. Founded in
            2010 and headquartered in San Francisco, Stripe enables businesses
            of all sizes to accept payments, manage subscriptions, and prevent
            fraud. With a global reach across 47+ countries, Stripe powers
            millions of transactions daily, making online commerce seamless and
            efficient. 🚀
          </p>
          <div className="flex flex-col gap-3 mt-5 border border-[#E3E5E8] py-4 px-6 rounded-2xl">
            <h1 className="font-semibold text-[20px]">Contact Information</h1>
            <div className="flex justify-between flex-row">
              <div className="flex flex-row  items-center gap-3 text-sm text-[] font-normal">
                <span className="rounded-full cursor-pointer flex items-center flex-row p-2 bg-[#017BF6] text-white">
                  <IoIosMail className="text-lg" />
                </span>
                <p className="text-[#475367]"> support@stripe.com</p>
              </div>
              <div className="flex flex-row  items-center gap-3 text-sm text-[] font-normal">
                <span className="rounded-full cursor-pointer flex items-center flex-row p-2 bg-[#017BF6] text-white">
                  <LuPhone className="text-lg" />
                </span>
                <p className="text-[#475367]">+1 (800) 555-0199</p>
              </div>
              <div className="flex flex-row  items-center gap-2 font-normal">
                <span className="rounded-full cursor-pointer w-[42px] h-[42px] justify-center flex items-center flex-row bg-[#E6F2FE] text-[#017bf6] border border-[#017BF6]">
                  <FaInstagram className="text-lg" />
                </span>
                <span className="rounded-full cursor-pointer w-[42px] h-[42px] justify-center flex items-center flex-row bg-[#E6F2FE] text-[#017bf6] border border-[#017BF6]">
                  <IoLogoTiktok className="text-lg" />
                </span>
                <span className="rounded-full cursor-pointer w-[42px] h-[42px] justify-center flex items-center flex-row bg-[#E6F2FE] text-[#017bf6] border border-[#017BF6]">
                  <FaXTwitter className="text-lg" />
                </span>
                <span className="rounded-full cursor-pointer w-[42px] h-[42px] justify-center flex items-center flex-row bg-[#E6F2FE] text-[#017bf6] border border-[#017BF6]">
                  <FaFacebookF className="text-lg" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] h-[350px] rounded-2xl border border-[#E3E5E8]">
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </div>
  );
};
