import { getPost } from "@/utils/get-post";
import { SanityDocument } from "sanity";

export default async function BlogPostLayout({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const post: SanityDocument = await getPost(params);

  return <>{children}</>;
}
