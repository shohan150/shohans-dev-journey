"use client";
import React, { useState } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import Sidebar from "../../components/common/menu/Sidebar";
import TopNavbar from "../../components/common/menu/TopNavbar";

const Test: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isFullView, setIsFullView] = useState(false);

  //   //take at the top of the page whenever route is changed.
  //   const pathname = usePathname();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //     //also close sidebar on mobile on route change.
  //     setShowSidebar(false);
  //   }, [pathname]);

  return (
    // sidebar and topNavbar common in all pages
    <div
      className={`font-roboto text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-800 relative bg-red flex ${
        isFullView && "items-stretch"
      }`}
    >
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        isFullView={isFullView}
      />
      <div
        className={`bg-secondary text-textBlack flex flex-col flex-1 justify-between transition-all duration-500 ease-in-out p-3 ${
          showSidebar && "max-xl:opacity-65"
        } ${
          isFullView
            ? "min-h-full"
            : "h-[calc(100vh-76px)] xl:h-[calc(100vh-84px)] overflow-y-auto"
        }`}
      >
        <div className="">
          <TopNavbar setShowSidebar={setShowSidebar} />

          <div>{children}</div>
        </div>
      </div>
      <button
        className="fixed bottom-4 right-6 z-30 bg-primary text-2xl rounded-full p-1 text-white"
        onClick={() => setIsFullView(!isFullView)}
        title="Toggle Full Screen"
      >
        {isFullView ? <MdFullscreenExit /> : <MdFullscreen />}
      </button>
    </div>
  );
};

export default Test;
