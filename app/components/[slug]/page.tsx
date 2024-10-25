import UIClientMDXContent from "../UI-MDXClient";
import type { Metadata } from "next";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import React from "react";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

async function getPost({ slug }: { slug: string }) {
  try {
    const mdxPath = path.join("content", "ui", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const { metadata } = await import(`@/content/ui/${slug}.mdx`);

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content", "ui"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPost(params);
  // Dynamically import the MDX file based on the slug

  return (
    <div className="px-4 sm:px-6  md:px-8 lg:px-12">
      <div className="flex justify-center items-center flex-col gap-6">
        <article className="prose mt-10 flex flex-col gap-4 w-full">
          {post.metadata.image && (
            <Image
              src={post.metadata.image ? post.metadata.image : "/gradient.jpg"}
              width={800}
              height={450}
              alt="Blog Post Image"
              className="rounded-lg pb-4 h-full w-full transition-all group-hover:scale-[1.01]"
              style={{}}
            />
          )}
          <div className="">
            {" "}
            <p className="font-semibold text-sm  sm:text-base md:text-lg">
              <span className="pr-1">{post.metadata.publishDate}</span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black capitalize leading-tight">
              {post.metadata.title}
            </h1>
            <p>{post.metadata.description}</p>
          </div>
          <div className=""></div>
          <UIClientMDXContent slug={slug} />
        </article>
      </div>
    </div>
  );
}
