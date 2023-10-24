"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
const BlogPost = ({ post }: { post: SanityDocument }) => {
  return (
    <article className="border-x border-stone-200 container prose prose-xl p-4">
      {/* Post image and title */}
      {post?.mainImage ? (
        <Image
          className="w-full rounded-lg"
          src={builder.image(post.mainImage).width(900).height(450).url()}
          width={900}
          height={450}
          alt={post.mainImage.alt}
        />
      ) : null}
      <h1>{post.title}</h1>
      {/* Author information */}
      <div className="flex flex-row items-center not-prose">
        <Image
          className="rounded-full mr-2"
          src={builder.image(post.author.image).width(300).height(300).url()}
          width={30}
          height={30}
          alt={post.author.image.alt}
        />
        <h3 className="prose prose-xl">By {post.author.name}</h3>
      </div>
      {/* Post body */}
      {post?.body ? <PortableText value={post.body} /> : null}
    </article>
  );
};

export default BlogPost;
