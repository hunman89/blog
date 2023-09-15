import TableOfContents from "@/components/table-of-contents";
import { getAllPosts, getPost } from "@/lib/posts";

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await getPost(params.id);
  return (
    <div className="pt-5 flex">
      <div className=" w-9/12">
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
      <div className="w-3/12 flex justify-center pt-28">
        <TableOfContents headings={postData.headings} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
