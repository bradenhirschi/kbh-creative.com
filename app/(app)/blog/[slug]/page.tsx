import { SanityDocument } from "@sanity/client";
import BlogPost from "../components/post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import BlogSidebar from "../components/sidebar";

// Prepare Next.js to know which routes already exist
export const generateStaticParams = async () => {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
};

const Page = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });

  return (
    <main className="px-44 grid grid-cols-4">
      <div className="col-span-3">
        <BlogPost post={post} />
      </div>
      <BlogSidebar currentPost={post} />
    </main>
  );
};

export default Page;
