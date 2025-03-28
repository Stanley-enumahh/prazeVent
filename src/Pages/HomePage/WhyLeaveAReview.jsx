import illustration1 from "../HomePage/images/Frame 53223.png";
import illustration2 from "../HomePage/images/Frame 53224.png";
import illustration3 from "../HomePage/images/Frame 53225.png";
import illustration4 from "../HomePage/images/Future city-rafiki 1.png";

export const WhyLeaveAReview = () => {
  return (
    <div className="flex w-full justify-center h-screen mt-[100px]">
      <div className="w-[82%] flex flex-col items-center gap-10 ">
        <div className="flex flex-col text-center justify-center gap-2">
          <h1 className="bold text-[26px]">Why Leave Reviews</h1>
          <p className="light-font #2B323Etext-[#2B323E]">
            Your feedback helps businesses grow and <br /> customers make
            informed decisions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Box>
            <div className="flex flex-col w-[65%] gap-[14px] h-full justify-center pl-[30px] ">
              <h1 className="bold text-xl">
                Help Others Make <br /> Better Choices
              </h1>
              <p className="light-font #2B323E">
                Show appreciation for businesses <br /> that go above and
                beyond.
              </p>
            </div>
            <div className="flex h-full items-end">
              <img
                src={illustration1}
                alt=""
                className="w-full h-[90%] object-cover"
              />
            </div>
          </Box>
          <Box>
            <div className="flex flex-col w-[65%] gap-[14px] h-full justify-center pl-[30px] ">
              <h1 className="bold text-xl">Recognize Great Service</h1>
              <p className="light-font #2B323E">
                Your review guides others to trusted <br /> businesses and
                quality services.
              </p>
            </div>
            <div className="flex h-full items-end">
              <img
                src={illustration2}
                alt=""
                className="w-full h-[94%] object-cover"
              />
            </div>
          </Box>
          <Box>
            <div className="flex flex-col w-[65%] gap-[14px] h-full justify-center pl-[30px] ">
              <h1 className="bold text-xl">
                Hold Businesses <br /> Accountable
              </h1>
              <p className="light-font #2B323E">
                Help keep businesses transparent and <br /> responsible through
                honest feedback.
              </p>
            </div>
            <div className="flex h-full items-end">
              <img
                src={illustration3}
                alt=""
                className=" object-cover w-full h-full"
              />
            </div>
          </Box>
          <Box>
            <div className="flex flex-col w-[65%] gap-[14px] h-full justify-center pl-[30px] ">
              <h1 className="bold text-xl">Shape the Future of Services</h1>
              <p className="light-font #2B323E">
                Your insights help businesses improve <br /> and evolve for
                better experiences.
              </p>
            </div>
            <div className="flex h-full items-end">
              <img
                src={illustration4}
                alt=""
                className="w-full h-[93%] object-cover"
              />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

function Box({ children }) {
  return (
    <div className="flex flex-row w-[545px] h-[210px] border-[#E3E5E8] border rounded-[11px] overflow-hidden">
      {children}
    </div>
  );
}
