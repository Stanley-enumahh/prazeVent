import LogoIcon from "../../public/Group (1).png";
const Logo = () => {
  return (
    <div className="flex flex-row gap-1 text-white items-center cursor-pointer">
      <img src={LogoIcon} alt="prazevent icon" />
      <h1 className="font-bold text-xl">PrazeVent</h1>
    </div>
  );
};

export default Logo;
