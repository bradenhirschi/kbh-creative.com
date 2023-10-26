import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postsQuery } from "@/sanity/lib/queries";
import LatestPost from "./components/latest-post";
import BlogSidebar from "./components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | KBH Creative",
  description: "Elevate your online presence",
};

const BlogPage = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="px-44 grid grid-cols-4">
      <div className="col-span-3">
        <LatestPost post={posts[0]} />
      </div>
      <BlogSidebar currentPostSlug={null} />
      {/*
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="p-4 hover:bg-blue-50"
        >
          <h2>{post.title}</h2>
        </Link>
      ))}
      */}
    </main>
  );
};

export default BlogPage;
