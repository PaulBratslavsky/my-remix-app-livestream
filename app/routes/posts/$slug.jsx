import React from "react";
import { useLoaderData } from "@remix-run/react";

const posts = [
  {
    id: 1,
    slug: "my-first-post-1",
    title: "My First Post",
    description: "This is my first post",
  },
  {
    id: 2,
    slug: "my-second-post-2",
    title: "A Mixtape I Made Just For You",
    description: "This is my second post",
  },
  {
    id: 3,
    slug: "my-third-post-3",
    title: "My Third Post",
    description: "This is my third post",
  },
];

export function loader({ params }) {
  const slug = params.slug;
  console.log(slug, "from loader");

  // data is the return value from the loader function

  const post = posts.find((post) => post.slug === slug);
  return { post };
}

export default function () {
  const { post } = useLoaderData();
  console.log(post, "from hook");

  return (
    <div>
      <h2>{post.title}</h2>
      <span>slug: {post.slug}</span>
      <span>id: {post.id}</span>
    </div>
  );
}
