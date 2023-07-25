import dot from "../images/Dot.png";
import card1 from "../images/Group 65.png";
import card2 from "../images/Group 66.png";
import card3 from "../images/Group 67.png";
import card4 from "../images/Group 69.png";
import bluerect from "../images/Rectangle 24.png";
import rect2 from "../images/Rectangle1.png";
import ellipse3 from "../images/Ellipse 87.png";
const HelpingBusiness = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[1400px] min-h-screen mt-28 relative">
      <div className="flex w-[500px] h-[200px] flex-col mt-[300px] pl-20">
        <h1 className="font-semibold text-[40px] absolute w-[400px] z-[10] py-[25px] font-universalFont">
          How Can We Help Your Business?
        </h1>
        <img
          src={rect2}
          alt="rect"
          className="absolute -z-[10] left-[40px] top-[270px]"
        />
        <p className="text-[#757575] mt-[180px] w-[500px] z-20 font-universalFont">
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <img
          src={dot}
          alt="dots"
          className="pt-20 absolute -z-[10] left-[100px] bottom-[200px]"
        />
      </div>
      <div className="absolute ml-[350px]">
        <img src={bluerect} alt="hehe" className="mt-[150px] -z-10 " />
      </div>
      <img src={card1} alt="card" className="absolute ml-[600px] mt-[30px] " />
      <img
        src={ellipse3}
        alt="ellipse"
        className="absolute -z-[10] bottom-[150px] right-[50px]"
      />
      <img
        src={card2}
        alt="card2"
        className="absolute ml-[600px] mt-[430px] "
      />
      <img src={card3} alt="card3" className="absolute ml-[930px] mt-[50x] " />
      <img src={card4} alt="card3" className="absolute ml-[930px] mt-[400px]" />
    </div>
  );
};
export default HelpingBusiness;
