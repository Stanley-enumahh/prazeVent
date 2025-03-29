import { HiXMark } from "react-icons/hi2";
import { FaRegEyeSlash } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import googleIcon from "../assets/devicon_google.png";

import { useState } from "react";

export const Login = ({ handleCloseModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((s) => !s);
  }
  return (
    <div className="h-fit w-[550px] rounded-[90px] bg-white p-7 flex flex-col gap-10 overflow-x-hidden">
      <span className="w-full justify-between flex flex-row items-center bold">
        <h2 className="text-[#031D3D] text-2xl">Login into your account</h2>
        <HiXMark
          size={22}
          className="cursor-pointer"
          onClick={handleCloseModal}
        />
      </span>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-[#2B323E] text-[16px] bold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="border border-[#E3E5E8] placeholder:text-[#9AA1AE]  rounded-xl px-4 py-4 text-[16px]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-[#2B323E] text-[16px] bold">
            Password
          </label>
          <div className="border justify-between flex flex-row items-center border-[#E3E5E8] rounded-xl px-4 text-[16px]">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className=" placeholder:text-[#9AA1AE] outline-none border-none py-4"
            />
            {showPassword ? (
              <GoEye
                onClick={toggleShowPassword}
                className="text-[#9AA1AE] mr-3 cursor-pointer"
                size={22}
              />
            ) : (
              <FaRegEyeSlash
                onClick={toggleShowPassword}
                className="text-[#9AA1AE] mr-3 cursor-pointer"
                size={22}
              />
            )}
          </div>
        </div>

        <button className="w-full buttons mt-2 items-center bold justify-center bg-[#017BF6] flex flex-row gap-3 py-4 text-[16px]">
          <span>Log in</span> <GoArrowRight size={22} />
        </button>

        <p className="underline text-[#017BF6] text-[16px] font-semibold">
          {" "}
          Forgot password
        </p>
      </form>
      <SignWithGoogle />
      <div className="w-full justify-center flex">
        <p className="text-sm font-semibold text-[#002B56]">
          Don’t have an account?{" "}
          <span className="cursor-pointer underline text-[#017BF6]">
            Sign Up
          </span>
        </p>
      </div>
      <RegisterAsBusiness />
    </div>
  );
};

function SignWithGoogle() {
  return (
    <div className="bg-[#F8F8F8] font-semibold text-sm h-fit gap-6 p-7 rounded-2xl justify-center flex flex-col">
      <p className="bold text-sm text-[#2B323E]">OR</p>
      <div className="flex flex-row justify-between items-center border border-[#EDEEF0] bg-white rounded-2xl p-5">
        <span className="flex flex-row gap-6 items-center">
          <img src={googleIcon} alt="" />
          <p className="#191D24 font-semibold text-sm">Continue with Google</p>
        </span>
        <SlArrowRight className="font-bold" />
      </div>
    </div>
  );
}

function RegisterAsBusiness() {
  return (
    <div className="bg-[#F2F9F5] font-semibold text-sm h-fit gap-6 p-7 rounded-2xl justify-center flex flex-col mb-3">
      <p className="bold text-sm text-[#2B323E] bg-white border-[#B3DDC1] border px-5 w-fit font-bold py-3 rounded-[50px]">
        Are you a business?
      </p>
      <h1 className="font-bold text-2xl text-[#033313] leading-[30px]">
        Grow your business with <br /> PrazeVent, get started today!
      </h1>
      <div className="flex flex-row gap-4 items-center text-[16px]">
        <button className="bg-[#099137] buttons cursor-pointer">
          Sign in as a business
        </button>
        <button className="text-[#099137] px-4 py-2 rounded-[50px] border border-[#099137] font-semibold cursor-pointer">
          Register your business
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { Button, Flex, Modal } from "antd";
// const App = () => {
//   const [open, setOpen] = useState(false);
//   const [openResponsive, setOpenResponsive] = useState(false);
//   return (
//     <Flex vertical gap="middle" align="flex-start">
//       {/* Basic */}
//       <Button type="primary" onClick={() => setOpen(true)}>
//         Open Modal of 1000px width
//       </Button>
//       <Modal
//         title="Modal 1000px width"
//         centered
//         open={open}
//         onOk={() => setOpen(false)}
//         onCancel={() => setOpen(false)}
//         width={1000}
//       >
//         <p>some contents...</p>
//         <p>some contents...</p>
//         <p>some contents...</p>
//       </Modal>

//       {/* Responsive */}
//       <Button type="primary" onClick={() => setOpenResponsive(true)}>
//         Open Modal of responsive width
//       </Button>
//       <Modal
//         title="Modal responsive width"
//         centered
//         open={openResponsive}
//         onOk={() => setOpenResponsive(false)}
//         onCancel={() => setOpenResponsive(false)}
//         width={{
//           xs: "90%",
//           sm: "80%",
//           md: "70%",
//           lg: "60%",
//           xl: "50%",
//           xxl: "40%",
//         }}
//       >
//         <p>some contents...</p>
//         <p>some contents...</p>
//         <p>some contents...</p>
//       </Modal>
//     </Flex>
//   );
// };
// export default App;
