import { useState } from "react";

export default function About() {
  const Education = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden">
        <div className="w-full md:w-[65%] flex items-center">
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
          className={`w-full md:${
            isHovered ? "w-[85%]" : "w-[35%]"
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
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden">
        <div
          className={`w-full md:${
            isHovered ? "w-[85%]" : "w-[35%]"
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
        <div className="w-full md:w-[65%] flex items-center">
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
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden">
        <div className="w-full md:w-[65%] flex items-center">
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
          className={`w-full md:${
            isHovered ? "w-[85%]" : "w-[35%]"
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
      <div className="flex flex-col md:flex-row md:h-[500px] gap-8 overflow-hidden">
        <div
          className={`w-full md:${
            isHovered ? "w-[85%]" : "w-[35%]"
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
        <div className="w-full md:w-[65%] flex items-center">
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

  return (
    <section className="relative">
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
    </section>
  );
}
