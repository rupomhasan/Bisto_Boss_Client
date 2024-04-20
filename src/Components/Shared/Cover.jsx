import { Parallax } from "react-parallax";

const Cover = ({ img, title, message }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px] ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="bg-black bg-opacity-50 px-16 py-6">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 uppercase">{message}</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </Parallax>
  );
};

export default Cover;
