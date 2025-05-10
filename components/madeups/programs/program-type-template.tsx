"use client";
import React from "react";
import { ProgramType, ProgramCategory } from "@/types/programs";
import { ArrowRight, Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

interface ProgramTypeTemplateProps {
  programType: ProgramType;
  category: ProgramCategory;
  programId: string;
}

interface WhyChooseReason {
  title: string;
  description: string;
}

const whyChooseReasons: WhyChooseReason[] = [
  {
    title: "Expert Trainers",
    description:
      "Learn from experienced trainers with proven track records in their fields.",
  },
  {
    title: "Customized Preparation",
    description:
      "Personalized training plans tailored to your specific needs and learning pace.",
  },
  {
    title: "Comprehensive Materials",
    description:
      "Access to extensive study resources, practice tests, and reference materials.",
  },
];

const ProgramTypeTemplate: React.FC<ProgramTypeTemplateProps> = ({
  programType,
  category,
  programId,
}) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  // Alert position styles
  const alertPositionStyles = {
    top: "top-4",
    center: "left-1/2 -translate-x-1/2",
  };

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
          <source src="/video/program.webm" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-5 max-h-80 md:max-h-96" />

        {/* Content */}
        <div className="relative z-10 flex items-end justify-start min-h-80 md:min-h-96 pb-20">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl text-white mb-3">
              <h1 className="text-5xl font-extralight text-white -mb-16 md:mb-3">
                {programType.shortForm}
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
                  href="/programs"
                  className="text-black hover:text-gray-200"
                >
                  Programs
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black">
                <Slash className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black">
                  {programType.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col justify-between md:flex-row gap-x-8">
            <div className="max-w-2xl md:mt-20">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl md:text-3xl font-light">
                  {category.name}
                </h2>
              </div>
              <p className="text-base md:text-xl xl:text-2xl text-gray-700 font-light mb-8 max-w-xl xl:max-w-3xl">
                {programType.description}
              </p>
            </div>

            {/* Enquiry Form */}
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
                    Your enquiry has been submitted successfully
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
                    setTimeout(() => setShowAlert(false), 3000);
                    const form = document.querySelector("form");
                    if (form) form.reset();
                  }
                }}
              />
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScvLEEOsQwu9iJEbb51G8URygV3EtstfXj9JCLkVvb0UzMgXw/formResponse"
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
                  <label className="block mb">Program*</label>
                  <select
                    name="entry.1882265817"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                    required
                  >
                    <option value={programId}>{programType.title}</option>
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

      {/* Program details section */}
      <section className="py-12 bg-stone-600">
        {/* Duration Section */}
        {programType.duration && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">Program Duration</h2>
            <p className="text-xl">{programType.duration}</p>
          </div>
        )}

        {/* Eligibility Requirements Section */}
        {programType.eligibilityRequirements && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">
              Eligibility Requirements
            </h2>
            <ul className="space-y-1 pl-3">
              {programType.eligibilityRequirements.map((req, index) => (
                <p className="text-lg" key={index}>
                  • {req}
                </p>
              ))}
            </ul>
          </div>
        )}

        {/* Syllabus Section */}
        {programType.syllabus && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">Program Syllabus</h2>
            <ol className="space-y-6 pl-3">
              {programType.syllabus.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <h4 className="text-info font-light w-4"> {index + 1}.</h4>
                  <div className="flex flex-col">
                    <h4 className="text-info font-light">{item.title}</h4>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Benefits Section */}
        {programType.benefits && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-3xl font-light mb-6">Benefits</h2>
            <ul className="space-y-4 pl-3">
              {programType.benefits.map((benefit, index) => (
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

        {/* Exam Details Section */}
        {programType.examDetails && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">Exam Details</h2>
            <div className="space-y-4 pl-3">
              {programType.examDetails.format && (
                <p className="text-lg">
                  <span className="font-medium">Format: </span>
                  {programType.examDetails.format}
                </p>
              )}

              {programType.examDetails.sections && (
                <div className="mb-4">
                  <p className="font-medium mb-2">Sections:</p>
                  <ul className="pl-5 space-y-1">
                    {programType.examDetails.sections.map((section, i) => (
                      <li key={i} className="text-lg">
                        • {section}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {programType.examDetails.scoringSystem && (
                <p className="text-lg">
                  <span className="font-medium">Scoring System: </span>
                  {programType.examDetails.scoringSystem}
                </p>
              )}

              {programType.examDetails.validity && (
                <p className="text-lg">
                  <span className="font-medium">Validity: </span>
                  {programType.examDetails.validity}
                </p>
              )}

              {programType.examDetails.cost && (
                <p className="text-lg">
                  <span className="font-medium">Cost: </span>
                  {programType.examDetails.cost}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Who Should Apply Section */}
        {programType.whoShouldApply && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">Who Should Apply</h2>
            <ul className="space-y-1 pl-3">
              {programType.whoShouldApply.map((profile, index) => (
                <p className="text-lg" key={index}>
                  • {profile}
                </p>
              ))}
            </ul>
          </div>
        )}

        {/* Training Approach Section */}
        {programType.trainingApproach && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">Our Training Approach</h2>
            <ul className="space-y-4 pl-3">
              {programType.trainingApproach.map((approach, index) => (
                <li key={index} className="flex gap-2">
                  <p>•</p>
                  <div className="flex flex-col gap-1 md:flex-row">
                    <span className="font-medium">{approach.title}: </span>
                    <span className="font-light"> {approach.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Success Stories Section */}
        {programType.successStories && (
          <div className="container mx-auto px-6 py-5">
            <h2 className="text-4xl font-light mb-6">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programType.successStories.map((story, index) => (
                <div key={index} className="bg-black/10 p-6 rounded-md">
                  <h3 className="text-xl font-medium mb-2">{story.name}</h3>
                  {story.score && (
                    <p className="text-lg text-black/80 font-light mb-3">
                      {story.score}
                    </p>
                  )}
                  <p className="text-lg italic">
                    &ldquo;{story.testimonial}&rdquo;
                  </p>
                </div>
              ))}
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

export default ProgramTypeTemplate;
