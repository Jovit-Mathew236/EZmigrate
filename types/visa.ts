export interface VisaType {
  title: string;
  description: string;
  requirements?: string[];
  processingTime?: string;
  validity?: string;
  visaOptions?: string[];
  HowApply?: string[];
  why?: Array<{
    title: string;
    description: string;
  }>;
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  eligibilityRequirements?: string[];
  processingSteps?: Array<{
    title: string;
    description: string;
  }>;
  cost?: {
    [key: string]: string[];
  };
  inDemandJobs?: Array<{
    title: string;
    salary: string;
  }>;
}

export interface VisaDestination {
  country: string;
  countryCode: string;
  image: string;
  subTitle: string;
  description: string;
  link: string;
  visaTypes: {
    [key: string]: VisaType;
  };
}

export const visaDestinations: VisaDestination[] = [
  {
    country: "New Zealand",
    countryCode: "NZ",
    image: "/images/destination_banner_new_zealand.webp",
    subTitle: "Seamless Visa Solutions for Every Journey",
    description:
      "Explore diverse visa options for work, study, and permanent residence in New Zealand.",
    link: "/visa/new-zealand/[visa-type]",
    visaTypes: {
      "visit-visa": {
        title: "New Zealand Visit Visa",
        description:
          "Experience New Zealand's breathtaking landscapes and rich culture with our comprehensive visitor visa services.",
        why: [
          {
            title: "Scenic Natural Beauty",
            description:
              "Experience New Zealand's stunning landscapes and natural wonders",
          },
          {
            title: "Safe and Peaceful Environment",
            description:
              "Enjoy one of the world's safest and most peaceful countries",
          },
          {
            title: "Rich Cultural Heritage",
            description:
              "Experience New Zealand's unique cultural traditions and history",
          },
          {
            title: "World-Class Tourism Infrastructure",
            description: "Access to modern tourism facilities and services",
          },
          {
            title: "Friendly Local Population",
            description:
              "Experience the warmth and hospitality of New Zealand locals",
          },
          {
            title: "Easy Visa Processing",
            description: "Streamlined and efficient visa application process",
          },
          {
            title: "Multiple Entry Options",
            description:
              "Flexibility to enter and exit the country multiple times",
          },
          {
            title: "Extended Stay Possibilities",
            description: "Options to extend your stay if needed",
          },
        ],
        processingSteps: [
          {
            title: "Online Application Submission",
            description: "Complete and submit your visa application online",
          },
          {
            title: "Document Verification",
            description: "Submit required documents for verification",
          },
          {
            title: "Biometrics Collection",
            description: "Provide biometric data at designated center",
          },
          {
            title: "Visa Decision",
            description: "Wait for final visa decision from authorities",
          },
        ],
        eligibilityRequirements: [
          "Valid Passport",
          "Proof of Funds",
          "Travel Insurance",
          "Return Ticket",
          "Clean Travel History",
          "Accommodation Details",
        ],
        benefits: [
          {
            title: "Multiple Entry Privileges",
            description:
              "Enter and exit New Zealand multiple times during visa validity",
          },
          {
            title: "Access to Tourist Locations",
            description: "Visit all tourist attractions across New Zealand",
          },
          {
            title: "Limited Work Rights",
            description: "Option to work part-time during your stay",
          },
          {
            title: "Healthcare Access",
            description: "Access to New Zealand's healthcare services",
          },
          {
            title: "Easy Extension Options",
            description: "Simple process to extend your stay if required",
          },
          {
            title: "Family Visit Possibilities",
            description: "Option to have family members visit during your stay",
          },
        ],
        inDemandJobs: [
          { title: "Tourism Guide", salary: "NZD 45,000 - 65,000" },
          { title: "Hospitality Staff", salary: "NZD 42,000 - 58,000" },
          { title: "Seasonal Worker", salary: "NZD 44,000 - 52,000" },
        ],
        cost: {
          "Single Entry": ["NZD 245"],
          "Multiple Entry": ["NZD 375"],
          "Fast Track": ["NZD 450"],
        },
        processingTime: "15-20 working days",
        validity: "Up to 9 months",
        visaOptions: [
          "Tourist Visa",
          "Business Visit Visa",
          "Family Visit Visa",
          "Medical Visit Visa",
        ],
      },
      "work-visa": {
        title: "New Zealand Work Visa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        visaOptions: [
          "Essential Skills Work Visa",
          "Skilled Migrant Category",
          "Working Holiday Visa",
          "Post Study Work Visa",
        ],
        HowApply: [
          "Skills Assessment",
          "Job Offer Verification",
          "Visa Application",
          "Medical Check",
          "Submit Documents",
        ],
        why: [
          {
            title: "Strong Job Market",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            title: "Work-Life Balance",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore",
          },
          {
            title: "Career Growth",
            description: "Ut enim ad minim veniam, quis nostrud exercitation",
          },
        ],
        processingSteps: [
          {
            title: "Skills Assessment",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            title: "Job Verification",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore",
          },
        ],
        eligibilityRequirements: [
          "Valid Job Offer",
          "Relevant Qualifications",
          "Work Experience",
          "English Proficiency",
          "Health Requirements",
        ],
        benefits: [
          {
            title: "Work Rights",
            description: "Full work rights in New Zealand",
          },
          {
            title: "Healthcare Access",
            description: "Access to public healthcare system",
          },
        ],
        inDemandJobs: [
          { title: "Software Engineer", salary: "NZD 75,000 - 120,000" },
          { title: "Healthcare Worker", salary: "NZD 65,000 - 95,000" },
          { title: "Construction Manager", salary: "NZD 80,000 - 110,000" },
        ],
        cost: {
          "Application Fee": ["NZD 495"],
          "Skills Assessment": ["NZD 280"],
          "Medical Check": ["NZD 200"],
        },
        processingTime: "2-3 months",
        validity: "Up to 3 years",
      },
      "student-visa": {
        title: "New Zealand Student Visa",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Acceptance letter from a New Zealand educational institution",
          "Proof of sufficient funds",
          "Health insurance coverage",
          "English language proficiency",
        ],
        processingTime: "20-25 working days",
        validity: "Duration of course + 3 months",
      },
      "pr-visa": {
        title: "New Zealand PR Visa",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Skilled employment in New Zealand",
          "Minimum points requirement",
          "Health and character requirements",
        ],
        processingTime: "6-8 months",
        validity: "Permanent",
      },
    },
  },
  {
    country: "Australia",
    countryCode: "AU",
    image: "/images/destination_banner_australia.webp",
    subTitle: "Seamless Visa Solutions for Every Journey",
    description:
      "Discover various pathways to live, work, and study in Australia.",
    link: "/visa/australia/[visa-type]",
    visaTypes: {
      "visit-visa": {
        title: "Australian Visit Visa",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Valid passport",
          "Proof of funds",
          "Travel insurance",
          "Character requirements",
        ],
        processingTime: "15-20 working days",
        validity: "Up to 12 months",
      },
      "work-visa": {
        title: "Australian Work Visa",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Skills assessment",
          "Employer nomination (if applicable)",
          "English language proficiency",
          "Health and character requirements",
        ],
        processingTime: "3-6 months",
        validity: "2-4 years",
      },
      "student-visa": {
        title: "Australian Student Visa",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Confirmation of Enrollment (CoE)",
          "Financial capacity evidence",
          "English language requirements",
          "Health insurance",
        ],
        processingTime: "4-6 weeks",
        validity: "Duration of course + 2 months",
      },
      "pr-visa": {
        title: "Australian PR Visa",
        description:
          "Australia offers excellent opportunities for skilled professionals seeking permanent residence, with a focus on quality of life and career growth.",
        visaOptions: [
          "Subclass 189 Visa",
          "Subclass 190 Visa",
          "Business Innovation Stream",
          "Investor Stream",
          "Graduate Work Visa",
          "GTI (Global Talent Independent Program)",
          "Australia Parent Visa",
        ],
        HowApply: [
          "Check Eligibility",
          "Skill Assessment",
          "English Language Proficiency Test",
          "Expression of Interest (EOI)",
          "Invitation to Apply (ITA)",
          "Submit Your Application",
          "Receive PR Visa & Depart",
        ],
        why: [
          {
            title: "8th Happiest Country in the World",
            description:
              "Australia is ranked as one of the happiest countries globally, offering a great quality of life.",
          },
          {
            title: "Inviting Half a Million Migrants by 2024",
            description:
              "The Australian government is encouraging skilled professionals and migrants to settle in the country by offering PR opportunities.",
          },
          {
            title: "800,000 Job Vacancies for Skilled Professionals",
            description:
              "With a growing economy, Australia offers numerous job opportunities for skilled professionals across multiple sectors.",
          },
          {
            title: "100 Times ROI with Australian PR",
            description:
              "Investing in Australian PR can give you returns far exceeding traditional investment avenues like FD, RD, and gold.",
          },
          {
            title: "Access to Universal Healthcare System",
            description:
              "As a PR holder, you and your family will have access to Australia's world-class healthcare system (Medicare).",
          },
          {
            title: "FREE Education for Your Children",
            description:
              "Permanent residents enjoy access to Australia's public education system, with the opportunity for their children to receive free or subsidized education.",
          },
          {
            title: "Retirement Benefits",
            description:
              "Australia offers solid retirement benefits to its permanent residents, ensuring a secure future.",
          },
          {
            title: "Easiest Path to Australian Citizenship",
            description:
              "After living in Australia for four years on a PR visa, you can apply for Australian citizenship.",
          },
        ],
        processingSteps: [
          {
            title: "Australia Skill Assessment",
            description:
              "Get your skills assessed by a designated skill assessment body. This step ensures your qualifications and experience match Australian standards.",
          },
          {
            title: "Australia PR Visa Approval",
            description:
              "Once your documents are submitted, the Department of Home Affairs (DHA) will assess your profile. If everything meets their requirements, you'll receive your visa grant.",
          },
          {
            title: "Preparation for Departure",
            description:
              "After receiving PR approval, you can plan your relocation to Australia as per the visa's initial entry date.",
          },
        ],
        eligibilityRequirements: [
          "Age: 45 years or younger",
          "65 Points on the Australian Points Grid",
          "Valid Skills Assessment",
          "IELTS or PTE Score",
          "Health Insurance",
          "Police Verification Certificate",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description: "Live, work, and study in Australia indefinitely",
          },
          {
            title: "Social Security Benefits",
            description:
              "Access to various government benefits like unemployment assistance",
          },
          {
            title: "Family Sponsorship",
            description:
              "Sponsor your relatives for PR under certain conditions",
          },
          {
            title: "Education",
            description: "Enjoy subsidized or free education for your children",
          },
          {
            title: "Healthcare",
            description:
              "Access to Medicare, Australia's universal healthcare system",
          },
          {
            title: "Job Opportunities",
            description:
              "Work in a thriving economy with numerous job openings",
          },
        ],
        inDemandJobs: [
          { title: "IT", salary: "$99,642 - $115,000" },
          { title: "Healthcare", salary: "$101,569 - $169,279" },
          { title: "Marketing & Sales", salary: "$84,072 - $103,202" },
          { title: "Engineering", salary: "$92,517 - $110,008" },
          { title: "Accounting & Finance", salary: "$77,842 - $92,347" },
          { title: "Construction", salary: "$72,604 - $99,552" },
        ],
        cost: {
          "Subclass 189": [
            "Main Applicant: AUD 4765",
            "Above 18 years: AUD 2385",
            "Below 18 years: AUD 1195",
          ],
          "Subclass 190": [
            "Main Applicant: AUD 4770",
            "Above 18 years: AUD 2385",
            "Below 18 years: AUD 1190",
          ],
          "Processing Time": [
            "The total processing time for Australian PR can range from 6.5 to 8 months, depending on factors like skill assessment, visa approval, and medical/police checks.",
          ],
        },
        processingTime: "6.5 to 8 months",
        validity: "Permanent",
      },
    },
  },
  {
    country: "Canada",
    countryCode: "CA",
    image: "/images/destination_banner_canada.webp",
    subTitle: "Seamless Visa Solutions for Every Journey",
    description:
      "Explore immigration pathways to live, study, and work in Canada.",
    link: "/visa/canada/[visa-type]",
    visaTypes: {
      "student-visa": {
        title: "Canadian Student Visa",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Acceptance letter from a DLI",
          "Proof of financial support",
          "Clean background check",
          "Medical examination",
        ],
        processingTime: "4-8 weeks",
        validity: "Duration of course + 90 days",
      },
      "pr-visa": {
        title: "Canadian PR Visa",
        description:
          "Start your journey towards Canadian permanent residence with our expert guidance and support services.",
        why: [
          {
            title: "High Quality of Life",
            description: "Experience Canada's exceptional living standards",
          },
          {
            title: "Universal Healthcare",
            description: "Access to Canada's comprehensive healthcare system",
          },
          {
            title: "Excellent Education System",
            description: "World-class education opportunities for all levels",
          },
          {
            title: "Multicultural Society",
            description: "Diverse and welcoming multicultural environment",
          },
          {
            title: "Strong Economy",
            description: "Robust economic opportunities and stability",
          },
          {
            title: "Social Security Benefits",
            description: "Comprehensive social security system for residents",
          },
          {
            title: "Family Reunification Options",
            description: "Programs to help families stay together",
          },
          {
            title: "Path to Citizenship",
            description: "Clear pathway to Canadian citizenship",
          },
        ],
        processingSteps: [
          {
            title: "Express Entry Profile Creation",
            description: "Create your profile in the Express Entry system",
          },
          {
            title: "CRS Score Assessment",
            description: "Get your Comprehensive Ranking System score",
          },
          {
            title: "ITA Receipt",
            description: "Receive Invitation to Apply if selected",
          },
          {
            title: "Documentation Submission",
            description: "Submit all required documents",
          },
          {
            title: "Medical Examination",
            description: "Complete required medical checks",
          },
          {
            title: "Final Decision",
            description: "Await final visa decision",
          },
        ],
        eligibilityRequirements: [
          "Minimum CRS Score",
          "Language Proficiency (IELTS/CELPIP)",
          "Education Assessment (ECA)",
          "Work Experience",
          "Clean Background",
          "Medical Clearance",
        ],
        benefits: [
          {
            title: "Permanent Resident Status",
            description: "Live and work anywhere in Canada permanently",
          },
          {
            title: "Work Anywhere in Canada",
            description: "Freedom to work in any province or territory",
          },
          {
            title: "Free Healthcare Access",
            description: "Access to Canada's universal healthcare system",
          },
          {
            title: "Free Education for Children",
            description: "Public education at no cost for children",
          },
          {
            title: "Social Benefits Access",
            description: "Access to various social welfare programs",
          },
          {
            title: "Business Ownership Rights",
            description: "Right to own and operate businesses in Canada",
          },
        ],
        inDemandJobs: [
          { title: "Software Developer", salary: "CAD 75,000 - 120,000" },
          { title: "Registered Nurse", salary: "CAD 65,000 - 95,000" },
          { title: "Financial Analyst", salary: "CAD 70,000 - 100,000" },
          { title: "Project Manager", salary: "CAD 80,000 - 130,000" },
          { title: "Civil Engineer", salary: "CAD 72,000 - 110,000" },
        ],
        cost: {
          "Principal Applicant": ["CAD 1,325"],
          "Spouse/Partner": ["CAD 1,325"],
          "Dependent Child": ["CAD 225"],
          "Right of PR Fee": ["CAD 500"],
        },
        processingTime: "6-8 months",
        validity: "Permanent",
      },
    },
  },
  {
    country: "USA",
    countryCode: "US",
    image: "/images/destination_banner_usa.webp",
    subTitle: "Seamless Visa Solutions for Every Journey",
    description:
      "Navigate various visa options for studying and immigrating to the United States.",
    link: "/visa/usa/[visa-type]",
    visaTypes: {
      "student-visa": {
        title: "US Student Visa",
        description:
          "Pursue your academic dreams in the United States with our comprehensive student visa services.",
        why: [
          {
            title: "World-Class Universities",
            description: "Access to top-ranked educational institutions",
          },
          {
            title: "Diverse Study Programs",
            description: "Wide range of academic programs and specializations",
          },
          {
            title: "Global Recognition",
            description:
              "Internationally recognized degrees and qualifications",
          },
          {
            title: "Research Opportunities",
            description: "Access to cutting-edge research facilities",
          },
          {
            title: "Cultural Experience",
            description: "Immerse in American culture and diversity",
          },
          {
            title: "OPT/CPT Options",
            description: "Work opportunities during and after studies",
          },
          {
            title: "Career Growth",
            description: "Enhanced career prospects globally",
          },
          {
            title: "Network Building",
            description: "Build professional and academic networks",
          },
        ],
        processingSteps: [
          {
            title: "University Acceptance",
            description: "Get acceptance letter from chosen university",
          },
          {
            title: "I-20 Form Receipt",
            description: "Receive I-20 form from the university",
          },
          {
            title: "SEVIS Fee Payment",
            description: "Pay the mandatory SEVIS registration fee",
          },
          {
            title: "DS-160 Submission",
            description: "Complete and submit DS-160 visa application",
          },
          {
            title: "Visa Interview",
            description: "Attend visa interview at US embassy",
          },
          {
            title: "Visa Issuance",
            description: "Receive visa if application is approved",
          },
        ],
        eligibilityRequirements: [
          "University Acceptance Letter",
          "Financial Documentation",
          "English Proficiency (TOEFL/IELTS)",
          "Valid Passport",
          "Academic Records",
          "Statement of Purpose",
        ],
        benefits: [
          {
            title: "Quality Education",
            description: "Access to high-quality American education",
          },
          {
            title: "Work Opportunities",
            description: "Permission to work up to 20 hours per week",
          },
          {
            title: "OPT After Graduation",
            description: "Optional Practical Training work authorization",
          },
          {
            title: "Campus Resources Access",
            description: "Full access to university facilities and resources",
          },
          {
            title: "Health Insurance",
            description: "Comprehensive health coverage",
          },
          {
            title: "Cultural Exchange",
            description: "Opportunities for cultural learning and exchange",
          },
        ],
        inDemandJobs: [
          { title: "Teaching Assistant", salary: "$20,000 - $30,000" },
          { title: "Research Assistant", salary: "$25,000 - $35,000" },
          { title: "Campus Worker", salary: "$15,000 - $25,000" },
        ],
        cost: {
          "SEVIS Fee": ["USD 350"],
          "Visa Application": ["USD 160"],
          "Visa Issuance": ["USD 200"],
        },
        processingTime: "2-3 months",
        validity: "Duration of program",
      },
      "pr-visa": {
        title: "US Green Card",
        description:
          "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
        requirements: [
          "Employment sponsorship or family relationship",
          "Labor certification (if applicable)",
          "Medical examination",
          "Background checks",
        ],
        processingTime: "18-24 months",
        validity: "Permanent",
      },
    },
  },
];
