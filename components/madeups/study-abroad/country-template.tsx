"use client";
import React from "react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ReactCountryFlag from "react-country-flag";
import { StudyAbroadDestination } from "@/types/study-abroad";
import { ArrowRight, Plane, Slash } from "lucide-react";
import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";

interface CountryTemplateProps {
  country: StudyAbroadDestination;
}
const destinationCards = [
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.webp",
    description: "Excellence in education and limitless opportunities.",
    link: "/study-abroad/usa",
  },
  {
    country: "Germany",
    countryCode: "DE",
    image: "/images/destination_banner_germany.webp",
    description: "Tuition-free education with cutting-edge innovation.",
    link: "/study-abroad/germany",
  },
  {
    country: "UK",
    countryCode: "GB",
    image: "/images/destination_banner_uk.webp",
    description: "Top universities in a rich cultural setting.",
    link: "/study-abroad/uk",
  },
];
const CountryTemplate = ({ country }: CountryTemplateProps) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  // Alert position styles - easy to modify
  const alertPositionStyles = {
    top: "top-4", // Change to 'bottom-4' for bottom positioning
    center: "left-1/2 -translate-x-1/2", // Centers horizontally
    // Alternative positions (uncomment to use):
    // bottom: 'bottom-4 left-1/2 -translate-x-1/2',
    // bottomRight: 'bottom-4 right-4',
    // centerLeft: 'top-1/2 -translate-y-1/2 left-4',
    // center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className="flex flex-col min-h-screen xl:min-h-fit">
      {/* Hero Banner Section */}
      <div>
        <Image
          src={country.image}
          alt={`${country.country} education`}
          width={2000}
          height={2000}
          className="fixed bg-center top-0 left-0 w-full h-80 md:h-96 object-cover -z-10"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5 max-h-80 md:max-h-96" />

        {/* country */}
        <div className="relative z-10 flex items-end justify-start min-h-80 md:min-h-96 pb-20">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-white mb-3">
              <h1 className="text-5xl font-extralight text-white -mb-16 md:mb-3">
                {country.country}
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
                  href="/study-abroad"
                  className="text-black hover:text-gray-200 scroll-smooth"
                >
                  Study Abroad
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black">
                <Slash className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black">
                  {country.country}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col justify-between md:flex-row gap-x-8">
            <div className="max-w-2xl md:mt-20">
              <h2 className="text-xl md:text-3xl font-light mb-8">
                {country.subTitle}
              </h2>
              <p className="text-base md:text-xl xl:text-2xl text-gray-700 font-light mb-8 max-w-xl xl:max-w-3xl">
                {country.description}
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
              {showAlert && (
                <Alert
                  className={`
                    fixed ${alertPositionStyles.top} ${alertPositionStyles.center}
                    z-120 w-[400px] shadow-lg
                    border-emerald-600/50 
                    bg-emerald-100 
                    text-emerald-800
                    dark:bg-emerald-900/90 
                    dark:text-emerald-100
                    dark:border-emerald-800
                    transition-all duration-300 ease-in-out
                    [&>svg]:text-emerald-600
                  `}
                >
                  <CircleCheckBigIcon className="h-4 w-4" />
                  <AlertTitle className="font-medium">
                    Operation Successful
                  </AlertTitle>
                  <AlertDescription className="text-emerald-700 dark:text-emerald-200">
                    Your action has been completed successfully
                  </AlertDescription>
                </Alert>
              )}
              <iframe
                name="hiddenConfirm"
                id="hiddenConfirm"
                style={{ display: "none" }}
                onLoad={() => {
                  if (submitted) {
                    setShowAlert(true);
                    setSubmitted(false);
                    // Hide alert after 3 seconds
                    setTimeout(() => setShowAlert(false), 3000);
                    // Optional: Reset the form
                    const form = document.querySelector("form");
                    if (form) form.reset();
                  }
                }}
              />
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSdGcBn0NhP8TdPCys9VHwhBnqN_3XZcgiDBBkNXTCKDiBAl_w/formResponse"
                method="POST"
                target="hiddenConfirm"
                className="space-y-4"
                onSubmit={() => setSubmitted(true)}
              >
                <div>
                  <label className="block mb">Name*</label>
                  <input
                    type="text"
                    name="entry.430808753"
                    placeholder="Enter your name"
                    className="w-full md:w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>

                <div>
                  <label className="block mb">Country*</label>
                  <select
                    name="entry.1882265817"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                    required
                  >
                    <option value={country.country}>{country.country}</option>
                  </select>
                </div>

                <div>
                  <label className="block mb">Email*</label>
                  <input
                    type="email"
                    name="entry.1015471046"
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
                      name="entry.832855793"
                      className="flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light w-full md:w-fit border-l-0"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      onChange={(e) => {
                        const whatsappInput = document.querySelector(
                          'input[name="entry.1472688816"]'
                        ) as HTMLInputElement;
                        const phoneInput = document.querySelector(
                          'input[name="entry.832855793"]'
                        ) as HTMLInputElement;
                        if (e.target.checked) {
                          whatsappInput.value = phoneInput.value;
                        } else {
                          whatsappInput.value = "";
                        }
                      }}
                    />
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
                      name="entry.1472688816"
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

      {/* Why Study Section with Image */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start">
            {/* Text Content */}

            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Why study in {country.country}?
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed">
              {country.country} offers a high-standard international education
              system renowned for its quality and practical learning approach.
              Its globally ranked institutions provide diverse degree programs
              in engineering, business, healthcare, information technology,
              sciences, and more. With affordable tuition and numerous
              scholarships, studying here is both enriching and cost-effective.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl md:font-normal mb-12">
            Unique Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {country.uniqueBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#D6E4FC]/30 p-8 flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-2xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-light text-md">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-white font-light mb-12">
            {" "}
            Popular Study Abroad Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationCards.map((destination, index) => (
              <div
                key={index}
                className="bg-white shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 flex items-end justify-center">
                  <Image
                    src={destination.image}
                    alt={`${destination.country} cityscape`}
                    fill
                    quality={100}
                    className="object-cover"
                  />
                  <div className="z-10 -mb-4 w-8 h-8 bg-black rounded-full flex items-center rotate-45 justify-center">
                    <Plane color="white" fill="white" size={20} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-2">
                    <ReactCountryFlag
                      countryCode={destination.countryCode}
                      svg
                      style={{
                        width: "44px",
                        height: "44px",
                        objectFit: "cover",
                      }}
                      title={destination.country}
                      className="rounded-full border-primary border-[1px]"
                    />
                    <div>
                      <h3 className="font-light">{destination.country}</h3>
                      <p className="text-gray-600 text-sm">
                        {destination.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative my-4">
                    <div className="absolute -left-9 -top-3 h-6 w-6 rounded-full bg-black"></div>
                    <div className="absolute -right-9 -top-3 h-6 w-6 rounded-full bg-black"></div>
                    <div className="border-t-2 border-dashed border-gray-800"></div>
                  </div>
                  <div className="inline-flex w-full place-content-end">
                    <Link
                      href={destination.link}
                      className="inline-flex items-center px-2 rounded-xl bg-zinc-100 text-blue-600 text-sm font-medium"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-16 text-white">
            <Link
              href="/study-abroad"
              className="inline-flex font-light w-full md:w-auto justify-center items-center border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
            >
              View more destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryTemplate;
