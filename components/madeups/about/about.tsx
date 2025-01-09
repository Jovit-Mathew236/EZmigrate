import React from "react";
import Image from "next/image";
import StatsSection from "../Home/modules/stats-section";
import WhySection from "./WhySection";

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

const AboutPage = () => {
  return (
    <div>
      <div className="container mx-auto px-5 pt-8 mt-20 md:py-12">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-extralight">About Us</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <h1 className="text-4xl md:text-5xl font-light leading-tight flex-1">
                Empowering Global Education Aspirations
              </h1>
              <p className="text-gray-600 flex-1">
                EZmigrate Limited is a trusted consultancy helping students
                achieve their dream of studying abroad. Registered in New
                Zealand and India, we provide expert guidance for top
                universities worldwide, backed by a commitment to transparency,
                trust, and personalized support.
              </p>
            </div>
          </div>

          <div className="relative w-screen -ml-5  md:ml-0 md:w-full aspect-video overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Students collaborating outdoors"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <StatsSection />
      <WhySection />
      <div className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-2">Our Vision</h2>
          <h3 className="text-blue-500 text-xl font-light md:text-3xl mb-6">
            Shaping Futures Globally
          </h3>
          <p className="max-w-5xl mx-auto text-xl md:text-3xl font-light leading-relaxed">
            To be the most trusted and impactful overseas education consultancy,
            empowering students to achieve academic and career excellence
            worldwide.
          </p>
        </div>
      </div>

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

      {/* meet section */}
      <div className="container mx-auto px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium">
            Meet Our
            <br />
            Expert Team
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the passionate professionals behind EZMigrate. Our team of
            experienced immigration consultants, advisors, and support staff are
            dedicated to making your migration journey smooth and successful.
            With personalized guidance and deep expertise, we turn your dreams
            into reality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              name: "Georgukutty Mathew",
              role: "Chief Operations Manager",
              image: "/images/team/georgukutty.jpg",
            },
            {
              name: "Asakh Salim Kumar",
              role: "Business Development Manager",
              image: "/images/team/asakh.jpg",
            },
            {
              name: "Febin Jose Thekkan",
              role: "Relationship Manager",
              image: "/images/team/febin.jpg",
            },
            {
              name: "Shamsher Singh",
              role: "Licensed Immigration Advisor",
              image: "/images/team/shamsher.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="md:space-y-4">
              <div className="aspect-[3/4] relative bg-black">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-light">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm font-medium md:font-light md:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
