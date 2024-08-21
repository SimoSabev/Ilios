import React from "react";

const EndPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-start bg-[#333333] text-background overflow-y-auto">
      <div className="w-full max-w-7xl h-auto flex flex-col justify-start items-center p-8">
        {/* Main Heading */}
        <h1 className="font-black text-4xl sm:text-3xl text-center mt-16">List of Projects</h1>
        <h2 className="font-bold text-2xl sm:text-xl text-center mt-6">
          Projects completed during my work with Boutsen Design, Dahlgren Duck, private and corporate clients
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-start gap-16 sm:gap-24 w-full mt-20">
          {/* First Column */}
          <div className="flex flex-col items-start text-left gap-8 sm:gap-12">
            <h1 className="font-black text-2xl sm:text-2xl">Yachting</h1>
            <h2 className="font-bold text-xl sm:text-xl max-w-sm">Light Refit work, Interior Enhancement, Furniture & Loose Equipment Supply</h2>
            <ul className="text-base sm:text-lg font-medium space-y-2 sm:space-y-3 flex flex-col justify-start items-start text-left">
              <li>• MY SOUNDWAVE, 63m Benetti</li>
              <li>• MY JAGUAR, 56m Benetti</li>
              <li>• MY KHALIDAH, Amels 60-03</li>
              <li>• MY O’LION, 43m CRN</li>
              <li>• MY ZEN, 88m New Build luxury yacht, Feadship (2021)</li>
              <li>• MY SHINKAI, 55m New Build explorer, Feadship (2021)</li>
              <li>• MY PI, ex. SYZYGY, 77m New Build, Feadship (2019)</li>
              <li>• MY LUNA B, ex Natita, 66m Oceanco, built in 2005, refit works in 2019</li>
              <li>• MY NAUTILUS, ex. Grace E, 73m Perini Navi (2014), refit works in 2018</li>
              <li>• MY OLOKUN, 50m New Build, Tankoa Yachts (2020)</li>
              <li>• MY STORMBORN, ex. Mon Plaisir, 47m, Heesen (2008), refit works</li>
              <li>• MY LeLou, ex. La Belle Aire, 33m Feadship (1973), refit works in 2018</li>
              <li>• MY EXUMA, 50m expedition vessel, Perini Navi (2010)</li>
              <li>• MY GLADIATOR, 45m, Feadship (2010), refit works in 2018</li>
              <li>• MY SONIC, Ferretti Custom Line Navetta 37m (2016)</li>
              <li>• MY TELLI, Feretti Custom Line Navetta 33m (2017)</li>
              <li>• MY BARTALY (ex-GENESI), 47m, Wider shipyard (2016)</li>
              <li>• MY BABBO, 31m explorer, Cantiere delle Marche (2016)</li>
              <li>• MY KALIENTE, Dominator Illumen, 28m (2018)</li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-start text-left gap-8 sm:gap-12">
            <h1 className="font-black text-2xl sm:text-2xl">Residential & Commercial</h1>
            <h2 className="font-bold text-xl sm:text-xl">Furniture & Loose Equipment Supply</h2>
            <ul className="text-lg sm:text-xl font-medium space-y-2 sm:space-y-3 flex flex-col justify-start items-start text-left">
              <li>Private apartments in Monaco and Dubai</li>
              <li>Restaurant project in Dubai</li>
              <li>Villas in Ibiza and French Riviera</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-start text-center gap-8 sm:gap-12">
            <h1 className="font-black text-2xl sm:text-xl">Aviation</h1>
            <h2 className="font-bold text-xl sm:text-xl text-left">Loose Equipment Supply</h2>
            <ul className="text-lg sm:text-xl font-medium space-y-2 sm:space-y-3 flex flex-col justify-start items-start text-left">
              <li>• A319CJ</li>
              <li>• A320</li>
              <li>• A340</li>
              <li>• BBJ 737-700</li>
              <li>• BBJ 777</li>
              <li>• BBJ 787</li>
              <li>• BBJ Max 8</li>
              <li>• Global 5000</li>
              <li>• Global 6000</li>
              <li>• Falcon 900</li>
              <li>• G550</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
