import { SearchBar } from "../../components/SearchBar";
import { VscSettings } from "react-icons/vsc";
import businessLogo2 from "../../assets/image (2).png";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { Pagination } from "antd";
import { PopularSearchBar } from "../../components/PopularSearchBar";

export const BusinessList = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-[88%] gap-8">
        <div className="flex flex-row justify-between gap-[430px]">
          <SearchBar placeholder="Search for businesses in this category..." />

          <button className="flex w-[15%] rounded-[70px] flex-row gap-2 text-[#9AA1AE] border-[#E3E5E8] border text-[16px] items-center justify-center">
            <span>Filters</span> <VscSettings />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-y-6 gap-x-6">
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
          <Single />
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="text-sm text-[#475367]">
            Showing 1 to 10 of 97 results
          </p>
          <Pagination defaultCurrent={1} total={97} showSizeChanger={false} />
        </div>

        <div className="flex flex-col gap-3 my-[100px]">
          <h1 className="text-[#2B323E] font-semibold text-[20px] ">
            Popular Searches
          </h1>

          <div className="flex w-full flex-row gap-4 items-center ">
            <PopularSearchBar />
            <PopularSearchBar />
            <PopularSearchBar />
            <PopularSearchBar />
            <PopularSearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

function Single() {
  const [value, setValue] = useState(2);
  return (
    <div className="single-business">
      <div className="p-3 flex gap-4 items-center">
        <img
          src={businessLogo2}
          alt="business logo"
          className="single-business-logo-deskeop"
        />
        <span className="flex flex-col">
          <h2 className="text-lg hero-header">Canva</h2>
          <p className="text-sm text-[#017BF6] cursor-pointer">www.Canva.com</p>
        </span>
      </div>
      <div className="h-[54px] bg-[#F7F7F7] px-3 flex flex-row gap-2 items-center">
        <Rating name="read-only" value={value} readOnly max={4} />
        <h3 className="text-sm">4.7</h3>
        <p className="text-sm text-[#C6CAD0]">(721)</p>
      </div>
    </div>
  );
}
