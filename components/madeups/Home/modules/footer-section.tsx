"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faYoutube,
  faFacebookF,
  faInstagram,
  // faXTwitter,
  // faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Check } from "lucide-react";

const FooterSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <footer className="relative z-10 bg-black text-white py-16">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="space-y-6">
            <Image
              src="/EZmigrateWhite.svg"
              alt="EZmigrate Logo"
              width={200}
              height={50}
              className="h-16 md:h-24 w-auto"
            />
            <p className="text-gray-300 max-w-xs md:max-w-sm font-light">
              Studying abroad opens doors to global success. Let us make your
              dream a reality!
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-xl mb-6">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "About",
                  "Services",
                  "Study Abroad",
                  "Visa",
                  "Programs",
                  "Join our Team",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Join our Team"
                          ? "/careers"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-xl mb-6">Destinations</h3>
              <ul className="space-y-2">
                {[
                  "New Zealand",
                  "Germany",
                  "UK",
                  "USA",
                  "Canada",
                  "Georgia",
                ].map((country) => (
                  <li key={country}>
                    <Link
                      href={`/study-abroad/${country
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {country}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="text-xl mb-6">Newsletter</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Subscribe to our newsletter</p>
                <iframe
                  name="hiddenFrame"
                  id="hiddenFrame"
                  style={{ display: "none" }}
                  title="Hidden form target"
                />
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLScjoTZF0Ob_VfUVTAxIPbuxHVRTJzOlua_b7KrRz-n_pHco5Q/formResponse"
                  method="POST"
                  target="hiddenFrame"
                  className="space-y-2"
                  onSubmit={(e) => {
                    if (!isSubmitted) {
                      setIsSubmitted(true);
                      // Reset form after 3 seconds
                      setTimeout(() => {
                        setIsSubmitted(false);
                        (e.target as HTMLFormElement).reset();
                      }, 3000);
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="flex gap-4">
                    <input
                      type="email"
                      name="entry.1843379350"
                      placeholder="Email"
                      className="flex-2 w-full sm:w-auto px-4 py-2 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                      required
                    />
                    <button
                      type="submit"
                      className="flex-1 w-full sm:w-auto px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          Subscribed
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-400">
                    By submitting, you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-white font-regular hover:text-white"
                    >
                      Privacy policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              EZmigrate © 2024 All rights reserved
            </div>
            <div className="flex space-x-4">
              <Link
                href="/privacy-policy"
                className="text-gray-400 font-bold hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              {/* <span className="text-gray-400">|</span>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms & Conditions
              </Link> */}
            </div>
            <div className="flex space-x-6">
              {[
                // { href: "https://youtube.com", icon: faYoutube },
                { href: "http://m.me/ezmigratelimited", icon: faFacebookF },
                // { href: "https://linkedin.com", icon: faLinkedinIn },
                { href: "https://ig.me/m/ezmigrate", icon: faInstagram },
                // { href: "https://twitter.com", icon: faXTwitter },
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
