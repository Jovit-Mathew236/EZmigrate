"use client";
import React, { useState } from "react";
import { CareerPosition } from "@/types/careers";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ReactCountryFlag from "react-country-flag";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { CircleCheckBigIcon } from "lucide-react";

interface CareerTemplateProps {
  position: CareerPosition;
}

const ApplicationSheet = ({ children }: { children: React.ReactNode }) => {
  // const [file, setFile] = useState<File | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // const handleFileUpload = async (file: File) => {
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   try {
  //     // You'll need a server endpoint to handle the file upload
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error("File upload failed");
  //     }

  //     // Handle successful upload
  //     console.log("File uploaded successfully");
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        {showAlert && (
          <Alert className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[400px] shadow-lg border-emerald-600/50 bg-emerald-100 text-emerald-800">
            <AlertDescription>Form submitted successfully!</AlertDescription>
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

        <SheetHeader className="space-y-4 mb-6">
          <SheetTitle className="text-2xl text-left font-light">
            We&apos;re Hiring! Submit Your Application
          </SheetTitle>
        </SheetHeader>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSeGyvfp6oQmSl0Bk7FPx9cvPJwm4BRqhI0WTvqdEAYvX9EgKw/formResponse"
          method="POST"
          target="hiddenConfirm"
          className="space-y-6"
          onSubmit={() => setSubmitted(true)}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">First Name*</label>
              <input
                type="text"
                name="entry.430808753"
                placeholder="Enter first name"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Last Name*</label>
              <input
                type="text"
                name="entry.1064510817"
                placeholder="Enter last name"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Email*</label>
              <input
                type="email"
                name="entry.1015471046"
                placeholder="Enter email"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Phone Number*</label>
              <div className="flex">
                <div className="flex items-center border border-b-black border-stone-400 pl-3 pr-6">
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
                  className="flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light border-l-0"
                  required
                />
              </div>
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
            <label className="block mb-2">WhatsApp Number*</label>
            <div className="flex">
              <div className="flex items-center border border-b-black border-stone-400 pl-3 pr-6">
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
                className="flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light border-l-0"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Country</label>
              <select
                name="entry.1882265817"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                defaultValue="India"
              >
                <option value="india">India</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">State</label>
              <select
                name="entry.1134838596"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
              >
                <option value="kerala">Kerala</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Place</label>
              <input
                type="text"
                name="entry.1417227706"
                placeholder="Enter your place"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
              />
            </div>
            <div>
              <label className="block mb-2">Applying For*</label>
              <select
                name="entry.1918272066"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                defaultValue="oet"
              >
                <option value="oet">OET Trainer</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Designation</label>
              <input
                type="text"
                name="entry.136758487"
                placeholder="Enter your designation"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
              />
            </div>
            <div>
              <label className="block mb-2">Years of Experience</label>
              <input
                type="text"
                name="entry.288364632"
                placeholder="Enter years of experience"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Additional Information</label>
            <textarea
              name="entry.534433028"
              className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light min-h-[100px]"
              placeholder="Enter message"
            />
          </div>

          {/* <div className="space-y-2">
            <label>Add an attachment*</label>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                Max. 10 MB (Type: pdf, doc, png, jpeg, docx)
              </div>
              <input
                type="file"
                id="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.png,.jpeg,.jpg"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  if (selectedFile) {
                    setFile(selectedFile);
                    handleFileUpload(selectedFile);
                  }
                }}
              />
              <Button
                variant="outline"
                className="ml-auto"
                onClick={() => document.getElementById("file")?.click()}
              >
                Select your file
              </Button>
            </div>
          </div> */}

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="entry.704230229"
              value="yes"
              id="consent"
              className="mt-1"
              required
            />
            <label htmlFor="consent" className="text-sm">
              I have read the{" "}
              <a href="#" className="text-blue-600">
                privacy policy
              </a>{" "}
              and consent to the processing of my data for the purpose of
              handling my enquiry
            </label>
          </div>

          <SheetFooter>
            <Button
              type="submit"
              className="w-full md:w-auto bg-black text-white hover:bg-black/90"
            >
              Submit
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

const CareerTemplate = ({ position }: CareerTemplateProps) => {
  return (
    <div className="container mx-auto px-5 py-8 mt-20 md:py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl">Join Our Team</h2>
        <div className="space-y-0 md:space-y-4">
          <div className="flex justify-between my-5 md:my-10">
            <h1 className="text-4xl md:text-5xl font-light">
              {position.title}
            </h1>
            <ApplicationSheet>
              <button className="hidden md:flex items-center space-x-2 bg-black text-white px-6 py-3 hover:opacity-90">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </ApplicationSheet>
          </div>
          <hr className="hidden md:block border-stone-400" />
          <div className="flex flex-col md:flex-row gap-x-2 font-medium">
            <span>{position.experience}</span>
            <span className="hidden md:block">|</span>
            <span>{position.type}</span>
            <span className="hidden md:block">|</span>
            <span>{position.location}</span>
          </div>
          <hr className="border-stone-400" />
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-4xl font-light">About Us</h2>
            <p>{position.aboutUs}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-4xl font-light">Key Responsibilities</h2>
            <ul className="list-disc pl-8 space-y-2">
              {position.keyResponsibilities.map((responsibility, index) => (
                <li key={index}>
                  <p className="text-lg">{responsibility}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-4xl font-light">Qualifications</h2>
            <ul className="list-disc pl-8 space-y-2">
              {position.qualifications.map((qualification, index) => (
                <li key={index}>
                  <p className="text-lg">{qualification}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-4xl font-light">What We Offer</h2>
            <ul className="list-disc pl-8 space-y-2">
              {position.whatWeOffer.map((offer, index) => (
                <li key={index}>
                  <p className="text-lg">{offer}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-4xl font-light">Join Our Team</h2>
            <p>
              Thank you for your interest in becoming a valued member of the
              EZmigrate family. We&apos;re excited to explore your skills and
              experiences as we work together to create brighter futures for
              aspiring students worldwide.
            </p>
          </section>

          <ApplicationSheet>
            <button className="w-full justify-center md:justify-normal md:w-auto flex items-center space-x-2 bg-black text-white px-6 py-3 hover:opacity-90">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </ApplicationSheet>
        </div>
      </div>
    </div>
  );
};

export default CareerTemplate;
