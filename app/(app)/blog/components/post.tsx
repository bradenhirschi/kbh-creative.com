"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import CategoryChip from "./category-chip";

const builder = imageUrlBuilder(client);
const BlogPost = ({ post }: { post: SanityDocument }) => {
  const categories =
    post.categories?.map((category: any) => category.title) || [];

  return (
    <section className="border-x border-stone-200 p-4">
      {/* Post image */}
      {post?.mainImage ? (
        <Image
          className="w-full rounded-lg"
          src={builder.image(post.mainImage).width(3200).height(1800).url()}
          width={3200}
          height={1800}
          alt={post.mainImage.alt}
        />
      ) : null}

      {/* Category chips */}
      <div className="flex flex-row gap-2 mt-4">
        {categories.map((category: string) => (
          <div key={category}>
            <CategoryChip category={category} />
          </div>
        ))}
      </div>

      {/* Post title */}
      <h1 className="blog-title">{post.title}</h1>

      {/* Author information */}
      <div className="flex flex-row items-center not-prose gap-3">
        <Image
          className="rounded-full"
          src={builder.image(post.author.image).width(300).height(300).url()}
          width={50}
          height={50}
          alt={post.author.image.alt}
        />
        <div>
          <h3 className="prose prose-xl">By {post.author.name}</h3>
          <p className="text-sm">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Post body */}
      <div className="blog-article">
        <PortableText value={post.body} />
      </div>
    </section>
  );
};

export default BlogPost;
