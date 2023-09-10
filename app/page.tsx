import { getSortedPostsData } from "@/lib/posts";
import PostCard from "../components/post-card";

export default async function Home() {
  const datas = await getSortedPostsData();

  return (
    <div className=" py-10 px-5 grid grid-cols-1 gap-4">
      {datas.map((data) => {
        return (
          <PostCard
            key={data.id}
            title={data.title}
            date={data.date}
            description={data.description}
          />
        );
      })}
    </div>
  );
}
