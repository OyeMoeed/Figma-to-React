import google from "../images/google.png";
import amazon from "../images/Amazon.png";
import airbnb from "../images/Airbnb.png";
import ubereats from "../images/UberEats.png";

const OurClient = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[1400px] mt-28">
      <div>
        <h1 className="text-[40px] pl-20 font-universalFont">Our Clients</h1>
        <p className="w-[400px] text-[#565656]  pl-20 font-universalFont ">
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <ul className="flex items-center">
        <img src={google} alt="googel" className="px-8" />
        <img src={airbnb} alt="googel" className="px-8 " />
        <img src={ubereats} alt="googel" className="px-6 " />
        <img src={amazon} alt="googel" className="px-6 " />
      </ul>
    </div>
  );
};
export default OurClient;
