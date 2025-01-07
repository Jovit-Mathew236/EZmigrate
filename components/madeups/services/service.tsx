import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServicePage = () => {
  return (
    <main className="relative">
      {/* Video Background */}
      <div>
        <video
          autoPlay
          loop
          muted
          className="fixed bg-top top-0 left-0 w-full h-96 md:h-72 object-cover -z-10"
        >
          <source src="/video/services.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5 max-h-96 md:max-h-72" />

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start min-h-96 md:min-h-72 pb-20">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-white mb-3">
              <h1 className="text-3xl md:text-4xl font-extralight text-white mb-10 md:mb-3">
                Our Services
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Core Offerings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between flex-col md:flex-row items-center gap-8">
            {/* Services List - Order changes on mobile */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-4xl mb-12 font-light">Core Offerings</h2>

              <div className="space-y-8">
                {/* <div className="border-b pb-4">
                  <a
                    href="#"
                    className="text-xl hover:text-blue-600 flex items-center justify-between group"
                  >
                    <h3>Educational Counselling</h3>
                    <ArrowRight
                      size={32}
                      strokeWidth={2}
                      className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div> */}

                {[
                  "Educational Counselling",
                  "Career Counselling",
                  "University Application Assistance",
                  "Visa & Immigration Services",
                  "Personalised Guidance",
                  "Seamless Transition",
                  "Mentorship & Support",
                ].map((service, index) => (
                  <div key={index} className="border-b pb-4">
                    <a
                      href="#"
                      className=" hover:text-blue-600 flex items-center justify-between group"
                    >
                      <h3 className="text-xl font-light md:font-normal hover:text-blue-600 cursor-pointer">
                        {service}
                      </h3>

                      <ArrowRight
                        size={32}
                        strokeWidth={2}
                        className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Image - Order changes on mobile */}
            <div className="w-full md:w-auto z-10 bg-cover -mt-40 md:mt-0 place-self-start order-1 md:order-2">
              <Image
                src="/images/services.png"
                alt="Educational counselling session"
                className="h-[350px] md:h-[500px] w-full md:w-auto bg-top object-cover shadow-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
