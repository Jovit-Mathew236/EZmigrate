"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const locationData = [
  {
    country: "INDIA",
    countryCode: "IN",
    image: "/images/india.webp",
    address:
      "Thannickal Towers, Kothaikunnu Bypass, Thodupuzha - 685575, Kerala, India",
    phone: {
      label: "General Enquiry",
      number: "+91 12345 67890",
    },
    email: {
      label: "Email",
      address: "info@ezmigrate.co.nz",
    },
  },
  {
    country: "NEW ZEALAND",
    countryCode: "NZ",
    image: "/images/newzealand.webp",
    address: "19 Halyard Close, Flagstaff, Hamilton, New Zealand - 3210",
    phone: {
      label: "General Enquiry",
      number: "+64 210 288 7688",
    },
    email: {
      label: "Email",
      address: "info@ezmigrate.co.nz",
    },
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hiddenConfirm"
        id="hiddenConfirm"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted) {
            toast.success("Form submitted successfully!", {
              className: "bg-emerald-600/50 text-emerald-800",
            });
            setSubmitted(false);
            const form = document.querySelector("form");
            if (form) form.reset();
          }
        }}
      />
      <div className="container mt-20 mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Section - Header */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Get in
              <br />
              Touch with
              <br />
              EZmigrate
            </h1>
            <p className="text-gray-600 text-lg font-light">
              Contact EZmigrate for expert support and assistance!
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="flex-[1.5]">
            <div className="relative">
              <h2 className="text-xl font-medium mb-8">General Enquiry</h2>
              <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-stone-500"></div>
              <div className="absolute -bottom-4 left-0 w-40 h-0.5 bg-info"></div>
            </div>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdOryWutLRByyS0QSyuHkgOSiR_Y51hQf4KVIZTb4mi29tsHg/formResponse"
              method="POST"
              target="hiddenConfirm"
              className="space-y-6"
              onSubmit={() => setSubmitted(true)}
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">First Name*</label>
                  <input
                    type="text"
                    name="entry.430808753"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    name="entry.1470432501"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block mb-2">Email*</label>
                  <input
                    type="email"
                    name="entry.1015471046"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block mb-2">Phone Number*</label>
                  <div className="flex">
                    <div className="max-w-max flex items-center border border-b-black border-stone-400 pl-3 pr-6 md:px-3">
                      <ReactCountryFlag
                        countryCode="IN"
                        svg
                        style={{
                          width: "24px",
                          height: "16px",
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                        title="India"
                      />
                      <span className="ml-2">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="entry.832855793"
                      className="w-full flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light border-l-0"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp Checkbox */}
                <div>
                  <label className="w-fit flex items-center gap-2">
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
                {/* WhatsApp Number */}
                <div>
                  <label className="block mb-2">WhatsApp Number*</label>
                  <div className="flex">
                    <div className="max-w-max flex items-center border border-b-black border-stone-400 pl-3 pr-6 md:px-3">
                      <ReactCountryFlag
                        countryCode="IN"
                        svg
                        style={{
                          width: "24px",
                          height: "16px",
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                        title="India"
                      />
                      <span className="ml-2">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="entry.1472688816"
                      className="w-full flex-1 p-3 border border-b-black border-stone-400 placeholder:font-light border-l-0"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                {/* Category Dropdown */}
                <div>
                  <label className="block mb-2">Category*</label>
                  <select
                    name="entry.1882265817"
                    className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                    required
                  >
                    <option value="">Select a Category</option>
                    <option value="visa">Visa Services</option>
                    <option value="study-abroad">Study Abroad</option>
                    <option value="programs">Training Programs</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block mb-2">
                  Subject / Visa / Preferred Program*
                </label>
                <input
                  type="text"
                  name="entry.1134838596"
                  className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                  required
                />
              </div>

              {/* Tell Us More */}
              <div>
                <label className="block mb-2">Tell Us More*</label>
                <textarea
                  name="entry.1417227706"
                  className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light min-h-[120px]"
                  required
                />
              </div>

              {/* Privacy Policy */}
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="entry.1918272066"
                    className="w-5 h-5 self-start"
                    required
                  />
                  <span className="text-sm">
                    I have read the{" "}
                    <a href="#" className="text-blue-600">
                      privacy policy
                    </a>{" "}
                    and consent to the processing of my data for the purpose of
                    handling my enquiry
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 flex items-center gap-2"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-stone-600 mx-auto">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Our Locations</h2>
            <p className="">Find a EZmigrate location near you.</p>
          </div>

          <div className="space-y-12">
            {locationData.map((location, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-12 last:border-b-0"
              >
                {/* Left Section - Image and Country Info */}
                <div className="flex-2 xl:w-[500px]">
                  <div className="relative md:aspect-[16/7] h-[200px] overflow-hidden mb-4">
                    <Image
                      src={location.image}
                      alt={`${location.country} Office`}
                      fill
                      className="object-cover bg-top"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <ReactCountryFlag
                      countryCode={location.countryCode}
                      svg
                      style={{
                        width: "38px",
                        height: "30px",
                      }}
                    />
                    <h3 className="text-4xl font-medium">{location.country}</h3>
                  </div>

                  <p className="text-lg mb-4 w-full">{location.address}</p>

                  <Link
                    href="#"
                    className="inline-flex font-medium items-center gap-2 underline underline-offset-8 hover:text-black"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Google Map</span>
                  </Link>
                </div>

                {/* Right Section - Contact Cards */}
                <div className="flex-1 flex flex-col flex-wrap h-fit md:flex-row gap-4">
                  <Link
                    href={`tel:${location.phone.number}`}
                    className="flex-1 block p-6 bg-white h-fit border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-info">
                          <svg
                            className="w-8 h-8 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm text-gray-600 font-regular">
                            {location.phone.label}
                          </h3>
                          <p className="text-lg font-bold">
                            {location.phone.number}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href={`mailto:${location.email.address}`}
                    className="flex-1 block p-6 bg-white h-fit border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-info">
                          <svg
                            className="w-8 h-8 text-blue-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm text-gray-600 font-regular">
                            {location.email.label}
                          </h3>
                          <p className="text-lg font-bold">
                            {location.email.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
