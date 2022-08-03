import { json } from "@remix-run/node";
import { Outlet, useLoaderData, Link } from "@remix-run/react";

import React from "react";

export const loader = async () => {
  return json({
    posts: [
      {
        id: 1,
        slug: "my-first-post-1",
        title: "My First Post",
      },
      {
        id: 2,
        slug: "my-second-post-2",
        title: "A Mixtape I Made Just For You",
      },
      {
        id: 3,
        slug: "my-third-post-3",
        title: "My Third Post",
      },
    ],
  });
};

export default function () {
  const { posts } = useLoaderData();

  console.log(posts, "from hook");

  return (
    <div>
      <h1>Posts Page</h1>
      <Link to="/">Back Home</Link>
  
        <h2>Posts</h2>
        <aside>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
