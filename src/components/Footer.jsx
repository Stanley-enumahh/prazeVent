import Logo from "./Logo";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import praxeVentLogo from "../assets/Frame 52997.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#001427] h-[700px] overflow-hidden flex justify-center w-full text-white">
      <div className=" w-[87%] flex flex-col">
        <div className="flex flex-row mt-[65px] h-[55%]">
          <div className="flex flex-col gap-[38px] w-[55%]">
            <Logo />
            <p className="light-font text-[16px] text-[#A9C1DA] leading-7">
              Your go-to platform for trusted business reviews and reputation{" "}
              <br />
              management, helping customers share honest feedback while
              empowering <br /> businesses to build credibility and enhance
              their online presence.{" "}
            </p>
            <div className="flex flex-col gap-4">
              <p className="light-font text-[#E6F2FE]">Follow us</p>
              <div className="flex flex-row gap-3">
                <span className="brand-blue-light rounded-full w-[53px] h-[53px] text-white flex items-center cursor-pointer justify-center">
                  <FaInstagram size={22} />
                </span>
                <span className="brand-blue-light flex rounded-full w-[53px] h-[53px] text-white items-center cursor-pointer justify-center">
                  <RiLinkedinFill size={22} />
                </span>
                <span className="brand-blue-light flex rounded-full w-[53px] h-[53px] text-white items-center cursor-pointer justify-center">
                  <RiTwitterXLine size={22} />
                </span>
                <span className="brand-blue-light flex rounded-full w-[53px] h-[53px] text-white items-center cursor-pointer  justify-center">
                  <GrFacebookOption size={22} />
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-[50%] justify-between">
            {/* quick links */}
            <div className="flex flex-col gap-4">
              <h1>Quick links</h1>
              <ul className="text-[#A9C1DA] light-font flex flex-col gap-4">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Write a Review</li>
                <li className="cursor-pointer">Grow Your Business</li>
                <li className="cursor-pointer">FAQs</li>
                <Link to="/support" className="cursor-pointer">
                  Support
                </Link>
              </ul>
            </div>

            {/* legal */}

            <div className="flex flex-col gap-4">
              <h1>Legal</h1>
              <ul className="text-[#A9C1DA] light-font flex flex-col gap-4">
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Terms & Conditions</li>
                <li className="cursor-pointer">Cookie Preferences</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-t-[#18293A] relative h-[35%] justify-center items-cente flex">
          <p className="text-[#A9C1DA] mt-[55px] light-font">
            &copy; {new Date().getFullYear()} PrazeVent, Inc. All rights
            reserved.
          </p>
          <img
            src={praxeVentLogo}
            alt=""
            className="absolute bottom-0 w-[80%] object-cover h-[37%]"
          />
        </div>
      </div>
    </footer>
  );
};
