import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { SiHashnode } from "react-icons/si";

const Intro: React.FC = () => {
  return (
    <div className="md:px-6 lg:px-10 xl:px-16 md:py-6 p-4 bg-gradient-to-r from-primary to-secondary flex flex-col md:flex-row justify-between items-center gap-4">
      <div></div>

      <div className="flex items-center gap-4 text-textColor font-liAdorNoirrit">
        <div className="text-center">
          <h2 className="lg:text-5xl text-4xl">Shohan's Dev Journey</h2>
          <h5 className="lg:text-2xl text-xl">
            Frontend Engineer | JavaScript, React, Next
          </h5>
        </div>
      </div>

      <div className="flex lg:gap-5 gap-4">
        <Link href="https://www.linkedin.com/in/shohanur27/">
          <FaLinkedin className="w-6 lg:w-8 text-3xl text-white" />
        </Link>
        <Link href="https://github.com/shohan150/">
          <FaGithub className="w-6 lg:w-8 text-3xl text-white" />
        </Link>
        <Link href="https://shohan777.hashnode.dev/" target="_blank">
          <SiHashnode className="w-6 lg:w-8 text-3xl text-white" />
        </Link>
        <Link href="mailto:shohan.ece17@gmail.com" target="_blank">
          <MdAttachEmail className="w-6 lg:w-8 text-3xl text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
