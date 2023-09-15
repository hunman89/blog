import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { rehype } from "rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const allPosts = getAllPosts();

  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// todo: type 변경
export function getAllPosts(): {
  [key: string]: any;
}[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      fullPath,
      ...matterResult.data,
    };
  });
}

export async function getPost(id: string): Promise<{
  [key: string]: any;
}> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const autolinkingHtml = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .process(processedContent.toString());
  const contentHtml = autolinkingHtml.toString();

  const headings = extractHeadingsLevel2(fileContents);

  return {
    id,
    contentHtml,
    ...matterResult.data,
    headings,
  };
}

export interface Heading {
  slug: string;
  title: string;
  level: number;
}

export function extractHeadingsLevel2(content: string): Array<Heading> {
  const headings: Array<Heading> = [];

  const headingMatcher = /^(#+)\s(.+)$/gm;

  let match = headingMatcher.exec(content);
  while (match !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    if (level <= 2) headings.push({ slug, title, level });
    match = headingMatcher.exec(content);
  }

  return headings;
}
