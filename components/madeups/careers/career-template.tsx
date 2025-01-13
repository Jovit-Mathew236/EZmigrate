import React from "react";
import { CareerPosition } from "@/types/careers";
import { ArrowRight } from "lucide-react";

interface CareerTemplateProps {
  position: CareerPosition;
}

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
            <button className="hidden md:flex items-center space-x-2 bg-black text-white px-6 py-3 hover:opacity-90">
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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

          <button className="w-full md:w-auto flex items-center space-x-2 bg-black text-white px-6 py-3 hover:opacity-90">
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerTemplate;
