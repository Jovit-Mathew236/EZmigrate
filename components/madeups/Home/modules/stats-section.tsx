import TextReveal from "@/components/ui/text-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";

const StatsSection = () => {
  return (
    <>
      <div className="hidden md:block relative z-10 min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
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
            {[
              { value: 5000, label: "Students placed" },
              { value: 700, label: "Universities" },
              { value: 10000, label: "Programs" },
              { value: 30, label: "Countries" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-light flex">
                  <NumberTicker value={stat.value} /> +
                </div>
                <div className="text-xl mt-2 font-light">{stat.label}</div>
              </div>
            ))}
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
    </>
  );
};

export default StatsSection;
