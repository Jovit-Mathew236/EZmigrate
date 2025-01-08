import { ArrowRight } from "lucide-react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const StudyAboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner Section */}
      <div>
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-80 md:h-96 object-cover -z-10 object-bottom"
        >
          <source src="/video/study-aboard.mp4" type="video/mp4" className="" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5 max-h-80 md:max-h-96" />

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start min-h-80 md:min-h-96 pb-20">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-white mb-3">
              <h1 className="text-5xl font-extralight text-white -mb-16 md:mb-3">
                Study Abroad
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Description Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between flex-col md:flex-row gap-x-8">
            <div className="max-w-2xl md:mt-20">
              <h2 className="text-xl md:text-3xl font-normal mb-8">
                Discover Your Path to Global Education
              </h2>
              <p className="text-base md:text-xl text-gray-700 font-light mb-8 max-w-xl">
                Embark on your international education journey with top
                destinations like the USA, UK, Canada, Australia, New Zealand,
                Germany, and more. Get insights on universities, courses,
                scholarships, and visas. Shape your future with personalized
                guidance and seamless support every step of the way!
              </p>
              {/* <Link
                href="/contact"
                className="w-full justify-center md:justify-start md:w-fit px-8 py-3 text-info hover:bg-info hover:text-white border border-info flex items-center gap-2"
              >
                Let&apos;s talk
                <ArrowRight className="w-4 h-4" />
              </Link> */}
            </div>
            {/* Form */}
            <div className="md:-mt-64 z-10 bg-white px-0 md:px-8 py-12 w-full max-w-md md:shadow-md">
              <h2 className="text-2xl font-normal mb-8">Let&apos;s Connect!</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb">Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-fit md:w-full p-3 border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block mb">Country*</label>
                  <select
                    className="w-full p-3 border border-gray-300 appearance-none bg-white"
                    required
                  >
                    <option>India</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div>
                  <label className="block mb">Email*</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-3 border border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label className="block mb">Phone Number*</label>
                  <div className="flex">
                    <div className="flex items-center border border-gray-300 pl-3 pr-6 md:px-3">
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
                      className="flex-1 p-3 border border-gray-300 w-full md:w-fit border-l-0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm">Use this as WhatsApp number</span>
                  </label>
                </div>

                <div>
                  <label className="block mb-2">Whatsapp Number*</label>
                  <div className="flex">
                    <div className="flex items-center border border-gray-300 pl-3 pr-6 md:px-3">
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
                      className="flex-1 p-3 border border-gray-300 w-full md:w-fit border-l-0"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 flex float-right items-center gap-2"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAboard;
