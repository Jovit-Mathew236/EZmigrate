"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { Plane } from "lucide-react";

const destinationCards = [
  {
    country: "New Zealand",
    countryCode: "NZ",
    image: "/images/destination_banner_new_zealand.webp",
    description: "Explore globally recognized education systems.",
    link: "/study-abroad/new-zealand",
  },
  {
    country: "Germany",
    countryCode: "DE",
    image: "/images/destination_banner_germany.webp",
    description: "Tuition-free education with cutting-edge innovation.",
    link: "/study-abroad/germany",
  },
  {
    country: "UK",
    countryCode: "GB",
    image: "/images/destination_banner_uk.webp",
    description: "Top universities in a rich cultural setting.",
    link: "/study-abroad/uk",
  },
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.webp",
    description: "Excellence in education and limitless opportunities.",
    link: "/study-abroad/usa",
  },
  {
    country: "Canada",
    countryCode: "CA",
    image: "/images/destination_banner_canada.webp",
    description: "Quality education in a diverse, welcoming environment.",
    link: "/study-abroad/canada",
  },
  {
    country: "Australia",
    countryCode: "AU",
    image: "/images/destination_banner_australia.webp",
    description: "Globally recognized degrees in vibrant cities.",
    link: "/study-abroad/australia",
  },
];

const DestinationsSection = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 3 : 6);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-10 bg-stone-600 py-20" id="destination">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light mb-4">Destinations</h2>
        <p className="text-xl md:text-2xl font-light mb-12">
          &quot;Explore Your Dream Destinations: Where Your Academic Journey
          Begins!&quot;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationCards.slice(0, visibleCards).map((destination, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 flex items-end justify-center">
                <Image
                  src={destination.image}
                  alt={`${destination.country} cityscape`}
                  fill
                  quality={100}
                  className="object-cover"
                />
                <div className="z-10 -mb-4 w-8 h-8 bg-black rounded-full flex items-center rotate-45 justify-center">
                  <Plane color="white" fill="white" size={20} />
                </div>
              </div>

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
                    <h3 className="font-light">{destination.country}</h3>
                    <p className="text-gray-600 text-sm">
                      {destination.description}
                    </p>
                  </div>
                </div>

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
            href="/study-abroad"
            className="inline-flex w-full md:w-auto justify-center items-center border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
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
  );
};

export default DestinationsSection;
