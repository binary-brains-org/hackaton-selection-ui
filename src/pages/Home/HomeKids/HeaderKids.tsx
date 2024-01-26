import { IoWallet } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderKids = () => {
  return (
    <header className="p-2 w-full flex items-center justify-between shadow">
      <Link
        to="/"
        className="flex gap-2 items-center text-blue-600"
      >
        <IoWallet className="text-3xl" />
        <span className="text-xl font-bold">VisualPayKids</span>
      </Link>

      <Link
        to="/"
        className="w-[2.5rem] h-[2.5rem] sticky text-white bg-gray-500 rounded-full center-flex text-lg font-bold"
      >
        A
      </Link>
    </header>
  )
}

export default HeaderKids;