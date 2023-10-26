import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postsExceptCurrentQuery, postsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const BlogSidebar = async ({
  currentPostSlug,
}: {
  currentPostSlug: string | null;
}) => {
  let posts: SanityDocument[] = [];

  if (currentPostSlug) {
    posts = await sanityFetch({
      query: postsExceptCurrentQuery,
      params: { slug: currentPostSlug },
    });
  } else {
    posts = await sanityFetch({ query: postsQuery });
  }

  return (
    <aside className="border-r border-stone-200">
      <div className="grid grid-cols-1 divide-y divide-stone-200">
        <h3 className="p-4">Recent in the Blog</h3>
        {/* Most recent post */}
        <Link
          key={posts[0]._id}
          href={`/blog/${posts[0].slug.current}`}
          className="p-2 hover:bg-stone-200"
        >
          {posts[0].mainImage ? (
            <Image
              className="rounded-md sidebar-image"
              src={builder
                .image(posts[0].mainImage)
                .width(320)
                .height(180)
                .url()}
              alt={posts[0].mainImage.alt}
              width={320}
              height={180}
            />
          ) : null}
          <h5 className="line-clamp-3">{posts[0].title}</h5>
        </Link>
        {/* List of next most recent posts */}
        {posts.splice(1).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="h-[100px] p-2 hover:bg-stone-200 grid grid-cols-2"
          >
            <div className="relative">
              {post.mainImage ? (
                <Image
                  className="rounded-md sidebar-image"
                  src={builder
                    .image(post.mainImage)
                    .width(500)
                    .height(500)
                    .url()}
                  alt={post.mainImage.alt}
                  fill
                />
              ) : null}
            </div>
            <p className="line-clamp-3">{post.title}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default BlogSidebar;
