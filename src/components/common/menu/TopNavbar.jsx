import { FaBars } from "react-icons/fa6";
import LangSwitcher from "./LangSwitcher";
import Mail from "./Mail";
import Notifications from "./Notifications";
import Profile from "./Profile";
import SchoolName from "./SchoolName";

export default function TopNavbar({ setShowSidebar }) {
  return (
    <div className="flex items-center justify-between bg-primary bg-[linear-gradient(270deg,rgba(51,148,225,0.18),transparent)] rounded-md p-3 sm:p-3">
      {/* school name */}
      <div className="flex gap-3 sm:gap-4 items-center ">
        <FaBars
          className="text-white border border-white rounded w-6 sm:w-7 h-6 sm:h-7 p-1 xl:hidden cursor-pointer"
          onClick={() => setShowSidebar((state) => !state)}
        />
        <SchoolName />
      </div>
      {/* actions */}
      <div className="flex items-center">
        <LangSwitcher />
        <Mail />
        <Notifications />
        <Profile />
      </div>
    </div>
  );
}