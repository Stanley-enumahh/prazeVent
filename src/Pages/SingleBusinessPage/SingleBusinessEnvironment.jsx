import { RecentReviews } from "./RecentReviews";
import { SingleBusinessDetailBoard } from "./SingleBusinessDetailBoard";
import { SingleBusinessRatingBoard } from "./SingleBusinessRatingBoard";

export const SingleBusinessEnvironment = () => {
  return (
    <div className="w-full justify-center flex mt-[142px]">
      <div className="w-[88%] flex flex-col  h-fit gap-[120px]">
        <div className="flex flex-row justify-between w-full">
          <SingleBusinessDetailBoard />
          <SingleBusinessRatingBoard />
        </div>
        <RecentReviews />
      </div>
    </div>
  );
};
