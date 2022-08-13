import MyLink from "../components/MyLink";
export default function Index() {
  return (
    <div className="container mx-auto">
      <h1>Welcome to Home Remix We are here</h1>

      <MyLink to="/posts">
        Blog Posts
      </MyLink>

    </div>
  );
}
