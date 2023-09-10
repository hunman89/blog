import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Hunman blog",
  description: "Hunman의 블로그 입니다.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <div className="relative ">
          <header>
            <div className="fixed flex w-full h-16 items-center justify-center border-stone-700 border-b-2">
              <nav className="flex flex-row items-center justify-between w-full max-w-4xl font-bold bg-white bg-opacity-50 text-stone-700 px-3">
                <div className=" text-6xl">
                  <span className=" text-emerald-500">H</span>unman
                </div>
                <div className="flex flex-row space-x-6">
                  <Link href="/">Home</Link>
                  <a href="https://www.linkedin.com/in/hunman/" target="_blank">
                    About
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <main className="max-w-4xl mx-auto pt-16 px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
