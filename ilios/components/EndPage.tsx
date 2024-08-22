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
      className="relative w-screen h-screen flex flex-col justify-start items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
      }}
    >
      {currentPage === 2 && (
        <div className="absolute top-5 right-28">
          <Navbar />
        </div>
      )}

      <div className="w-full max-w-5xl p-6 md:p-8 bg-[#fafafab2] rounded-3xl flex flex-col justify-start items-center text-foreground shadow-2xl space-y-6 md:space-y-0 overflow-auto">
        {/* Main content area */}
        <div className="flex flex-col justify-center items-center text-center md:text-left w-full md:w-1/2 gap-12">
          <h1 className="font-black text-xl sm:text-2xl lg:text-3xl my-12">
            Yachting
          </h1>
          
          <ul className="text-sm sm:text-base lg:text-lg font-semibold flex flex-col  justify-center items-start text-justify gap-6 md:gap-12">
          <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-justify">
            Light Refit work, Interior Enhancement, Furniture & Loose Equipment
            Supply
          </h2>
           <div className=" font-normal">
              <li>• MY SOUNDWAVE, 63m Benetti</li>
              <li>• MY JAGUAR, 56m Benetti</li>
              <li>• MY KHALIDAH, Amels 60-03</li>
              <li>• MY O’LION, 43m CRN</li>
              <li>• MY ZEN, 88m New Build luxury yacht, Feadship (2021)</li>
            </div>
            <div className=" font-normal">
              <li>• MY SHINKAI, 55m New Build explorer, Feadship (2021)</li>
              <li>• MY PI, ex. SYZYGY, 77m New Build, Feadship (2019)</li>
              <li>
                • MY LUNA B, ex Natita, 66m Oceanco, built in 2005, refit works
                in 2019
              </li>
              <li>
                • MY NAUTILUS, ex. Grace E, 73m Perini Navi (2014), refit works
                in 2018
              </li>
              <li>• MY OLOKUN, 50m New Build, Tankoa Yachts (2020)</li>
            </div>
            <div className=" font-normal">
              <li>
                • MY STORMBORN, ex. Mon Plaisir, 47m, Heesen (2008), refit works
              </li>
              <li>
                • MY LeLou, ex. La Belle Aire, 33m Feadship (1973), refit works
                in 2018
              </li>
              <li>• MY EXUMA, 50m expedition vessel, Perini Navi (2010)</li>
              <li>• MY GLADIATOR, 45m, Feadship (2010), refit works in 2018</li>
              <li>• MY SONIC, Ferretti Custom Line Navetta 37m (2016)</li>
            </div>
            <div className=" font-normal">
              <li>• MY TELLI, Feretti Custom Line Navetta 33m (2017)</li>
              <li>• MY BARTALY (ex-GENESI), 47m, Wider shipyard (2016)</li>
              <li>• MY BABBO, 31m explorer, Cantiere delle Marche (2016)</li>
              <li>• MY KALIENTE, Dominator Illumen, 28m (2018)</li>
            </div>
          </ul>
          <div className=" w-full flex flex-col justify-center items-start">
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4 text-center">
              Residential & Commercial
            </h1>
            <h2 className="font-medium text-base sm:text-lg lg:text-xl mb-4 text-center">
              Furniture & Loose Equipment Supply
            </h2>
            <ul className="text-base sm:text-lg lg:text-xl font-normal list-disc list-inside space-y-2 text-justify">
              <li>Private apartments in Monaco and Dubai</li>
              <li>Restaurant project in Dubai</li>
              <li>Villas in Ibiza and French Riviera</li>
            </ul>
          </div>
          <div className=" w-full flex flex-col justify-center items-start">
            <h1 className="font-bold text-lg  sm:text-xl lg:text-2xl mb-4 text-center">
              Aviation
            </h1>
            <h2 className="font-medium text-base sm:text-lg lg:text-xl mb-4 text-center">
              Loose Equipment Supply
            </h2>
            <ul className="text-base sm:text-lg lg:text-xl font-нормал list-disc list-inside space-y-2 text-justify">
              <div className="flex flex-col gap-6 justify-center">
                <div>
                  <li>A319CJ</li>
                  <li>A320</li>
                  <li>A340</li>
                </div>
                <div>
                  <li>BBJ 737-700</li>
                  <li>BBJ 777</li>
                  <li>BBJ 787</li>
                </div>
                <div>
                  <li>BBJ Max 8</li>
                  <li>Global 5000</li>
                  <li>Global 6000</li>
                </div>
                <div>
                  <li>Falcon 900</li>
                  <li>G550</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
