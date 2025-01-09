"use client";

import React from "react";
import ReactCountryFlag from "react-country-flag";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
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
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">First Name*</label>
                <input
                  type="text"
                  className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
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
                    type="radio"
                    className="w-4 h-4"
                    name="whatsappNumber"
                    defaultChecked={false}
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
                  className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light appearance-none bg-white"
                  required
                >
                  <option value="">Visa / Program / Others</option>
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
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light"
                required
              />
            </div>

            {/* Tell Us More */}
            <div>
              <label className="block mb-2">Tell Us More*</label>
              <textarea
                className="w-full p-3 border border-b-black border-stone-400 placeholder:font-light min-h-[120px]"
                required
              />
            </div>

            {/* Privacy Policy */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
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
  );
};

export default Contact;
