import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Usename from "../features/user/Usename";

const Header = function () {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex items-center justify-between">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Usename />
    </header>
  );
};

export default Header;
