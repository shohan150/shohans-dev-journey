import { useEffect, useRef, useState } from "react";
import { MdHighlightOff } from "react-icons/md";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarSearchMenu from "./SidebarSearchMenu";

export default function Sidebar({ showSidebar, setShowSidebar, isFullView }) {

  const sidebarRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // check if clicked outside of sidebar.
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };
    //function assigned to eventListener.
    document.addEventListener('mousedown', handleClickOutside);

    //callback to remove the eventLitener.
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowSidebar]);

  return (
      <nav
        ref={sidebarRef}
        id="sidebar-menu"
        className={`transition-all duration-300 ease-in-out ${isFullView ? 'min-h-full' : 'h-[calc(100vh-76px)] xl:h-[calc(100vh-84px)]'} bg-primary bg-[linear-gradient(270deg,rgba(51,148,225,0.18),transparent)] shadow-sm  w-0 xl:w-72 scrollbar ${showSidebar && "w-72"} z-20`}
      >
        <div className="h-full overflow-y-auto relative scrollbar-webkit">
          <SidebarHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {!searchTerm ? <SidebarMenu /> : <SidebarSearchMenu searchTerm={searchTerm} /> }
          <MdHighlightOff
            className="text-white w-6 h-6 absolute top-[18px] right-3 xl:hidden"
            onClick={() => setShowSidebar(false)}
          />
        </div>
      </nav>
  );
}