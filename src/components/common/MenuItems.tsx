import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";

const LargeMenu: React.FC = ({ menuItem }) => {
  return (
    // main list item. Show Link or span.
    <li
      className={
        "rounded-md group text-primary mx-1 my-1 px-1 xl:px-2 py-1 xl:py-2 hover:bg-primarylight hover:text-textColor relative cursor-pointer"
      }
    >
      {menuItem.link ? (
        <Link href={menuItem.link} className="pr-2">
          {menuItem.title}
        </Link>
      ) : (
        <span className="flex items-center justify-end gap-1 cursor-pointer">
          {menuItem.title}{" "}
          <GoTriangleDown className="group-hover:rotate-180 duration-200" />
        </span>
      )}

      {/* if li item has children, show the children */}

      {menuItem.children && (
        <ul
          className={
            "hidden group-hover:block absolute left-0 top-7 xl:top-[35px] bg-white z-10 w-44 xl:w-56 divide-y-2 text-start"
          }
        >
          {menuItem.children.map((dropdown, index) => (
            <li
              key={index}
              className={`px-2 xl:px-3 py-2 bg-white text-primary hover:bg-primarylight hover:text-textColor group/dropdown relative ${
                dropdown.children && "flex justify-between items-center"
              }`}
            >
              {dropdown.link ? (
                <Link href={dropdown.link}>{dropdown.title}</Link>
              ) : (
                <>
                  <span className="cursor-pointer">{dropdown.title}</span>
                  {dropdown.children && (
                    <FaAngleRight className="text-lg xl:text-xl" />
                  )}
                </>
              )}

              {dropdown.children && (
                <ul className="hidden group-hover/dropdown:block bg-white divide-y-2 w-44 xl:w-56 absolute left-full top-0">
                  {dropdown.children.map((level2, index) => (
                    <li
                      key={index}
                      className="p-2 bg-white text-primary hover:bg-primarylight hover:text-textColor"
                    >
                      <Link href={level2.link}>{level2.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const HamburgerMenu: React.FC = ({ menuItem, setShowNav }) => {
  return (
    <li
      className={
        "rounded-md group w-full text-primary text-start pl-4 py-2 hover:bg-primarylight hover:text-textColor"
      }
    >
      {menuItem.link ? (
        <Link
          href={menuItem.link}
          onClick={() => {
            setShowNav(false);
          }}
        >
          {menuItem.title}
        </Link>
      ) : (
        <span className="flex items-center justify-start gap-1 cursor-pointer">
          {menuItem.title}{" "}
          <GoTriangleDown className="group-hover:rotate-180 duration-200" />
        </span>
      )}

      {/* if li item has children, show the children */}

      {menuItem.children && (
        <ul className={"mt-2 hidden group-hover:block"}>
          {menuItem.children.map((dropdown, index) => (
            <li
              key={index}
              className="pl-4 py-1 rounded-md hover:bg-primarylight hover:text-textColor group/item"
            >
              {dropdown.link ? (
                <Link
                  href={dropdown.link}
                  onClick={() => {
                    setShowNav(false);
                  }}
                >
                  {dropdown.title}
                </Link>
              ) : (
                <>
                  <span className="cursor-pointer">{dropdown.title}</span>
                </>
              )}
              {dropdown.children && (
                <GoTriangleDown className="inline ml-1 group-hover/item:rotate-180 duration-200" />
              )}
              {dropdown.children && (
                <ul className="mt-2 hidden group-hover/item:block">
                  {dropdown.children.map((level2, index) => (
                    <li key={index} className="pl-6 py-1 rounded-sm">
                      <Link
                        href={level2.link}
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        {level2.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export { HamburgerMenu, LargeMenu };
