import React from "react";

export default function Post({
  image,
  title,
  content,
}) {
  console.log(image);
  return (
    <div className="card">
      <div className="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
        <img
          src={"http://localhost:1338" + image}
          alt=""
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="p-7">
        <h1 className="lg:text-3xl text-2xl font-semibold mb-6">
          {title}
        </h1>

        <div className="flex items-center space-x-3 my-4 pb-4 border-b border-gray-100">
          <img
            src={"http://localhost:1338" + image}
            alt=""
            className="w-10 rounded-full"
          />
          <div>
            <div className="text-base font-semibold"> Stella Johnson </div>
            <div className="text-xs"> Published on Oct 22, 2017 </div>
          </div>
        </div>

        <div className="space-y-3">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <h3 className="text-xl font-semibold pt-2">
            {" "}
            Maecenas Pretium Lorem Fermentum
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Nam liber tempor cum soluta nobis eleifend option congue
            nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <p>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
