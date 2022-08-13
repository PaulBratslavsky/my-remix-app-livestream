import { Outlet, useLoaderData, Link } from "@remix-run/react";
import MyLink from "../components/MyLink";
import Card from "../components/Card";

export const loader = async () => {
  const res = await fetch("http://localhost:1338/api/posts?populate=*");
  const { data } = await res.json();
  return { posts: data };
};

export default function () {
  const { posts } = useLoaderData();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <aside className="col-span-1">
          <ul>
            {posts.map((post) => {
              const { title, description, tag, image } = post.attributes;

              return (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>
                    <Card
                      title={title}
                      description={description}
                      tag={tag}
                      image={image}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <section className="col-span-2">
          <Outlet />
          <MyLink to="/">Back Home</MyLink>
        </section>
      </div>
    </div>
  );
}
