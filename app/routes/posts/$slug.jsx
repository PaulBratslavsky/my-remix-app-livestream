import { useLoaderData } from "@remix-run/react";
import Post from "../../components/Post";
export async function loader({ params }) {
  const slug = params.slug;
  const res = await fetch(
    "http://localhost:1338/api/posts/" + slug + "?populate=*"
  );
  const { data } = await res.json();
  return { post: data };
}

export default function () {
  const { post } = useLoaderData();

  const { title, content, image } = post.attributes;

  const imageUrl = image.data.attributes.url;
  return (
    <div>
      <Post image={imageUrl} title={title} content={content}/>
    </div>
  );
}
