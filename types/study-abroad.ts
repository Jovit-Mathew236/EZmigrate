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
  whyStudy: string;
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
    subTitle: "A Gateway to Innovation and Scenic Beauty",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/new-zealand",
    whyStudy:
      "New Zealand is a leading destination for students seeking globally recognized education and practical learning experiences. The country offers a safe, inclusive environment and vibrant student life.",
    uniqueBenefits: [
      {
        title: "Post-Study Work Opportunities",
        description: "Gain valuable experience after graduation.",
      },
      {
        title: "Affordable Tuition & Scholarships",
        description: "Lower education costs with scholarship support.",
      },
      {
        title: "Quality of Life",
        description:
          "Enjoy a peaceful, culturally rich lifestyle surrounded by breathtaking landscapes.",
      },
    ],
  },
  {
    country: "Germany",
    countryCode: "DE",
    image: "/images/destination_banner_germany.webp",
    subTitle: "The Hub of Innovation and Excellence",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/germany",
    whyStudy:
      "Germany stands out for its tuition-free education at most public universities and world-renowned academic programs.",
    uniqueBenefits: [
      {
        title: "Tuition-Free Education",
        description: "Save on education costs at public universities.",
      },
      {
        title: "Cutting-Edge Research",
        description:
          "Access innovative programs and state-of-the-art facilities.",
      },
      {
        title: "Strong Industry Connections",
        description: "Hands-on learning through industry collaborations.",
      },
    ],
  },
  {
    country: "UK",
    countryCode: "GB",
    image: "/images/destination_banner_uk.webp",
    subTitle: "Pursue Academic Excellence in the UK",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/uk",
    whyStudy:
      "The UK offers globally recognized education and innovative teaching methods that foster creativity and independent thinking.",
    uniqueBenefits: [
      {
        title: "Globally Recognized Degrees",
        description: "Highly valued by employers worldwide.",
      },
      {
        title: "Extensive Post-Study Work Rights",
        description: "Build a career in the UK after graduation.",
      },
      {
        title: "Diverse Academic Offerings",
        description: "Explore varied programs in top-ranked universities.",
      },
    ],
  },
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.webp",
    subTitle: "Shape Your Future in the USA",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/usa",
    whyStudy:
      "The USA leads in higher education, innovation, and research, offering unmatched academic opportunities.",
    uniqueBenefits: [
      {
        title: "World-Class Education",
        description: "Top universities and research opportunities.",
      },
      {
        title: "Post-Study Work Options",
        description: "Explore internships and career pathways.",
      },
      {
        title: "Global Exposure",
        description: "Network with students and professionals worldwide.",
      },
    ],
  },
  {
    country: "Canada",
    countryCode: "CA",
    image: "/images/destination_banner_canada.webp",
    subTitle: "Achieve Academic Excellence in Canada",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/canada",
    whyStudy:
      "Canada is celebrated for its diverse, high-quality education system, cutting-edge research, and welcoming multicultural environment.",
    uniqueBenefits: [
      {
        title: "Post-Graduation Work Permits (PGWP)",
        description: "Pathway to permanent residency.",
      },
      {
        title: "Affordable Tuition Fees",
        description:
          "Value-driven education options for international students.",
      },
      {
        title: "Safe & Inclusive Environment",
        description: "Enjoy living in one of the world's safest countries.",
      },
    ],
  },
  {
    country: "Australia",
    countryCode: "AU",
    image: "/images/destination_banner_australia.webp",
    subTitle: "Unlock Endless Opportunities in Australia",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/australia",
    whyStudy:
      "Australia offers world-class education with numerous top-ranked universities and diverse program offerings.",
    uniqueBenefits: [
      {
        title: "Extensive Post-Study Work Rights",
        description: "Build your career after graduation.",
      },
      {
        title: "Vibrant Campus Life",
        description: "Join a diverse, multicultural student community.",
      },
      {
        title: "Strong Industry Partnerships",
        description: "Practical learning through real-world experiences.",
      },
    ],
  },
  {
    country: "Finland",
    countryCode: "FI",
    image: "/images/destination_banner_finland.webp",
    subTitle: "Discover Academic Diversity Across Europe",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/finland",
    whyStudy:
      "Finland offers a world-renowned education system with innovative teaching methods and a strong focus on research and sustainability.",
    uniqueBenefits: [
      {
        title: "Quality Education",
        description:
          "Top-ranked universities with student-centered approaches.",
      },
      {
        title: "English-Taught Programs",
        description: "Wide range of degrees fully available in English.",
      },
      {
        title: "High Quality of Life",
        description:
          "Study in one of the world's happiest and safest countries.",
      },
    ],
  },
  {
    country: "France",
    countryCode: "FR",
    image: "/images/destination_banner_france.webp",
    subTitle: "Discover Academic Diversity Across Europe",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/france",
    whyStudy:
      "France provides excellent higher education with renowned institutions and a rich cultural heritage in the heart of Europe.",
    uniqueBenefits: [
      {
        title: "Affordable Education",
        description: "Lower tuition fees than many English-speaking countries.",
      },
      {
        title: "International Recognition",
        description: "Degrees valued by employers worldwide.",
      },
      {
        title: "Cultural Experience",
        description: "Immerse yourself in French art, history, and cuisine.",
      },
    ],
  },
  {
    country: "Ireland",
    countryCode: "IE",
    image: "/images/destination_banner_ireland.webp",
    subTitle: "Discover Academic Diversity Across Europe",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/ireland",
    whyStudy:
      "Ireland offers high-quality education with strong connections to industry and a welcoming environment for international students.",
    uniqueBenefits: [
      {
        title: "English-Speaking Country",
        description:
          "Study in an English-speaking environment with a unique cultural experience.",
      },
      {
        title: "Post-Study Work Opportunities",
        description: "Stay and work for up to 24 months after graduation.",
      },
      {
        title: "Tech Hub",
        description: "Home to European headquarters of major tech companies.",
      },
    ],
  },
  {
    country: "Italy",
    countryCode: "IT",
    image: "/images/destination_banner_italy.webp",
    subTitle: "Discover Academic Diversity Across Europe",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/italy",
    whyStudy:
      "Italy combines prestigious education with unparalleled cultural heritage in a country renowned for art, design, and innovation.",
    uniqueBenefits: [
      {
        title: "Historical Universities",
        description:
          "Study at some of the world's oldest academic institutions.",
      },
      {
        title: "Affordable Tuition",
        description: "Lower fees than many other European destinations.",
      },
      {
        title: "Rich Cultural Experience",
        description: "Immerse yourself in Italian art, history, and lifestyle.",
      },
    ],
  },
  {
    country: "Switzerland",
    countryCode: "CH",
    image: "/images/destination_banner_switzerland.webp",
    subTitle: "Discover Academic Diversity Across Europe",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/switzerland",
    whyStudy:
      "Switzerland offers world-class education with top-ranked universities and an exceptional quality of life in a multilingual environment.",
    uniqueBenefits: [
      {
        title: "Research Excellence",
        description:
          "Access cutting-edge research and innovation opportunities.",
      },
      {
        title: "International Environment",
        description:
          "Study in a multilingual setting with students from around the world.",
      },
      {
        title: "Industry Connections",
        description: "Strong ties to global businesses and organizations.",
      },
    ],
  },
  {
    country: "China",
    countryCode: "CN",
    image: "/images/destination_banner_china.webp",
    subTitle: "Pursue Global Education in Russia",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/china",
    whyStudy:
      "China provides world-class education with increasing global recognition and considerable investment in higher education development.",
    uniqueBenefits: [
      {
        title: "Scholarships",
        description:
          "Numerous scholarship opportunities for international students.",
      },
      {
        title: "Economic Opportunities",
        description: "Study in one of the world's largest economies.",
      },
      {
        title: "Cultural Immersion",
        description:
          "Experience ancient traditions alongside modern innovations.",
      },
    ],
  },
  {
    country: "Ukraine",
    countryCode: "UA",
    image: "/images/destination_banner_ukraine.webp",
    subTitle: "Explore Educational Growth in Uzbekistan",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/ukraine",
    whyStudy:
      "Ukraine offers quality education with globally recognized degrees, particularly in medicine and engineering, at affordable costs.",
    uniqueBenefits: [
      {
        title: "Affordable Education",
        description: "Lower tuition fees compared to Western countries.",
      },
      {
        title: "English-Taught Programs",
        description: "Wide range of programs available in English.",
      },
      {
        title: "Strong Academic Tradition",
        description: "Well-established universities with excellent facilities.",
      },
    ],
  },
  {
    country: "Georgia",
    countryCode: "GE",
    image: "/images/destination_banner_georgia.webp",
    subTitle: "Expand Horizons in Georgia",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/georgia",
    whyStudy:
      "Georgia is a rising educational hub with high-quality institutions and an affordable lifestyle.",
    uniqueBenefits: [
      {
        title: "Affordable Living & Tuition",
        description: "Cost-effective education without compromising quality.",
      },
      {
        title: "English-Taught Programs",
        description: "Study in English across various fields.",
      },
      {
        title: "Safe & Welcoming Environment",
        description: "Experience Georgian hospitality.",
      },
    ],
  },
  {
    country: "Estonia",
    countryCode: "EE",
    image: "/images/destination_banner_estonia.webp",
    subTitle: "Discover Academic Diversity Across Europe",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/estonia",
    whyStudy:
      "Estonia offers innovative education in Europe's digital leader, with strong emphasis on technology and entrepreneurship.",
    uniqueBenefits: [
      {
        title: "Digital Society",
        description:
          "Study in one of the world's most advanced digital nations.",
      },
      {
        title: "Startup Ecosystem",
        description: "Opportunities in a vibrant entrepreneurial environment.",
      },
      {
        title: "Quality Education",
        description: "Modern approaches to learning with practical components.",
      },
    ],
  },
  {
    country: "Armenia",
    countryCode: "AM",
    image: "/images/destination_banner_armenia.webp",
    subTitle: "Discover Academic Excellence in Armenia",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/armenia",
    whyStudy:
      "Armenia offers a growing higher education system with affordable tuition and rich cultural experiences.",
    uniqueBenefits: [
      {
        title: "Affordable Tuition & Living Costs",
        description: "Cost-effective education options.",
      },
      {
        title: "Rich Cultural Experience",
        description: "Blend of ancient history and modern innovation.",
      },
      {
        title: "Growing International Community",
        description: "Increasing popularity among global students.",
      },
    ],
  },
  {
    country: "Timor Leste",
    countryCode: "TL",
    image: "/images/destination_banner_timor_leste.webp",
    subTitle: "Explore Academic Possibilities in Timor-Leste",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/timor-leste",
    whyStudy:
      "Timor-Leste is an emerging educational destination focusing on innovation and sustainability.",
    uniqueBenefits: [
      {
        title: "Emerging Educational Hub",
        description: "Growing focus on education reforms.",
      },
      {
        title: "Affordable Living Costs",
        description: "Cost-effective education and lifestyle.",
      },
      {
        title: "Multicultural Community",
        description: "Dynamic environment for learning.",
      },
    ],
  },
  {
    country: "Philippines",
    countryCode: "PH",
    image: "/images/destination_banner_philippines.webp",
    subTitle: "Achieve Academic Growth in the Philippines",
    description:
      "Discover a student-friendly haven with top-ranked universities, stunning landscapes, and a thriving economy. Learn and grow in a nation that blends cultural richness with modern education.",
    link: "/study-abroad/philippines",
    whyStudy:
      "The Philippines offers high-quality education with English-taught programs in medicine, technology, and business.",
    uniqueBenefits: [
      {
        title: "English-Taught Programs",
        description: "Widely recognized for medical education.",
      },
      {
        title: "Affordable Tuition",
        description: "Competitive education costs for international students.",
      },
      {
        title: "Vibrant Cultural Life",
        description: "Experience Filipino hospitality and diverse cultures.",
      },
    ],
  },
];
