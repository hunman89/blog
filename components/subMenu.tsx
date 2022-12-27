import Link from "next/link";

type SubMenuProps = {
  subMenuClose: () => void;
};

export default function SubMenu({ subMenuClose }: SubMenuProps) {
  return (
    <div className="flex md:hidden flex-col items-end py-3 px-5 space-y-3 bg-stone-400">
      <Link className=" hover:underline" href="/post" onClick={subMenuClose}>
        POST
      </Link>
      <Link className="hover:underline" href="/about" onClick={subMenuClose}>
        ABOUT
      </Link>
    </div>
  );
}
