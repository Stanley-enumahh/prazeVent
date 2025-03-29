import React, { useState } from "react";
import Topbar from "../../components/Topbar";
import { SingleBusinessEnvironment } from "./SingleBusinessEnvironment";
import { CompanyDetails } from "./CompanyDetails";
import { Footer } from "../../components/Footer";
import { AllReviewsContainer } from "./AllReviewsContainer";
import { Button, Flex, Modal } from "antd";
import { Login } from "../Login";

export default function SingleBusinessPage() {
  const [open, setOpen] = useState(false);
  const [openWriteReview, setOpenWriteReview] = useState(false);
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
    <div className="flex flex-col w-full h-fit gap-[80px]">
      <Topbar handleModalOpen={handleModalOpen} />
      <Modal
        style={{
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

      <SingleBusinessEnvironment />
      <CompanyDetails />
      <AllReviewsContainer />
      <Footer />
    </div>
  );
}
