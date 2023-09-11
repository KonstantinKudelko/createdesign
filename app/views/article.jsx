"use client";

import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

const Paragraph = ({ children }) => {
  return (
    <p className="mb-8 text-md text-white dark:white font-thin">{children}</p>
  );
};

export const Article = ({ title, content }) => {
  return (
    <div className="lg:max-w-[600px] lg:mx-auto w-full px-4">
      <Link href="/">
        <span className="lg:absolute lg:left-[20px] lg:top-[0px] lg:mt-0 w-[50px] h-[50px] mx-auto mt-6 flex items-center justify-center text-white font-thin text-xl border border-white rounded-full">
          &#8592;
        </span>
      </Link>

      <h1 className="my-8 text-3xl text-center text-white uppercase font-light">
        {title}
      </h1>

      <MDXRemote compiledSource={content} components={{ p: Paragraph }} />
    </div>
  );
};
