import { useState } from "react";
import ImageLoader from "../utils/ImageLoader";
import { Loading } from "../components/OverlayUIs";

export default function Services() {
  const Introduction = () => {
    return (
      <div className="flex gap-[1rem]">
        <div className="w-1/2 h-[500px] flex flex-col justify-center items-end gap-[1rem]">
          <h1 className="text-4xl text-end font-bold uppercase">
            Are you looking for a <span className="glowText">FULLSTACK </span>
            software developer?
          </h1>
          <p className="text-end">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eaque
            accusantium consequatur, iusto alias deserunt nesciunt totam
            mollitia doloribus dolores exercitationem nobis quibusdam distinctio
            voluptatibus.
          </p>
          <div className="flex gap-[1rem]">
            <button className="bg-color2 bg-opacity-50 p-2 rounded-lg">
              Contact now!
            </button>
            <button className="bg-color2 bg-opacity-50 p-2 rounded-lg">
              Contact now!
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <img src="/images/services.jpg" className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    );
  };

  const [loaded, setLoaded] = useState(false);

  return (
    <section id="services" className="relative">
      {<ImageLoader sectionId="services" setLoaded={setLoaded} />}
      <div className="min-h-screen w-full flex flex-col lg:flex-row px-[1rem] gap-4">
        <Introduction />
      </div>
      {loaded ? null : <Loading />}
    </section>
  );
}
