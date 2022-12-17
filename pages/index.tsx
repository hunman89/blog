import Link from "next/link";

export default function Home() {
  return (
    <div className=" text-3xl text-red-500">
      Hello World. <Link href="/about">About</Link>
    </div>
  );
}
