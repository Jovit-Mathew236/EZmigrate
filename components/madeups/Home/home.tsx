"use client";
import React from "react";
import NavBar from "@/components/madeups/Home/modules/nav-bar";
import HeroContent from "@/components/madeups/Home/modules/hero-content";
import StatsSection from "@/components/madeups/Home/modules/stats-section";
import DestinationsSection from "@/components/madeups/Home/modules/destinations-section";
import StorySection from "@/components/madeups/Home/modules/story-section";
import ConnectExpertSection from "@/components/madeups/Home/modules/connect-expert-section";
import StudentStoriesSection from "@/components/madeups/Home/modules/student-stories-section";
import BlogPostsSection from "@/components/madeups/Home/modules/blog-posts-section";
// import AccreditationsSection from "@/components/madeups/Home/modules/accreditations-section";
// import FooterSection from "@/components/madeups/Home/modules/footer-section";

const HomePage = () => {
  return (
    <main className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/video/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5" />

      <NavBar />
      <HeroContent />
      <StatsSection />
      <DestinationsSection />
      <StorySection />
      <ConnectExpertSection />
      <StudentStoriesSection />
      <BlogPostsSection />
      {/* <AccreditationsSection />
      <FooterSection /> */}
    </main>
  );
};

export default HomePage;
