import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ConnectExpertSection = () => {
  return (
    <div className="relative z-10 bg-stone-600 py-20">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Connect with our
              <br />
              Study Abroad Expert
            </h2>
            <p className="text-lg font-light md:text-xl text-gray-600 mb-8">
              At EZmigrate, we guide you every step of the way from choosing
              your study destination to finding the perfect course and
              university, ensuring a seamless journey toward your global dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex font-light justify-center items-center bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300"
              >
                Schedule an appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {/* <Link
                href="/about"
                className="inline-flex justify-center items-center border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Learn more
              </Link> */}
            </div>
          </div>

          <div className="space-y-6">
            <Link
              href="mailto:info@ezmigrate.co.nz"
              className="block p-6 bg-white border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-info">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-600 font-regular">
                      Email
                    </h3>
                    <p className="text-lg font-bold">info@ezmigrate.co.nz</p>
                  </div>
                </div>
                <ArrowRight size={32} strokeWidth={1} />
              </div>
            </Link>

            <Link
              href="https://wa.me/642109029528"
              className="block p-6 bg-white border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-info">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-600 font-regular">
                      WhatsApp
                    </h3>
                    <p className="text-lg font-bold">+64 210 902 9528</p>
                  </div>
                </div>
                <ArrowRight size={32} strokeWidth={1} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectExpertSection;
