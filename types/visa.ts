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
      "visitor-visa": {
        title: "New Zealand Visitor Visa",
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
          "A New Zealand Student Visa allows international students to study at a recognized educational institution in New Zealand. This visa is ideal for individuals wishing to pursue full-time education in New Zealand for a specific period.",
        visaOptions: [
          "Student Visa (Full-Time Study)",
          "Fee-Paying Student Visa",
          "Visitor Visa for Study (Short-Term)",
          "Post-Study Work Visa",
        ],
        eligibilityRequirements: [
          "Acceptance at a recognized New Zealand educational institution",
          "Full-time enrollment in an approved course",
          "Proof of financial support for tuition and living expenses",
          "English language proficiency (if required)",
          "Health and character requirements",
          "Health insurance coverage",
        ],
        benefits: [
          {
            title: "Study at World-Class Institutions",
            description:
              "Access to New Zealand's high-quality educational institutions and diverse study programs.",
          },
          {
            title: "Work Rights During Study",
            description:
              "Work part-time (up to 20 hours per week) during semester and full-time during scheduled breaks.",
          },
          {
            title: "Post-Study Work Opportunities",
            description:
              "Apply for a Post-Study Work Visa after completing eligible qualifications.",
          },
          {
            title: "Healthcare Access",
            description:
              "Access to New Zealand's healthcare services with appropriate insurance coverage.",
          },
          {
            title: "Cultural Experience",
            description:
              "Experience New Zealand's unique culture, lifestyle, and natural beauty.",
          },
          {
            title: "Dependent Visa Options",
            description:
              "Possibility to bring family members depending on your course level and duration.",
          },
        ],
        processingSteps: [
          {
            title: "Get Accepted by an Institution",
            description:
              "Apply for and receive an offer of place from a New Zealand educational institution.",
          },
          {
            title: "Submit Visa Application",
            description:
              "Apply online or at a New Zealand Visa Application Centre with all required documents.",
          },
          {
            title: "Provide Supporting Documents",
            description:
              "Submit proof of acceptance, financial support, health insurance, and other required documentation.",
          },
          {
            title: "Pay Application Fee",
            description: "Complete payment of the visa application fee.",
          },
          {
            title: "Wait for Processing",
            description:
              "Allow several weeks for your application to be processed.",
          },
        ],
        cost: {
          "Application Fee": ["NZD $270 - $500"],
        },
        processingTime: "4-8 weeks",
        validity: "Duration of course + up to 3 months",
      },
      "post-study-work-visa": {
        title: "New Zealand Post-Study Work Visa",
        description:
          "The New Zealand Post-Study Work Visa allows international students who have completed a recognized qualification in New Zealand to stay and work in the country for a period after finishing their studies.",
        eligibilityRequirements: [
          "Completed a recognized qualification in New Zealand",
          "Apply within 3 months of qualification completion",
          "Qualification must be level 4 or higher on NZQF",
          "Health and character requirements",
          "Study must have been full-time in New Zealand",
        ],
        benefits: [
          {
            title: "Work Experience",
            description:
              "Gain valuable work experience in New Zealand related to your qualification.",
          },
          {
            title: "Pathway to Residence",
            description:
              "Open pathway to apply for permanent residency through the Skilled Migrant Category.",
          },
          {
            title: "Duration Based on Qualification",
            description:
              "Stay 1-3 years depending on your qualification level (up to 3 years for Level 7 or higher).",
          },
          {
            title: "No Employer Sponsorship Required",
            description:
              "Freedom to work for any employer without requiring sponsorship.",
          },
          {
            title: "Family Support",
            description:
              "Partners may be eligible for work visas and dependent children may attend New Zealand schools.",
          },
        ],
        processingSteps: [
          {
            title: "Confirm Qualification Completion",
            description:
              "Ensure you have received your final transcript or graduation certificate.",
          },
          {
            title: "Prepare Documentation",
            description:
              "Gather proof of qualification, financial support, and complete health and character checks.",
          },
          {
            title: "Submit Online Application",
            description:
              "Apply through the Immigration New Zealand website with supporting documents.",
          },
          {
            title: "Pay Application Fee",
            description: "Complete payment of the visa fee.",
          },
          {
            title: "Await Decision",
            description:
              "Wait for visa processing, which typically takes 8-12 weeks.",
          },
        ],
        cost: {
          "Application Fee": ["NZD $495 - $720"],
        },
        processingTime: "8-12 weeks",
        validity: "1-3 years (depending on qualification level)",
      },
      "pr-visa": {
        title: "New Zealand PR Visa",
        description:
          "A New Zealand Permanent Residency Visa allows individuals to live, work, and study in New Zealand indefinitely, with access to healthcare, education, and social services.",
        visaOptions: [
          "Skilled Migrant Category (SMC)",
          "Residence from Work",
          "Family Sponsorship",
          "Entrepreneur or Investor Categories",
        ],
        eligibilityRequirements: [
          "Under 55 years of age (for Skilled Migrant Category)",
          "Skilled employment/job offer in New Zealand",
          "Relevant work experience",
          "Recognized qualifications",
          "English language proficiency",
          "Health and character requirements",
        ],
        benefits: [
          {
            title: "Right to Live, Work, and Study",
            description:
              "Permanent right to live, work, and study anywhere in New Zealand.",
          },
          {
            title: "Healthcare Access",
            description: "Access to New Zealand's public healthcare system.",
          },
          {
            title: "Education Benefits",
            description:
              "Children eligible for domestic student fees at schools and universities.",
          },
          {
            title: "Social Security Benefits",
            description:
              "Eligibility for New Zealand's social security benefits after meeting residency requirements.",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Apply for New Zealand citizenship after 5 years of residency.",
          },
          {
            title: "Travel Freedom",
            description:
              "Freedom to travel in and out of New Zealand without restrictions.",
          },
          {
            title: "Family Reunification",
            description: "Sponsor family members to join you in New Zealand.",
          },
        ],
        processingSteps: [
          {
            title: "Meet Eligibility Criteria",
            description:
              "Ensure you meet the eligibility requirements for your chosen immigration pathway.",
          },
          {
            title: "Submit Expression of Interest (EOI)",
            description:
              "For Skilled Migrant Category, submit an EOI detailing your qualifications and experience.",
          },
          {
            title: "Submit Residency Application",
            description:
              "If invited to apply, submit your complete residency application with supporting documents.",
          },
          {
            title: "Provide Health and Character Checks",
            description:
              "Complete required medical exams and provide police clearances.",
          },
          {
            title: "Await Decision",
            description:
              "Processing can take 4-12 months depending on complexity.",
          },
        ],
        cost: {
          "Application Fee": ["NZD $1,000 - $2,000"],
        },
        processingTime: "4-12 months",
        validity: "Permanent",
      },
      "parent-visa": {
        title: "New Zealand Parent Visa",
        description:
          "The New Zealand Parent Visa allows parents of New Zealand citizens or residents to live in New Zealand permanently, enabling families to reunite and enjoy life together.",
        visaOptions: [
          "Parent Category Resident Visa",
          "Parent and Grandparent Visitor Visa",
          "Parent Retirement Resident Visa",
        ],
        eligibilityRequirements: [
          "Parent of a New Zealand citizen or resident (aged 16+ years)",
          "Sponsorship from your child in New Zealand",
          "Child must meet minimum income requirements",
          "Balance of family test (for some visa types)",
          "Health and character requirements",
          "Financial capability to support yourself",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description:
              "Right to live permanently in New Zealand with your family.",
          },
          {
            title: "Work and Study Rights",
            description:
              "Freedom to work and study anywhere in New Zealand (for permanent residents).",
          },
          {
            title: "Family Reunification",
            description:
              "Opportunity to live close to your children and be part of their lives.",
          },
          {
            title: "Healthcare Access",
            description:
              "Access to New Zealand's public healthcare system as a permanent resident.",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility to apply for citizenship after meeting residency requirements.",
          },
        ],
        processingSteps: [
          {
            title: "Confirm Eligibility",
            description:
              "Verify you meet requirements for the Parent Visa, including relationship with your NZ child.",
          },
          {
            title: "Submit Expression of Interest",
            description:
              "For some parent visas, submit an EOI to demonstrate eligibility.",
          },
          {
            title: "Apply for Parent Visa",
            description:
              "Submit application with documentation proving relationship, sponsorship, and financial capacity.",
          },
          {
            title: "Health and Character Checks",
            description:
              "Complete required medical examinations and provide police clearances.",
          },
          {
            title: "Await Decision",
            description:
              "Processing times vary, particularly for Parent Category visas which operate under a quota system.",
          },
        ],
        cost: {
          "Application Fee": ["NZD $1,500 - $2,000"],
        },
        processingTime:
          "Varies (can be several months to years for quota-based visas)",
        validity: "Permanent for resident visas",
      },
      "family-visa": {
        title: "New Zealand Dependent/Family Visa",
        description:
          "New Zealand Family Visas allow individuals to join their family members who are already living in New Zealand, providing pathways for spouses, partners, children, and dependent relatives.",
        visaOptions: [
          "Dependent Child Visa",
          "Partner/Spouse Visa",
          "Parent/Family Visa",
          "Family/Dependent Relative Visa",
          "Dependent Visa for Students",
        ],
        eligibilityRequirements: [
          "Genuine relationship with a New Zealand citizen or resident",
          "Proof of relationship (marriage certificate, birth certificate, etc.)",
          "Financial support from the sponsoring family member",
          "Health and character requirements",
          "Age limitations (for dependent children)",
        ],
        benefits: [
          {
            title: "Right to Live in New Zealand",
            description:
              "Live with your family members in New Zealand's peaceful environment.",
          },
          {
            title: "Work and Study Rights",
            description:
              "Depending on visa type, right to work or study in New Zealand.",
          },
          {
            title: "Healthcare Access",
            description:
              "Access to New Zealand's public healthcare system for visa holders.",
          },
          {
            title: "Pathway to Permanent Residency",
            description:
              "Opportunity to apply for permanent residency after meeting requirements.",
          },
          {
            title: "Family Reunification",
            description:
              "Ability to reunite with family members and provide/receive support.",
          },
          {
            title: "Long-Term Stability",
            description:
              "Opportunity for long-term settlement with pathway to citizenship.",
          },
        ],
        processingSteps: [
          {
            title: "Confirm Eligibility",
            description:
              "Ensure you meet requirements for your specific family visa category.",
          },
          {
            title: "Gather Supporting Documentation",
            description:
              "Collect proof of relationship, financial support, and health/character certificates.",
          },
          {
            title: "Submit Application",
            description:
              "Apply online or via paper submission with required documentation.",
          },
          {
            title: "Pay Application Fee",
            description: "Complete payment of the applicable visa fee.",
          },
          {
            title: "Await Decision",
            description:
              "Processing times vary depending on visa type and complexity.",
          },
        ],
        cost: {
          "Application Fee": ["NZD $500 - $2,000 (varies by visa type)"],
        },
        processingTime: "Varies by visa type (typically 3-6 months)",
        validity: "Varies (temporary to permanent depending on visa type)",
      },
      "visit-visa": {
        title: "New Zealand Visitor Visa",
        description:
          "A New Zealand Visitor Visa allows individuals to visit New Zealand temporarily for tourism, visiting family or friends, business activities, or short-term study purposes.",
        visaOptions: [
          "Tourism Visa",
          "Family and Friend Visitor Visa",
          "Short-Term Study Visa",
          "Business Visitor Visa",
          "Approved Destination Status (ADS) Visa",
        ],
        eligibilityRequirements: [
          "Genuine intention to visit temporarily",
          "Financial support for your stay",
          "Health and character requirements",
          "Intent to return to home country before visa expiry",
          "Valid passport for at least 3 months beyond departure date",
        ],
        benefits: [
          {
            title: "Explore New Zealand",
            description:
              "Experience New Zealand's iconic landscapes, vibrant cities, and diverse culture.",
          },
          {
            title: "Visit Family and Friends",
            description: "Reconnect with loved ones residing in New Zealand.",
          },
          {
            title: "Short-Term Study",
            description:
              "Participate in short courses or training up to 3 months.",
          },
          {
            title: "Business Activities",
            description:
              "Attend business meetings, conferences, and explore professional opportunities.",
          },
          {
            title: "Safe Environment",
            description:
              "Experience one of the world's safest and most welcoming destinations.",
          },
        ],
        processingSteps: [
          {
            title: "Prepare Documentation",
            description:
              "Gather passport, financial documents, itinerary, and other required evidence.",
          },
          {
            title: "Submit Application",
            description:
              "Apply online via Immigration New Zealand or at a consulate/embassy.",
          },
          {
            title: "Pay Application Fee",
            description: "Complete payment of the visa application fee.",
          },
          {
            title: "Wait for Decision",
            description:
              "Online applications typically process in 2-3 weeks, paper applications in 3-4 weeks.",
          },
          {
            title: "Receive Visa",
            description:
              "If approved, receive your visitor visa with specified conditions and duration.",
          },
        ],
        cost: {
          "Application Fee": ["NZD $180 - $330"],
        },
        processingTime: "2-4 weeks",
        validity: "Up to 9 months (depending on circumstances)",
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
          "The Student Visa is designed for international students who wish to study full-time at an accredited educational institution in Australia. It allows students to pursue a wide variety of courses, ranging from high school and vocational education to university degrees.",
        eligibilityRequirements: [
          "Enrolled in a CRICOS-registered course",
          "Meet Genuine Temporary Entrant (GTE) requirements",
          "Financial capacity to support your stay",
          "English language proficiency",
          "Health and character requirements",
          "Overseas Student Health Cover (OSHC)",
        ],
        benefits: [
          {
            title: "Study at Accredited Institutions",
            description:
              "Study at any CRICOS-registered educational institution in Australia, home to some of the world's top-ranked universities and institutions.",
          },
          {
            title: "Work Rights",
            description:
              "Work part-time (up to 40 hours per fortnight) during your course and full-time during scheduled breaks.",
          },
          {
            title: "Pathway to Post-Study Work",
            description:
              "Apply for Temporary Graduate Visa after completing studies to gain professional work experience in Australia.",
          },
          {
            title: "Healthcare Access",
            description:
              "Access to Australia's public health system through Medicare (if eligible) and mandatory Overseas Student Health Cover (OSHC).",
          },
          {
            title: "Cultural Experience",
            description:
              "Interact with students from around the world and explore Australian landmarks and culture.",
          },
          {
            title: "Post-Study Work Eligibility",
            description:
              "Qualify for Post-study Work Visa (Subclass 485) after graduation, allowing 2-4 years of stay based on qualification.",
          },
        ],
        processingSteps: [
          {
            title: "Prepare Required Documents",
            description:
              "Gather Confirmation of Enrollment (CoE), financial documents, English proficiency results, and health insurance evidence.",
          },
          {
            title: "Create Department of Home Affairs Account",
            description:
              "Create an account on the Department of Home Affairs website to complete your application.",
          },
          {
            title: "Submit Application",
            description:
              "Submit your application online and pay the visa application fee.",
          },
          {
            title: "Wait for Processing",
            description:
              "Allow time for your application to be processed by immigration authorities.",
          },
          {
            title: "Receive Visa",
            description:
              "If approved, you'll receive a Visa Grant Notice with details of your visa conditions.",
          },
        ],
        cost: {
          "Application Fee": ["AUD $620"],
        },
        processingTime: "4-6 weeks",
        validity: "Duration of course + 2 months",
      },
      "post-study-work-visa": {
        title: "Australian Post-study Work Visa",
        description:
          "The Post-study Work Visa (Temporary Graduate Visa – Subclass 485) allows international graduates from Australian educational institutions to stay, live, and work in Australia after completing their studies.",
        visaOptions: ["Graduate Work Stream", "Post-Study Work Stream"],
        eligibilityRequirements: [
          "Completed Australian qualification within last 6 months",
          "Under 50 years of age",
          "English language proficiency",
          "Health and character requirements",
          "Adequate health insurance",
        ],
        benefits: [
          {
            title: "Work Full-time",
            description:
              "Unrestricted work rights to work in any occupation or industry.",
          },
          {
            title: "Extended Stay",
            description:
              "Stay 2-4 years depending on level of qualification (Bachelor, Master's, PhD).",
          },
          {
            title: "Pathway to Permanent Residency",
            description:
              "Gain valuable work experience that can contribute to eligibility for permanent residency.",
          },
          {
            title: "Flexibility",
            description:
              "Work in any industry, even those unrelated to your qualification.",
          },
          {
            title: "Cultural Integration",
            description:
              "Further integrate into Australian society and experience its culture.",
          },
          {
            title: "Employer Sponsorship Opportunities",
            description:
              "Gain experience to help secure employer sponsorship for permanent visas.",
          },
        ],
        processingSteps: [
          {
            title: "Create Online Account",
            description:
              "Create an account on the Australian Department of Home Affairs website.",
          },
          {
            title: "Submit Required Documents",
            description:
              "Submit qualification proof, skills assessment (if applicable), English proficiency, and health documentation.",
          },
          {
            title: "Pay Application Fees",
            description: "Complete payment of visa application fee.",
          },
          {
            title: "Wait for Decision",
            description: "Allow time for the application to be processed.",
          },
        ],
        cost: {
          "Application Fee": ["AUD $1,650"],
        },
        processingTime: "4-6 months",
        validity: "2-4 years (depending on qualification level)",
      },
      "pr-visa": {
        title: "Australian PR Visa",
        description:
          "Australian Permanent Residency (PR) Visa allows foreign nationals to live, work, and study in Australia indefinitely, with access to healthcare, social security, and the ability to apply for Australian citizenship.",
        visaOptions: [
          "Skilled Independent Visa (Subclass 189)",
          "Skilled Nominated Visa (Subclass 190)",
          "Employer Nomination Scheme (Subclass 186)",
          "Business Innovation and Investment Visa (Subclass 188/888)",
          "Partner Visa (Subclass 820/801 and 309/100)",
          "Parent Visa (Subclass 103/143)",
        ],
        HowApply: [
          "Check Eligibility",
          "Skills Assessment",
          "English Language Proficiency Test",
          "Expression of Interest (EOI) through SkillSelect",
          "Receive Invitation to Apply (ITA)",
          "Submit Complete Application",
          "Medical and Character Checks",
          "Visa Decision",
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
        eligibilityRequirements: [
          "Age: 45 years or younger",
          "Skills Assessment in eligible occupation",
          "Meet points threshold (65+ points)",
          "English language proficiency",
          "Health and character requirements",
          "Sponsorship/Nomination (if applicable)",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description: "Live, work, and study in Australia indefinitely.",
          },
          {
            title: "Medicare Access",
            description: "Access to Australia's public healthcare system.",
          },
          {
            title: "Work Anywhere",
            description:
              "Freedom to work in any location and occupation in Australia.",
          },
          {
            title: "Social Security Benefits",
            description:
              "Access to various government benefits after waiting periods.",
          },
          {
            title: "Education for Children",
            description: "Free or subsidized education for dependent children.",
          },
          {
            title: "Family Sponsorship",
            description:
              "Ability to sponsor eligible family members for Australian visas.",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility to apply for Australian citizenship after 4 years.",
          },
        ],
        processingSteps: [
          {
            title: "Skills Assessment",
            description:
              "Get your skills and qualifications assessed by the relevant authority.",
          },
          {
            title: "Expression of Interest (EOI)",
            description:
              "Submit EOI through SkillSelect and await invitation to apply.",
          },
          {
            title: "Visa Application",
            description:
              "Submit complete application with all supporting documents.",
          },
          {
            title: "Medical and Character Checks",
            description:
              "Complete health examinations and provide police clearances.",
          },
          {
            title: "Visa Decision",
            description:
              "Receive decision on your permanent residency application.",
          },
        ],
        inDemandJobs: [
          { title: "IT Professional", salary: "AUD $99,642 - $115,000" },
          { title: "Healthcare Worker", salary: "AUD $101,569 - $169,279" },
          { title: "Marketing & Sales", salary: "AUD $84,072 - $103,202" },
          { title: "Engineer", salary: "AUD $92,517 - $110,008" },
          {
            title: "Accountant/Finance Professional",
            salary: "AUD $77,842 - $92,347",
          },
          {
            title: "Construction Professional",
            salary: "AUD $72,604 - $99,552",
          },
        ],
        cost: {
          "Skilled Independent (189)": [
            "Main Applicant: AUD $4,765",
            "Dependent (18+): AUD $2,385",
            "Dependent (<18): AUD $1,195",
          ],
          "Skilled Nominated (190)": [
            "Main Applicant: AUD $4,770",
            "Dependent (18+): AUD $2,385",
            "Dependent (<18): AUD $1,190",
          ],
          "Employer Nomination (186)": ["AUD $4,045"],
        },
        processingTime: "6.5 to 8 months",
        validity: "Permanent",
      },
      "parent-visa": {
        title: "Australian Parent Visa",
        description:
          "The Australian Parent Visa allows parents of Australian citizens, permanent residents, or eligible New Zealand citizens to live in Australia permanently to join their children.",
        visaOptions: [
          "Parent Visa (Subclass 103)",
          "Contributory Parent Visa (Subclass 143)",
          "Parent Visa (Subclass 804) - Onshore Option",
          "Aged Parent Visa (Subclass 804)",
        ],
        eligibilityRequirements: [
          "Be sponsored by your child who is an Australian citizen/PR",
          "Meet the Balance of Family Test",
          "Health and character requirements",
          "Financial capability to support yourself",
          "Age requirements (for specific visa types)",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description: "Live, work, and study in Australia permanently.",
          },
          {
            title: "Medicare Access",
            description: "Access to Australia's public healthcare system.",
          },
          {
            title: "Work Rights",
            description: "Freedom to work if desired (though not required).",
          },
          {
            title: "Family Reunion",
            description:
              "Join your children and reunite the family in Australia.",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility to apply for Australian citizenship after 4 years.",
          },
        ],
        processingSteps: [
          {
            title: "Choose Visa Type",
            description:
              "Select between standard or contributory parent visa options.",
          },
          {
            title: "Submit Application",
            description:
              "Apply through the Department of Home Affairs with all required documents.",
          },
          {
            title: "Provide Supporting Documents",
            description:
              "Submit proof of relationship, Balance of Family Test evidence, and financial documentation.",
          },
          {
            title: "Health and Character Checks",
            description:
              "Complete medical examinations and provide police clearances.",
          },
          {
            title: "Pay Required Fees",
            description:
              "Pay application fee and contributory fee (if applicable).",
          },
          {
            title: "Wait for Processing",
            description:
              "Allow time for application processing, which varies by visa type.",
          },
        ],
        cost: {
          "Parent Visa (103)": ["AUD $4,185"],
          "Contributory Parent Visa (143)": [
            "First Installment: AUD $47,755",
            "Second Installment: AUD $47,755",
          ],
        },
        processingTime:
          "Standard Parent Visa: 30+ years, Contributory: 1-2 years",
        validity: "Permanent",
      },
      "family-visa": {
        title: "Australian Dependent/Family Visa",
        description:
          "The Australian Dependent/Family Visa allows family members to join their Australian citizen, permanent resident, or eligible New Zealand citizen family member in Australia.",
        visaOptions: [
          "Partner Visa (Subclass 820/801 & 309/100)",
          "Child Visa (Subclass 101/802)",
          "Dependent Visa for Parent (Subclass 447)",
          "Carer Visa (Subclass 116/836)",
          "Remaining Relative Visa (Subclass 115)",
          "Aged Dependent Relative Visa (Subclass 838)",
          "Orphan Relative Visa (Subclass 117)",
        ],
        eligibilityRequirements: [
          "Relationship to Australian citizen/PR/eligible NZ citizen",
          "Health and character requirements",
          "Sponsor eligibility",
          "Financial capability (varies by visa type)",
          "Dependent status (for specific visa types)",
        ],
        benefits: [
          {
            title: "Family Reunification",
            description: "Join family members in Australia permanently.",
          },
          {
            title: "Work and Study Rights",
            description:
              "Permission to work and study in Australia (for most visas).",
          },
          {
            title: "Medicare Access",
            description: "Access to Australia's public healthcare system.",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility to apply for Australian citizenship after 4 years of permanent residency.",
          },
        ],
        processingSteps: [
          {
            title: "Choose Appropriate Visa",
            description:
              "Determine which family visa category suits your situation.",
          },
          {
            title: "Sponsor Application",
            description:
              "Australian family member submits sponsorship application.",
          },
          {
            title: "Submit Visa Application",
            description: "Complete application with supporting documentation.",
          },
          {
            title: "Provide Relationship Evidence",
            description:
              "Submit proof of relationship to Australian family member.",
          },
          {
            title: "Health and Character Checks",
            description:
              "Complete medical examinations and provide police clearances.",
          },
          {
            title: "Visa Decision",
            description: "Await decision on your family visa application.",
          },
        ],
        cost: {
          "Partner Visa": ["AUD $7,850"],
          "Child Visa": ["AUD $2,665"],
          "Other Family Visas": ["Varies from AUD $1,515 to $6,490"],
        },
        processingTime: "12-24 months (varies by visa type)",
        validity: "Permanent (most types) or temporary leading to permanent",
      },
      "visitor-visa": {
        title: "Australian Visitor Visa",
        description:
          "The Australian Visitor Visa is a temporary visa that allows individuals to visit Australia for tourism, business purposes, or to visit family and friends for a short period.",
        visaOptions: [
          "Visitor Visa (Subclass 600)",
          "Electronic Travel Authority (ETA) (Subclass 601)",
          "eVisitor Visa (Subclass 651)",
          "Visitor Visa for Sponsored Family Members (Subclass 600)",
        ],
        eligibilityRequirements: [
          "Genuine intention to visit temporarily",
          "Financial capacity to support your stay",
          "Meet health and character requirements",
          "Have a valid passport",
          "No intention to work (except business activities)",
          "Family sponsorship (if applicable)",
        ],
        benefits: [
          {
            title: "Tourism Activities",
            description:
              "Explore Australia's natural wonders and experience the culture.",
          },
          {
            title: "Business Visits",
            description:
              "Attend meetings, conferences, or conduct negotiations",
          },
          {
            title: "Family Visits",
            description: "Visit relatives and friends living in Australia.",
          },
          {
            title: "Multiple Entry Options",
            description:
              "Possibility of multiple entries during visa validity.",
          },
        ],
        processingSteps: [
          {
            title: "Choose Visa Type",
            description:
              "Select appropriate visitor visa based on nationality and purpose.",
          },
          {
            title: "Online Application",
            description:
              "Complete application through Department of Home Affairs website.",
          },
          {
            title: "Submit Supporting Documents",
            description:
              "Provide proof of funds, itinerary, and any invitation letters.",
          },
          {
            title: "Health and Character Checks",
            description:
              "Complete checks if required (varies by nationality and stay duration).",
          },
          {
            title: "Visa Decision",
            description:
              "Receive visa approval electronically or via notification.",
          },
        ],
        cost: {
          "Visitor Visa (600)": ["AUD $145 (base fee)"],
          "ETA (601)": ["AUD $20"],
          "eVisitor (651)": ["Free"],
        },
        processingTime: "15-20 working days",
        validity: "Up to 12 months",
      },
      "working-visa": {
        title: "Australian Work Visa",
        description:
          "Australian work visas allow skilled professionals from overseas to work temporarily or permanently in Australia based on their qualifications, skills, and experience.",
        visaOptions: [
          "Temporary Skill Shortage Visa (Subclass 482)",
          "Skilled Work Regional Visa (Subclass 491)",
          "Working Holiday Visa (Subclass 417)",
          "Work and Holiday Visa (Subclass 462)",
          "Skilled Employer Sponsored Regional Visa (Subclass 494)",
        ],
        eligibilityRequirements: [
          "Skills assessment in nominated occupation",
          "Employer nomination/sponsorship (for specific visas)",
          "English language proficiency",
          "Health and character requirements",
          "Age requirements (specific to visa type)",
          "Relevant work experience",
        ],
        benefits: [
          {
            title: "Work Legally in Australia",
            description:
              "Permission to work for sponsored employer or in any job (visa dependent).",
          },
          {
            title: "Bring Family Members",
            description:
              "Include spouse/partner and dependent children on most work visas.",
          },
          {
            title: "Medicare Access",
            description: "Access to healthcare benefits (varies by visa type).",
          },
          {
            title: "Pathway to Permanent Residency",
            description:
              "Many temporary work visas offer pathways to permanent residence.",
          },
          {
            title: "Travel Rights",
            description:
              "Travel in and out of Australia during visa validity period.",
          },
        ],
        processingSteps: [
          {
            title: "Skills Assessment",
            description:
              "Get your skills assessed by relevant authority for your occupation.",
          },
          {
            title: "Secure Job Offer/Sponsorship",
            description:
              "Find an employer willing to sponsor your visa (if required).",
          },
          {
            title: "Submit Application",
            description:
              "Complete visa application with all supporting documentation.",
          },
          {
            title: "Health and Character Checks",
            description:
              "Complete medical examinations and provide police clearances.",
          },
          {
            title: "Wait for Decision",
            description: "Allow time for visa processing and decision.",
          },
        ],
        inDemandJobs: [
          { title: "Registered Nurse", salary: "AUD $70,000 - $90,000" },
          { title: "Software Developer", salary: "AUD $85,000 - $130,000" },
          { title: "Civil Engineer", salary: "AUD $75,000 - $110,000" },
          { title: "Teacher", salary: "AUD $65,000 - $85,000" },
          { title: "Electrician", salary: "AUD $70,000 - $90,000" },
          { title: "Chef", salary: "AUD $55,000 - $80,000" },
        ],
        cost: {
          "Temporary Skill Shortage (482)": ["AUD $1,265 - $2,645"],
          "Skilled Work Regional (491)": ["AUD $4,115"],
          "Working Holiday (417/462)": ["AUD $495"],
        },
        processingTime: "3-6 months",
        validity: "2-4 years",
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
          "A Canada Student Visa (also known as a Study Permit) allows international students to study at designated learning institutions (DLIs) in Canada. Canada is one of the most popular destinations for students seeking high-quality education, vibrant multiculturalism, and career opportunities.",
        visaOptions: [
          "Full-Time Study Permit",
          "Short-Term Study Permit",
          "Co-op Work Permit (for programs with work components)",
          "Post-Graduation Work Permit",
        ],
        eligibilityRequirements: [
          "Acceptance at a Designated Learning Institution (DLI)",
          "Proof of sufficient funds for tuition, living expenses, and return transportation",
          "Intent to leave Canada after completing studies",
          "Clean background and security check",
          "Medical examination (if applicable)",
          "Language proficiency (English or French)",
        ],
        benefits: [
          {
            title: "High-Quality Education",
            description:
              "Access to world-class education through internationally recognized institutions",
          },
          {
            title: "Work Opportunities",
            description:
              "Work part-time (up to 20 hours per week) during studies and full-time during breaks",
          },
          {
            title: "Pathway to Permanent Residency",
            description:
              "Eligibility for Post-Graduation Work Permit, which can lead to permanent residency",
          },
          {
            title: "Multicultural Environment",
            description: "Experience Canada's diverse and inclusive culture",
          },
          {
            title: "Healthcare Access",
            description:
              "Access to provincial healthcare coverage in most provinces",
          },
          {
            title: "Family Opportunities",
            description:
              "Possibility for family members to accompany you with work/study permits",
          },
        ],
        processingSteps: [
          {
            title: "Apply to a Canadian DLI",
            description:
              "Gain acceptance into a Designated Learning Institution in Canada",
          },
          {
            title: "Gather Required Documents",
            description:
              "Collect acceptance letter, financial proof, passport, and other necessary documents",
          },
          {
            title: "Submit Application",
            description:
              "Apply online or at the nearest Canadian embassy/consulate",
          },
          {
            title: "Biometrics Appointment",
            description:
              "Provide fingerprints and photo at a designated collection center if required",
          },
          {
            title: "Wait for Decision",
            description: "Processing times vary from 4 weeks to several months",
          },
          {
            title: "Travel to Canada",
            description:
              "Present approval letter at the border to receive Study Permit",
          },
        ],
        cost: {
          "Application Fee": ["CAD $150"],
          Biometrics: ["CAD $85 (if required)"],
          "Medical Examination": ["Varies by country"],
          "Police Certificate": ["Varies by country"],
        },
        processingTime: "4-8 weeks (varies by country)",
        validity: "Duration of study program + 90 days",
      },
      "post-study-work-visa": {
        title: "Canada Post-Study Work Visa",
        description:
          "The Post-Graduation Work Permit (PGWP) allows international students who have completed their studies in Canada to gain valuable Canadian work experience, which can help with permanent residency applications.",
        eligibilityRequirements: [
          "Completion of a program at a Designated Learning Institution (DLI)",
          "Program length of at least 8 months",
          "Full-time student status during studies",
          "Application within 180 days of receiving final transcript",
          "Valid study permit when applying",
          "No previous Post-Graduation Work Permit",
        ],
        benefits: [
          {
            title: "Work Experience in Canada",
            description:
              "Gain valuable Canadian work experience highly valued by employers",
          },
          {
            title: "Path to Permanent Residency",
            description:
              "Clear pathway to permanent residency through Express Entry or PNPs",
          },
          {
            title: "Flexibility in Employment",
            description: "Work in any industry, position, or for any employer",
          },
          {
            title: "High Demand for Skilled Workers",
            description:
              "Strong position to secure permanent job offers in Canada's labor market",
          },
          {
            title: "Family Reunification",
            description:
              "Spouse/partner may be eligible for an open work permit",
          },
        ],
        processingSteps: [
          {
            title: "Confirm Eligibility",
            description: "Ensure you meet all PGWP requirements",
          },
          {
            title: "Gather Required Documents",
            description:
              "Collect proof of completion, passport, study permit, and other required documents",
          },
          {
            title: "Apply Online",
            description: "Submit application through the IRCC website",
          },
          {
            title: "Wait for Processing",
            description: "Processing typically takes 3 weeks to 3 months",
          },
          {
            title: "Receive Work Permit",
            description:
              "Obtain PGWP with validity based on your study program length",
          },
        ],
        cost: {
          "Application Fee": ["CAD $255"],
          Biometrics: ["Additional fees may apply"],
        },
        processingTime: "3 weeks to 3 months",
        validity: "1-3 years (depending on study program length)",
      },
      "pr-visa": {
        title: "Canadian PR Visa",
        description:
          "Canada Permanent Residency (PR) Visa provides foreign nationals with the opportunity to live, work, and study in Canada permanently with access to social benefits and healthcare.",
        visaOptions: [
          "Express Entry (Federal Skilled Worker Program)",
          "Express Entry (Federal Skilled Trades Program)",
          "Express Entry (Canadian Experience Class)",
          "Provincial Nominee Program (PNP)",
          "Family Sponsorship",
          "Quebec Skilled Worker Program",
        ],
        eligibilityRequirements: [
          "Skilled work experience (for Express Entry programs)",
          "Language proficiency in English or French",
          "Education assessment (ECA)",
          "Sufficient CRS score (for Express Entry)",
          "Provincial nomination (for PNP)",
          "Family relationship (for sponsorship)",
          "Health and security clearances",
        ],
        benefits: [
          {
            title: "Access to Healthcare",
            description:
              "Free or low-cost medical care through Canada's universal healthcare system",
          },
          {
            title: "Education Benefits",
            description:
              "Free public schooling for children and lower tuition fees at universities",
          },
          {
            title: "Work and Live Anywhere",
            description: "Freedom to live, work, and study anywhere in Canada",
          },
          {
            title: "Social Benefits",
            description:
              "Access to pension plans, unemployment benefits, and other social programs",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility for Canadian citizenship after meeting residency requirements",
          },
          {
            title: "Family Sponsorship",
            description:
              "Ability to sponsor eligible family members to join you in Canada",
          },
          {
            title: "Legal Protections",
            description:
              "Protection under Canadian employment and human rights laws",
          },
        ],
        processingSteps: [
          {
            title: "Determine Eligibility",
            description: "Identify which immigration pathway you qualify for",
          },
          {
            title: "Gather Required Documents",
            description:
              "Collect passport, education credentials, language test results, and other documents",
          },
          {
            title: "Create Express Entry Profile/Apply to PNP",
            description:
              "Submit profile to Express Entry pool or apply to provincial program",
          },
          {
            title: "Receive Invitation to Apply",
            description:
              "Wait for ITA based on CRS score or provincial nomination",
          },
          {
            title: "Submit PR Application",
            description:
              "Complete full application with supporting documents and fees",
          },
          {
            title: "Medical and Background Checks",
            description:
              "Complete required medical exams and security clearances",
          },
          {
            title: "Receive Permanent Residency",
            description:
              "Obtain Confirmation of Permanent Residence (COPR) and PR Card",
          },
        ],
        cost: {
          "Application Fee (Single Applicant)": ["CAD $1,040"],
          "Dependents Fee": ["CAD $150-$225 per dependent"],
          "Biometrics Fee": ["CAD $85"],
          "Right of Permanent Residence Fee": ["CAD $500"],
        },
        processingTime: "6 months to 1 year",
        validity: "5 years (renewable)",
      },
      "parent-visa": {
        title: "Canada Parent Visa",
        description:
          "The Canada Parent Visa allows parents and grandparents of Canadian citizens and permanent residents to join their children in Canada as permanent residents.",
        visaOptions: [
          "Parent and Grandparent Program (PGP)",
          "Super Visa (temporary, multiple-entry visa)",
        ],
        eligibilityRequirements: [
          "Sponsorship by Canadian citizen or permanent resident child",
          "Sponsor must be at least 18 years of age",
          "Sponsor must meet Minimum Necessary Income (MNI) requirements",
          "Sponsor must live in Canada",
          "Applicant must be parent or grandparent of sponsor",
          "Health and character requirements",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description: "Right to live, work, and study in Canada permanently",
          },
          {
            title: "Reunification with Family",
            description:
              "Opportunity to reunite with children and grandchildren in Canada",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility for Canadian citizenship after meeting residency requirements",
          },
          {
            title: "Access to Healthcare",
            description: "Coverage under Canada's universal healthcare system",
          },
          {
            title: "Freedom to Live Anywhere",
            description:
              "Ability to settle in any province or territory in Canada",
          },
          {
            title: "Sponsorship Rights",
            description:
              "Possibility to sponsor other eligible family members once PR status is obtained",
          },
        ],
        processingSteps: [
          {
            title: "Apply for Parent and Grandparent Program",
            description: "Submit interest to sponsor form during intake period",
          },
          {
            title: "Receive Invitation to Apply",
            description: "Wait to be selected from the pool of applicants",
          },
          {
            title: "Submit Complete Application",
            description:
              "Provide sponsorship forms, PR application, financial documents, and relationship proof",
          },
          {
            title: "Processing",
            description: "Wait for application review (typically 12-24 months)",
          },
          {
            title: "Decision and Approval",
            description:
              "Receive Confirmation of Permanent Residence if approved",
          },
          {
            title: "Arrival in Canada",
            description: "Complete landing process and receive PR Card",
          },
        ],
        cost: {
          "Sponsorship Fee": ["CAD $75"],
          "PR Application Fee": ["CAD $1,040"],
          "Biometrics Fee": ["CAD $85"],
          "Right of Permanent Residence Fee": ["CAD $500"],
        },
        processingTime: "12-24 months",
        validity: "Permanent (PR Card valid for 5 years, renewable)",
      },
      "family-visa": {
        title: "Canada Dependent/Family Visa",
        description:
          "The Canada Family Visa allows Canadian citizens and permanent residents to sponsor their family members to join them in Canada as permanent residents.",
        visaOptions: [
          "Spouse/Partner Sponsorship",
          "Dependent Children Sponsorship",
          "Adopted Children Sponsorship",
          "Parents/Grandparents Sponsorship",
          "Other Dependent Family Members",
        ],
        eligibilityRequirements: [
          "Sponsorship by Canadian citizen or permanent resident",
          "Genuine relationship with sponsor",
          "Financial capability of sponsor",
          "Meeting dependent criteria (for children and other dependents)",
          "Health and character requirements",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description:
              "Right to live, work, and study in Canada indefinitely",
          },
          {
            title: "Healthcare Access",
            description: "Coverage under Canada's universal healthcare system",
          },
          {
            title: "Social Benefits",
            description:
              "Access to education, unemployment assistance, and pension plans",
          },
          {
            title: "Pathway to Citizenship",
            description:
              "Eligibility for Canadian citizenship after meeting residency requirements",
          },
          {
            title: "Family Reunification",
            description: "Opportunity to live with family members in Canada",
          },
          {
            title: "Freedom of Movement",
            description: "Ability to live and work anywhere in Canada",
          },
          {
            title: "Work and Study Rights",
            description:
              "Permission to work and study without additional permits",
          },
        ],
        processingSteps: [
          {
            title: "Determine Eligibility",
            description:
              "Confirm eligibility for specific family visa category",
          },
          {
            title: "Submit Sponsorship Application",
            description:
              "Sponsor submits application with proof of status and relationship",
          },
          {
            title: "Submit Dependent's Application",
            description:
              "Provide personal information, medical exam results, and background checks",
          },
          {
            title: "Wait for Processing",
            description: "Processing typically takes 12-18 months",
          },
          {
            title: "Decision and Approval",
            description:
              "Receive Confirmation of Permanent Residence if approved",
          },
          {
            title: "Arrival in Canada",
            description: "Complete landing process and receive PR Card",
          },
        ],
        cost: {
          "Sponsorship Fee": ["CAD $75"],
          "PR Application Fee": ["CAD $1,040 (principal applicant)"],
          "Dependent Fees": ["CAD $150-$225 per dependent"],
          "Right of Permanent Residence Fee": ["CAD $500"],
          "Biometrics Fee": ["CAD $85 per applicant"],
        },
        processingTime: "12-18 months (varies by visa type)",
        validity: "Permanent (PR Card valid for 5 years, renewable)",
      },
      "visitor-visa": {
        title: "Canada Visitor Visa",
        description:
          "The Canada Visitor Visa (Temporary Resident Visa) allows foreign nationals to visit Canada temporarily for tourism, business, or family visits for up to 6 months.",
        visaOptions: [
          "Tourist Visa",
          "Business Visitor Visa",
          "Family Visit Visa",
          "Super Visa (for parents and grandparents)",
        ],
        eligibilityRequirements: [
          "Valid passport or travel document",
          "Proof of intention to leave Canada before visa expiry",
          "Sufficient funds for the duration of stay",
          "No criminal record",
          "Good health",
          "Ties to home country",
        ],
        benefits: [
          {
            title: "Tourism in Canada",
            description:
              "Explore Canada's cities, natural wonders, and cultural sites",
          },
          {
            title: "Business Visits",
            description:
              "Attend meetings, conferences, or conduct negotiations",
          },
          {
            title: "Family Reunification",
            description: "Visit family and friends in Canada",
          },
          {
            title: "Multiple-Entry Option",
            description:
              "Enter Canada multiple times during visa validity (up to 10 years)",
          },
          {
            title: "Extended Stays",
            description: "Stay in Canada for up to 6 months at a time",
          },
        ],
        processingSteps: [
          {
            title: "Gather Required Documents",
            description:
              "Collect passport, financial proof, travel plans, and other supporting documents",
          },
          {
            title: "Submit Application",
            description:
              "Apply online or on paper through a Visa Application Centre",
          },
          {
            title: "Pay Application Fees",
            description: "Complete payment of visa and biometric fees",
          },
          {
            title: "Biometrics Collection",
            description: "Provide fingerprints and photo if required",
          },
          {
            title: "Processing",
            description: "Wait for application review (typically 10-20 days)",
          },
          {
            title: "Visa Issuance",
            description: "Receive visa sticker in passport if approved",
          },
        ],
        cost: {
          "Application Fee": ["CAD $100"],
          "Biometrics Fee": ["CAD $85 (if required)"],
        },
        processingTime: "10-20 days (varies by country)",
        validity: "Up to 10 years (with maximum 6-month stays)",
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
        title: "USA Student Visa",
        description:
          "The USA Student Visa allows international students to study at accredited institutions in the United States. There are two primary types: F-1 Visa for academic students and M-1 Visa for vocational students.",
        visaOptions: [
          "F-1 Visa (Academic Students)",
          "M-1 Visa (Vocational Students)",
          "J-1 Visa (Exchange Visitor Visa)",
        ],
        eligibilityRequirements: [
          "Acceptance at a SEVP-approved school",
          "Sufficient financial resources to cover expenses",
          "Intention to return to home country after studies",
          "No criminal record",
          "English language proficiency",
        ],
        benefits: [
          {
            title: "World-Class Education",
            description:
              "Access to prestigious American universities and colleges with diverse program offerings.",
          },
          {
            title: "Cultural Exchange",
            description:
              "Experience American culture and interact with diverse students from around the world.",
          },
          {
            title: "Work Opportunities",
            description:
              "Eligibility for on-campus employment and Optional Practical Training (OPT) after studies.",
          },
          {
            title: "Path to Further Opportunities",
            description:
              "Potential pathway to work visas or green cards with job offers from U.S. employers.",
          },
          {
            title: "Travel Flexibility",
            description:
              "Ability to travel outside the U.S. and re-enter with valid visa and documents.",
          },
        ],
        processingSteps: [
          {
            title: "Receive Form I-20",
            description:
              "After acceptance to a SEVP-approved school, receive your Form I-20 which contains program information.",
          },
          {
            title: "Pay SEVIS Fee",
            description:
              "Pay the Student and Exchange Visitor Information System (SEVIS) fee, approximately $350 for F-1 students.",
          },
          {
            title: "Complete DS-160 Form",
            description:
              "Fill out the Online Nonimmigrant Visa Application Form and upload required photos.",
          },
          {
            title: "Schedule Visa Interview",
            description:
              "Book an appointment at the U.S. embassy or consulate in your home country.",
          },
          {
            title: "Prepare Documentation",
            description:
              "Gather passport, confirmation pages, financial documents, academic records, and evidence of ties to home country.",
          },
          {
            title: "Attend Visa Interview",
            description:
              "Meet with a visa officer who will determine your eligibility for a student visa.",
          },
          {
            title: "Wait for Processing",
            description:
              "If approved, your visa will be processed within 5-15 business days after the interview.",
          },
        ],
        cost: {
          "Application Fees": [
            "SEVIS fee: $350 for F-1 and $200 for M-1",
            "Visa application fee: $160 (non-refundable)",
            "Possible biometrics fee if required",
          ],
        },
        processingTime: "5-15 business days after interview",
        validity: "Duration of program plus 60-day grace period",
      },
      "post-study-work-visa": {
        title: "USA Post-Study Work Visa (OPT)",
        description:
          "The Optional Practical Training (OPT) program allows international students who have completed studies in the United States to work in their field of study for a limited period.",
        visaOptions: [
          "Pre-completion OPT (part-time work during studies)",
          "Post-completion OPT (full-time work after graduation)",
          "STEM OPT Extension (24-month extension for STEM graduates)",
        ],
        eligibilityRequirements: [
          "F-1 visa status at time of application",
          "Completion of a degree program from a SEVP-approved school",
          "Application before graduation or within 60 days after graduation",
          "Full-time enrollment for at least one academic year",
          "Employment must be directly related to major field of study",
        ],
        benefits: [
          {
            title: "U.S. Work Experience",
            description:
              "Gain valuable professional experience in the U.S. that is recognized globally.",
          },
          {
            title: "Networking Opportunities",
            description:
              "Build professional connections and experience diverse workplace environments.",
          },
          {
            title: "Path to H-1B Visa",
            description:
              "Potential pathway to H-1B visa through employer sponsorship after OPT.",
          },
          {
            title: "Academic to Professional Transition",
            description:
              "Smooth transition from studies to professional employment in the U.S.",
          },
          {
            title: "Work Flexibility",
            description:
              "Work full-time for up to 12 months (or 36 months for STEM graduates).",
          },
        ],
        processingSteps: [
          {
            title: "Obtain Form I-20",
            description:
              "Request OPT recommendation from your school's Designated School Official (DSO).",
          },
          {
            title: "Apply for OPT Authorization",
            description:
              "Submit Form I-765 (Application for Employment Authorization) to USCIS.",
          },
          {
            title: "Gather Required Documents",
            description:
              "Include I-20 with OPT recommendation, passport copies, photos, and application fee.",
          },
          {
            title: "Receive Employment Authorization Document",
            description:
              "Wait for your EAD card which grants permission to work in the U.S.",
          },
          {
            title: "Employment Reporting",
            description:
              "Report any changes in employment to your DSO while on OPT.",
          },
        ],
        cost: {
          "Application Fees": [
            "Form I-765 application fee: $410",
            "No additional SEVIS fees",
          ],
        },
        processingTime: "2-5 months",
        validity: "12 months (up to 36 months with STEM extension)",
      },
      "pr-visa": {
        title: "USA Green Card (Permanent Residency)",
        description:
          "The USA Permanent Residency Visa, commonly called a Green Card, grants foreign nationals the right to live and work permanently in the United States with access to various benefits.",
        visaOptions: [
          "Family-Sponsored Green Cards",
          "Employment-Based Green Cards",
          "Diversity Visa (DV) Lottery",
          "Refugee or Asylum-Based Green Cards",
          "Special Categories Green Cards",
        ],
        eligibilityRequirements: [
          "Family relationship with U.S. citizen or permanent resident",
          "Job offer from U.S. employer willing to sponsor (for employment-based)",
          "Investment in U.S. business creating jobs (for EB-5)",
          "Selection in Diversity Visa Lottery (for eligible countries)",
          "Refugee or asylum status (after one year of residence)",
        ],
        benefits: [
          {
            title: "Permanent Residence",
            description:
              "Right to live and work in the U.S. indefinitely with no restrictions on employment.",
          },
          {
            title: "Travel Flexibility",
            description:
              "Freedom to travel in and out of the U.S., though long absences may affect status.",
          },
          {
            title: "Access to Benefits",
            description:
              "Eligibility for social security, healthcare, and in-state tuition at colleges.",
          },
          {
            title: "Path to Citizenship",
            description:
              "Eligibility to apply for U.S. citizenship after 5 years of permanent residency.",
          },
          {
            title: "Family Sponsorship",
            description:
              "Ability to sponsor certain family members for permanent residency.",
          },
        ],
        processingSteps: [
          {
            title: "File Initial Petition",
            description:
              "Submit Form I-130 (for family) or Form I-140 (for employment) to establish eligibility.",
          },
          {
            title: "Wait for Priority Date",
            description:
              "For some categories, wait until your priority date becomes current in the visa bulletin.",
          },
          {
            title: "Apply for Green Card",
            description:
              "Submit Form I-485 (Adjustment of Status) if in the U.S. or undergo consular processing if abroad.",
          },
          {
            title: "Biometrics and Interview",
            description:
              "Attend a biometrics appointment and an interview with USCIS or at a U.S. consulate.",
          },
          {
            title: "Receive Green Card",
            description:
              "If approved, receive your Green Card valid for 10 years (or 2 years if conditional).",
          },
        ],
        cost: {
          "Application Fees": [
            "Form I-130 (Family Petition): $535",
            "Form I-140 (Employment Petition): $700",
            "Form I-485 (Adjustment of Status): $1,140",
            "Biometrics Fee: $85",
            "Medical Examination: $200-$500",
            "Immigrant Visa Application: $325 (for consular processing)",
          ],
        },
        processingTime: "6 months to several years depending on category",
        validity:
          "10 years (renewable) or 2 years (conditional, must apply to remove conditions)",
      },
      "parent-visa": {
        title: "USA Parent Visa",
        description:
          "The USA Parent Visa allows U.S. citizens to bring their foreign-born parents to live permanently in the United States as immediate relatives.",
        eligibilityRequirements: [
          "Sponsoring U.S. citizen must be at least 21 years old",
          "Proof of parent-child relationship (biological or adoptive)",
          "Financial ability to support the parent in the U.S.",
          "Parent must meet general immigration requirements",
        ],
        benefits: [
          {
            title: "Permanent Residency",
            description:
              "Parents become permanent residents with the right to live and work indefinitely in the U.S.",
          },
          {
            title: "Work Authorization",
            description:
              "Parents can work in the U.S. without restrictions after receiving their Green Card.",
          },
          {
            title: "Path to Citizenship",
            description:
              "Eligibility to apply for U.S. citizenship after 5 years of permanent residency.",
          },
          {
            title: "Family Reunification",
            description:
              "Opportunity for families to live together permanently in the United States.",
          },
          {
            title: "Access to Benefits",
            description:
              "Access to healthcare, social security, and other benefits available to permanent residents.",
          },
        ],
        processingSteps: [
          {
            title: "File Petition for Alien Relative",
            description:
              "U.S. citizen files Form I-130 to establish the parent-child relationship.",
          },
          {
            title: "USCIS Processing",
            description:
              "Wait for USCIS to process and approve the I-130 petition.",
          },
          {
            title: "Immigrant Visa Application",
            description:
              "If parent is abroad, they complete Form DS-260 and undergo consular processing.",
          },
          {
            title: "Adjustment of Status",
            description:
              "If parent is already in the U.S. legally, they can file Form I-485 to adjust status.",
          },
          {
            title: "Biometrics and Interview",
            description:
              "Parent completes biometrics appointment and interview at USCIS or U.S. consulate.",
          },
          {
            title: "Receive Green Card",
            description:
              "Upon approval, parent receives permanent resident card (Green Card).",
          },
        ],
        cost: {
          "Application Fees": [
            "Form I-130 (Petition for Alien Relative): $535",
            "Form I-864 (Affidavit of Support): No filing fee",
            "Form DS-260 (Immigrant Visa Application): $325 (for consular processing)",
            "Medical Examination: $200-$500",
            "Form I-485 (Adjustment of Status): $1,225 (includes biometrics fee)",
          ],
        },
        processingTime: "12-18 months",
        validity: "Permanent (Green Card renewable every 10 years)",
      },
      "family-visa": {
        title: "USA Family Visa",
        description:
          "The USA Family Visa allows immediate family members of U.S. citizens and permanent residents to join them in the United States for family reunification.",
        visaOptions: [
          "K-1 Visa (Fiancé Visa)",
          "CR-1/IR-1 Visa (Spouse of U.S. Citizen)",
          "K-3 Visa (Spouse of U.S. Citizen)",
          "IR-2/CR-2 Visa (Children of U.S. Citizen)",
          "F-2A Visa (Children of Permanent Resident)",
          "F-4 Visa (Siblings of U.S. Citizen)",
        ],
        eligibilityRequirements: [
          "Family relationship with U.S. citizen or permanent resident",
          "Sponsor must be able to financially support the applicant",
          "Proof of relationship through legal documentation",
          "Applicant must meet admissibility requirements",
        ],
        benefits: [
          {
            title: "Family Reunification",
            description:
              "Opportunity for families to live together in the United States.",
          },
          {
            title: "Permanent Residency",
            description:
              "Most family visas lead to permanent residency status (Green Card).",
          },
          {
            title: "Work and Travel Freedom",
            description:
              "Green Card holders can work freely in the U.S. and travel internationally.",
          },
          {
            title: "Path to Citizenship",
            description:
              "Eligibility to apply for U.S. citizenship after 5 years as a permanent resident.",
          },
        ],
        processingSteps: [
          {
            title: "File Petition for Alien Relative",
            description:
              "U.S. sponsor files Form I-130 to establish the family relationship.",
          },
          {
            title: "USCIS Processing",
            description: "Wait for USCIS to review and approve the petition.",
          },
          {
            title: "National Visa Center Processing",
            description:
              "If abroad, case is forwarded to NVC for further processing and fee collection.",
          },
          {
            title: "Visa Application",
            description:
              "Complete Form DS-260 (if abroad) or Form I-485 (if in the U.S.).",
          },
          {
            title: "Attend Interview",
            description: "Interview at U.S. embassy/consulate or USCIS office.",
          },
          {
            title: "Medical Examination",
            description:
              "Complete required medical examination with approved physician.",
          },
          {
            title: "Receive Visa or Green Card",
            description:
              "If approved, receive immigrant visa to enter U.S. or Green Card if in the U.S.",
          },
        ],
        cost: {
          "Application Fees": [
            "Form I-130 (Petition for Alien Relative): $535",
            "Form I-864 (Affidavit of Support): No filing fee",
            "Form DS-260 (Immigrant Visa Application): $325 (for consular processing)",
            "Medical Examination: $200-$500",
            "Form I-485 (Adjustment of Status): $1,225 (includes biometrics fee)",
          ],
        },
        processingTime: "6 months to several years depending on visa category",
        validity:
          "Permanent (for Green Card holders, renewable every 10 years)",
      },
      "visitor-visa": {
        title: "USA Visitor Visa",
        description:
          "The USA Visitor Visa allows foreign nationals to travel to the United States temporarily for tourism, business, or medical treatment.",
        visaOptions: [
          "B-1 Visa (Business Visitor)",
          "B-2 Visa (Tourist/Medical Visitor)",
          "B-1/B-2 Combination Visa (Business and Tourism)",
        ],
        eligibilityRequirements: [
          "Valid passport (valid for at least 6 months beyond intended stay)",
          "Proof of temporary visit with specific purpose",
          "Evidence of financial ability to cover expenses in the U.S.",
          "Strong ties to home country demonstrating intent to return",
          "No immigrant intent or intention to overstay",
        ],
        benefits: [
          {
            title: "Short-Term U.S. Visits",
            description:
              "Ability to visit the U.S. for tourism, business, or medical treatment.",
          },
          {
            title: "Travel Flexibility",
            description:
              "Freedom to explore the U.S. for leisure or conduct temporary business activities.",
          },
          {
            title: "Multiple Entries",
            description:
              "Many visitor visas allow multiple entries to the U.S. during the visa validity period.",
          },
          {
            title: "Medical Treatment",
            description:
              "Access to specialized medical care at recognized U.S. medical institutions.",
          },
        ],
        processingSteps: [
          {
            title: "Complete DS-160 Form",
            description:
              "Fill out the Online Nonimmigrant Visa Application Form and upload photo.",
          },
          {
            title: "Pay Visa Application Fee",
            description:
              "Pay the non-refundable application fee (typically $160).",
          },
          {
            title: "Schedule Visa Interview",
            description:
              "Book an appointment at the U.S. embassy or consulate in your home country.",
          },
          {
            title: "Gather Documentation",
            description:
              "Prepare passport, DS-160 confirmation, financial proof, and evidence of ties to home country.",
          },
          {
            title: "Attend Visa Interview",
            description:
              "Meet with consular officer who will determine visa eligibility.",
          },
          {
            title: "Visa Processing",
            description:
              "If approved, passport with visa will be returned, typically within a few days.",
          },
        ],
        cost: {
          "Application Fees": [
            "Visa Application Fee: $160 (for B-1/B-2 visas)",
            "Visa Issuance Fee: Varies by nationality",
            "Additional costs for medical exams or document preparation if needed",
          ],
        },
        processingTime:
          "3-5 business days after interview (can vary by location)",
        validity:
          "Usually 6 months, but determined by CBP officer at port of entry",
      },
    },
  },
];
