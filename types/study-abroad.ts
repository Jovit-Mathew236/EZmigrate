export interface StudyAbroadDestination {
  country: string;
  countryCode: string;
  image: string;
  subTitle: string;
  description: string;
  link: string;
  capital?: string;
  language?: string;
  currency?: string;
  universities?: Array<{
    name: string;
    subTitle: string;
    image: string;
  }>;
  requirements?: string[];
  livingCosts?: {
    accommodation: string;
    food: string;
    transport: string;
  };
}

export const studyAbroadDestinations: StudyAbroadDestination[] = [
  {
    country: "New Zealand",
    countryCode: "NZ",
    image: "/images/destination_banner_new_zealand.png",
    subTitle: "Explore globally recognized education systems.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/new-zealand",
  },
  {
    country: "Germany",
    countryCode: "DE",
    image: "/images/destination_banner_germany.png",
    subTitle: "Tuition-free education with cutting-edge innovation.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/germany",
  },
  {
    country: "UK",
    countryCode: "GB",
    image: "/images/destination_banner_uk.png",
    subTitle: "Top universities in a rich cultural setting.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/uk",
  },
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.png",
    subTitle: "Excellence in education and limitless opportunities.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/usa",
  },
  {
    country: "Canada",
    countryCode: "CA",
    image: "/images/destination_banner_canada.png",
    subTitle: "Quality education in a diverse, welcoming environment.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/canada",
  },
  {
    country: "Australia",
    countryCode: "AU",
    image: "/images/destination_banner_australia.png",
    subTitle: "Globally recognized degrees in vibrant cities.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/australia",
  },
  {
    country: "Finland",
    countryCode: "FI",
    image: "/images/destination_banner_finland.png",
    subTitle: "Exceptional education in the world's happiest nation.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/finland",
  },
  {
    country: "France",
    countryCode: "FR",
    image: "/images/destination_banner_france.png",
    subTitle: "Quality learning in a hub of culture and art.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/france",
  },
  {
    country: "Ireland",
    countryCode: "IE",
    image: "/images/destination_banner_ireland.png",
    subTitle: "Innovative programs in a friendly, green country.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/ireland",
  },
  {
    country: "Italy",
    countryCode: "IT",
    image: "/images/destination_banner_italy.png",
    subTitle: "Education meets history, art, and design.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Switzerland",
    countryCode: "CH",
    image: "/images/destination_banner_switzerland.png",
    subTitle: "Research and innovation in stunning landscapes.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "China",
    countryCode: "CN",
    image: "/images/destination_banner_china.png",
    subTitle: "High-quality education in a booming economy.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Ukraine",
    countryCode: "UA",
    image: "/images/destination_banner_ukraine.png",
    subTitle: "Affordable, globally recognized medical degrees.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Georgia",
    countryCode: "GE",
    image: "/images/destination_banner_georgia.png",
    subTitle: "Friendly, growing destination for education.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Estonia",
    countryCode: "EE",
    image: "/images/destination_banner_estonia.png",
    subTitle: "Tech innovation and quality education in Europe.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Armenia",
    countryCode: "AM",
    image: "/images/destination_banner_armenia.png",
    subTitle: "Affordable studies in a culturally rich nation",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Timor Leste",
    countryCode: "TL",
    image: "/images/destination_banner_timor_leste.png",
    subTitle: "Emerging opportunities in a culturally vibrant nation.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
  {
    country: "Philippines",
    countryCode: "PH",
    image: "/images/destination_banner_philippines.png",
    subTitle: "Affordable education with a global perspective.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
  },
];
