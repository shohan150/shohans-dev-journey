import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import Icons from "./Icons";

export default function SidebarMenuItem({ item, itemId, setItemId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ddId, setDDId] = useState(null);

  const {t} = useTranslation();

  //only one dropdown open at a time
  isOpen && item.id !== itemId && setIsOpen(false);

  function handleMenuClick() {
    setIsOpen((state) => !state);
    setItemId(item.id);
  }
  // if the item has a DropDown, means no link attached than keep the current link
  const currentPath = useLocation();
  return (
    <li
      className={`leading-10 group/main text-[#ffffff85] hover:text-[#ffffffab] hover:bg-[#00000010] duration-200 relative ${
        isOpen && "bg-[#00000010] text-[#b4a0d2]"
      }`}
    >
      <Link to={item?.link ? item.link : currentPath}>
        <div className="flex gap-2 items-center px-6" onClick={handleMenuClick}>
          <Icons name={item.icon} />
          <h4
            className={`text-[#ffffffab] group-hover/main:text-white duration-200 flex-1 ${
              isOpen && "text-[#fff]"
            }`}
          >
            {t(item.title)}
          </h4>
          {item?.children && (
            <FaAngleDown
              className={`font-thin text-sm duration-200 ${
                isOpen && "rotate-180"
              }`}
            />
          )}
        </div>
        {isOpen && item?.children && (
          <ul className="py-2 before:content-[''] before:block before:absolute before:z-1 before:left-[30px] before:top-10 before:bottom-0 before:border-l before:border-solid before:border-[#ffffff35]">
            {item.children.map((dropdown) => (
              <DropDown
                key={dropdown.id}
                data={dropdown}
                ddId={ddId}
                setDDId={setDDId}
              />
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}