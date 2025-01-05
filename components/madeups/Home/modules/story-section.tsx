import Link from "next/link";

const StorySection = () => {
  return (
    <div className="relative z-10 bg-black md:bg-black/50 py-10 md:h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-light">
          Our Story
        </h1>
        <p className="text-white mt-12 md:text-center text-xl md:text-4xl font-light max-w-4xl">
          EZmigrate transforms dreams into global success. With expert guidance
          and personalized support, we help students find the perfect course,
          university, and destination, turning aspirations into achievements.
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
  );
};

export default StorySection;
