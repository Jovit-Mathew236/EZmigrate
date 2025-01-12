import React from "react";
import { VisaType, VisaDestination } from "@/types/visa";
import { ArrowRight, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ReactCountryFlag from "react-country-flag";

interface VisaTypeTemplateProps {
  visaType: VisaType;
  destination: VisaDestination;
  visaCategory: string;
}

interface WhyChooseReason {
  title: string;
  description: string;
}

const whyChooseReasons: WhyChooseReason[] = [
  {
    title: "Expert Consultation",
    description:
      "Get guidance from the best immigration consultants with years of experience.",
  },
  {
    title: "Eligibility Check",
    description:
      "Use our free eligibility check tools to assess your chances of securing an Australian PR.",
  },
  {
    title: "Step-by-Step Support",
    description:
      "Receive expert assistance throughout your entire Australian immigration journey, from skill assessments to visa applications.",
  },
];

const VisaTypeTemplate: React.FC<VisaTypeTemplateProps> = ({
  visaType,
  destination,
  visaCategory,
}) => {
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
          <source src="/video/visa.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5 max-h-80 md:max-h-96" />

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start min-h-80 md:min-h-96 pb-20">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-white mb-3">
              <h1 className="text-5xl font-extralight text-white -mb-16 md:mb-3">
                {visaType.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
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
                  href="/visa"
                  className="text-black hover:text-gray-200"
                >
                  Visa
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black">
                <Slash className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black">
                  {visaType.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col justify-between md:flex-row gap-x-8">
            <div className="max-w-2xl md:mt-20">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl md:text-3xl font-light">
                  {destination.subTitle}
                </h2>
              </div>
              <p className="text-base md:text-xl xl:text-2xl text-gray-700 font-light mb-8 max-w-xl xl:max-w-3xl">
                {visaType.description}
              </p>
            </div>

            {/* Enquiry Form */}
            <div className="md:-mt-64 z-10 bg-white px-0 md:px-8 py-12 w-full max-w-md md:shadow-md">
              <h2 className="text-2xl font-normal mb-8">Let&apos;s Connect!</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb">Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full md:w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>

                <div>
                  <label className="block mb">Service*</label>
                  <select
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                    required
                  >
                    <option>{visaCategory}</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                <div>
                  <label className="block mb">Email*</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>

                <div>
                  <label className="block mb">Phone Number*</label>
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
                    <span className="text-sm">Use this as WhatsApp number</span>
                  </label>
                </div>

                <div>
                  <label className="block mb-2">Whatsapp Number*</label>
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

      {/* Why Apply Section */}
      <section className="py-12 bg-stone-600">
        {visaType.why && (
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-light mb-6">
              Why Apply for an {destination.country} PR?
            </h2>
            <ol className="space-y-6 pl-3">
              {visaType.why.map((reason, index) => (
                <li key={index} className="flex gap-4">
                  <h4 className="text-info font-light w-4"> {index + 1}.</h4>
                  <div className="flex flex-col">
                    <h4 className="text-info font-light">{reason.title}</h4>
                    <p className="text-xl">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* PR Process Section */}
        {visaType.processingSteps && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              {destination.country} PR Process
            </h2>
            <ol className="space-y-8 pl-3">
              {visaType.processingSteps.map((step, index) => (
                <li key={index} className="max-w-3xl flex gap-4">
                  <h4 className="font-light mb-2 w-4"> {index + 1}.</h4>

                  <div className="flex flex-col">
                    <h4 className="font-light mb-2">{step.title}</h4>
                    <p className="text-xl">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Visa Options Section */}
        {visaType.visaOptions && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              Visa Options for {destination.country} PR
            </h2>
            <ul className="space-y-1 pl-3">
              {visaType.visaOptions.map((option, index) => (
                <p className="text-lg" key={index}>
                  • {option}
                </p>
              ))}
            </ul>
          </div>
        )}

        {/* Eligibility Requirements Section */}
        {visaType.eligibilityRequirements && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              {destination.country} PR Eligibility Requirements
            </h2>
            <ul className="space-y-1 pl-3">
              {visaType.eligibilityRequirements.map((req, index) => (
                <p className="text-lg" key={index}>
                  • {req}
                </p>
              ))}
            </ul>
          </div>
        )}

        {/* How to Apply Section */}
        {visaType.HowApply && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              How to Apply for {destination.country} PR?
            </h2>
            <ul className="space-y-1 pl-3">
              {visaType.HowApply.map((step, index) => (
                <p className="text-lg" key={index}>
                  • {step}
                </p>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits Section */}
        {visaType.benefits && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-3xl font-light mb-6">
              Benefits of {destination.country} PR
            </h2>
            <ul className="space-y-4 pl-3">
              {visaType.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-2">
                  <p>•</p>
                  <div className="flex flex-col gap-1 md:flex-row">
                    <span className="font-medium">{benefit.title}: </span>
                    <span className="font-light"> {benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* In-Demand Jobs Section */}
        {visaType.inDemandJobs && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              Top In-Demand Jobs in {destination.country}
            </h2>
            <div className="space-y-3 pl-3">
              {visaType.inDemandJobs.map((job, index) => (
                <p key={index} className="text-lg">
                  {index + 1}. {job.title}: {job.salary}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Cost Section */}
        {visaType.cost && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              Cost of {destination.country} PR from India
            </h2>
            <div className="space-y-6">
              {Object.entries(visaType.cost).map(
                ([category, amounts], index) => (
                  <div key={index} className="mb-4 flex gap-2 pl-3">
                    <span> • </span>
                    <div>
                      <h3 className="text-xl font-light mb-2">{category}:</h3>
                      <ul className="space-y-2">
                        {amounts.map((amount, i) => (
                          <li key={i}>{amount}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* why ezzmigrate section */}
        <div className="container mx-auto px-6 py-5">
          <h2 className="text-4xl font-light mb-6">Why Choose EZmigrate?</h2>
          <ul className="space-y-1 pl-3">
            {whyChooseReasons.map((reason, index) => (
              <li key={index} className="flex gap-4">
                <p>•</p>
                <div>
                  <p className="text-lg font-light">
                    <span className="font-medium text-xl">
                      {reason.title}:{" "}
                    </span>
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default VisaTypeTemplate;
