import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]
{
  _id,
  title,
  slug,
  "author": author->, // Fetch the referenced author document
  mainImage,
  categories[]->{title}, // Fetch the referenced category documents
  publishedAt,
  body
}
| order(publishedAt desc)`;

// Get all posts except for current one
export const postsExceptCurrentQuery = groq`*[_type == "post" && defined(slug.current) && slug.current != $slug]
{
  _id,
  title,
  slug,
  "author": author->, // Fetch the referenced author document
  mainImage,
  categories[]->{title}, // Fetch the referenced category documents
  publishedAt,
  body
}
| order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
  _id,
  title,
  slug,
  "author": author->, // Fetch the referenced author document
  mainImage,
  categories[]->{title}, // Fetch the referenced category documents
  publishedAt,
  body
}`;

// Get a single post's metadata by its slug
export const postMetadataQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
  title,
  mainImage,
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;
