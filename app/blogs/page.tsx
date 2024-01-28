import Link from "next/link";
import { getSortedPostsData } from "../_lib/post";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/blogs/${post.id}`}
            className="flex flex-row justify-between"
          >
            <div>{post.title}</div>
            <div>{post.date.toDateString()}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
