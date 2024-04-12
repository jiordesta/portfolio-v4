import { useState } from "react";
import ImageLoader from "../utils/ImageLoader";
import { Loading } from "../components/OverlayUIs";

export default function About() {
  const Education = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div className="w-full md:w-[80%] flex items-center">
          <p className="text-center md:text-end">
            I earned my Bachelor of Science in Computer Science from Caraga
            State University, located in Ampayon, Butuan City 8600. On July 22,
            2023, I had the immense pleasure of proudly graduating with this
            degree, marking a significant milestone in my academic journey. This
            achievement is a testament to my unwavering dedication, hard work,
            and determination to master the intricacies of the digital world. As
            a Computer Science graduate, I am eagerly looking forward to
            embracing the vast array of opportunities that await me, confident
            in my ability to leave a meaningful impact in the ever-evolving
            realm of technology.
          </p>
        </div>
        <div
          className={`w-full ${
            isHovered ? "md:w-[80%]" : "md:w-[30%]"
          } transition-all ease-in-out duration-300`}
        >
          <img
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/images/profile.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg"
            alt=""
          />
        </div>
      </div>
    );
  };

  const Leader = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div
          className={`w-full ${
            isHovered ? "md:w-[80%]" : "md:w-[30%]"
          } transition-all ease-in-out duration-300`}
        >
          <img
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/images/leader.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full md:w-[80%] flex items-center">
          <p className="text-center md:text-start">
            Led and guided a dedicated thesis team to successful completion,
            demonstrating exceptional leadership skills and fostering a
            collaborative environment that propelled us toward our research
            objectives. Through effective communication, strategic planning, and
            adept project management, I ensured that our team remained focused,
            motivated, and united in achieving our shared academic goal. This
            leadership resulted in a cohesive team dynamic and a thesis that
            stands as a testament to our collective efforts and commitment to
            advancing knowledge in our field.
          </p>
        </div>
      </div>
    );
  };

  const Award = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div className="w-full md:w-[80%] flex items-center">
          <p className="text-center md:text-end">
            Receiving the prestigious award for best oral presenter at the
            esteemed 2nd International Conference of Computing and Information
            Sciences (CIScon) 2023 was a moment of validation and pride in my
            academic journey. This accolade serves as a testament to the
            countless hours of dedication and hard work poured into refining my
            presentation skills and advancing knowledge in the field. At CIScon
            2023, I had the privilege of engaging with fellow scholars and
            sharing insights from my research, employing effective communication
            techniques to captivate the audience and foster meaningful
            discourse. Winning this award not only affirms the value of my
            contributions but also inspires me to continue striving for
            excellence in my academic pursuits, with a renewed sense of purpose
            and determination.
          </p>
        </div>
        <div
          className={`w-full ${
            isHovered ? "md:w-[80%]" : "md:w-[30%]"
          } transition-all ease-in-out duration-300`}
        >
          <img
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/images/award.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg"
            alt=""
          />
        </div>
      </div>
    );
  };

  const Internship = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden w-full">
        <div
          className={`w-full ${
            isHovered ? "md:w-[80%]" : "md:w-[30%]"
          } transition-all ease-in-out duration-300`}
        >
          <img
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/images/internship.jpg"
            className="object-cover w-full h-full flex justify-center items-center rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full md:w-[80%] flex items-center">
          <p className="text-center md:text-start">
            Acknowledged for exemplary performance as an intern through the
            receipt of a certificate, symbolizing a commendable commitment to
            exceeding expectations and making substantial contributions to team
            projects. This recognition reflects a demonstrated work ethic
            characterized by adaptability, diligence, and a remarkable aptitude
            for grasping complex tasks swiftly. The certificate serves as
            tangible evidence of the invaluable contributions made towards the
            attainment of the organization's objectives, highlighting the
            significance of dedication, adaptability, and a proactive approach
            in fostering success within the professional sphere.
          </p>
        </div>
      </div>
    );
  };

  const Skills = () => {
    const skills = [
      "ReactJS",
      "ReactNative",
      "ExpressJS",
      "NodeJS",
      "NextJS",
      "MongoDB",
      "Firebase",
      "Redux",
      "Ant-Design",
      "Bootstrap",
      "MaterialUI",
      "TailwindCSS",
      "HTML",
      "CSS",
      "Javascript",
      "Java",
      "Python",
      "C",
      "Typescript",
      "git",
    ];
    return (
      <div className="w-full lg:w-1/2">
        <h1 className="text-center">
          Throughout my journey, I’ve cultivated a wide range of skills that
          empower me to navigate and excel in diverse technological landscapes
        </h1>
        <ul className="flex flex-wrap gap-1 justify-center items-center">
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className="px-4 py-2 bg-color2 drop-shadow-lg rounded-lg glowText"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const [loaded, setLoaded] = useState(false);

  return (
    <section id="about" className="relative">
      {<ImageLoader sectionId="about" setLoaded={setLoaded} />}
      <div className="min-h-screen px-[1rem] pb-[6rem] space-y-4">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <Education />
          <Leader />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <Award />
          <Internship />
        </div>
        <div className="w-full flex justify-center">
          <Skills />
        </div>
      </div>
      {loaded ? null : <Loading />}
    </section>
  );
}
