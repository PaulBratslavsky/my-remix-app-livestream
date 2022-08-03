import { Outlet, useLoaderData, Link } from "@remix-run/react";

import React from "react";

export async function loader() {
  console.log(process.env.STRAPI_BASE_URL);
  console.log(process.env.STRAPI_TOKEN_API);

  const getPostsUrl = `${process.env.STRAPI_BASE_URL}/api/posts`;

  const res = await fetch(getPostsUrl, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN_API}`,
    },
  });

  const { data } = await res.json();
  return { posts: data };
}

export default function () {
  const { posts } = useLoaderData();

  return (
    <div>
      <h1>Posts Page</h1>
      <Link to="/">Back Home</Link>

      <h2>Posts</h2>
      <aside>
        <ul>
          {posts.map((post) => {
            const { slug, title } = post.attributes;
            console.log(slug, title);
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
