export interface PageHeaderContent {
  title: string;
  backgroundVideo?: {
    src: string;
    type: string;
    position?: "center" | "bottom";
  };
  backgroundImage?: string;
  subtitle?: string;
  description?: string;
  formOptionTitle?: string;
  formSelectOptions?: {
    label: string;
    value: string;
  }[];
}

export const pageHeaders: Record<string, PageHeaderContent> = {
  "study-abroad": {
    title: "Study Abroad",
    backgroundVideo: {
      src: "/video/study-aboard.mp4",
      type: "video/mp4",
      position: "bottom",
    },
    subtitle: "Discover Your Path to Global Education",
    description:
      "Embark on your international education journey with top destinations like the USA, UK, Canada, Australia, New Zealand, Germany, and more. Get insights on universities, courses, scholarships, and visas. Shape your future with personalized guidance and seamless support every step of the way!",
    formOptionTitle: "Select Country",
    formSelectOptions: [
      { label: "New Zealand", value: "new-zealand" },
      { label: "Australia", value: "australia" },
    ],
  },
  "new-zealand": {
    title: "New Zealand",
    backgroundImage: "/images/new-zealand-banner.jpg",
    subtitle: "New Zealand",
    description: "New Zealand",
    formOptionTitle: "Select visa type",
    formSelectOptions: [
      { label: "Student Visa", value: "student-visa" },
      { label: "Work Visa", value: "work-visa" },
      { label: "Visitor Visa", value: "visitor-visa" },
      { label: "Other Visa", value: "other-visa" },
    ],
  },
  visa: {
    title: "Visa",
    backgroundVideo: {
      src: "/video/visa.mp4",
      type: "video/mp4",
      position: "center",
    },
    subtitle: "Seamless Visa Solutions for Every Journey",
    description:
      "Our Visa Services provide comprehensive support for work, travel, business, or migration visas. We assist with eligibility assessments, document preparation, application submissions, and interview coaching, ensuring a smooth and hassle-free process from start to finish. Let us guide you toward successfully securing your visa with confidence and ease.",
    formOptionTitle: "Select visa type",
    formSelectOptions: [
      { label: "Student Visa", value: "student-visa" },
      { label: "Work Visa", value: "work-visa" },
      { label: "Visitor Visa", value: "visitor-visa" },
      { label: "Other Visa", value: "other-visa" },
    ],
  },
  programs: {
    title: "Our Programs",
    backgroundVideo: {
      src: "/video/program.mp4",
      type: "video/mp4",
      position: "center",
    },
    subtitle: "Empowering You Through Expert-Led Training Programs",
    description:
      "Unlock your potential with our comprehensive programs designed to boost your academic and professional journey. From globally recognized test preparation to specialized healthcare training, our expert-led courses are tailored to ensure your success. Join us to achieve your dreams with confidence and excellence.",
    formOptionTitle: "Preferred Program*",
    formSelectOptions: [
      { label: "OET", value: "oet" },
      { label: "IELTS", value: "ielts" },
      { label: "PTE", value: "pte" },
      { label: "Other", value: "other" },
    ],
  },
  // Add more page headers as needed
};
