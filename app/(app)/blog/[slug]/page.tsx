import { SanityDocument } from "@sanity/client";
import BlogPost from "../components/post";
import { postMetadataQuery, postPathsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import BlogSidebar from "../components/sidebar";
import { getPost } from "@/utils/get-post";

type Props = {
  params: { slug: string };
};

// Prepare Next.js to know which routes already exist
export const generateStaticParams = async () => {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
};

// Builder to generate metadata image from URL
const builder = imageUrlBuilder(client);

// Dynamically generate metadata based on slug
export const generateMetadata = async ({ params }: Props) => {
  const postMetadata = await sanityFetch<SanityDocument>({
    query: postMetadataQuery,
    params: params,
  });

  return {
    title: `${postMetadata.title} | KBH Creative`,
    openGraph: {
      images: [
        builder.image(postMetadata.mainImage).width(1600).height(900).url(),
      ],
    },
  };
};

const BlogPostPage = async ({ params }: Props) => {
  const post: SanityDocument = await getPost(params);

  return (
    <main className="px-responsive grid grid-cols-4">
      <div className="col-span-3">
        <BlogPost post={post} />
      </div>
      <BlogSidebar currentPostSlug={post.slug.current} />
    </main>
  );
};

export default BlogPostPage;
