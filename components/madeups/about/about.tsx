import React from "react";
import Image from "next/image";
import StatsSection from "../Home/modules/stats-section";
import WhySection from "./WhySection";

const AboutPage = () => {
  return (
    <div>
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
                achieve their dream of studying abroad. Registered in New
                Zealand and India, we provide expert guidance for top
                universities worldwide, backed by a commitment to transparency,
                trust, and personalized support.
              </p>
            </div>
          </div>

          <div className="relative w-screen -ml-5  md:ml-0 md:w-full aspect-video overflow-hidden">
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
      <StatsSection />
      <WhySection />
      <div className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Our Vision</h2>
          <h3 className="text-blue-500 text-xl font-light md:text-3xl mb-6">
            Shaping Futures Globally
          </h3>
          <p className="max-w-5xl mx-auto text-xl md:text-3xl font-light leading-relaxed">
            To be the most trusted and impactful overseas education consultancy,
            empowering students to achieve academic and career excellence
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
