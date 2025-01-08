"use client";

import React, { useState } from "react";
import { ServiceContent } from "@/types/services";
// import Link from "next/link";
import { ArrowRight, Handshake, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ReactCountryFlag from "react-country-flag";

interface ServiceTemplateProps {
  content: ServiceContent;
}

const FAQItem = ({
  item,
  isOpen,
  index,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  index: number;
  onToggle: (index: number) => void;
}) => {
  return (
    <div className="border-b-2 border-black py-6">
      <button
        onClick={() => onToggle(index)}
        className="flex justify-between items-center w-full text-left"
      >
        <h1 className="text-lg text-black font-bold">{item.question}</h1>
        <span className="ml-6">
          <svg
            className="w-6 h-6 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            )}
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-3">
            <p className="text-gray-600 font-light">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen xl:min-h-fit">
      {/* Hero Banner Section */}
      <div>
        <video
          autoPlay
          loop
          muted
          className="fixed bg-top top-0 left-0 w-full h-80 md:h-96 object-cover -z-10"
        >
          <source src="/video/services.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5 max-h-80 md:max-h-96" />

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start min-h-80 md:min-h-96 pb-20">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-white mb-3">
              <h1 className="text-5xl font-extralight text-white -mb-16 md:mb-3">
                {content.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Description Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <Breadcrumb className="mb-8 hidden md:block">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-black font-light hover:text-gray-200"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black">
                <Slash className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/services"
                  className="text-black hover:text-gray-200"
                >
                  Services
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black">
                <Slash className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/services#core-offerings"
                  className="text-black hover:text-gray-200 scroll-smooth"
                >
                  Core Offerings
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black">
                <Slash className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black">
                  {content.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col justify-between md:flex-row gap-x-8">
            <div className="max-w-2xl md:mt-20">
              <h2 className="text-xl md:text-3xl font-normal mb-8">
                {content.subTitle}
              </h2>
              <p className="text-base md:text-xl xl:text-2xl text-gray-700 font-light mb-8 max-w-xl xl:max-w-3xl">
                {content.mainDescription}
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
                  <label className="block mb">Service*</label>
                  <select
                    className="w-full p-3 border border-gray-300 appearance-none bg-white"
                    required
                  >
                    <option>{content.title}</option>
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

      {/* Services Include Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extralight mb-12">Services Include</h1>
          <div className="grid md:grid-cols-1 max-w-2xl md:float-right gap-8">
            {content.servicesInclude.map((service, index) => (
              <div key={index}>
                <div className="flex gap-7">
                  {/* Icon */}
                  <div className="mb-4 hidden md:block">
                    <div className="w-12 h-12 mb-4">
                      <Handshake size={48} />
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-light mb-4">{service.title}</h3>
                    <p className="text-gray-300 font-light">
                      {service.description}
                    </p>
                    {/* Underline */}
                    <div className="mt-8 border-b border-gray-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-normal mb-12">FAQ</h2>
          <div className="mx-auto">
            {content.faq.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={activeIndex === index}
                onToggle={(idx) =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
