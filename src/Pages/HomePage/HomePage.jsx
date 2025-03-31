import Topbar from "../../components/Topbar";
import { HeroHome } from "../HomePage/HeroHome";
import { HowItWorks } from "../HomePage/HowItWorks";
import { FeaturedBusiness } from "../HomePage/FeaturedBusiness";
import { TrendingBusiness } from "../HomePage/TrendingBusinesses";
import { JoinSection } from "../HomePage/JoinSection";
import { FindBusinessContainer } from "../HomePage/FindBusinessContainer";
import { WhyLeaveAReview } from "../HomePage/WhyLeaveAReview";
import { YourOpinionContainer } from "../HomePage/YourOpinionContainer";
import { Footer } from "../../components/Footer";
import { FAQs } from "./FAQs";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-transparent gap-12">
      <Topbar />
      <HeroHome />

      <HowItWorks />
      <div className="flex flex-col gap-0">
        <FeaturedBusiness />
        <TrendingBusiness />
      </div>
      <JoinSection />
      <FindBusinessContainer />
      <WhyLeaveAReview />
      <YourOpinionContainer />
      <FAQs />
      <Footer />
    </div>
  );
}
