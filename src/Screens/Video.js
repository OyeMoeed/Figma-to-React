import video from "../images/unsplash_bzqU01v-G54.png";
import play from "../images/play-rounded-button 1.png";
import ellipse from "../images/Ellipse 86.png";
import rectipse from "../images/Rectangle 26.png";
const Video = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[1400px] mt-28 relative font-universalFont">
      <div className="z-[0]">
        <img src={play} alt="play" className="absolute mt-40 ml-56" />
        <img src={video} alt="video" />
      </div>
      <img
        src={ellipse}
        alt="ellipse"
        className="absolute -z-10 bottom-0 left-[450px]"
      />
      <img
        src={rectipse}
        alt="rectipse"
        className="absolute -z-10 top-[85px] right-[500px]"
      />
      <div className="w-2/3">
        <h1 className="text-[40px] w-[400px] mt-[100px] ml-[200px]">
          Great Digital Product Agency since 2016{" "}
        </h1>
        <p className="text-[#565656] w-[550px] ml-[200px] pt-5">
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  );
};
export default Video;
