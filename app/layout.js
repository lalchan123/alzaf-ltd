import { Orbitron, Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MainNavbar from "@/components/MainNavbar";
import MainNavbarHeader from "@/components/MainNavbarHeader";

import { Toaster } from "react-hot-toast";


// Load the fonts with proper configuration
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"], // Specify the weights you need
});

export const metadata = {
  title: "Alzaf Limited",
  description:
    "Alzaf Limited software company.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${lato.variable}`}>
      <body className={`${lato.className} overflow-x-hidden text-black`}>
        <Providers>
          <Toaster className="mt-6" position="top-center" toastOptions={{ className: "", duration: 4000, style: { background: "#152b2c", color: "#fff", }, success: {   duration: 3500, theme: { primary: "green", secondary: "black" } } }} />
          <MainNavbarHeader />
          <MainNavbar />
          <div className="">{children}</div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
