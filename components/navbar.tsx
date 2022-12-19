import Link from "next/link";
import { useEffect, useState } from "react";
import SubMenu from "./subMenu";

interface ISubMenuState {
  show: boolean;
}

export default function NavBar() {
  const [subMenuState, setSubMenuState] = useState<ISubMenuState>({
    show: false,
  });
  const toggle = () => {
    setSubMenuState({ show: !subMenuState.show });
  };

  //todo : size md 이상일때 subMenuState.show 값 false.

  return (
    <>
      <nav className=" flex flex-row space-x-10 justify-between py-3 px-5 md:py-6 md:px-10 2xl:px-20 border-b border-black">
        <div className=" flex text-2xl font-bold items-center">
          <Link href="/">Hunman</Link>
        </div>
        <div className="hidden md:flex md:visible flex-row space-x-5 justify-around items-center">
          <Link href="/post">POST</Link>
          <Link href="/about">ABOUT</Link>
        </div>
        <div
          onClick={toggle}
          className="flex visible md:hidden items-center justify-center hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      {subMenuState.show ? <SubMenu /> : <></>}
    </>
  );
}
