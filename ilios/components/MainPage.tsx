import React from "react";
import firstImage from "../public/Main-Image.png";
import Navbar from "./Navbar";

const MainPage: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen snap-center flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
      }}
    >
      <div className="absolute top-5 right-32">
        <Navbar />
      </div>
      <div className=" md:absolute md:left-0 w-fit h-screen max-w-3xl md:max-w-4xl lg:max-w-5xl p-4 md:p-8 bg-[#fafafab2] rounded-3xl flex flex-col justify-center items-center text-foreground overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-2xl md:text-2xl lg:text-3xl">TRANSFORM SPACES</h1>
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl py-3 md:py-5 mb-3">CREATE DREAMS</h1>
          <p className="text-lg md:text-base lg:text-lg font-medium max-w-full md:max-w-md mx-auto text-justify ">
            ILIOS Décor is offering a comprehensive styling and interior
            refurbishment service to create the client’s dream environment on
            board and at home. Customized and detailed proposals are created,
            tailored to meet the preferences and specific requirements of each
            client. With an extensive portfolio of brands, we are dedicated to
            continuously offer not only the well-known luxury suppliers but also
            carefully sourced decorative objects and art pieces from the world’s
            finest artisans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
