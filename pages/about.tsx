import matter from "gray-matter";
import fs from "fs";
import markdownToHtml from "../lib/markdownToHtml";

type AboutProps = {
  frontmatter: {
    [key: string]: any;
  };
  htmlcontent: string;
};

export default function About({ frontmatter, htmlcontent }: AboutProps) {
  return (
    <div className="prose mx-auto pt-10">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlcontent }} />
    </div>
  );
}

export async function getStaticProps() {
  const fileName = fs.readFileSync(`about/about.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const htmlcontent = await markdownToHtml(content);
  return {
    props: {
      frontmatter,
      htmlcontent,
    },
  };
}
