"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import TextReveal from "@/components/ui/text-reveal";
import { useState, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { Plane } from "lucide-react";

const destinationCards = [
  {
    country: "New Zealand",
    countryCode: "NZ",
    image: "/images/destination_banner_new_zealand.png",
    description: "Explore globally recognized education systems.",
    link: "/destinations/new-zealand",
  },
  {
    country: "Germany",
    countryCode: "DE",
    image: "/images/destination_banner_germany.png",
    description: "Tuition-free education with cutting-edge innovation.",
    link: "/destinations/germany",
  },
  {
    country: "UK",
    countryCode: "GB",
    image: "/images/destination_banner_uk.png",
    description: "Top universities in a rich cultural setting.",
    link: "/destinations/uk",
  },
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.png",
    description: "Excellence in education and limitless opportunities.",
    link: "/destinations/usa",
  },
  {
    country: "Canada",
    countryCode: "CA",
    image: "/images/destination_banner_canada.png",
    description: "Quality education in a diverse, welcoming environment.",
    link: "/destinations/canada",
  },
  {
    country: "Australia",
    countryCode: "AU",
    image: "/images/destination_banner_australia.png",
    description: "Globally recognized degrees in vibrant cities.",
    link: "/destinations/australia",
  },
];

const HomePage = () => {
  // Add state for managing visible cards
  const [visibleCards, setVisibleCards] = useState(3);

  // Add useEffect to handle viewport changes
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 740 ? 3 : 6);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/video/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5" />

      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/EZmigrateWhite.svg"
                alt="EZmigrate Logo"
                className="h-8"
                width={160}
                height={40}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-white hover:text-gray-300 text-sm">
                Home
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-gray-300 text-sm"
              >
                Services
              </Link>
              <Link
                href="/study-abroad"
                className="text-white hover:text-gray-300 text-sm"
              >
                Study Abroad
              </Link>
              <Link
                href="/programs"
                className="text-white hover:text-gray-300 text-sm"
              >
                Programs
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 text-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 text-sm"
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="text-white hover:text-gray-300 text-sm"
              >
                Careers
              </Link>
              <Link
                href="/login"
                className="text-white hover:text-gray-300 text-sm"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-end justify-start min-h-screen pb-20">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl text-white mb-6">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Empowering Dreams of
              <br />
              Studying Abroad
            </h1>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-xl hover:underline"
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

      {/* Stats Section */}
      <div className="hidden md:block relative z-10 min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left side - Main text */}
            <div className="max-w-2xl mb-16 md:mb-0 text-white">
              <TextReveal
                text="Turning Aspirations into Achievements"
                className="text-5xl md:text-7xl font-light leading-tight whitespace-pre-line text-white"
                stats={
                  <div className="flex flex-col items-center">
                    <div className="text-6xl md:text-8xl font-light mb-2">
                      5000+
                    </div>
                    <div className="text-2xl font-light md:text-3xl text-gray-200">
                      Students placed
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* center side - Main text */}
            <div className="mb-16 md:mb-0 text-white">
              <TextReveal
                text="Studying abroad opens doors to global success. Let us make your dream a reality!"
                className="text-5xl md:text-7xl font-light leading-tight whitespace-pre-line text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden relative z-10 bg-black text-white py-10">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light mb-6">
              Turning Aspirations into Achievements
            </h2>
            <p className="text-xl font-light">
              Studying abroad opens doors to global success. Let us make your
              dream a reality!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            <div>
              <div className="text-5xl font-light flex">
                <NumberTicker value={5000} /> +
              </div>
              <div className="text-xl mt-2 font-light">Students placed</div>
            </div>

            <div>
              <div className="text-5xl font-light flex">
                <NumberTicker value={700} /> +
              </div>
              <div className="text-xl mt-2 font-light">Universities</div>
            </div>

            <div>
              <div className="text-5xl font-light flex">
                <NumberTicker value={10000} /> +
              </div>
              <div className="text-xl mt-2 font-light">Programs</div>
            </div>

            <div>
              <div className="text-5xl font-light flex">
                <NumberTicker value={30} /> +
              </div>
              <div className="text-xl mt-2 font-light">Countries</div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/learn-more"
              className="inline-flex w-full justify-center items-center border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

      {/* Destinations Section */}
      <div className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-4">Destinations</h2>
          <p className="text-xl md:text-2xl font-light mb-12">
            &quot;Explore Your Dream Destinations: Where Your Academic Journey
            Begins!&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationCards
              .slice(0, visibleCards)
              .map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-48 flex items-end justify-center">
                    <Image
                      src={destination.image}
                      alt={`${destination.country} cityscape`}
                      fill
                      className="object-cover"
                    />
                    <div className="z-10 -mb-3  w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <Plane color="white" size={20} />
                    </div>
                  </div>

                  {/* Content Section */}
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
                        <h3 className=" font-light">{destination.country}</h3>
                        <p className="text-gray-600 text-sm">
                          {destination.description}
                        </p>
                      </div>
                    </div>

                    {/* Ticket perforation line */}
                    <div className="relative my-4">
                      <div className="absolute -left-9 -top-3 h-6 w-6 rounded-full bg-gray-100"></div>
                      <div className="absolute -right-9 -top-3 h-6 w-6 rounded-full bg-gray-100"></div>
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

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
            >
              View more destinations
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
    </main>
  );
};

export default HomePage;
