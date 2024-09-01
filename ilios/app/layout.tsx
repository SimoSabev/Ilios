import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import favicon from "../public/ico.jpg";
import ogImage from "../public/logo1.jpg"; // Path to your Open Graph image

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ILIOS",
  description: "Interior Project Management",
  metadataBase: new URL("https://www.iliosdecor.com"), // Add this line
  openGraph: {
    title: "ILIOS",
    description: "Interior Project Management",
    images: "/logo1.jpg",
    url: "https://www.iliosdecor.com",
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        <meta property="og:image" content={ogImage.src} />
        <meta property="og:title" content="ILIOS - Interior Project Management" />
        <meta property="og:description" content="Description of your site" />
      </head>
      <body className={`${raleway.className} bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
