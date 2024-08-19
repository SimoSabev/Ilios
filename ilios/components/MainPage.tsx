import React from "react";
import firstImage from "../public/Main-Image.png"

const MainPage = () => {
  return (
    <div className="w-screen h-screen snap-center flex-shrink-0"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(30, 29, 29, 0.4), rgba(26, 25, 25, 0.3), rgba(22, 21, 21, 0.2), rgba(18, 17, 17, 0.1)), url(${firstImage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <h1>Page 1</h1>
      {/* Add specific content for Page 1 */}
    </div>
  );
};

export default MainPage;
