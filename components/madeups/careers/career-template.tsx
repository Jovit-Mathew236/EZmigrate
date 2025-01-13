import React from "react";
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

interface CareerTemplateProps {
  position: CareerPosition;
}

const ApplicationSheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="space-y-4 mb-6">
          <SheetTitle className="text-2xl text-left font-light">
            We&apos;re Hiring! Submit Your Application
          </SheetTitle>
        </SheetHeader>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">First Name*</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Last Name*</label>
              <input
                type="text"
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
                  className="flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light border-l-0"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Country</label>
              <select
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                defaultValue="India"
              >
                <option value="India">India</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">State</label>
              <select className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white">
                <option value="">Select state</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Place</label>
              <input
                type="text"
                placeholder="Enter your place"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
              />
            </div>
            <div>
              <label className="block mb-2">Applying For*</label>
              <select
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                defaultValue="OET Trainer"
              >
                <option value="OET Trainer">OET Trainer</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Designation</label>
              <input
                type="text"
                placeholder="Enter your designation"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
              />
            </div>
            <div>
              <label className="block mb-2">Years of Experience</label>
              <input
                type="text"
                placeholder="Enter years of experience"
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Additional Information</label>
            <textarea
              className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light min-h-[100px]"
              placeholder="Enter message"
            />
          </div>

          <div className="space-y-2">
            <label>Add an attachment*</label>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">
                Max. 10 MB (Type: pdf, doc, png, jpeg, docx)
              </div>
              <Button variant="outline" className="ml-auto">
                Select your file
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="consent" className="mt-1" />
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
