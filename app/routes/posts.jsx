import { Outlet, useLoaderData, Link } from "@remix-run/react";

import React from "react";

export const loader = async () => {
  const res = await fetch("http://localhost:1338/api/posts");
  const { data } = await res.json();
  return { posts: data };
};

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
            const { title, slug } = post.attributes;
            return <li key={post.id}>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </li>;
          })}
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
