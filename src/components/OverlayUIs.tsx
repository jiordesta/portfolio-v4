import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="flex justify-center items-center w-full h-full bg-color1">
        <img src="/loading.svg" width={75} alt="" />
      </div>
    </div>
  );
};

export const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setTimeout(function () {
        // Code to execute after 3 seconds
        setIsLoaded(true);
      }, 3000);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center w-full h-full bg-color1">
          <img src="/loading.svg" width={75} alt="" />
        </div>
      </div>
    );
  }
};

export const Active = () => {
  return (
    <div className="flex justify-start p-[1rem] z-10">
      <div className="bg-color2 bg-opacity-25 py-1 px-2 rounded-full drop-shadow-lg">
        <div className="flex gap-1 justify-center items-center">
          <div className="bg-color3 p-1 pulse ripple"></div>
          <h1>active</h1>
        </div>
      </div>
    </div>
  );
};

export const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div className="flex justify-end p-[1rem] z-10">
      <div className="bg-color2 bg-opacity-25 py-1 px-2 rounded-full drop-shadow-lg">
        <p>
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {remainingSeconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navlinks =
    "p-2 border-4 border-color1 hover:bg-opacity-25 transition-opacity ease-in-out duration-300 bg-color2 rounded-full";
  const handleNavigate = (path: String) => {
    navigate(`/${path}`);
  };
  return (
    <nav className="fixed bottom-[1rem] w-full flex justify-center drop-shadow-lg z-10">
      <ul className="flex gap-2 bg-color2 rounded-full p-1 bg-opacity-25 navcontainer">
        <li className="navlink">
          <button
            className={`${navlinks} ${
              location.pathname === "/" ? "glowBox" : ""
            }`}
            onClick={() => handleNavigate("")}
          >
            <img
              src="/icons/home.svg"
              className="w-[25px] md:w-[30px] lg:w-[35px]"
              alt=""
            />
          </button>
        </li>
        <li className="navlink">
          <button
            className={`${navlinks} ${
              location.pathname === "/about" ? "glowBox" : ""
            }`}
            onClick={() => handleNavigate("about")}
          >
            <img
              src="/icons/about.svg"
              className="w-[25px] md:w-[30px] lg:w-[35px]"
              alt=""
            />
          </button>
        </li>
        <li className="navlink">
          <button
            className={`${navlinks} ${
              location.pathname === "/projects" ? "glowBox" : ""
            }`}
            onClick={() => handleNavigate("projects")}
          >
            <img
              src="/icons/projects.svg"
              className="w-[25px] md:w-[30px] lg:w-[35px]"
              alt=""
            />
          </button>
        </li>
        <li className="navlink">
          <button
            className={`${navlinks} ${
              location.pathname === "/services" ? "glowBox" : ""
            }`}
            onClick={() => handleNavigate("services")}
          >
            <img
              src="/icons/services.svg"
              className="w-[25px] md:w-[30px] lg:w-[35px]"
              alt=""
            />
          </button>
        </li>
        <li className="navlink">
          <button
            className={`${navlinks} ${
              location.pathname === "/testimonials" ? "glowBox" : ""
            }`}
            onClick={() => handleNavigate("testimonials")}
          >
            <img
              src="/icons/testimonials.svg"
              className="w-[25px] md:w-[30px] lg:w-[35px]"
              alt=""
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export const Controllers = () => {
  return (
    <div className="sticky top-[1rem]">
      <div className="flex justify-center">
        <Timer />
      </div>
    </div>
  );
};
