import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="relative z-10 flex items-end justify-start min-h-screen pb-20">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl text-white mb-6">
          <h1 className="text-3xl md:text-6xl font-light text-white mb-6">
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
  );
};

export default HeroContent;
