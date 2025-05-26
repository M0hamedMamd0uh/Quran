import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import BootstrapBundle from "./BootstrapBundle";
import Navbar from "./(Components)/Navbar/Navbar";
import SideNav from "./(Components)/SideNav/SideNav";
import AudioPlayer from "./(Components)/AudioPlayer/AudioPlayer";
import Browse_Quran from "./Context/Browse_Quran";
import TestComp from "./(Components)/TestComp/TestComp";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quran",
  description: "Islamic Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <BootstrapBundle />
        <Navbar />
        <Browse_Quran>
          <div className="container py-3">
            <div className="row g-4 ">
              <div className="col-md-1 ">
                <SideNav />
              </div>
              <div className="pages col-md-11">{children}</div>
            </div>
          </div>
        </Browse_Quran>
        <AudioPlayer />
        {/* <div className="w-50">
        <TestComp />
        </div> */}
      </body>
    </html>
  );
}
