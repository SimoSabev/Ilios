import React from "react";
import Image from "next/image";
import photo from "../public/BIO Image.jpg";
import firstImage from "../public/Main-Image.png";
import Navbar from "./Navbar";

const AboutPage: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen flex justify-center items-start bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
      }}
    >
      <div className="absolute top-5 right-32 z-20">
        <Navbar />
      </div>
      <div className=" md:absolute md:left-0 w-fit h-screen max-w-4xl p-4 md:p-12 bg-[#fafafaab] rounded-3xl flex flex-col md:flex-row justify-center items-start text-foreground overflow-auto">
        <div className="flex flex-col justify-end mt-32 items-center md:items-center text-center md:text-left w-full max-w-lg">
          <div className="flex justify-center mt-24 sm:mt-12">
            <Image
              className="rounded-3xl w-full max-w-xs md:max-w-md lg:max-w-lg mb-4"
              src={photo.src}
              alt="founder-icon"
              width={150}
              height={450}
            />
          </div>
          <h1 className="font-bold text-xl md:text-2xl lg:text-2xl mb-4 text-center">
            Iliyana Popova
          </h1>

          <p className="px-4 text-sm sm:text-base md:text-lg font-medium max-w-full max-h-fit sm:max-h-full md:max-w-xl mx-auto my-auto text-justify leading-relaxed">
            Founder of <span className="font-bold">ILIOS Décor</span>, curating
            bespoke styling for yachts and residences, Iliyana has the expertise
            to assist clients with their interior needs and offer personalized
            styling solutions. With over 20 years of experience working in the
            luxury industry and managing highly confidential projects, she has a
            strong focus on service excellence, creating aesthetically pleasing
            and functional environments. Through her multiple years of
            experience as a Project Manager at an Interior Design company in
            Monaco and as part of the Owners Team of two truly outstanding
            superyachts, MY A and SY A, Iliyana had the opportunity to be
            closely involved with various aspects of creating, maintaining and
            refurbishing the interior of numerous luxury vessels. Iliyana offers
            an expertise in sourcing of materials, selection of furniture and
            accessories, interior set-up, refit works, planning, budgeting,
            quality control, and logistics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
