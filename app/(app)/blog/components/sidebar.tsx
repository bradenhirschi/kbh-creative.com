import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { postsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const BlogSidebar = async ({
  currentPostSlug,
}: {
  currentPostSlug: string | null;
}) => {
  /*
  let posts: SanityDocument[] = [];

  if (currentPostSlug) {
    posts = await sanityFetch({
      query: postsExceptCurrentQuery,
      params: { slug: currentPostSlug },
    });
  } else {
    posts = await sanityFetch({ query: postsQuery });
  }*/

  const posts: SanityDocument[] = await sanityFetch({ query: postsQuery });

  return (
    <aside className="border-r border-stone-200">
      <div className="grid grid-cols-1 divide-y divide-stone-200">
        <h3 className="p-4">Recent in the Blog</h3>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="p-4 hover:bg-stone-200"
          >
            <h4>{post.title}</h4>
            {post.mainImage ? (
              <Image
                className="w-full rounded-lg"
                src={builder.image(post.mainImage).width(900).height(450).url()}
                width={900}
                height={450}
                alt={post.mainImage.alt}
              />
            ) : null}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default BlogSidebar;
