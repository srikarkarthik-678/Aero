"use client"
import { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Blank from "./Components/Blank";
import Overview from "./Components/Overview";
import Aero from "./Components/Aero";
import Hover from "./Components/Hover";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/2611250-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col min-h-screen text-white">

 
        <section className="relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-[105vh] object-cover z-10 pointer-events-none"
          >
            <source src="/Untitled video - Made with Clipchamp (1).webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div>

          </div>
          <div className="relative z-10">
            <section className="relative z-10 p-10">
              <Navbar />
              <Aero />
              <Hero />
              <Blank />
              <Overview />
              <Hover />
            </section>

          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
