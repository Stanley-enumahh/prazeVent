import { CiSearch } from "react-icons/ci";

export const PopularSearchBar = () => {
  return (
    <div className="border border-[#017BF6] items-center text-[#017bf6] rounded-[50px] px-4 py-2 flex flex-row gap-2">
      <p className="text-[16px]">Software Company</p> <CiSearch size={22} />
    </div>
  );
};
