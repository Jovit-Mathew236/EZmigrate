"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { Plane } from "lucide-react";
import { pageHeaders } from "@/types/page-headers";
import PageHeader from "@/components/shared/page-header";
import { studyAbroadDestinations } from "@/types/study-abroad";

const StudyAboard = () => {
  return (
    <div className="flex flex-col">
      <PageHeader content={pageHeaders["study-abroad"]} />

      <div className="bg-black">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light text-white pb-12">
            Popular Study Abroad Destinations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyAbroadDestinations.map((destination, index) => (
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
                  <div className="z-10 -mb-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Plane color="white" size={20} />
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
                        {destination.subTitle}
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
        </div>
      </div>
    </div>
  );
};

export default StudyAboard;
