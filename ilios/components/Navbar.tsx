import React from "react";

const Navbar = () => {
  return (
    <div className="drawer fixed">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn absolute text-background bg-[#0000006a] hover:bg-[#5555556a] hover:scale-110 shadow-2xl top-8 left-8 btn-square btn-ghost drawer-button"
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
        <ul className="menu flex flex-row justify-around items-center bg-background text-foreground w-full p-4">
          {/* Sidebar content */}
          <li>
            <div className="no-underline hover:no-underline hover:bg-transparent text-lg text-bold hover:text-inherit">
              Decor designer
            </div>
          </li>
          <li>
            <div className="no-underline hover:no-underline text-2xl font-black hover:bg-transparent hover:text-inherit">
              ILIOS
            </div>
          </li>
          <li >
            <div className="no-underline hover:no-underline hover:bg-transparent hover:text-inherit">
              <ul className="flex flex-col justify-center items-start gap-2 text-base ">
                <li className="no-underline hover:no-underline hover:bg-transparent hover:text-inherit">
                  Email: iliyana@iliosdecor.com
                </li>
                <li className="no-underline  hover:no-underline hover:bg-transparent hover:text-inherit">
                  Phone: +33660051391
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
