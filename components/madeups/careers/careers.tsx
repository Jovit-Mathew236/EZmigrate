import Image from "next/image";
import React from "react";

const CareersPage = () => {
  return (
    <div className="container mx-auto px-5 pt-8 mt-20 md:py-12">
      <div className="grid grid-cols-1 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-extralight">Join Our Team</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="text-4xl md:text-5xl font-light leading-tight flex-1">
              Elevate Your Career With EZMigrate
            </h1>
            <p className="text-gray-600 flex-1">
              We’re always looking for passionate and driven individuals to join
              our dynamic team. If you&apos;re ready to make a difference and
              grow with us, explore exciting opportunities and take your career
              to new heights. Together, let&apos;s create a lasting impact and
              achieve greatness.
            </p>
          </div>
        </div>

        <div className="relative w-screen -ml-5 md:ml-0 md:w-full aspect-video overflow-hidden">
          <Image
            src="/images/careers.png"
            alt="Students collaborating outdoors"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
