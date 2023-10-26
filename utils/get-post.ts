import { postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { cache } from "react";
import { SanityDocument } from "sanity";

export const revalidate = 60;

export const getPost = cache(async (params: any) => {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: params,
  });

  return post;
});
