import Image from "next/image";
import Navbar from "@/components/Navbar";
import starterImage from "../public/yacht design.jpg";

export default function Home() {
  return (
    <main className="h-screen w-screen ">
      <div className=" mb-72">
        <Navbar />
      </div>

      <div className="w-screen h-full flex flex-col justify-between  items-center">
        <h1 className="underline text-9xl font-bold">ILIOS</h1>
        <div className="w-screen h-[65vh] relative">
          <Image
            src={starterImage}
            alt="yacht design"
            layout="fill" // Makes the image fill the entire div
            objectFit="cover" // Ensures the image covers the entire div
            objectPosition="center" // Centers the image within the div
          />
        </div>
      </div>
    </main>
  );
}
