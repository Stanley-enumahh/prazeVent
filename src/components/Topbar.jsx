import React, { useState } from "react";
import Logo from "./Logo";
import TopBarNavLinks from "./TopBarNavLinks";
import { Login } from "../Pages/Login";
import { Modal } from "antd";

const Topbar = () => {
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
    <div className="flex fixed z-50 justify-center w-full bg-[#002b56]">
      <div className="flex w-[88%] brand-blue-mid  text-white flex-row h-[96px] items-center justify-between  border">
        <Logo />
        <TopBarNavLinks handleModalOpen={handleModalOpen} />
        <Modal
          style={{
            marginTop: "100px",
            marginBottom: "100px",
            borderRadius: "18px",
          }}
          title={false}
          centered
          open={open}
          width="fit"
          footer={null}
          closable={false}
        >
          <Login handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Topbar;
