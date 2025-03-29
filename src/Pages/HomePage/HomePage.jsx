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
import { useState } from "react";
import { Login } from "../Login";
import { Modal } from "antd";
import { FAQs } from "./FAQs";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
    setOpenResponsive(true);
  };

  const handleCloseModal = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className="flex flex-col bg-transparent gap-12">
      <Topbar handleModalOpen={handleModalOpen} />
      <HeroHome />
      <Modal
        style={{
          // position: "absolute",
          // right: "0px",
          marginTop: "150px",
          marginBottom: "100px",
          borderRadius: "18px",
        }}
        closeIcon={null}
        title={false}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="fit"
        footer={null}
      >
        <Login handleCloseModal={handleCloseModal} />
      </Modal>

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
