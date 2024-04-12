import { useState } from "react";
import { Loading } from "../components/OverlayUIs";
import ImageLoader from "../utils/ImageLoader";

export default function Projects() {
  const Project = () => {
    const [hovered, setHovered] = useState(false);
    const [gitHover, setGitHover] = useState(false);
    const [linkHover, setLinkHover] = useState(false);
    return (
      <div
        className={`h-[500px] bg-color2 rounded-xl ${
          hovered ? "p-1 bg-opacity-5 glowBox" : "p-2 bg-opacity-25"
        } drop-shadow-lg transition-all ease-in-out duration-300 cursor-pointer`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="h-[60%]">
          <img
            src="/images/profile.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg"
            alt=""
          />
        </div>
        <div className="h-[40%]">
          <div className="h-full">
            <div className="h-3/4 overflow-hidden">
              <h1 className="text-2xl font-bold">Sample Project</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi doloremque debitis voluptatum iusto! Quos consequatur
                harum facere natus tempora nobis necessitatibus in id ea
                similique.
              </p>
            </div>
            <div className="h-1/4 flex justify-end items-end">
              <div className="flex gap-2">
                <div
                  className={`bg-color2 bg-opacity-25 rounded-full flex gap-2 p-1 pe-3 drop-shadow-lg ${
                    gitHover && "glowBox"
                  } transition-all ease-in-out duration-500 cursor-pointer`}
                  onMouseEnter={() => setGitHover(true)}
                  onMouseLeave={() => setGitHover(false)}
                >
                  <div className="bg-color3 p-1 rounded-full glowBox">
                    <img
                      src="/icons/github.svg"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="glowText">Github</h1>
                  </div>
                </div>
                <div
                  className={`bg-color2 bg-opacity-25 rounded-full flex gap-2 p-1 pe-3 drop-shadow-lg ${
                    linkHover && "glowBox"
                  } transition-all ease-in-out duration-500 cursor-pointer`}
                  onMouseEnter={() => setLinkHover(true)}
                  onMouseLeave={() => setLinkHover(false)}
                >
                  <div className="bg-color3 p-1 rounded-full glowBox">
                    <img src="/icons/visit.svg" width={25} height={25} alt="" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h1 className="glowText">Visit</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [loaded, setLoaded] = useState(false);

  return (
    <section id="projects" className="relative">
      {<ImageLoader sectionId="projects" setLoaded={setLoaded} />}
      <div className="min-h-screen w-full flex flex-col lg:flex-row px-[1rem] gap-4 pb-[6rem]">
        <ul className="grid gap-[1rem] grid-cols-4">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </ul>
      </div>
      {loaded ? null : <Loading />}
    </section>
  );
}
