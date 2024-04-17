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
          <div className="flex">
            <button className="bg-color2 bg-opacity-50 p-2 rounded-lg w-full">
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

  const Offers = () => {
    return (
      <div className="flex gap-[1rem] flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-[1rem]">
          <img
            src="/images/services1.jpg"
            className="rounded-lg w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-[1rem]">
          <div className="p-[1rem]">
            <h1 className="text-2xl glowText">Lorem ipsum dolor sit amet.</h1>
            <p>I develop responsive and user friendly websites.</p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <ul className="w-full text-center grid grid-cols-1 sm:grid-cols-2 gap-[1rem] p-[1rem]">
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">E-commerce stores</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Blogs</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Portfolio</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Business websites</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Online magazines</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Community forums</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Educational websites</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Travel blogs</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Website Builder</h1>
              </li>
              <li className="bg-color2 p-[1rem] -skew-x-12 rounded-lg">
                <h1 className="skew-x-12">Portfolio Builder</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const [loaded, setLoaded] = useState(false);

  return (
    <section id="services" className="relative">
      {<ImageLoader sectionId="services" setLoaded={setLoaded} />}
      <div className="min-h-screen w-full flex flex-col px-[1rem] gap-4 pb-[6rem]">
        <Introduction />
        <Offers />
      </div>
      {loaded ? null : <Loading />}
    </section>
  );
}
