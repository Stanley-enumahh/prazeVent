import React from "react";
import Logo from "./Logo";
import TopBarNavLinks from "./TopBarNavLinks";

const Topbar = ({ handleModalOpen }) => {
  return (
    <div className="flex fixed z-50 justify-center w-full bg-[#002b56]">
      <div className="flex w-[88%] brand-blue-mid  text-white flex-row h-[96px] items-center justify-between  border">
        <Logo />
        <TopBarNavLinks handleModalOpen={handleModalOpen} />
      </div>
    </div>
  );
};

export default Topbar;
