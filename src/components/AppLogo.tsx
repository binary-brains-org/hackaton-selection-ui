import { FaGoogleWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <Link
      to="/"
      className="text-[--color-orange] flex gap-2 items-center font-semibold"
    >
      <FaGoogleWallet className="text-2xl" />
      <span className="text-xl">VisualPayKids</span>
    </Link>
  );
};

export default AppLogo;
