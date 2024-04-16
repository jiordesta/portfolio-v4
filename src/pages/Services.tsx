import { useState } from "react";
import ImageLoader from "../utils/ImageLoader";
import { Loading } from "../components/OverlayUIs";

export default function Services() {
  const Introduction = () => {
    return (
      <div className="flex gap-[1rem] md:h-[500px] flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end gap-[1rem]">
          <h1 className="text-2xl md:text-4xl text-center md:text-end font-bold uppercase">
            Looking for a skilled <span className="glowText">FULL-STACK </span>
            Web developer?
          </h1>
          <p className="text-center md:text-end ">
            Look no further! I specialize in creating dynamic and responsive web
            applications tailored to your unique needs. With years of experience
            and a passion for coding, I am dedicated to delivering high-quality
            solutions that exceed expectations. Contact me today to discuss your
            project requirements and take your web development to the next
            level.
          </p>
          <div className="flex gap-[1rem]">
            <button className="bg-color2 bg-opacity-50 p-2 rounded-lg">
              Contact now!
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/services.jpg" className="rounded-lg" alt="" />
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
