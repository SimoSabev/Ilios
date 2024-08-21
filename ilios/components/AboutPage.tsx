import React from "react";
import Image from "next/image";
import photo from "../public/BIO Image.jpg";

const AboutPage = () => {
  return (
    <div className="w-screen h-screen snap-center flex-shrink-0 flex justify-center items-center">
      <div className="w-screen rounded-full h-[75vh] flex justify-center items-center bg-[#333333] text-background">
        <div className="flex flex-col justify-center items-start">
          <h1 className=" font-black text-2xl pt-16 w-fit mt-16">
            Superyacht Interior Curator & Project Manager
          </h1>
          <div className=" flex justify-center items-center gap-24">
            <p className=" max-w-2xl text-lg font-medium mb-16">
              Founder of <span className="font-bold">ILIOS Décor</span>,
              curating bespoke styling for yachts and residences, Iliyana has
              the expertise to assist clients with their interior needs and
              offer personalized styling solutions. With over 20 years of
              experience working in the luxury industry and managing highly
              confidential projects, she has a strong focus on service
              excellence, creating aesthetically pleasing and functional
              environments. Through her multiple years of experience as a
              Project Manager at an Interior Design company in Monaco and as
              part of the Owners Team of two truly outstanding superyachts, MY A
              and SY A, Iliyana had the opportunity to be closely involved with
              various aspects of creating, maintaining and refurbishing the
              interior of numerous luxury vessels. Iliyana offers an expertise
              in sourcing of materials, selection of furniture and accessories,
              interior set-up, refit works, planning, budgeting, quality control
              and logistics. As an active Board member of YPY Monaco, she enjoys
              being closely involved with the yachting community, fostering
              networking opportunities, connecting industry professionals and
              sharing her knowledge.
            </p>
            <div className=" ">
              <Image
                className="rounded-full w-fit mb-16"
                src={photo.src}
                alt="founder-icon"
                width={500}
                height={450}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
