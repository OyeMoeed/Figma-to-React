import newsletter from "../images/Rectangle 30.png";
import toprect from "../images/Rectangle 31.png";
import rect from "../images/Rectangle 32.png";
const NewsLetter = () => {
  return (
    <div className="z-0 w-screen flex my-20 justify-center items-center relative mx-auto max-w-[1400px]">
      {/* Text above images */}
      <div className="absolute left-[200px] z-20">
        <h1 className="text-4xl font-bold font-universalFont">
          Subscribe Newsletter
        </h1>
        <p className="pt-4 text-[#757575] font-universalFont">
          I will update good news and promotion service not spam
        </p>
      </div>

      {/* Bottom Rectangle */}
      <div className="z-0 absolute -bottom-[30px] left-[70px]">
        <img src={rect} alt="rect" />
      </div>

      {/* Newsletter Image */}
      <div className="z-10 flex justify-center items-center">
        <img src={newsletter} alt="newsletter" />
      </div>

      {/* Top Rectangle */}
      <div className="z-20 absolute top-0 right-[100px]">
        <img src={toprect} alt="top" />
      </div>

      <form className="ml-[500px] z-30 absolute">
        <label
          for="email"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <div>
            <input
              class="block w-[550px] p-4 pl-10 text-sm  border h-[80px] rounded-[60px] font-universalFont focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-[#959595] drop-shadow-2xl "
              placeholder="Enter Your Email Adress"
            />
            <button
              type="submit"
              class="absolute right-2.5 bottom-2.5 bg-[#2639ED] text-white placeholder-[#959595] font-universalFont  py-5 px-10 rounded-[60px] font-semibold z-40"
            >
              Contact Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewsLetter;
