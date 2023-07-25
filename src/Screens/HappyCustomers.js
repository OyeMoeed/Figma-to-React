import Matthew from "../images/unsplash_MTZTGvDsHFY.png";
import bluedots from "../images/Ellipse 88.png";
import greydot from "../images/Ellipse 89.png";
import others from "../images/Group 71.png";
import underGroup from "../images/Ellipse 86.png";
import elipse from "../images/Ellipse 87.png";
const HappyCustomers = () => {
  return (
    <div>
      <div className="flex justify-center mx-auto max-w-[1400px] mt-28 h-fit relative font-universalFont">
        <div className="h-fit w-fit text-center ">
          <h1 className="text-[40px]">What Our Happy Client Say</h1>
          <p className="text-[#757575]">
            Several selected clients, who already believe in our service.
          </p>
        </div>
      </div>
      <div className="flex mx-auto max-w-[1400px] mt-28">
        <img src={Matthew} alt="Matthew" />
        <div className="items-center mt-[150px] ">
          <h1 className="text-[24px] pb-5">Matthew Paul </h1>
          <p className="w-[400px] text-[#565656]">
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
          <div className="flex ">
            <img src={bluedots} alt="jaadu" className="pt-5 pr-5" />
            <img src={greydot} alt="jaadu" className="pt-5 px-5" />
            <img src={greydot} alt="jaadu" className="pt-5 px-5" />
            <img src={greydot} alt="jaadu" className="pt-5 px-5" />
            <img src={greydot} alt="jaadu" className="pt-5 px-5" />
          </div>
        </div>
        <div className="mt-12 ml-12 z-[10] ">
          <img src={others} alt="group" />
        </div>
        <img
          src={underGroup}
          alt="grp"
          className="absolute -z-[10] ml-[950px] mt-[150px] w-[184px] h-[184px]"
        />
        <img
          src={elipse}
          alt="grp"
          className="absolute -z-[10] mt-[275px] ml-[25px]"
        />
      </div>
    </div>
  );
};
export default HappyCustomers;
