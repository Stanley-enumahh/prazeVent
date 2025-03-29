import { Link } from "react-router-dom";
import LogoIcon from "../../public/Group (1).png";
const Logo = () => {
  return (
    <Link
      to="/"
      className="flex flex-row gap-1 text-white items-center cursor-pointer"
    >
      <img src={LogoIcon} alt="prazevent icon" />
      <h1 className="font-bold text-xl">PrazeVent</h1>
    </Link>
  );
};

export default Logo;
