import Link from "next/link";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-screen justify-center">
      <div className="flex flex-col w-full max-w-screen-md p-5 text-gray-800">
        <div className="flex flex-row justify-between items-center p-5">
          <Link href={"/blogs"} className="font-bold text-5xl">
            Posts
          </Link>
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </Link>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </section>
  );
}
