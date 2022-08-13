import React from "react";

export default function Card({
  tag = "no tag provided",
  title = "no title provided",
  description = "no description provided",
  image = "",
}) {

  const { url } = image.data.attributes;

  return (
    <div className="lg:flex lg:space-x-6 py-5">
      <div className="lg:w-60 w-full h-40 overflow-hidden rounded-lg relative shadow-sm">
        <img
          src={"http://localhost:1338" + url}
          alt=""
          className="w-full h-full absolute inset-0 object-cover"
        />
        {tag.data && (
          <div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
            {tag.data.attributes.name}
          </div>
        )}
      </div>
      <div className="flex-1 lg:pt-0 pt-4">
        <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
        <p className="line-clamp-2 pt-3">{description}</p>
      </div>
    </div>
  );
}
