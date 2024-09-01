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

          <p className="px-4 text-lg md:text-base lg:text-lg font-medium max-w-full max-h-fit sm:max-h-full md:max-w-xl mx-auto my-auto text-justify leading-relaxed">
            My name is Iliyana, and I founded ILIOS Décor with a simple yet
            profound mission: to blend my passion for excellence with my
            dedication to creating exceptional spaces that truly resonate with
            the people who live in them. My vocation is to help clients discover
            personalized styling solutions that beautifully reflect their unique
            tastes while ensuring their spaces are both functional and inviting.
            From my time as a Project Manager at an Interior Design company in
            Monaco to my experience as part of the Owners Team for the iconic
            superyachts, MY A and SY A, I have had the privilege of working on
            high-profile projects while gaining a deep understanding of the
            intricacies of interior decor. Whether it&apos;s sourcing the finest
            materials, selecting the perfect furniture, or managing complex
            refits, I approach each project with care, attention to detail, and
            a commitment to service excellence. Let&apos;s create something
            beautiful together and transform your yacht, residence or aircraft
            into a space that feels like home - elegant, comfortable, and
            uniquely yours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
