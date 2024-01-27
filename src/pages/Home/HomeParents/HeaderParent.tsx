import { Link } from "react-router-dom";
import { FaMoneyBills } from "react-icons/fa6";

const HeaderParent = () => {
    return (
        <header className="p-2 w-full flex items-center justify-between shadow">
            <div className="h-full text-[1.1rem] flex items-center">
        <span className="text-violet-500 font-semibold flex items-center gap-2">
          <FaMoneyBills className="text-[1.5rem]" />
          <span>Your balance:&nbsp;</span>
        </span>
                <span className="text-gray-800">{400}Ar</span>
            </div>

            <Link
                to="/"
                className="w-[2.5rem] h-[2.5rem] bg-gray-500 rounded-full center-flex font-bold"
            >
                A
            </Link>
        </header>
    );
};

export default HeaderParent;
