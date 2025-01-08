import React from "react";
import Image from "next/image";

const WhySection = () => {
  const services = [
    {
      icon: "/icons/visa.svg",
      title: "Admission & Visa Counseling",
      description:
        "Expert advice to choose the right course, university, and country, with seamless visa support.",
    },
    {
      icon: "/icons/test.svg",
      title: "Test Preparation & Training",
      description:
        "Specialized coaching for IELTS, PTE, OET, and professional exams like OSCE, CBT, NCLEX-RN, and more.",
    },
    {
      icon: "/icons/loan.svg",
      title: "Overseas Education Loan Assistance",
      description:
        "Complete support with documentation and bank liaising to secure education loans.",
    },
    {
      icon: "/icons/scholarship.svg",
      title: "Scholarship Assistance",
      description:
        "Help in identifying and applying for scholarships to reduce your financial burden.",
    },
    {
      icon: "/icons/services.svg",
      title: "Comprehensive Allied Services",
      description:
        "From travel and accommodation to forex exchange and health insurance, we cover it all.",
    },
  ];

  return (
    <div className="container mx-auto px-5 py-16">
      <div className="md:text-center mb-6 md:mb-12">
        <h2 className="text-4xl font-light">
          Why <span className="text-blue-600">EZmigrate</span>?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex md:justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-light">
            All Under One Roof
          </h1>
        </div>
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 text-center flex flex-col items-center"
          >
            <div className="relative w-12 h-12 mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-2xl font-medium mb-2">{service.title}</h4>
            <p className="text-gray-600 text-md md:text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySection;
