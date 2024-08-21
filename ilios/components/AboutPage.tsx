import React from "react";
import Image from "next/image";
import photo from "../public/BIO Image.jpg";
import firstImage from "../public/PHOTO-2021-07-17-11-28-13.jpg"

const AboutPage = () => {
  return (
    <div className="w-screen h-screen snap-center flex-shrink-0 flex justify-center items-center"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="w-[35vw] h-screen rounded-3xl flex justify-center items-start bg-[#fafafaab] text-foreground overflow-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" max-w-lg text-center font-bold text-2xl pt-16 w-fit mt-16">
            Superyacht Interior Curator & Project Manager
          </h1>
          <div className=" flex flex-col justify-center items-center ">
            <p className=" max-w-sm text-lg font-medium mb-16 order-2 text-justify">
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
            <div className=" mt-16 order-1">
              <Image
                className="rounded-3xl w-fit mb-16"
                src={photo.src}
                alt="founder-icon"
                width={200}
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
