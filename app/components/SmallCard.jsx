export default function SmallCard({ title, description, tag, image }) {
  const { url } = image.data.attributes;

  return (
    <div class="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2 relative">
      <div class="w-14 h-14 flex-shrink-0 rounded-md relative">
        <img
          src={"http://localhost:1338" + url}
          class="absolute w-full h-full inset-0 rounded-md object-cover"
          alt=""
        />
      </div>
      <div class="flex-1">
        <h2 href="timeline-group.html" class="text-lg font-semibold capitalize">
          {title}
        </h2>
        <div class="text-sm text-gray-500 mt-0.5">{description}</div>
      </div>
      {tag.data && (
        <div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs bottom-2.5 right-2.5">
          {tag.data.attributes.name}
        </div>
      )}
    </div>
  );
}
