  import type { Metadata } from "next";
  import { Raleway } from "next/font/google";
  import "./globals.css";
  import logo from "../public/ico.jpg"

  const raleway = Raleway({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "ILIOS",
    description: "Interior Project Management",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
      <head>
        <link rel="icon" href={logo.src} />
      </head>
        <body className={` ${raleway.className} bg-background overflow-x-hidden  `}>
          {children}
        </body>
      </html>
    );
  }
