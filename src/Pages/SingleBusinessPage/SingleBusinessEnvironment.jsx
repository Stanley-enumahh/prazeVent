import { RecentReviews } from "./RecentReviews";
import { SingleBusinessDetailBoard } from "./SingleBusinessDetailBoard";
import { SingleBusinessRatingBoard } from "./SingleBusinessRatingBoard";

export const SingleBusinessEnvironment = () => {
  return (
    <div className="w-full justify-center flex ">
      <div className="w-[88%] flex flex-col mt-[142px] gap-[120px]">
        <div className="flex flex-row justify-between w-full">
          <SingleBusinessDetailBoard />
          <SingleBusinessRatingBoard />
        </div>
        <RecentReviews />
      </div>
    </div>
  );
};
