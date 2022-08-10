import React from "react";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const slug = params.slug;
  const res = await fetch(
    "http://localhost:1338/api/post/find-by-slug/" + slug + "?populate=*"
  );
  const { data } = await res.json();
  return { post: data };
}

export default function () {
  const { post } = useLoaderData();

  console.log(post);

  const { title, content, slug, image } = post.attributes;

  const imageUrl = image.data.attributes.url;
  console.log(imageUrl, `imageUrl`);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{slug}</h2>
      <p>{content}</p>
      <img src={"http://localhost:1338" + imageUrl} alt={title} height="300" width="600" />
    </div>
  );
}
