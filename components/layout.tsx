import NavBar from "./navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className=" text-black min-h-screen bg-stone-300">
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  );
}
