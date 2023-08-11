import { Parallax } from "react-parallax";

const Cover = ({ bgImg, title, desc }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImg}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero lg:h-[500px] h-[300px]">
        <div className="hero-content text-center text-neutral-content">
          <div className="hero-overlay bg-black bg-opacity-60 md:px-60 md:py-10 px-5 py-2">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
