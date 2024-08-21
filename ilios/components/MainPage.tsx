import React from "react";
import firstImage from "../public/Main-Image.png";
import Navbar from "./Navbar";

const MainPage = () => {
  return (
    <div
      className="w-screen h-screen snap-center flex justify-start items-center flex-shrink-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-5 right-36">
        <Navbar />
      </div>
      <div className=" w-[35vw] rounded-3xl h-screen flex flex-col justify-center items-center bg-[#fafafab2] text-foreground">
        <div className=" flex flex-col justify-center items-start">
        <h1 className=" font-bold text-2xl ">TRANSFORM SPACES </h1>
        <h1 className=" font-bold text-2xl py-5">CREATE DREAMS</h1>
        <p className=" max-w-md text-lg font-medium text-left">
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
