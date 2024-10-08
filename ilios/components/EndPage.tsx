import React from "react";
import Navbar from "./Navbar";
import firstImage from "../public/third.jpg";

// Define the prop types
interface EndPageProps {
  currentPage: number;
}

const EndPage: React.FC<EndPageProps> = ({ currentPage }) => {
  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-start items-center bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
      }}
    >
      {currentPage === 2 && (
        <div className="absolute top-5 right-28">
          <Navbar />
        </div>
      )}

      <div className="w-fit  bg-[#fafafab2] rounded-3xl flex flex-col justify-start items-center text-foreground shadow-2xl overflow-auto">
        {/* Main content area */}
        <div className="flex flex-col justify-center items-center w-full gap-8  ">
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mt-32 sm:mt-56">
            Completed Projects
          </h1>
          <div className="flex flex-col justify-center items-center gap-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 w-full">
            <h1 className="h-full px-20 sm:px-0 font-medium text-center text-sm md:text-base lg:text-lg xl:text-xl leading-tight tracking-tight max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              Projects completed during my work with Boutsen Design, Dahlgren
              Duck, private and corporate clients
            </h1>
          </div>

          <ul className=" list-disc list-inside text-sm sm:text-base lg:text-lg font-semibold flex flex-col justify-center items-center text-center gap-6">
            <div className="h-8 w-1/4 bg-foreground rounded-full mt-5" />
            <h2 className="font-bold text-xl sm:text-2xl mt-6 ">Yachting</h2>
            <h2 className=" h-full px-20 sm:px-0 font-medium text-center text-sm md:text-base lg:text-lg xl:text-xl leading-tight tracking-tight max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto italic">
              Light Refit work, Interior Enhancement, Furniture & Loose
              Equipment Supply
            </h2>
            <div className=" font-normal">
              <li> MY SOUNDWAVE, 63m Benetti</li>
              <li> MY KHALIDAH, Amels 60-03</li>
              <li> MY O’LION, 43m CRN</li>
              <li> MY ZEN, 88m Feadship</li>
            </div>
            <div className=" font-normal">
              <li> MY SHINKAI, 55m Feadship </li>
              <li> MY PI, ex. SYZYGY, 77m Feadship</li>
              <li> MY LUNA B, ex Natita, 66m Oceanco</li>
              <li> MY NAUTILUS, ex. Grace E, 73m Perini Navi</li>
            </div>
            <div className=" font-normal">
              <li> MY OLOKUN, 50m Tankoa Yachts</li>
              <li> MY STORMBORN, ex. Mon Plaisir, 47m, Heesen</li>
              <li> MY LeLou, ex. La Belle Aire, 33m Feadship</li>
              <li> MY EXUMA, 50m Perini Navi </li>
            </div>
            <div className=" font-normal">
              <li> MY GLADIATOR, 45m Feadship</li>
              <li> MY SONIC, 37m Custom Line Navetta</li>
              <li> MY BARTALY (ex-GENESI), 47m, Wider shipyard</li>
              <li> MY BABBO, 31m explorer, Cantiere delle Marche</li>
            </div>
          </ul>
          <div className="h-1 w-1/4 bg-foreground rounded-full mt-4" />
          <div className=" w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 text-center ">
              Residential & Commercial
            </h1>
            <div className=" w-full flex flex-col justify-start items-center ">
              <h2 className="h-full px-20 sm:px-0 font-medium mb-4 mt-2 text-center text-sm md:text-base lg:text-lg xl:text-xl leading-tight tracking-tight max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                Furniture & Loose Equipment Supply
              </h2>
              <ul className="text-base sm:text-lg lg:text-xl font-normal list-disc list-inside space-y-2 text-center">
                <li>Private apartments in Monaco and Dubai</li>
                <li>Restaurant project in Dubai</li>
                <li>Villas in Ibiza and French Riviera</li>
              </ul>
            </div>
          </div>
          <div className="h-1 w-1/4 bg-foreground rounded-full mt-4" />
          <div className=" w-full flex flex-col justify-center items-center mb-16">
            <h1 className="font-bold text-lg  sm:text-xl lg:text-2xl text-center">
              Aviation
            </h1>
            <div className=" w-full flex flex-col justify-center items-center">
              <h2 className="h-full px-20 sm:px-0 font-medium text-center text-sm md:text-base lg:text-lg xl:text-xl leading-tight tracking-tight max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-4 mt-2">
                Loose Equipment Supply
              </h2>
              <ul className="text-sm sm:text-base md:text-lg lg:text-xl font-normal list-disc list-inside space-y-2 text-center h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                <div className="flex flex-row gap-3 sm:gap-6 justify-center items-center">
                  <div className="flex flex-col items-start space-y-2 text-xs sm:text-sm">
                    <li>A319CJ</li>
                    <li>A320</li>
                    <li>A340</li>
                  </div>
                  <div className="flex flex-col items-start space-y-2 text-xs sm:text-sm">
                    <li>BBJ 737-700</li>
                    <li>BBJ 777</li>
                    <li>BBJ 787</li>
                  </div>
                  <div className="flex flex-col items-start space-y-2 text-xs sm:text-sm">
                    <li>BBJ Max 8</li>
                    <li>Global 5000</li>
                    <li>Global 6000</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EndPage;
