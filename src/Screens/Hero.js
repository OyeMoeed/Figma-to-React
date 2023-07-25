import ellipse from "../images/Ellipse.png";
import rectangle from "../images/Rectangle.png";
import meeting from "../images/meeting.png";
import dot from "../images/Dot.png";
const Hero = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[1400px] relative">
      <div className="pl-20 pt-48 w-1/2  z-10">
        <span className="text-[40px] font-bold font-universalFont">
          A Digital Product Agency{" "}
        </span>
        <p className="w-[500px] pt-5 text-[#565656] pb-6 font-universalFont">
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <button className="bg-[#2639ED] text-white py-5 px-10 rounded-[60px] font-semibold z-40 font-universalFont">
          Contact Now
        </button>
        <img
          src={dot}
          alt="dots"
          className=" absolute -z-10 -bottom-[10px] left-[30px]"
        />
      </div>
      <div>
        <div className="relative h-[550px]">
          <img
            src={ellipse}
            alt=""
            className="absolute top-0 left-[35px] w-[129px]"
          />
          <img
            src={rectangle}
            alt=""
            className="absolute bottom-[35px] right-0 w-[178px] z-[-1]"
          />
          <img
            src={meeting}
            alt=""
            className="w-[670px] relative left-[93px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
