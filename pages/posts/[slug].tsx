import fs from "fs";
import matter from "gray-matter";
import markdownToHtml from "../../lib/markdownToHtml";

type StaticProps = {
  params: { slug: string };
};

type PostPageProps = {
  frontmatter: {
    [key: string]: any;
  };
  htmlContent: string;
};

export default function PostPage({ frontmatter, htmlContent }: PostPageProps) {
  return (
    <div className="prose mx-auto pt-10">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const htmlContent = await markdownToHtml(content || "");
  return {
    props: {
      frontmatter,
      htmlContent,
    },
  };
}
