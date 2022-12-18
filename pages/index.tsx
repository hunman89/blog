import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 px-3 md:flex-row-reverse md:px-10 md:justify-around md:h-screen md:items-center">
      <div className=" aspect-square flex items-center justify-center text-teal-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-20 h-20 md:h-40 md:w-40"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      </div>
      <div className="md:space-y-3">
        <div className="text-2xl font-medium md:text-4xl">
          안녕하세요? 정성훈입니다.
        </div>
        <div className="md:text-2xl">hunman89@gmail.com</div>
      </div>
    </div>
  );
}
