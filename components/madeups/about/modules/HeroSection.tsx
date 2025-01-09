import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-5 pt-8 mt-20 md:py-12">
      <div className="grid grid-cols-1 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-extralight">About Us</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="text-4xl md:text-5xl font-light leading-tight flex-1">
              Empowering Global Education Aspirations
            </h1>
            <p className="text-gray-600 flex-1">
              EZmigrate Limited is a trusted consultancy helping students
              achieve their dream of studying abroad. Registered in New Zealand
              and India, we provide expert guidance for top universities
              worldwide, backed by a commitment to transparency, trust, and
              personalized support.
            </p>
          </div>
        </div>

        <div className="relative w-screen -ml-5 md:ml-0 md:w-full aspect-video overflow-hidden">
          <Image
            src="/images/about.png"
            alt="Students collaborating outdoors"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
