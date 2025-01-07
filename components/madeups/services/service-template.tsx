"use client";

import React, { useState } from "react";
import { ServiceContent } from "@/types/services";
import Link from "next/link";
import { ArrowRight, Handshake, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => onToggle(index)}
        className="flex justify-between items-center w-full text-left"
      >
        <h1 className="text-lg text-black font-bold">{item.question}</h1>
        <span className="ml-6">
          <svg
            className={`w-6 h-6 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner Section */}
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
                {content.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Description Section */}
      <section className="py-16 bg-white">
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
                  href="/services"
                  className="text-black hover:text-gray-200"
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
          <div className="max-w-2xl float-right">
            <h2 className="text-2xl md:text-3xl font-light mb-8">
              Comprehensive Guidance to Achieve Your Academic Aspirations
            </h2>
            <p className="text-gray-700 font-light mb-8 max-w-lg">
              {content.mainDescription}
            </p>
            <Link
              href="/contact"
              className="w-full justify-center md:justify-start md:w-fit px-8 py-3 text-info hover:bg-info hover:text-white border border-info flex items-center gap-2"
            >
              Let&apos;s talk
              <ArrowRight className="w-4 h-4" />
            </Link>
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
          <h2 className="text-3xl font-light mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto">
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
