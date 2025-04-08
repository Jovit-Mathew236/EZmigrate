import React from "react";
import StatsSection from "../Home/modules/stats-section";
import WhySection from "./modules/WhySection";
import HeroSection from "./modules/HeroSection";
import VisionSection from "./modules/VisionSection";
import CoreValuesSection from "./modules/CoreValuesSection";
import TeamSection from "./modules/TeamSection";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <WhySection />
      <VisionSection />
      <CoreValuesSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
