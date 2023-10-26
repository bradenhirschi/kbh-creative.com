"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import CategoryChip from "./category-chip";
import Link from "next/link";

const builder = imageUrlBuilder(client);

const LatestPost = ({ post }: { post: SanityDocument }) => {
  const categories =
    post.categories?.map((category: any) => category.title) || [];

  return (
    <section className="border-x border-stone-200 p-4">
      <Link href={`/blog/${post.slug.current}`}>
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

        {/* Post body */}
        <div className="line-clamp-3">
          {post?.body ? <PortableText value={post.body} /> : null}
        </div>
      </Link>
    </section>
  );
};

export default LatestPost;
