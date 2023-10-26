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
    <article className="border-x border-stone-200 container prose-xl p-4">
      {/* Post image and title */}
      <div className="relative">
        {post?.mainImage ? (
          <Image
            className="w-full rounded-lg"
            src={builder.image(post.mainImage).width(900).height(450).url()}
            width={900}
            height={450}
            alt={post.mainImage.alt}
          />
        ) : null}
        {/* Alternate author information section over the image
        <div className="absolute bottom-0 left-0 p-2 bg-white border border-stone-200">
          <div className="flex flex-row items-center not-prose">
            <Image
              className="rounded-full mr-2"
              src={builder
                .image(post.author.image)
                .width(300)
                .height(300)
                .url()}
              width={30}
              height={30}
              alt={post.author.image.alt}
            />
            <h3 className="prose prose-xl">By {post.author.name}</h3>
          </div>
        </div>
        */}
      </div>

      {/* Category chips */}
      <div className="flex flex-row gap-2 mb-2">
        {categories.map((category: string) => (
          <div key={category}>
            <CategoryChip category={category} />
          </div>
        ))}
      </div>

      {/* Post title */}
      <h1>{post.title}</h1>

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
      {post?.body ? <PortableText value={post.body} /> : null}
    </article>
  );
};

export default BlogPost;
