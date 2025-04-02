import step1Image1 from "../HomePage/images/Frame 53009.png";
import step1Image2 from "../HomePage/images/Frame 53065.png";
import step1Image3 from "../HomePage/images/Frame 53066.png";

export const HowItWorks = () => {
  return (
    <div className="flex w-full justify-center items-center mt-[80px] md:mt-[160px]">
      <div className="w-[85%] flex flex-col gap-10 justify-center items-center">
        <div className="gap-2 flex flex-col justify-center text-center">
          <h1 className="text-[22px] text-[#031D3D] font-semibold md:text-2xl">
            How it works
          </h1>
          <p className="button-weight text-[14px] text-[#2B323E]">
            Write a review in 3 simple steps
          </p>
        </div>
        <div className="flex flex-col gap-[60px] md:flex-row justify-between w-[93%]">
          <Box>
            <img
              src={step1Image1}
              alt=""
              className="w-full h-[193px] object-center"
            />
            <div className="flex flex-col gap-2 md:items-start items-center md:tems-start">
              <h1 className="font-semibold text-[#2B323E] md:text-[20px] text-[16px]">
                Search for a Business
              </h1>
              <p className="text-sm text-[#2B323E] md:leading-[25px] leading-[28px] md:text-start text-center text-[14px]">
                Find businesses based on name, <br /> category, or location.
              </p>
            </div>
          </Box>
          <Box>
            <img
              src={step1Image2}
              alt=""
              className="w-full h-[193px] object-center"
            />
            <div className="flex flex-col gap-2 md:items-start items-center md:tems-start">
              <h1 className="font-semibold text-[#2B323E] md:text-[20px] text-[16px]">
                Read or Write a Review
              </h1>
              <p className="text-sm text-[#2B323E] md:leading-[25px] leading-[28px] md:text-start text-center text-[14px]">
                Learn from others or share your experience by{" "}
                <br className="md:flex hidden" /> leaving a star rating and
                feedback.
              </p>
            </div>
          </Box>
          <Box>
            <img
              src={step1Image3}
              alt=""
              className="w-full h-[193px] object-center"
            />
            <div className="flex flex-col gap-2 md:items-start items-center md:tems-start">
              <h1 className="font-semibold text-[#2B323E] md:text-[20px] text-[16px]">
                Stay Engaged
              </h1>
              <p className="text-sm text-[#2B323E] md:leading-[25px] leading-[28px] md:text-start text-center text-[14px]">
                Get notified when businesses <br className="md:hidden flex" />{" "}
                respond to <br className="md:flex hidden" /> your review.
              </p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

function Box({ children }) {
  return <div className="flex flex-col gap-5 w-[336px]">{children}</div>;
}
