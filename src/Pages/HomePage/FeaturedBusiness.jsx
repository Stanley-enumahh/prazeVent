import { TfiArrowTopRight } from "react-icons/tfi";
import { SingleBusiness } from "../../components/SingleBusiness";
import businessLogo1 from "../../assets/image (1).png";
import businessLogo2 from "../../assets/image (2).png";
import businessLogo3 from "../../assets/image (3).png";
import businessLogo4 from "../../assets/image (4).png";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export const FeaturedBusiness = () => {
  const [value, setValue] = useState(2);

  return (
    <div className="flex w-full justify-center mt-[100px]">
      <div className="flex flex-col gap-12 w-[88%] justify-center">
        <div className="flex flex-row justify-between items-center gap-4 w-full">
          <h1 className="hero-header text-[26px]">Featured Business</h1>
          <button className="w-fit cursor-pointer rounded-3xl px-4 py-2 items-center flex flex-row gap-3 border border-[#099137] text-[#099137]">
            <span className="text-[15px]">See all</span>
            <TfiArrowTopRight size={15} />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <SingleBusiness>
            <div className="single-business">
              <div className="p-3 flex gap-4 items-center">
                <img
                  src={businessLogo1}
                  alt="business logo"
                  className="single-business-logo-deskeop"
                />
                <span className="flex flex-col">
                  <h2 className="text-lg hero-header">Stripe</h2>
                  <p className="text-sm text-[#017BF6] cursor-pointer">
                    www.Stripe.com
                  </p>
                </span>
              </div>
              <div className="h-[54px] bg-[#F7F7F7] px-3 flex flex-row gap-2 items-center">
                <Rating name="read-only" value={value} readOnly max={4} />
                <h3 className="text-sm">4.7</h3>
                <p className="text-sm text-[#C6CAD0]">(721)</p>
              </div>
            </div>
          </SingleBusiness>

          <SingleBusiness>
            <div className="single-business">
              <div className="p-3 flex gap-4 items-center">
                <img
                  src={businessLogo2}
                  alt="business logo"
                  className="single-business-logo-deskeop"
                />
                <span className="flex flex-col">
                  <h2 className="text-lg hero-header">Canva</h2>
                  <p className="text-sm text-[#017BF6] cursor-pointer">
                    www.Canva.com
                  </p>
                </span>
              </div>
              <div className="h-[54px] bg-[#F7F7F7] px-3 flex flex-row gap-2 items-center">
                <Rating name="read-only" value={value} readOnly max={4} />
                <h3 className="text-sm">4.7</h3>
                <p className="text-sm text-[#C6CAD0]">(721)</p>
              </div>
            </div>
          </SingleBusiness>
          <SingleBusiness>
            <div className="single-business">
              <div className="p-3 flex gap-4 items-center">
                <img
                  src={businessLogo3}
                  alt="business logo"
                  className="single-business-logo-deskeop"
                />
                <span className="flex flex-col">
                  <h2 className="text-lg hero-header">Shopify</h2>
                  <p className="text-sm text-[#017BF6] cursor-pointer">
                    www.Shopify.com
                  </p>
                </span>
              </div>
              <div className="h-[54px] bg-[#F7F7F7] px-3 flex flex-row gap-2 items-center">
                <Rating name="read-only" value={value} readOnly max={4} />
                <h3 className="text-sm">4.7</h3>
                <p className="text-sm text-[#C6CAD0]">(721)</p>
              </div>
            </div>
          </SingleBusiness>
          <SingleBusiness>
            <div className="single-business">
              <div className="p-3 flex gap-4 items-center">
                <img
                  src={businessLogo4}
                  alt="business logo"
                  className="single-business-logo-deskeop"
                />
                <span className="flex flex-col">
                  <h2 className="text-lg hero-header">Notion</h2>
                  <p className="text-sm text-[#017BF6] cursor-pointer">
                    www.Notion.com
                  </p>
                </span>
              </div>
              <div className="h-[54px] bg-[#F7F7F7] px-3 flex flex-row gap-2 items-center">
                <Rating name="read-only" value={value} readOnly max={4} />
                <h3 className="text-sm">4.7</h3>
                <p className="text-sm text-[#C6CAD0]">(721)</p>
              </div>
            </div>
          </SingleBusiness>
        </div>
      </div>
    </div>
  );
};
