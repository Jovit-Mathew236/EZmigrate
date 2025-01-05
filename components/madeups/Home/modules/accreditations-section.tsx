import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const accreditationLogos = [
  { src: "/images/logos/c1.png", alt: "CGFNS International" },
  { src: "/images/logos/c2.png", alt: "Think New" },
  { src: "/images/logos/c3.png", alt: "Australian Government" },
  { src: "/images/logos/c4.png", alt: "UK Agent Quality Framework" },
  { src: "/images/logos/c5.png", alt: "Nursing Council of New Zealand" },
  { src: "/images/logos/c6.png", alt: "Nursing and Midwifery Board" },
];

const AccreditationsSection = () => {
  return (
    <div className="relative z-10 bg-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="hidden lg:block text-4xl md:text-6xl font-light mb-6">
              Accreditations
              <br />
              and membership
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8 max-w-xl">
              EZmigrate holds prestigious memberships, reflecting our commitment
              to providing trusted and reliable services for aspiring
              international students.
            </p>
            <Link
              href="/schedule"
              className="inline-flex font-light w-full md:w-auto justify-center items-center bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300"
            >
              Schedule an appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-3 border gap-px bg-gray-200">
              {accreditationLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-8 flex items-center justify-center min-h-[100px] md:min-h-[140px]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationsSection;
