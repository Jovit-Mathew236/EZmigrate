import Image from "next/image";
import React from "react";
import TeamSection from "../about/modules/TeamSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CareersPage = () => {
  return (
    <>
      <div className="container mx-auto px-5 pt-8 mt-20 md:py-12">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-extralight">Join Our Team</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <h1 className="text-4xl md:text-5xl font-light leading-tight flex-1">
                Elevate Your Career With EZMigrate
              </h1>
              <p className="text-gray-600 flex-1">
                We&apos;re always looking for passionate and driven individuals
                to join our dynamic team. If you&apos;re ready to make a
                difference and grow with us, explore exciting opportunities and
                take your career to new heights. Together, let&apos;s create a
                lasting impact and achieve greatness.
              </p>
            </div>
          </div>

          <div className="relative w-screen -ml-5 md:ml-0 md:w-full aspect-video overflow-hidden">
            <Image
              src="/images/careers.webp"
              alt="Students collaborating outdoors"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-black text-white mx-auto px-5 py-8 md:py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light mb-20">Current Openings</h2>

          <div className="space-y-8">
            {[
              // "Student Counsellor (Fresher)",
              // "Senior Student Counsellor",
              // "PTE Trainer",
              "OET Trainer",
              // "OSCE Trainer",
              // "IELTS Trainer",
              // "Receptionist",
              // "Accountant",
            ].map((position) => (
              <div
                key={position}
                className="flex flex-col md:flex-row md:items-center gap-8 justify-between border-b border-gray-400 pb-8"
              >
                <h3 className="text-2xl font-light">{position}</h3>
                <Link
                  href={`/careers/${position
                    .toLowerCase()
                    .replace(/[()]/g, "")
                    .replace(/\s+/g, "-")}`}
                  className="flex items-center space-x-2 text-sm font-light hover:opacity-80"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TeamSection />
    </>
  );
};

export default CareersPage;
