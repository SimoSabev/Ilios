import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo1.jpg";
import link1 from "../public/linkedin.png";
import link2 from "../public/email.png";
import link3 from "../public/telephone.png";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`drawer fixed ${className}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn absolute text-background bg-[#0000006a] shadow-2xl top-8 left-4 sm:left-8 btn-square btn-ghost drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="drawer-side drawer-top">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="flex flex-col sm:flex-row justify-center md:justify-around items-center bg-white text-foreground w-full p-4 sm:p-5 space-y-4 sm:space-y-0">
          {/* Sidebar content */}
          <li className="text-center">
            <div className="flex flex-col justify-center items-center text-lg font-medium">
              <div className=" flex flex-col justify-center items-center">
              <h1 className="text-lg sm:text-xl">
                SuperYacht Interior Curator <br className="hidden sm:block" /> Project Manager
              </h1>
              <div className="h-1 w-1/4 bg-foreground rounded-full mt-4" />
              </div>
              
            </div>
          </li>
          <li className="text-center">
            <div className="text-xl sm:text-2xl font-black">
              <Image
                className="rounded-3xl"
                src={logo.src}
                alt="founder-icon"
                width={200}
                height={100}
              />
            </div>
          </li>
          <li>
            <ul className="flex flex-col justify-center items-start text-base space-y-2 sm:space-y-2 ">
              <li className="p-2 sm:p-3 rounded-xl bg-transparent hover:bg-[#cacaca] ">
                <Link
                  href="http://linkedin.com/in/ilios"
                  target="__blank"
                  className="w-full"
                >
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      src={link1.src}
                      alt="linkedin-icon"
                      width={30}
                      height={30}
                    />
                    <p>Iliyana Popova</p>
                  </div>
                </Link>
              </li>
              <li className="p-2 sm:p-3">
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={link2.src}
                    alt="email-icon"
                    width={30}
                    height={30}
                  />
                  <p>iliyana@iliosdecor.com</p>
                </div>
              </li>
              <li className="p-2 sm:p-3">
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={link3.src}
                    alt="telephone-icon"
                    width={30}
                    height={30}
                  />
                  <p>+33660051391</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
