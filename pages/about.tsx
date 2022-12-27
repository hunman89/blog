import matter from "gray-matter";
import md from "markdown-it";
import fs from "fs";

type AboutProps = {
  frontmatter: {
    [key: string]: any;
  };
  content: string;
};

export default function About({ frontmatter, content }: AboutProps) {
  return (
    <div className="prose mx-auto pt-10">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}

export async function getStaticProps() {
  const fileName = fs.readFileSync(`about/about.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
