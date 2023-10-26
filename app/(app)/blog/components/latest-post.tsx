"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

const LatestPost = ({ post }: { post: SanityDocument }) => {
  return (
    <article className="border-x border-stone-200 container prose prose-xl p-4">
      {/* Post image and title */}
      {post?.mainImage ? (
        <Image
          className="w-full rounded-lg"
          src={builder.image(post.mainImage).width(3200).height(1800).url()}
          width={3200}
          height={1800}
          alt={post.mainImage.alt}
        />
      ) : null}
      <h1>{post.title}</h1>
      {/* Post body */}
      <div className="line-clamp-3">
        {post?.body ? <PortableText value={post.body} /> : null}
      </div>
    </article>
  );
};

export default LatestPost;
