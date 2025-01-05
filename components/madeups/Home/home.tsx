"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import TextReveal from "@/components/ui/text-reveal";
import { useState, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { ArrowRight, Mail, Plane } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
  faXTwitter,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Marquee from "@/components/ui/marquee";

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

const studentStories = [
  {
    name: "Jincy Ouseph",
    avatar: "/images/female.png",
    testimonial:
      '"I was really pleased with EZmigrate\'s assistance with the New Zealand VISA and prompt entrance to the CAP course. Extremely dependable and quick."',
  },
  {
    name: "Santhosh Kumar",
    avatar: "/images/male.png",
    testimonial:
      '"I was really pleased with EZmigrate\'s assistance with the New Zealand VISA and prompt entrance to the CAP course. Extremely dependable and quick."',
  },
  // Add more testimonials as needed
];

const blogPosts = [
  {
    title: "Top Study Abroad Destinations for 2024",
    image: "/images/blog1.png",
    readTime: "13 mins read",
    date: "November 28, 2024",
    author: "Anjaly Chandran",
    alt: "Study Abroad 2024",
  },
  {
    title: "Why Studying Abroad is a Game-Changer",
    image: "/images/blog2.png",
    readTime: "25 mins read",
    date: "November 28, 2024",
    author: "John",
    alt: "Why Study Abroad",
  },
  {
    title: "Affordable Countries for Quality Education",
    image: "/images/blog3.png",
    readTime: "5 mins read",
    date: "November 28, 2024",
    author: "Evan",
    alt: "Affordable Education",
  },
];

const TestimonialCard = ({
  name,
  avatar,
  testimonial,
}: {
  name: string;
  avatar: string;
  testimonial: string;
}) => {
  return (
    <figure className="relative w-72 md:w-96 cursor-pointer overflow-hidden border border-stone-400 p-6 mx-4 bg-white">
      <div className="flex flex-row items-center gap-4">
        <Image
          className="rounded-full border-2 border-stone-500 w-12 h-12 p-2 object-contain"
          width={100}
          height={100}
          alt={name}
          src={avatar}
        />
        <figcaption className="text-lg font-medium">{name}</figcaption>
      </div>
      <p className="mt-4 text-gray-600 font-light">{testimonial}</p>
    </figure>
  );
};

const accreditationLogos = [
  {
    src: "/images/logos/c1.png",
    alt: "CGFNS International",
  },
  {
    src: "/images/logos/c2.png",
    alt: "Think New",
  },
  {
    src: "/images/logos/c3.png",
    alt: "Australian Government",
  },
  {
    src: "/images/logos/c4.png",
    alt: "UK Agent Quality Framework",
  },
  {
    src: "/images/logos/c5.png",
    alt: "Nursing Council of New Zealand",
  },
  {
    src: "/images/logos/c6.png",
    alt: "Nursing and Midwifery Board",
  },
];

// Add this new component for the mobile menu overlay
const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed inset-0 bg-black transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full pt-20 px-6">
        <Link
          href="/"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Services
        </Link>
        <Link
          href="/study-abroad"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Study Abroad
        </Link>
        <Link
          href="/visa"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Visa
        </Link>
        <Link
          href="/programs"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Programs
        </Link>
        <Link
          href="/about"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          About
        </Link>
        <Link
          href="/careers"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Careers
        </Link>
        <Link
          href="/blog-posts"
          className="py-4 text-white text-2xl font-light border-b border-white/10"
        >
          Blog Posts
        </Link>
        <Link
          href="/contact-us"
          className="mt-auto mb-8 py-4 text-center text-white text-2xl font-light bg-blue-600"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Add this useEffect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <main className="relative min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
      >
        <source src="/video/home.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-5" />

      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 bg-white md:bg-transparent">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/EZmigrateWhite.svg"
                alt="EZmigrate Logo"
                className="h-8 w-fit [filter:invert(1)] md:filter-none"
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

            {/* Mobile Login Button - Always visible on mobile */}
            <div className="flex flex-row items-center">
              <Link
                href="/login"
                className="md:hidden px-3 py-2 bg-black text-white text-sm"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden w-6 h-6 flex flex-col justify-center items-center ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span
                  className={`
                block w-8 h-[2px] bg-black 
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1"}
              `}
                ></span>
                <span
                  className={`
                block w-8 h-[2px] bg-black
                transition-all duration-300 ease-in-out
                ${
                  isMenuOpen ? "-rotate-45 -translate-y-[0px]" : "translate-y-1"
                }
              `}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} />

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
      <div className="relative z-10 bg-stone-600 py-20">
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
                  className="bg-white shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-48 flex items-end justify-center">
                    <Image
                      src={destination.image}
                      alt={`${destination.country} cityscape`}
                      fill
                      quality={100}
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

      {/* story section */}
      <div className="relative z-10 bg-black md:bg-black/50 py-10 md:h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 md:flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-light">
            Our Story
          </h1>
          <p className="text-white mt-12 md:text-center text-xl md:text-4xl font-light max-w-4xl">
            EZmigrate transforms dreams into global success. With expert
            guidance and personalized support, we help students find the perfect
            course, university, and destination, turning aspirations into
            achievements.
          </p>
          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex w-full md:w-auto justify-center items-center border border-white text-white px-16 py-4 hover:bg-white hover:text-black transition-colors duration-300"
            >
              About us
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

      {/* Connect with Expert Section */}
      <div className="relative z-10 bg-stone-600 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Connect with our
                <br />
                Study Abroad Expert
              </h2>
              <p className="text-lg font-light md:text-xl text-gray-600 mb-8">
                At EZmigrate, we guide you every step of the way from choosing
                your study destination to finding the perfect course and
                university, ensuring a seamless journey toward your global
                dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/schedule"
                  className="inline-flex font-light justify-center items-center bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300"
                >
                  Schedule an appointment
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
                <Link
                  href="/learn-more"
                  className="inline-flex justify-center items-center border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Right Column */}
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
                href="https://wa.me/911234567890"
                className="block p-6 bg-white border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-info">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="2x"
                        // style={{ color: "hsl(var(--info))" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-600 font-regular">
                        WhatsApp
                      </h3>
                      <p className="text-lg font-bold">+91 12345 67890</p>
                    </div>
                  </div>
                  <ArrowRight size={32} strokeWidth={1} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Student Stories Section */}
      <div className="relative z-10 bg-stone-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-4">
              Student Stories
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600">
              Hear from our success stories
            </p>
          </div>

          <div className="relative">
            <Marquee pauseOnHover className="[--duration:40s]" showControls>
              {studentStories.map((story, index) => (
                <TestimonialCard key={index} {...story} />
              ))}
            </Marquee>

            <div className="hidden md:block pointer-events-none absolute inset-y-0 -left-1 w-24 bg-gradient-to-r from-stone-500"></div>
            <div className="hidden md:block pointer-events-none absolute inset-y-0 -right-1 w-24 bg-gradient-to-l from-stone-500"></div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="relative z-10 bg-black text-white py-10 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-10 md:mb-16">
            Blog Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span className="font-light text-xs">{post.readTime}</span>
                    <span className="font-light text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-light">{post.title}</h3>
                  <p className="text-sm text-gray-400">By {post.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/blog"
              className="inline-flex font-light w-full md:w-auto justify-center items-center border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explore all posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Accreditations Section */}
      <div className="relative z-10 bg-white py-10 md:py-20">
        <div className="container mx-auto px-6">
          {/* Content Section */}
          <h2 className="lg:hidden text-4xl md:text-6xl font-light mb-6">
            Accreditations
            <br />
            and membership
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24">
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <h2 className="hidden lg:block text-4xl md:text-6xl font-light mb-6">
                Accreditations
                <br />
                and membership
              </h2>
              <p className="text-lg font-light text-gray-600 mb-8 max-w-xl">
                EZmigrate holds prestigious memberships, reflecting our
                commitment to providing trusted and reliable services for
                aspiring international students.
              </p>
              <Link
                href="/schedule"
                className="inline-flex font-light w-full md:w-auto justify-center items-center bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300"
              >
                Schedule an appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Right Column - Logo Grid */}
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

      {/* Footer Section */}
      <footer className="relative z-10 bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Logo and Description */}
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
              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-xl mb-6">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    "About",
                    "Services",
                    "Study Abroad",
                    "Visa",
                    "Programs",
                    "Careers",
                    "Contact",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Destinations */}
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
                        href={`/destinations/${country
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

              {/* Newsletter */}
              <div className="col-span-2">
                <h3 className="text-xl mb-6">Newsletter</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">Subscribe to our newsletter</p>
                  <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 px-4 py-2 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    />
                    <button className="w-full md:w-auto px-6 py-2 bg-white text-black hover:bg-gray-200 transition-colors">
                      Subscribe
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
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
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
                <span className="text-gray-400">|</span>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div className="flex space-x-6">
                {[
                  { href: "https://youtube.com", icon: faYoutube },
                  { href: "https://facebook.com", icon: faFacebookF },
                  { href: "https://linkedin.com", icon: faLinkedinIn },
                  { href: "https://instagram.com", icon: faInstagram },
                  { href: "https://twitter.com", icon: faXTwitter },
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
    </main>
  );
};

export default HomePage;
