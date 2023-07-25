import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
const Footer = () => {
  return (
    <div className="pt-20">
      <div className="flex justify-between items-center h-28  mx-auto max-w-[1400px] border-t border-[#E4E4E4] pt-20 font-universalFont ">
        <div className="flex justify-between mr-[50px] mt-[100px]">
          <div>
            <h1 className="ml-20 text-[20px]">
              <span className="font-bold">A+</span> Studio
              <p className="text-[14px] w-[300px] py-4  text-[#565656]">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
            </h1>
          </div>

          <div className="ml-44 ">
            <ul className="flex justify-center">
              <div className="mr-[100px] min-w-fit">
                <h1 className="w-fit font-bold text-[20px]">What Do We Do</h1>
                <div className="pt-4">
                  <li className="pb-1">Web Design</li>
                  <li className="pb-1">App Design</li>
                  <li className="pb-1">Social Media Manage</li>
                  <li>Market Analysis Project</li>
                </div>
              </div>
              <div>
                <h1 className="pr-[150px] text-[20px] font-bold">Company</h1>
                <div className="pt-4">
                  <li className="pb-1">About Us</li>
                  <li className="pb-1">Career</li>
                  <li>Become Invester</li>
                </div>
              </div>
              <div>
                <h1 className="pr-[150px] text-[20px] font-bold">Support</h1>
                <div className="pt-4">
                  <li className="pb-1">FAQ</li>
                  <li className="pb-1">Policy</li>
                  <li>Business</li>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[20px]">Contact</h1>
                <div className="pt-4">
                  <li className="pb-1">Whatsapp </li>
                  <li>Support 24 </li>
                </div>
              </div>
            </ul>
            <div>
              <img
                src={facebook}
                alt="facebook"
                className="pt-2 absolute left-[320px]"
              />
              <img
                src={twitter}
                alt="facebook"
                className="pt-2 absolute left-[370px]"
              />
              <img
                src={linkedin}
                alt="facebook"
                className="pt-2 absolute left-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
