"use client";

import mergeClasses from "@/lib/merge-classes";
import { Heading } from "@/lib/posts";
import React from "react";

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [active, setActive] = React.useState(
    headings.length > 0 ? headings[0].slug : ""
  );

  React.useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ slug }) =>
        document.getElementById(slug)
      );
      const visibleHeadings = headingElements.filter((el) =>
        isElementInViewport(el)
      );
      if (visibleHeadings.length > 0) {
        if (visibleHeadings[0] != null) {
          setActive(visibleHeadings[0].id);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const isElementInViewport = (el: HTMLElement | null) => {
    if (el == null) return null;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="fixed border border-stone-800 p-1 w-auto text-stone-500">
      <p className="border-b border-stone-800 py-3">On this page</p>
      <ul className="pt-3">
        {headings.map(({ slug, title, level }, index) => {
          return (
            <li key={index}>
              <a
                className={mergeClasses(
                  active == slug ? "text-stone-700" : "text-stone-500",
                  level == 1
                    ? "text-xl font-medium hover:text-stone-700"
                    : "text-md hover:text-stone-700"
                )}
                href={`#${slug}`}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
