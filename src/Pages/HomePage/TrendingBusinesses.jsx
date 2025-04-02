import { SingleBusiness } from "../../components/SingleBusiness";
import businessLogo1 from "../../assets/image (1).png";
import businessLogo2 from "../../assets/image (2).png";
import businessLogo3 from "../../assets/image (3).png";
import businessLogo4 from "../../assets/image (4).png";
import { Rate } from "antd";
import { useState } from "react";

const data = [
  {
    image: businessLogo1,
    name: "Stripe",
    website: "www.Stripe.com",
  },
  {
    image: businessLogo2,
    name: "Canva",
    website: "www.Canva.com",
  },
  {
    image: businessLogo3,
    name: "Shopify",
    website: "www.SShopify.com",
  },
  {
    image: businessLogo4,
    name: "Notion",
    website: "www.Notion.com",
  },
];

export const TrendingBusiness = () => {
  const [value, setValue] = useState(2);

  return (
    <div className="flex w-full justify-center mt-[80px]">
      <div className="flex flex-col gap-12 w-[87%] justify-center">
        <div className="flex flex-row justify-between items-center gap-4 w-full">
          <h1 className="text-[#031D3D] text-nowrap font-semibold text-[18px] md:text-[26px]">
            Trending Business
          </h1>

          <span className="text-sm text-[#2B323E]">
            These are the top 4 <br className="md:hidden flex" /> trending
            businesses
          </span>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4">
          {data.map((item, i) => (
            <l1
              key={i}
              className="md:w-[283px] w-[185px] flex flex-col h-[121px] md:h-[176px] gap-2 justify-between rounded-[10px] border border-[#e3e5e8]"
            >
              <div className="p-3 flex gap-4 items-center">
                <img
                  src={item.image}
                  alt="business logo"
                  className="md:w-[88px] w-[44px] h-[44px] md:h-[88px] object-cover rounded-[7px]"
                />
                <span className="flex flex-col">
                  <h2 className="text-[16px] md:text-[18px] font-semibold ">
                    {item.name}
                  </h2>
                  <p className="text-[10px] md:text-sm text-[#017BF6] cursor-pointer">
                    {item.website}
                  </p>
                </span>
              </div>
              <div className="h-[37px] md:h-[54px] bg-[#F7F7F7] px-3 flex flex-row gap-2 items-center">
                <Rate
                  disabled
                  defaultValue={3}
                  count={4}
                  style={{ fontSize: "15px" }}
                  className="  text-[#F3A218]"
                />
                <h3 className="text-sm">4.7</h3>
                <p className="text-sm text-[#C6CAD0]">(721)</p>
              </div>
            </l1>
          ))}
        </ul>
      </div>
    </div>
  );
};
