import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import { SingleBusinessEnvironment } from "./SingleBusinessEnvironment";
import { CompanyDetails } from "./CompanyDetails";
import { Footer } from "../../components/Footer";
import { AllReviewsContainer } from "./AllReviewsContainer";
import { Modal } from "antd";
import { UseBusiness } from "./Contexts/SingleBusinessContext";
import { ReviewForm } from "./ReviewForm";
import { ThankYouUi } from "./ThankYouUI";

export default function SingleBusinessPage() {
  const { openWriteReview } = UseBusiness();
  return (
    <div className="flex flex-col w-full h-fit gap-[80px]">
      <Topbar />
      <Modal
        width={600}
        style={{
          position: "absolute",
          right: "0px",
          top: "0",
          overflowY: "scroll",
          // background: "white",
          borderTopLeftRadius: "18px",
          borderBottomLeftRadius: "18px",
        }}
        title={false}
        open={openWriteReview}
        footer={null}
        closable={false}
        height={607}
      >
        {/* <ReviewForm /> */}
        <ThankYouUi />
      </Modal>

      <SingleBusinessEnvironment />
      <CompanyDetails />
      <AllReviewsContainer />
      <Footer />
    </div>
  );
}
