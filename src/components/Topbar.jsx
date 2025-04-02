import React, { useState } from "react";
import Logo from "./Logo";
import TopBarNavLinks from "./TopBarNavLinks";
import { Login } from "../Pages/Login";
import { Modal } from "antd";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [openResponsive, setOpenResponsive] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  function toggleMobileNav() {
    setMobileNav((s) => !s);
  }

  const handleModalOpen = () => {
    setOpen(true);
    setOpenResponsive(true);
  };

  const handleCloseModal = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };
  return (
    <div className="flex fixed z-50 justify-center w-full bg-[#002b56]">
      <div className="flex w-[88%] brand-blue-mid  text-white flex-row h-[96px] items-center justify-between  border">
        <Logo />
        <TopBarNavLinks
          handleModalOpen={handleModalOpen}
          mobileNav={mobileNav}
        />
        <Modal
          style={{
            marginTop: "60px",
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
        {mobileNav ? (
          <HiXMark
            onClick={toggleMobileNav}
            className="text-white absolute right-5 text-2xl md:hidden flex"
          />
        ) : (
          <FiMenu
            onClick={toggleMobileNav}
            className="text-white absolute right-5 text-2xl md:hidden flex"
          />
        )}
      </div>
    </div>
  );
};

export default Topbar;
