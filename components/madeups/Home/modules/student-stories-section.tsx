import Image from "next/image";
import Marquee from "@/components/ui/marquee";

const studentStories = [
  {
    name: "Jincy Ouseph",
    avatar: "/images/female.webp",
    testimonial:
      '"I was really pleased with EZmigrate\'s assistance with the New Zealand VISA and prompt entrance to the CAP course. Extremely dependable and quick."',
  },
  {
    name: "Santhosh Kumar",
    avatar: "/images/male.webp",
    testimonial:
      '"I was really pleased with EZmigrate\'s assistance with the New Zealand VISA and prompt entrance to the CAP course. Extremely dependable and quick."',
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

const StudentStoriesSection = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default StudentStoriesSection;
