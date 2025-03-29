import { CiSearch } from "react-icons/ci";

export const SearchBar = ({ placeholder }) => {
  return (
    <div className="border flex flex-row border-[#E3E5E8] items-center rounded-[70px] w-[83%] px-2 h-[58px] justify-between">
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none border-none w-[75%] px-4 placeholder:text-sm font-normal text-[#9AA1AE]"
      />
      <span className=" rounded-full bg-[#099137] p-2 flex items-center text-white">
        <CiSearch className="font-semibold text-[20px]" />
      </span>
    </div>
  );
};
