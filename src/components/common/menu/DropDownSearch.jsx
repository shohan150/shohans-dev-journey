import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function DropDownSearch({ data, searchTerm }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleMenuClick() {
    setIsOpen((state) => !state);
  }

  const currentPath = usePathname();

  let show = structuredClone(data);

  if(show.children) {
    const existing = show.children.filter((child) => {
      const doesExist = child.title.toLowerCase().includes(searchTerm.toLowerCase());

      if (doesExist) return true;

      return false;
    });

    show.children = existing;
  }

  return (
    <li
      className={`text-[#ffffffab] group/dd  deuration-200 relative ${
        isOpen && show?.children && "bg-[#00000010]"
      }`}
    >
      <Link href={show?.link ? show.link : currentPath}>
        <div
          className="flex items-center gap-2 pl-12 pr-6 hover:bg-[#00000010] hover:text-white"
          onClick={handleMenuClick}
        >
          <span
            className={`w-[5px] h-[5px] rounded-full group-hover/dd:w-[7px] group-hover/dd:h-[7px] duration-100 bg-[#ffffff65] group-hover/dd:bg-[#ffffff90] absolute top-4 left-7 ${
              isOpen && show?.children && "w-[7px] h-[7px] bg-[#ffffff90]"
            }`}
          ></span>
          <h5 className={`flex-1 ${isOpen && show?.children && "text-white"}`}>
            {data.title}
          </h5>
          {show?.children && (
            <FaAngleDown
              className={`font-thin text-sm duration-200 ${
                isOpen && "rotate-180"
              }`}
            />
          )}
        </div>
        {isOpen && show?.children && (
          <ul className="py-2">
            {show.children.map((innerDD) => (
              <Link href={innerDD.link} key={innerDD.id}>
                <li className="hover:bg-[#00000010] hover:text-white duration-200 pl-12 pr-6">
                  {innerDD.title}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}