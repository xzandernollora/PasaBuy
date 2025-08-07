import { BsArrowRight } from "react-icons/bs";
import hero1 from "../assets/Hero_1.png";
import hero2 from "../assets/Hero_2.png";
import hero3 from "../assets/Hero_3.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="w-full h-full object-cover rounded-lg border border-gray-100"
            src={hero1}
            alt="hero image"
          />

          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Healthy
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={hero2}
            alt="hero2 image"
            className="h-full w-full object-cover rounded-lg"
          />

          <div className="absolute max-w-[300px] sm:ml-8 ml-4 top-[45%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              Cheesy Pepperoni Pizza
            </h2>
            <p className="text-gray-500 text-lg pt-2 sm:pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-xl sm:text-3xl pb-2 sm:pb-4">
              $8.99
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-3 px-4 py-2 text-sm sm:px-5 sm:py-2 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={hero3}
            alt="hero3 image"
            className="h-full w-full object-cover rounded-lg"
          />

          <div className="absolute max-w-[280px] sm:ml-6 ml-4 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              Crunchy Classic Chips
            </h2>
            <p className="text-gray-500 text-lg pt-2 sm:pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-xl sm:text-3xl pb-2 sm:pb-4">
              $4.50
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-3 px-4 py-2 text-sm sm:px-5 sm:py-2 cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
