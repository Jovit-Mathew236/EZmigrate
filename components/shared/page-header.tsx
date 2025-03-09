import React from "react";
import { PageHeaderContent } from "@/types/page-headers";
import { ArrowRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";

interface PageHeaderProps {
  content: PageHeaderContent;
}

const PageHeader: React.FC<PageHeaderProps> = ({ content }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const alertPositionStyles = {
    top: "top-4",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div>
      {/* Hero Banner Section */}
      <div>
        {content.backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            className={`fixed top-0 left-0 w-full h-80 md:h-96 object-cover -z-10 ${
              content.backgroundVideo.position === "center"
                ? "object-center"
                : "object-bottom"
            }`}
          >
            <source
              src={content.backgroundVideo.src}
              type={content.backgroundVideo.type}
            />
          </video>
        ) : (
          <div
            className="fixed top-0 left-0 w-full h-80 md:h-96 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: `url(${content.backgroundImage})`,
            }}
          />
        )}

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
          <div className="flex justify-between flex-col md:flex-row gap-x-8">
            <div className="max-w-2xl xl:max-w-3xl md:mt-20">
              <h2 className="text-xl md:text-3xl xl:text-5xl font-light mb-8">
                {content.subtitle}
              </h2>
              <p className="text-light md:text-xl xl:text-2xl text-gray-700 font-light mb-8 max-w-xl xl:max-w-3xl">
                {content.description}
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
                  <AlertTitle className="font-medium">Success!</AlertTitle>
                  <AlertDescription>
                    Your enquiry has been submitted successfully.
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
                action={content.formConnection?.action}
                method="POST"
                target="hiddenConfirm"
                className="space-y-4"
                onSubmit={() => setSubmitted(true)}
              >
                <div>
                  <label className="block mb">Name*</label>
                  <input
                    type="text"
                    name={content.formConnection?.fields.name}
                    placeholder="Enter your name"
                    className="w-full md:w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>

                {content.formOptionTitle && (
                  <div>
                    <label className="block mb">
                      {content.formOptionTitle}*
                    </label>
                    <select
                      name={content.formConnection?.fields.option}
                      className="w-full p-3 border border-b-black border-stone-400 appearance-none bg-white"
                      required
                    >
                      <option value="">Select {content.formOptionTitle}</option>
                      {content.formSelectOptions?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block mb">Email*</label>
                  <input
                    type="email"
                    name={content.formConnection?.fields.email}
                    placeholder="Enter email"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>

                {/* Phone Number Input */}
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
                      name={content.formConnection?.fields.phone}
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
                          `input[name="${content.formConnection?.fields.whatsapp}"]`
                        ) as HTMLInputElement;
                        const phoneInput = document.querySelector(
                          `input[name="${content.formConnection?.fields.phone}"]`
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

                {/* WhatsApp Number Input */}
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
                      name={content.formConnection?.fields.whatsapp}
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
    </div>
  );
};

export default PageHeader;
