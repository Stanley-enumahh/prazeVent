import React from "react";
import { SingleReview } from "../../components/SingleReview";
import { GoArrowDown } from "react-icons/go";

export const RecentReviews = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col gap-10">
        <h1 className="text-[#031D3D] bold text-[26px]">Recent Reviews</h1>
        <div className="flex flex-row gap-6">
          <SingleReview />
          <SingleReview />
          <SingleReview />
        </div>
        <button className="border w-fit  px-5 py-3 flex flex-row gap-2 rounded-[50px] text-[16px] border-[#017BF6] text-[#017BF6] light">
          See all{" "}
          <strong className="bold flex flex-row items-center gap-2">
            735 Reviews <GoArrowDown size={22} />
          </strong>
        </button>
      </div>
    </div>
  );
};
