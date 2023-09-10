import { getSortedPostsData } from "@/lib/posts";
import PostCard from "../components/post-card";

export default async function Home() {
  const postDatas = await getSortedPostsData();

  return (
    <div className=" py-10 px-5 grid grid-cols-1 gap-4">
      {postDatas.map((postData) => {
        return (
          <PostCard
            key={postData.id}
            id={postData.id}
            title={postData.title}
            date={postData.date}
            description={postData.description}
          />
        );
      })}
    </div>
  );
}
