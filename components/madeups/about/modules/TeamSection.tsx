import React from "react";
import Image from "next/image";

const teamMembers = [
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
];

const TeamSection = () => {
  return (
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
          dedicated to making your migration journey smooth and successful. With
          personalized guidance and deep expertise, we turn your dreams into
          reality.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {teamMembers.map((member, index) => (
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
              <h3 className="text-lg md:text-2xl font-light">{member.name}</h3>
              <p className="text-gray-600 text-sm font-medium md:font-light md:text-base">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
