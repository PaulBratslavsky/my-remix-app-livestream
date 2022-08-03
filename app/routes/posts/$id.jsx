import React from "react";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const id = params.id;
  const getPostUrl = `${process.env.STRAPI_BASE_URL}/api/posts/${id}`;

  const res = await fetch(getPostUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN_API}`,
    },
  });

  const { data } = await res.json();
  return { post: data };
}

export default function () {
  const { post } = useLoaderData();
  const { title, description } = post.attributes;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>id: {post.id}</span>
    </div>
  );
}
