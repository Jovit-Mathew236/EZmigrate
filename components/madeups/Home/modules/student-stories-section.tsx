import Image from "next/image";
import Marquee from "@/components/ui/marquee";

const studentStories = [
  {
    name: "Meera Joy",
    avatar: "/images/testimonial/Meera_Joy.webp",
    testimonial:
      '"Genuinely, I will suggest EZmigrate to my other colleagues those who are trying coming to NZ. So from my experience, I can say that EZmigrate is the best. Soja chechi, Febin chettan and Ashak chettan they have done a great job for my paper works and have also cleared all my concerns. Definitely we can give our trust to EZmigrate 100%."',
  },
  {
    name: "Joby Joseph",
    avatar: "/images/testimonial/Joby_Joseph.webp",
    testimonial:
      '"Its a pleasure for choosing Ezmigrate. They helped me a lot when I didn\'t get a CAP seat. Mostly soja mam and febin chettan backed me to get a CAP seat in a limited period of time and also cleared all of my doubts about the processing. I sincerely thanking you for your help and support."',
  },
  {
    name: "Jimi Patrishia Jerome",
    avatar: "/images/testimonial/Jimi_Patrishia_Jerome.webp",
    testimonial:
      '"I am very happy to share my immense experience and gratitude towards the agency. I am connected with soja, she is available at any time and cleared all doubts. Thank you 😊 EZ migrate..."',
  },
  {
    name: "Athira Mohan",
    avatar: "/images/testimonial/Athira_Mohan.webp",
    testimonial:
      '"It was a good experience. EZ migrate help me to make my CAP course dream so easy and success."',
  },
  {
    name: "Kavya Balakrishna",
    avatar: "/images/testimonial/Kavya_Balakrishna.webp",
    testimonial:
      '"I Had a good experience with EZ migrate. All members where very supportive. And response was too quick."',
  },
  {
    name: "Silpa Priya",
    avatar: "/images/testimonial/Silpa_Priya.webp",
    testimonial:
      "\"I was doing my New Zealand processing through a different agency but after receiving my CAP letter they didn't respond properly and I decided to switch to another agency and came across EZMIGRATES and it was the best decision I've ever made. Thanks to EZmigrates I got CAP admission fast and the rest of the processing was so smooth.\"",
  },
  {
    name: "Athira Anto",
    avatar: "/images/testimonial/Athira_Anto.webp",
    testimonial: '"It was so helpful to me."',
  },
  {
    name: "Aswathy",
    avatar: "/images/testimonial/Aswathy.webp",
    testimonial:
      '"A good recruiter is one who builds strong relationships, through their services. Thank you for your help and efforts during the entire process. Your services have been very helpful and held me to go through every single step."',
  },
  {
    name: "Anita Jerone",
    avatar: "/images/testimonial/Anita_Jerone.webp",
    testimonial:
      '"I am so happy to recommend EZmigrate. All staffs are so supportive and always ready to answer my queries at any time and thank you to entire team. Thankz to EZmigrates for the support and guidance."',
  },
  {
    name: "Josna Mariet",
    avatar: "/images/testimonial/Josna_Mariet.webp",
    testimonial:
      '"Thank you EZ Migrate for the fast processing from my CAP Admission till the Visa approval. Special Thanks to Mr. Asakh Salimkumar who was always responding to my all queries. I suggest EZ Migrate to all as it is a reliable and genuine agency."',
  },
  {
    name: "Sruthy M S",
    avatar: "/images/testimonial/Sruthy_M_S.webp",
    testimonial:
      '"I am really thankful to EZmigrate for made my dream come true. They gave proper guidance and support throughout the journey and each of them Asakh, Febin and Soja were very approachable and willing to clear my doubts."',
  },
  {
    name: "Ann Joyce",
    avatar: "/images/testimonial/Ann_Joyce.webp",
    testimonial: '"Excellent service."',
  },
  {
    name: "Anju Antony",
    avatar: "/images/testimonial/Anju_Antony.webp",
    testimonial:
      '"Ez migrant is an approachable agency and I was so happy with them. I would like to recommend it to the nurses who have a dream to be a RN in New Zealand. They helped me to achieve my dream and here I am doing my CAP course."',
  },
  {
    name: "Ashly Thomas",
    avatar: "/images/testimonial/Ashly_Thomas.webp",
    testimonial:
      '"I am really grateful to EZ migrate for helping me to achieve cap admission and Visa at the earliest. Special thanks to Ashak who always responded to all the queries with patience and for guiding me throughout the entire process."',
  },
  {
    name: "Neethumol Varghese",
    avatar: "/images/testimonial/Neethumol_Varghese.webp",
    testimonial:
      '"Ez migrate has helped me to get the CAP admission, at reputed college in NewZealand."',
  },
  {
    name: "Anumol Thomas",
    avatar: "/images/testimonial/Anumol_Thomas.webp",
    testimonial:
      '"EZmigrate helped me to achieve my dream. I am really satisfied with their service. I strongly recommend this agency to all."',
  },
  {
    name: "Aswathi Baby",
    avatar: "/images/testimonial/Aswathi_Baby.webp",
    testimonial:
      '"I had an Excellent experience with EZmigrate. Got my CAP admission and visa without much efforts from my side. EZmigrate took care of it all. I am so thankful to them."',
  },
  {
    name: "Mathavi Karunanithi",
    avatar: "/images/testimonial/Mathavi_Karunanithi.webp",
    testimonial: '"Excellent"',
  },
  {
    name: "Josmy Varghese",
    avatar: "/images/testimonial/Josmy_Varghese.webp",
    testimonial: '"Excellent service. Thank you EZmigrate."',
  },
  {
    name: "Jincy Ouseph",
    avatar: "/images/testimonial/Jincy_Ouseph.webp",
    testimonial:
      '"I was really pleased with EZmigrate\'s assistance with the New Zealand VISA and prompt entrance to the CAP course. Extremely dependable and quick."',
  },
  {
    name: "Dona Tomy",
    avatar: "/images/testimonial/Dona_Tomy.webp",
    testimonial:
      '"I am really thankful to EZmigrate for my CAP and visa process. They guided me patiently through the application process, now I can study in New Zealand for my CAP worry-free. They have very friendly and reliable staff."',
  },
  {
    name: "Selmi Thomas",
    avatar: "/images/testimonial/Selmi_Thomas.webp",
    testimonial:
      '"I am glad to express my sincere thanks to EZmigrate for assisting me throughout my journey in the New Zealand immigration process. I highly recommend everyone to choose EZmigrate to pursue their dreams."',
  },
  {
    name: "Sangheetha Mathew",
    avatar: "/images/testimonial/Sangheetha_Mathew.webp",
    testimonial:
      '"I am glad to announce that I am greatly satisfied with the services offered by EZmigrate. Eventhough, I started my journey with them at the middle of my processing, I could experience the necessary attention, clear clarifications, and proper guidance in each phase."',
  },
  {
    name: "Anu Poykayil Johny",
    avatar: "/images/testimonial/Anu_Poykayil_Johny.webp",
    testimonial:
      '"My experience with EZmigrate was unique and supportive. The entire team was lovely and extremely helpful throughout my journey. All my question and queries were answered clearly with extremely professional and responsibility."',
  },
  {
    name: "Anjaly George",
    avatar: "/images/testimonial/Anjaly_George.webp",
    testimonial:
      '"Am so happy with EZmigrate Limited. Because I was very tensed regarding my CAP course admission. In that situation I contacted Soja mam and she gave all the details and informed me regarding availability of CAP seat in May month."',
  },
  {
    name: "Neena Merin Mathew",
    avatar: "/images/testimonial/Neena_Merin_Mathew.webp",
    testimonial:
      '"EZ migrate is definitely a highly recommended agency for New Zealand processing. I have been extremely happy about the services provided by them. Thankyou everyone for your support and answering my calls with good patience."',
  },
  {
    name: "Ajeetha V Raju",
    avatar: "/images/testimonial/Ajeetha_V_Raju.webp",
    testimonial:
      '"Thank you for creating a seamless and efficient recruitment experience. I would highly recommend your services to anyone seeking a top-notch Recruiter."',
  },
  {
    name: "Treesa Roy",
    avatar: "/images/testimonial/Treesa_Roy.webp",
    testimonial:
      '"I am thrilled to share my experience with EZMigrate. Their expert instructors provided tailored strategies that significantly improved my skills. Thanks to EZMigrate, I achieved an overall score of 7.0, which has opened doors for my future."',
  },
  {
    name: "Anju Jillet",
    avatar: "/images/testimonial/Anju_Jillet.webp",
    testimonial:
      '"I am extremely grateful to EZmigrate for helping me achieve my desired PTE score. The expert guidance, structured study materials, and personalized coaching made a huge difference in my preparation."',
  },
  {
    name: "Sophia Clement",
    avatar: "/images/testimonial/Sophia_Clement.webp",
    testimonial:
      '"I really appreciate EZ Migrate for their professionalism and effort towards the students. I am so grateful to EZ Migrate and especially Mr.Jaron who helped me to gain a good score in the PTE exam."',
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
          className="rounded-full border-2 border-stone-500 w-12 h-12 object-cover object-top"
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
          <Marquee pauseOnHover className="[--duration:200s]" showControls>
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
