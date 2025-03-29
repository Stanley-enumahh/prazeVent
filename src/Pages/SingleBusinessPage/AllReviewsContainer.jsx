import { VscSettings } from "react-icons/vsc";
import { SearchBar } from "../../components/SearchBar";
import { SingleReviewWithLikes } from "../../components/SingleReviewWithLikes";
import { Pagination } from "antd";
import { SimilarBusiness } from "./SimilarBusiness";
import { SingleBusinessRatingWithCheckbox } from "./SingleBusinessRatingWithCheckbox";

export const AllReviewsContainer = () => {
  return (
    <div className="flex justify-center w-full mt-[70px]">
      <div className="flex flex-col gap-10 w-[88%] items-start">
        <h1 className="text-[#031D3D] font-semibold text-[26px]">
          All Reviews
        </h1>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col w-[65%] gap-10">
            <div className="flex flex-row justify-between w-full">
              <SearchBar placeholder="Search by keywords..." />
              <button className="flex w-[15%] rounded-[70px] flex-row gap-2 text-[#9AA1AE] border-[#E3E5E8] border text-[16px] items-center justify-center">
                <span>Filters</span> <VscSettings />
              </button>
            </div>
            {/* review list */}
            <div className="grid grid-cols-2 gap-x-9 gap-y-5">
              <SingleReviewWithLikes />
              <SingleReviewWithLikes />
              <SingleReviewWithLikes />
              <SingleReviewWithLikes />
            </div>
            <div className="flex mt-6 flex-row items-center justify-between">
              <p className="text-sm text-[#475367]">
                Showing 1 to 10 of 97 results
              </p>
              <Pagination
                defaultCurrent={1}
                total={97}
                showSizeChanger={false}
              />
            </div>
          </div>

          <SingleBusinessRatingWithCheckbox />
        </div>
        <SimilarBusiness />
      </div>
    </div>
  );
};
