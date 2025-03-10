export interface UniqueBenefit {
  title: string;
  description: string;
}

export interface StudyAbroadDestination {
  country: string;
  countryCode: string;
  image: string;
  subTitle: string;
  description: string;
  link: string;
  whyStudyImage?: string;
  uniqueBenefits: UniqueBenefit[];
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
    image: "/images/destination_banner_new_zealand.webp",
    subTitle: "Explore globally recognized education systems.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/new-zealand",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Germany",
    countryCode: "DE",
    image: "/images/destination_banner_germany.webp",
    subTitle: "Tuition-free education with cutting-edge innovation.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/germany",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "UK",
    countryCode: "GB",
    image: "/images/destination_banner_uk.webp",
    subTitle: "Top universities in a rich cultural setting.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/uk",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.webp",
    subTitle: "Excellence in education and limitless opportunities.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/usa",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Canada",
    countryCode: "CA",
    image: "/images/destination_banner_canada.webp",
    subTitle: "Quality education in a diverse, welcoming environment.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/canada",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Australia",
    countryCode: "AU",
    image: "/images/destination_banner_australia.webp",
    subTitle: "Globally recognized degrees in vibrant cities.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/australia",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Finland",
    countryCode: "FI",
    image: "/images/destination_banner_finland.webp",
    subTitle: "Exceptional education in the world's happiest nation.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/finland",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "France",
    countryCode: "FR",
    image: "/images/destination_banner_france.webp",
    subTitle: "Quality learning in a hub of culture and art.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/france",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Ireland",
    countryCode: "IE",
    image: "/images/destination_banner_ireland.webp",
    subTitle: "Innovative programs in a friendly, green country.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/ireland",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Italy",
    countryCode: "IT",
    image: "/images/destination_banner_italy.webp",
    subTitle: "Education meets history, art, and design.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Switzerland",
    countryCode: "CH",
    image: "/images/destination_banner_switzerland.webp",
    subTitle: "Research and innovation in stunning landscapes.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/switzerland",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "China",
    countryCode: "CN",
    image: "/images/destination_banner_china.webp",
    subTitle: "High-quality education in a booming economy.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/china",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Ukraine",
    countryCode: "UA",
    image: "/images/destination_banner_ukraine.webp",
    subTitle: "Affordable, globally recognized medical degrees.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/ukraine",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Georgia",
    countryCode: "GE",
    image: "/images/destination_banner_georgia.webp",
    subTitle: "Friendly, growing destination for education.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/georgia",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Estonia",
    countryCode: "EE",
    image: "/images/destination_banner_estonia.webp",
    subTitle: "Tech innovation and quality education in Europe.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/estonia",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Armenia",
    countryCode: "AM",
    image: "/images/destination_banner_armenia.webp",
    subTitle: "Affordable studies in a culturally rich nation",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/armenia",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Timor Leste",
    countryCode: "TL",
    image: "/images/destination_banner_timor_leste.webp",
    subTitle: "Emerging opportunities in a culturally vibrant nation.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/timor-leste",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
  {
    country: "Philippines",
    countryCode: "PH",
    image: "/images/destination_banner_philippines.webp",
    subTitle: "Affordable education with a global perspective.",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/philippines",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description:
          "Gain practical experience with work visas and opportunities for permanent residency.",
      },
      {
        title: "Part-Time Work",
        description: "Support your studies while earning and learning.",
      },
      {
        title: "Global Mobility",
        description: "A pathway to explore the Asia-Pacific region.",
      },
    ],
  },
];
