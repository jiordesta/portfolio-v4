import { useNavigate } from "react-router-dom";

export default function Maintenance() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/icons/ongoing.svg" width={100} alt="" />
        <div>
          <hr />
          <h1>This is an ongoing project!</h1>
        </div>
        <button
          className="flex justify-center items-center bg-color2 bg-opacity-25 rounded-full mt-4"
          onClick={() => navigate(-1)}
        >
          <div className="bg-color3 rounded-full m-1 glowBox">
            <img
              src="/icons/arrow.svg"
              className="rotate-180"
              width={25}
              alt=""
            />
          </div>
          <h1 className="text-2xl pe-2">back</h1>
        </button>
      </div>
    </div>
  );
}
