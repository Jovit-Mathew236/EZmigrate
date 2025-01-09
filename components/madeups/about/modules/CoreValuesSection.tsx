import React from "react";
import Image from "next/image";

const coreValues = [
  {
    icon: "/icons/search.svg",
    title: "Transparency",
    description:
      "Open and honest communication is the cornerstone of our relationships, ensuring clarity and trust every step of the way.",
  },
  {
    icon: "/icons/fire.svg",
    title: "Passion",
    description:
      "Driven by a commitment to student success, we go above and beyond to empower you to achieve your goals.",
  },
  {
    icon: "/icons/checkSquare.svg",
    title: "Accountability",
    description:
      "We deliver on promises and take responsibility for your success, ensuring you always feel supported.",
  },
  {
    icon: "/icons/target.svg",
    title: "Integrity",
    description:
      "Upholding ethical standards in every decision, we build lasting trust through honesty and dedication.",
  },
  {
    icon: "/icons/shield.svg",
    title: "Reliability",
    description:
      "Dependable support you can trust, guiding you confidently through every phase of your journey.",
  },
  {
    icon: "/icons/team.svg",
    title: "Teamwork",
    description:
      "Through collaboration, we create seamless solutions tailored to your aspirations and needs.",
  },
];

const CoreValuesSection = () => {
  return (
    <div className="bg-stone-600 mx-auto py-16 md:py-24">
      <div className="container mx-auto px-5 md:text-center">
        <div className="md:text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-2">
            Our Core Values
          </h2>
          <h3 className="text-blue-500 text-xl font-light md:text-3xl mb-6">
            What Drives Us
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="flex gap-4 text-left">
              <div className="w-20 h-20">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <div>
                <h3 className="text-3xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-600 font-light text-lg">
                  {value.description}
                </p>
                <div className="mt-8 border-b border-gray-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
