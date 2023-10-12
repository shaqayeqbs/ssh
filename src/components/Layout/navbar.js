import { useState } from "react";
import { navbarData } from "./navbarData";
import Link from "next/dist/client/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="fixed top-0 w-full z-50 bg-outerSpace border-shark  shadow-md !text-myWhite  items-center md:flex p-3 px-10 ">
      <div className="flex justify-between  w-full max-w-7xl mx-auto flex-wrap md:flex-nowrap ">
        <h1 className=" text-xl w-min font-bold font-handwriting cursor-pointe mt-2 my-auto bg-salem rounded-full p-3 text-myWhite  ">
          Logo
        </h1>

        <div className="flex  justify-start">
          <button
            className="flex my-auto md:hidden text-2xl ring-black rounded"
            onClick={showNav}
          >
            <BiMenu />
          </button>
          <button
            className={`
          ${toggle ? "" : " "}
           md:hidden text-shark hover:bg-gray-300 mx-auto md:mx-0  md:mt-0 items-center justify-center   bg-gray-100  text-lg m-auto w-8 h-8 text-center pl-[6px] rounded-full  ml-5`}
          >
            <AiOutlineUser />
          </button>
        </div>
      </div>
      <ul
        className={`${
          toggle ? "flex" : "hidden "
        } flex-col font-bolder  text-[16px] justify-center items-center w-full md:flex-row md:w-auto md:space-x-10 md:flex`}
      >
        {navbarData.map((link, index) => {
          return (
            <li key={index} className={link.cname}>
              <Link
                className="hover:text-salem no-underline"
                href={link.href}
                onClick={showNav}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div></div>
      <button
        className={`
          ${toggle ? "" : " "}
          hidden md:block bg-salem hover:bg-gray-300 mx-auto md:mx-0  md:mt-0 items-center justify-center  bg-gray-100  p-5 text-lg  w-min rounded-full  !ml-10`}
      >
        <AiOutlineUser />
      </button>
    </nav>
  );
}
