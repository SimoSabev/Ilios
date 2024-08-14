import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1 ">
        <a className="btn btn-ghost text-3xl font-black">Ilios</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1" >
          <li className=" flex flex-row text-base font-semibold justify-center items-center">
            <a>Link</a>
            <a>Link</a>
            <a>Link</a>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary className=" text-2xl font-extrabold">Parent</summary>
              <ul className="bg-background text-foreground rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
