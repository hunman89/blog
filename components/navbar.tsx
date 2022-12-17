import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className=" flex flex-row space-x-10 justify-between py-3 px-5 md:py-6 md:px-10 2xl:px-20 border-b border-black">
        <div className=" flex text-2xl font-bold items-center">
          <Link href="/">Hunman</Link>
        </div>
        <div className="flex flex-row space-x-5 justify-around items-center">
          <Link href="/post">POST</Link>
          <Link href="/about">ABOUT</Link>
        </div>
      </nav>
    </>
  );
}
