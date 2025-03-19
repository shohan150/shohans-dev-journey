import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { SiHashnode } from "react-icons/si";

const Intro: React.FC = () => {
  return (
    <div className="px-4 md:px-6 lg:px-10 xl:px-12 py-2 bg-gradient-to-r from-primary to-secondary flex flex-col sm:flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-4 text-textColor font-liAdorNoirrit">
        <div className="text-center">
          <h2 className="text-md m-0">Shohan's Dev Journey</h2>
          {/* <h5 className="text-xs">
            Frontend Engineer | JavaScript, React, Next
          </h5> */}
        </div>
      </div>

      <div className="hidden sm:flex lg:gap-5 gap-4">
        <Link href="https://www.linkedin.com/in/shohanur27/">
          <FaLinkedin className="w-3 lg:w-4 text-xl text-white" />
        </Link>
        <Link href="https://github.com/shohan150/">
          <FaGithub className="w-3 lg:w-4 text-xl text-white" />
        </Link>
        <Link href="https://shohan777.hashnode.dev/" target="_blank">
          <SiHashnode className="w-3 lg:w-4 text-xl text-white" />
        </Link>
        <Link href="mailto:shohan.ece17@gmail.com" target="_blank">
          <MdAttachEmail className="w-3 lg:w-4 text-xl text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
