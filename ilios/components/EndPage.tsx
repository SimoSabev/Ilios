import React from "react";
import Navbar from "./Navbar";
import firstImage from "../public/yacht-design.jpg";

// Define the prop types
interface EndPageProps {
  currentPage: number;
}

const EndPage: React.FC<EndPageProps> = ({ currentPage }) => {
  return (
    <div
      className="w-screen h-screen snap-center flex flex-col justify-start items-center flex-shrink-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {currentPage === 2 && ( // Only render Navbar and absolute elements on the EndPage
        <div className="absolute top-5 right-36">
          <Navbar />
        </div>
      )}

      <div className="w-[98vw] h-fit rounded-3xl flex flex-col justify-start shadow-2xl items-center bg-[#fafafab2] text-foreground overflow-scroll p-8 mt-6">
        {/* Content of EndPage */}
        <div className="flex flex-row justify-center items-end  w-full">
          <div className="flex flex-col items-center gap-5 text-center ">
            <h1 className="font-black text-2xl sm:text-3xl">Yachting</h1>
            <h2 className="font-bold text-xl sm:text-2xl ">
              Light Refit work, Interior Enhancement, Furniture & Loose
              Equipment Supply
            </h2>
            <div className="flex justify-center items-center ">
              <ul className="text-base sm:text-lg font-semibold flex justify-center items-start text-justify gap-24">
              <div>
                  <li>• MY SOUNDWAVE, 63m Benetti</li>
                  <li>• MY JAGUAR, 56m Benetti</li>
                  <li>• MY KHALIDAH, Amels 60-03</li>
                  <li>• MY O’LION, 43m CRN</li>
                  <li>• MY ZEN, 88m New Build luxury yacht, Feadship (2021)</li>
                </div>

                <div>
                  <li>• MY SHINKAI, 55m New Build explorer, Feadship (2021)</li>
                  <li>• MY PI, ex. SYZYGY, 77m New Build, Feadship (2019)</li>
                  <li>
                    • MY LUNA B, ex Natita, 66m Oceanco, built in 2005, refit
                    works in 2019
                  </li>
                  <li>
                    • MY NAUTILUS, ex. Grace E, 73m Perini Navi (2014), refit
                    works in 2018
                  </li>
                  <li>• MY OLOKUN, 50m New Build, Tankoa Yachts (2020)</li>
                </div>

                <div>
                  <li>
                    • MY STORMBORN, ex. Mon Plaisir, 47m, Heesen (2008), refit
                    works
                  </li>
                  <li>
                    • MY LeLou, ex. La Belle Aire, 33m Feadship (1973), refit
                    works in 2018
                  </li>
                  <li>• MY EXUMA, 50m expedition vessel, Perini Navi (2010)</li>
                  <li>
                    • MY GLADIATOR, 45m, Feadship (2010), refit works in 2018
                  </li>
                  <li>• MY SONIC, Ferretti Custom Line Navetta 37m (2016)</li>
                </div>
                <div>
                  <li>• MY TELLI, Feretti Custom Line Navetta 33m (2017)</li>
                  <li>• MY BARTALY (ex-GENESI), 47m, Wider shipyard (2016)</li>
                  <li>
                    • MY BABBO, 31m explorer, Cantiere delle Marche (2016)
                  </li>
                  <li>• MY KALIENTE, Dominator Illumen, 28m (2018)</li>
                </div>
              </ul>
            </div>
          </div>

          {currentPage === 2 && ( // Conditionally render these absolute elements
            <>
              <div className="absolute bottom-6 left-4 w-[40vw] h-[40vh] rounded-3xl flex flex-col justify-center shadow-2xl items-center bg-[#fafafab2] text-foreground p-6">
                <div className=" mb-10 flex flex-col justify-center items-center gap-5">
                  <h1 className="font-black text-2xl sm:text-2xl text-center">
                    Residential & Commercial
                  </h1>
                  <h2 className="font-bold text-xl sm:text-xl text-center">
                    Furniture & Loose Equipment Supply
                  </h2>
                </div>
                <ul className="text-lg sm:text-xl font-semibold space-y-2 sm:space-y-3 flex flex-col justify-center items-center text-justify">
                <li>Private apartments in Monaco and Dubai</li>
              <li>Restaurant project in Dubai</li>
              <li>Villas in Ibiza and French Riviera</li>
                </ul>
              </div>

              <div className="absolute bottom-6 right-4 w-[57vw] h-[40vh] rounded-3xl flex flex-col justify-center shadow-2xl items-center bg-[#fafafab2] text-foreground p-6">
                <div className=" mb-10 flex flex-col justify-center items-center gap-3">
                  <h1 className="font-black text-2xl sm:text-2xl text-center">
                    Aviation
                  </h1>
                  <h2 className="font-bold text-xl sm:text-xl text-center">
                    Loose Equipment Supply
                  </h2>
                </div>
                <ul className="text-lg sm:text-xl font-semibold flex justify-center items-center text-justify">
                <div className=" flex justify-center items-start gap-16 text-justify">
              <div>
              <li>•	A319CJ </li>
              <li>•	A320 </li>
              <li>•	A340 </li>
              </div>
              <div>
              <li>•	BBJ 737-700 </li>
              <li>•	BBJ 777 </li>
              <li>•	BBJ 787 </li>
              </div>
              <div>
              <li>•	BBJ Max 8 </li>
              <li>•	Global 5000 </li>
              <li>•	Global 6000</li>
              </div>
              <div>
              <li>•	Falcon 900 </li>
              <li>•	G550</li>
              </div>
              </div>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EndPage;