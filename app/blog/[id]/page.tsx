import { getAllPosts, getPost } from "@/lib/posts";

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await getPost(params.id);
  return (
    <div className="py-5 px-2">
      <div className="py-40">
        <div className=" text-5xl pb-3 font-bold text-stone-700">
          {postData.title}
        </div>
        <div className=" font-medium text-stone-500">{postData.date}</div>
      </div>
      <div
        className=" prose prose-stone"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
