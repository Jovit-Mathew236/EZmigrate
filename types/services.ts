export interface ServiceContent {
  title: string;
  subTitle: string;
  mainDescription: string;
  servicesInclude: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const serviceContents: Record<string, ServiceContent> = {
  "educational-counselling": {
    title: "Educational Counseling",
    subTitle: "Comprehensive Guidance to Achieve Your Academic Aspirations",
    mainDescription:
      "Educational counselling is the foundation of your international education journey. We offer personalized guidance to help you make informed decisions regarding destinations, universities, and courses that align with your academic goals, career aspirations, and financial capabilities.",
    servicesInclude: [
      {
        title: "Academic Assessment",
        description:
          "We evaluate your academic qualifications, achievements, and goals to recommend suitable educational programs and institutions.",
      },
      {
        title: "Destination Analysis",
        description:
          "Our counselors provide insights into study destinations, covering cultural aspects, career opportunities, and academic environments to help you choose the ideal location.",
      },
      {
        title: "Goal-Oriented Planning",
        description:
          "We create a roadmap for your academic and career aspirations, ensuring your choices align with long-term success.",
      },
    ],
    faq: [
      {
        question: "How does educational counselling benefit me?",
        answer:
          "It helps you make well-informed decisions, maximizing your chances of success in your academic and career pursuits.",
      },
      {
        question:
          "Can I seek counselling if I'm undecided about my career path?",
        answer:
          //   "Yes, our counselors can help you explore various career options and guide you towards making an informed decision.",
          "lorem ipsum",
      },
      {
        question: "How early should I start educational counselling?",
        answer:
          //   "It's recommended to start as early as possible to ensure thorough preparation and planning for your educational journey.",
          "lorem ipsum",
      },
    ],
  },

  "career-counselling": {
    title: "Career Counseling",
    subTitle: "Expert Support to Define and Achieve Your Career Goals",
    mainDescription:
      "Career counselling bridges the gap between your academic pursuits and professional ambitions. We assist you in identifying the best pathways to achieve your goals.",
    servicesInclude: [
      {
        title: "Career Mapping",
        description:
          "Tailored advice on aligning your education with desired career outcomes, focusing on industries in demand and growth trends.",
      },
      {
        title: "Market Insights",
        description:
          "Detailed information on job markets and opportunities in your chosen destination, ensuring a clear understanding of prospects.",
      },
      {
        title: "Skill Development",
        description:
          "Guidance on additional skills or certifications required to enhance employability in your chosen field.",
      },
    ],
    faq: [
      {
        question: "Why is career counselling important for studying abroad?",
        answer:
          "It ensures your educational choices align with future career opportunities, enhancing your employability.",
      },
      {
        question:
          "Can I seek counselling if I'm undecided about my career path?",
        answer: "lorem ipsum",
      },
      {
        question: "How early should I start educational counselling?",
        answer: "lorem ipsum",
      },
    ],
  },

  "university-application-assistance": {
    title: "University Application Assistance",
    subTitle: "Streamline Your Application Process for Global Universities",
    mainDescription:
      "Navigating university applications can be daunting. Our team simplifies the process by providing expert assistance to ensure timely and successful submissions.",
    servicesInclude: [
      {
        title: "University Selection",
        description:
          "We recommend universities based on your profile, considering rankings, programs, and global reputation..",
      },
      {
        title: "Application Support",
        description:
          "Assistance with completing applications accurately, ensuring you meet all requirements and deadlines.",
      },
      {
        title: "Document Preparation",
        description:
          "Help with crafting an impressive Statement of Purpose (SOP), resume, and securing strong recommendation letters.",
      },
    ],
    faq: [
      {
        question: "Can you help me choose universities that fit my profile?",
        answer:
          "Yes, we provide tailored recommendations based on your academic background and aspirations.",
      },
      {
        question: "Do you assist with scholarship applications?",
        answer: "lorem ipsum",
      },
      {
        question: "Is there support for interview preparation?",
        answer: "lorem ipsum",
      },
    ],
  },

  "visa-immigration-services": {
    title: "Visa & Immigration Services",
    subTitle: "Trusted Assistance for Smooth Visa and Immigration Procedures",
    mainDescription:
      "Securing a visa is a critical step in your journey. We provide comprehensive support to navigate visa and immigration requirements seamlessly.",
    servicesInclude: [
      {
        title: "Application Assistance",
        description:
          "Step-by-step guidance to ensure your visa application is accurate and complete.",
      },
      {
        title: "Document Verification",
        description:
          "Help with organizing and verifying the necessary documents to meet visa requirements.",
      },
      {
        title: "Interview Preparation",
        description:
          "Coaching on answering interview questions confidently and effectively.",
      },
    ],
    faq: [
      {
        question: "What types of visas do you assist with?",
        answer: "We assist with student, post-study work, and dependent visas.",
      },
      {
        question: "Can you help if my visa application gets rejected?",
        answer: "lorem ipsum",
      },
      {
        question: "How long does the visa process take?",
        answer: "lorem ipsum",
      },
    ],
  },

  "personal-guidance": {
    title: "Personal Guidance",
    subTitle:
      "Customized Strategies Tailored to Your Unique Educational Journey",
    mainDescription:
      "We believe in tailoring our services to meet individual needs. Our personalized guidance ensures that every aspect of your journey is carefully aligned with your unique aspirations.",
    servicesInclude: [
      {
        title: "Recommendations",
        description:
          "Suggestions based on your preferences, strengths, and goals to create a customized education plan.",
      },
      {
        title: "Ongoing Support",
        description:
          "Dedicated counselors available throughout your journey to answer questions and provide assistance.",
      },
      {
        title: "One-on-One Mentorship",
        description:
          "Individualized sessions to refine your plans and prepare for challenges ahead.",
      },
    ],
    faq: [
      {
        question: "Can I get guidance for non-traditional study programs?",
        answer:
          "Yes, we cater to diverse academic interests, including niche programs and certifications.",
      },
      {
        question: "Is the guidance ongoing or a one-time service?",
        answer: "lorem ipsum",
      },
      {
        question:
          "How does personalised guidance differ from general counselling?",
        answer: "lorem ipsum",
      },
    ],
  },

  "seamless-transition": {
    title: "Seamless Transition",
    subTitle: "Hassle-Free Preparation for Your Move Abroad",
    mainDescription:
      "Moving to a new country can be overwhelming. We ensure your transition is smooth and hassle-free, allowing you to focus on your education and experience.",
    servicesInclude: [
      {
        title: "Pre-Departure Orientation",
        description:
          "Information on cultural adaptation, travel tips, and settling into your new destination.",
      },
      {
        title: "Accommodation Assistance",
        description:
          "Help with finding suitable housing options near your university.",
      },
      {
        title: "Arrival Support",
        description:
          "Guidance on setting up essentials like bank accounts, phone connections, and local transportation.",
      },
    ],
    faq: [
      {
        question: "Do you help with finding accommodations?",
        answer:
          "Yes, we assist in finding safe and affordable housing options.",
      },
      {
        question: "What does pre-departure orientation include?",
        answer: "lorem ipsum",
      },
      {
        question: "Can you help me connect with local communities?",
        answer: "lorem ipsum",
      },
    ],
  },

  "mentorship-support": {
    title: "Mentorship Support",
    subTitle: "Dedicated Support to Guide You Every Step of the Way",
    mainDescription:
      "We are committed to your success and offer ongoing mentorship to help you navigate challenges, grow, and excel during your educational journey.",
    servicesInclude: [
      {
        title: "Academic Guidance",
        description:
          "Regular check-ins to track your progress and provide support in academics.",
      },
      {
        title: "Career Advice",
        description:
          "Assistance with internships, networking, and job searches in your field.",
      },
      {
        title: "Emotional Support",
        description:
          "A reliable team to address concerns and provide encouragement when needed..",
      },
    ],
    faq: [
      {
        question: "How often can I seek mentorship?",
        answer:
          "As often as you need! Our team is here to support you throughout your journey.",
      },
      {
        question: "Can I connect with alumni for guidance?",
        answer: "lorem ipsum",
      },
      {
        question: "What kind of career advice is offered?",
        answer: "lorem ipsum",
      },
    ],
  },
};
