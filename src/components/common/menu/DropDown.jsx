import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function DropDown({ data, ddId, setDDId }) {
  const [isOpen, setIsOpen] = useState(false);

  const {t} = useTranslation();

  isOpen && data.id !== ddId && setIsOpen(false);

  function handleMenuClick() {
    setIsOpen((state) => !state);
    setDDId(data.id);
  }

  const currentPath = useLocation();
  return (
    <li
      className={`text-[#ffffffab] group/dd  deuration-200 relative ${
        isOpen && data?.children && "bg-[#00000010]"
      }`}
    >
      <Link to={data?.link ? data.link : currentPath}>
        <div
          className="flex items-center gap-2 pl-12 pr-6 hover:bg-[#00000010] hover:text-white"
          onClick={handleMenuClick}
        >
          <span
            className={`w-[5px] h-[5px] rounded-full group-hover/dd:w-[7px] group-hover/dd:h-[7px] duration-100 bg-[#ffffff65] group-hover/dd:bg-[#ffffff90] absolute top-4 left-7 ${
              isOpen && data?.children && "w-[7px] h-[7px] bg-[#ffffff90]"
            }`}
          ></span>
          <h5 className={`flex-1 ${isOpen && data?.children && "text-white"}`}>
            {t(data.title)}
          </h5>
          {data?.children && (
            <FaAngleDown
              className={`font-thin text-sm duration-200 ${
                isOpen && "rotate-180"
              }`}
            />
          )}
        </div>
        {isOpen && data?.children && (
          <ul className="py-2">
            {data.children.map((innerDD) => (
              <Link to={innerDD.link} key={innerDD.id}>
                <li className="hover:bg-[#00000010] hover:text-white duration-200 pl-12 pr-6">
                  {t(innerDD.title)}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}