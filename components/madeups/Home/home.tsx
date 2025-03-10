"use client";
import React, { useEffect, useState, useRef } from "react";
// import NavBar from "@/components/madeups/Home/modules/nav-bar";
import HeroContent from "@/components/madeups/Home/modules/hero-content";
import StatsSection from "@/components/madeups/Home/modules/stats-section";
import DestinationsSection from "@/components/madeups/Home/modules/destinations-section";
import StorySection from "@/components/madeups/Home/modules/story-section";
import ConnectExpertSection from "@/components/madeups/Home/modules/connect-expert-section";
import StudentStoriesSection from "@/components/madeups/Home/modules/student-stories-section";
// import BlogPostsSection from "@/components/madeups/Home/modules/blog-posts-section";
import AccreditationsSection from "@/components/madeups/Home/modules/accreditations-section";
// import FooterSection from "@/components/madeups/Home/modules/footer-section";
import { ArrowRight, X } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if popup has been shown before
    const hasPopupShown = sessionStorage.getItem("popupShown");

    if (!hasPopupShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 40000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSendEnquiryClick = () => {
    setShowForm(true);
    // Smooth scroll to form section on mobile
    if (window.innerWidth < 768 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/video/home.webm" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5" />

      {/* <NavBar /> */}
      <HeroContent />
      <StatsSection />
      <DestinationsSection />
      <StorySection />
      <ConnectExpertSection />
      <StudentStoriesSection />
      {/* <BlogPostsSection /> */}
      <AccreditationsSection />
      {/* <FooterSection /> */}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 z-50 ">
          <div className="bg-white w-full max-w-[1000px] relative flex md:flex-row max-h-[750px] h-full md:max-h-[710px] overflow-x-auto md:overflow-y-auto">
            {/* Left Section - Image */}
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-black hover:text-gray-600 z-20 transition-colors bg-white rounded-full p-2"
            >
              <X />
            </button>
            <div className="w-full flex-shrink-0 md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-white">
              <Image
                src="/images/popup.webp"
                alt="Explore the world"
                width={2000}
                height={2000}
                quality={100}
                className="w-full h-auto md:h-full object-cover p-2 md:p-0 inset-0"
              />
              <div className="flex flex-col gap-4 p-6 md:p-0 mt-10 md:mt-10">
                <button
                  onClick={handleSendEnquiryClick}
                  className="md:hidden bg-black text-white px-8 py-3 flex items-center justify-center gap-2"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Section - Form */}
            <div
              ref={formRef}
              className={`w-full flex-shrink-0 md:w-1/2 p-8 bg-white relative ${
                showForm ? "block" : "hidden md:block"
              }`}
            >
              <div>
                <h2 className="text-2xl mb-3 md:mb-6 font-light">
                  Let&apos;s Connect!
                </h2>
                <form className="space-y-2 md:space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block mb-1">First Name*</label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1">Email*</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Phone Number*</label>
                    <div className="flex">
                      <div className="flex items-center border border-b-black border-stone-400 pl-3 pr-6 md:px-3">
                        <ReactCountryFlag
                          countryCode="IN"
                          svg
                          style={{
                            width: "24px",
                            height: "16px",
                          }}
                          title="India"
                        />
                        <span className="ml-2">+91</span>
                      </div>
                      <input
                        type="tel"
                        className="flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light w-full md:w-fit border-l-0"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">
                        Use this as WhatsApp number
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="block mb-1">Whatsapp Number*</label>
                    <div className="flex">
                      <div className="flex items-center border border-b-black border-stone-400 pl-3 pr-6 md:px-3">
                        <ReactCountryFlag
                          countryCode="IN"
                          svg
                          style={{
                            width: "24px",
                            height: "16px",
                          }}
                          title="India"
                        />
                        <span className="ml-2">+91</span>
                      </div>
                      <input
                        type="tel"
                        className="flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light w-full md:w-fit border-l-0"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1">Tell Us More</label>
                    <textarea
                      placeholder="Brief about your aim"
                      className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                      rows={2}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-black w-full md:w-auto justify-center text-white px-8 py-3 flex items-center gap-2"
                    >
                      Send Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;
