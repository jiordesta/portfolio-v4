import { useState } from "react";
import ImageLoader from "../utils/ImageLoader";
import { Loading } from "../components/OverlayUIs";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const ResumeBtn = () => {
    const url =
      "https://drive.google.com/file/d/1P1u5hw_1oTZR4gJBENNhM8TkqarX6xj4/view?usp=sharing";
    return (
      <button
        className="p-1 flex items-center rounded-full drop-shadow-lg bg-color2 bg-opacity-25"
        onClick={() => {
          window.open(`${url}`, "_blank");
        }}
      >
        <div>
          <img
            src="/icons/resume.svg"
            className="p-1 bg-color3 rounded-full glowBox"
            width={35}
            alt=""
          />
        </div>
        <h1 className="ps-2 pe-4 glowText">resume</h1>
      </button>
    );
  };

  const OngoingProjects = () => {
    const navigate = useNavigate();
    const projects = [
      {
        status: "ongoing-project",
        category: "e-commerce",
        commits: [
          "added homepage",
          "fixed product search",
          "project initialized",
        ],
      },
      {
        status: "ready-to-deploy",
        category: "product-marketing",
        commits: ["added authentication", "homepage", "display products"],
      },
    ];

    interface projectprops {
      status: String;
      category: String;
      commits: String[];
    }

    const Project = ({ status, category, commits }: projectprops) => {
      const [hovered, setHovered] = useState(false);
      return (
        <li
          className="md:w-[50%] w-full lg:w-full cursor-pointer drop-shadow-lg"
          onClick={() => navigate("/maintenance")}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <div
            className={`w-full h-[300px] sm:h-[350px] flex justify-center items-center relative rounded-lg overflow-hidden transition-all ease-in-out duration-300 ${
              hovered ? "p-1" : "p-0"
            }`}
          >
            <img
              src="/icons/ongoingbg.svg"
              className="rounded-lg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt=""
            />
            <div className="bg-black w-full h-full absolute bg-opacity-75" />
            <div
              className={`bg-color2 glowBox rounded-full absolute  drop-shadow-lg transition-all ease-in-out duration-300 ${
                hovered ? "bg-opacity-5 p-[2rem]" : "bg-opacity-25 p-[1rem]"
              }`}
            >
              <img
                src="/icons/lock.svg"
                width={45}
                className={`${
                  hovered
                    ? "scale-[150%] translate-y-[-10px]"
                    : "scale-[100%] translate-y-[0px]"
                } transition-all ease-in-out duration-300`}
                alt=""
              />
            </div>
            <div className="bg-color2 bg-opacity-25 rounded-lg absolute top-[1rem] left-[1rem] px-4 py-2 drop-shadow-lg">
              <h1 className="">{status}</h1>
            </div>
            <div className="bg-color2 bg-opacity-25 rounded-lg absolute bottom-[1rem] left-[1rem] px-4 py-2 drop-shadow-lg">
              <h1>{category}</h1>
            </div>
            <div className="bg-color2 bg-opacity-25 rounded-lg absolute top-[1rem] right-[1rem] p-1 drop-shadow-lg">
              <img src="/icons/notice.svg" width={25} alt="" />
            </div>
            <div className="absolute bottom-[1rem] right-[1rem] drop-shadow-lg space-y-2">
              <ul className="space-y-1">
                {commits.map((commit, index) => {
                  return (
                    <li key={index} className="flex justify-end">
                      <div>{`[${commit}]`}</div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-end">
                <h1 className="bg-color2 bg-opacity-25 rounded-lg px-4 py-2">
                  recent commits
                </h1>
              </div>
            </div>
          </div>
        </li>
      );
    };
    return (
      <div>
        <ul className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-2 glowText">
          {projects.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </ul>
      </div>
    );
  };

  const Profile = () => {
    const [hovered, setHovered] = useState(false);
    return (
      <div className="mx-0 lg:mx-8 space-y-2 cursor-default">
        <div className="w-full flex justify-center">
          <div className="bg-color2 bg-opacity-25 drop-shadow-lg rounded-lg px-4 py-2 w-full text-center glowText">
            John Irson Ordesta
          </div>
        </div>
        <div
          className={`bg-color2 drop-shadow-lg rounded-lg ${
            hovered ? "p-1 bg-opacity-5" : "p-[1rem] bg-opacity-25"
          } transition-all ease-in-out duration-300`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src="/images/profile.png" />
        </div>
        <div className="w-full flex justify-center">
          <div
            className={`bg-color2 bg-opacity-25 drop-shadow-lg rounded-lg px-4 py-2 w-full text-center glowText ${
              hovered && "text-color3"
            }`}
          >
            {hovered ? "Lvl 999: Mafia Boss" : "Lvl 1: Crook"}
          </div>
        </div>
      </div>
    );
  };

  const Status = () => {
    return (
      <div className="space-y-2">
        <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
          <p>
            I am a <span className="glowText">COMPUTER SCIENCE</span> degree
            holder with THREE YEARS of work experience in
            <span className="glowText"> FULLSTACK SOFTWARE DEVELOPMENT</span>. I
            bring a strong foundation in
            <span className="glowText"> REACTJS</span>,
            <span className="glowText"> NODEJS</span>,
            <span className="glowText"> EXPRESSJS</span>,
            <span className="glowText"> NEXTJS</span>,
            <span className="glowText"> MYSQL</span>, and
            <span className="glowText"> NOSQL</span> databases such as
            <span className="glowText"> FIREBASE and</span>
            <span className="glowText"> MONGODB</span>.
          </p>
        </div>
        <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
          <p>
            In addition to my expertise in these technologies, I am proficient
            in programming languages including
            <span className="glowText"> PYTHON</span>,
            <span className="glowText"> JAVASCRIPT</span>,
            <span className="glowText"> JAVA</span>,
            <span className="glowText"> C</span>, and
            <span className="glowText"> TYPESCRIPT</span>. My passion for
            continuous learning drives me to stay updated with the latest
            advancements in the field.
          </p>
        </div>
        <div className="w-full bg-color2 bg-opacity-25 drop-shadow-lg p-[1rem] rounded-lg">
          <p>
            I thrive in collaborative environments and have experience working
            in <span className="glowText">CROSS-FUNCTIONAL TEAMS</span>. I am
            eager to leverage my <span className="glowText">SKILLS</span> and
            <span className="glowText"> ENTHUSIASM</span> to contribute to a
            dynamic and growth-oriented organization.
          </p>
        </div>
        <div className="flex justify-start items-center">
          <ResumeBtn />
        </div>
      </div>
    );
  };

  const [loaded, setLoaded] = useState(false);

  return (
    <section id="home" className="relative">
      {<ImageLoader sectionId="home" setLoaded={setLoaded} />}
      <div className="min-h-screen w-full flex flex-col lg:flex-row px-[1rem] pb-[1rem] gap-4">
        <div className="w-full lg:w-[33%] order-2 lg:order-1">
          <OngoingProjects />
        </div>
        <div className="w-full lg:w-[67%] flex item flex-col md:flex-row gap-4 order-1 lg:order-2">
          <div className="w-full">
            <Profile />
          </div>
          <div className="w-full">
            <Status />
          </div>
        </div>
      </div>
      {loaded ? null : <Loading />}
    </section>
  );
}
