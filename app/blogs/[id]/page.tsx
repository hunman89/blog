import { getPostData } from "@/app/_lib/post";

export default async function Blog({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return (
    <>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></div>
    </>
  );
}
