import Link from "next/link";

export interface PostCardInfo {
  id: string;
  title: string;
  date: string;
  descriptions: string;
}

export default function PostCard({
  id,
  title,
  date,
  descriptions,
}: PostCardInfo) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="text-stone-700 p-3 border border-stone-600 rounded-sm hover:border-emerald-500 hover:cursor-pointer">
        <div className=" text-4xl font-semibold pb-3">{title}</div>
        <div className="text-sm font-light text-stone-500">{date}</div>
        <div className="line-clamp-2">{descriptions}</div>
      </div>
    </Link>
  );
}
