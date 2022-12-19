import Link from "next/link";

export default function SubMenu() {
  return (
    <div className="flex md:hidden flex-col items-end py-3 px-5 space-y-3 bg-stone-400">
      <Link className=" hover:underline" href="/post">
        POST
      </Link>
      <Link className="hover:underline" href="/about">
        ABOUT
      </Link>
    </div>
  );
}
