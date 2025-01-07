export interface ServiceContent {
  title: string;
  mainDescription: string;
  servicesInclude: {
    title: string;
    description: string;
    icon?: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const serviceContents: Record<string, ServiceContent> = {
  "educational-counselling": {
    title: "Educational Counseling",
    mainDescription:
      "Educational counselling is the foundation of your international education journey. We offer personalized guidance to help you make informed decisions regarding destinations, universities, and courses that align with your academic goals, career aspirations, and financial capabilities.",
    servicesInclude: [
      {
        title: "Academic Assessment",
        description:
          "We evaluate your academic qualifications, achievements, and goals to recommend suitable educational programs and institutions.",
        icon: "assessment",
      },
      {
        title: "Destination Analysis",
        description:
          "Our counselors provide insights into study destinations, covering cultural aspects, career opportunities, and academic environments to help you choose the ideal location.",
        icon: "destination",
      },
      {
        title: "Goal-Oriented Planning",
        description:
          "We create a roadmap for your academic and career aspirations, ensuring your choices align with long-term success.",
        icon: "planning",
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
          "Yes, our counselors can help you explore various career options and guide you towards making an informed decision.",
      },
      {
        question: "How early should I start educational counselling?",
        answer:
          "It's recommended to start as early as possible to ensure thorough preparation and planning for your educational journey.",
      },
    ],
  },
  // Add other services following the same pattern
};
