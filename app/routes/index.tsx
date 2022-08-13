import { Link } from "@remix-run/react"

export default function Index() {
  return (
    <div>

      {/* <div className="max-w-5xl mx-auto md:mb-20">

        <h1 className="text-4xl" >Use flexible components to build an app quickly</h1>
        <div className="">fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</div>

        <div className="md:flex font-semibold items-center justify-center md:space-x-6 md:md:mb-14 mb-10 md:space-y-0 space-y-4">
          <button className="md:w-auto w-full">Get Started</button>
          <button className="md:w-auto w-full">View more</button>
        </div>

      </div> */}



      <Link to="/posts">

        <div className="lg:px-20 px-7 relative transform scale-110 translate-y-20" style={{ transform: "perspective(1140px) rotateX(17deg) rotateY(0deg) rotateZ(0deg)" }}>
          <div className="overflow-hidden relative rounded-xl shadow-lg z-10 border border-gray-100">
            <img src="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="" className="w-full h-full" />
          </div>
        </div>

      </Link>

    </div>

  );
}
