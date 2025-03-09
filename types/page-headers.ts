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
  formConnection?: {
    action: string;
    fields: {
      name: string;
      // country?: string;
      email: string;
      phone: string;
      whatsapp: string;
      option?: string;
    };
  };
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
    formOptionTitle: "Country",
    formSelectOptions: [
      { label: "New Zealand", value: "new-zealand" },
      { label: "Australia", value: "australia" },
      { label: "Germany", value: "germany" },
      { label: "UK", value: "uk" },
      { label: "USA", value: "usa" },
      { label: "Canada", value: "canada" },
      { label: "Finland", value: "finland" },
      { label: "France", value: "france" },
      { label: "Ireland", value: "ireland" },
      { label: "Italy", value: "italy" },
      { label: "Switzerland", value: "switzerland" },
      { label: "China", value: "china" },
      { label: "Ukraine", value: "ukraine" },
      { label: "Georgia", value: "georgia" },
      { label: "Estonia", value: "estonia" },
      { label: "Armenia", value: "armenia" },
      { label: "Timor Leste", value: "timor-leste" },
      { label: "Philippines", value: "philippines" },
    ],
    formConnection: {
      action:
        "https://docs.google.com/forms/d/e/1FAIpQLSdGcBn0NhP8TdPCys9VHwhBnqN_3XZcgiDBBkNXTCKDiBAl_w/formResponse",
      fields: {
        name: "entry.430808753",
        option: "entry.1882265817",
        email: "entry.1015471046",
        phone: "entry.832855793",
        whatsapp: "entry.1472688816",
      },
    },
  },
  "new-zealand": {
    title: "New Zealand",
    backgroundImage: "/images/new-zealand-banner.jpg",
    subtitle: "New Zealand",
    description: "New Zealand",
    formOptionTitle: "Visa Type",
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
    formOptionTitle: "Visa Type",
    formSelectOptions: [
      { label: "Student Visa", value: "student-visa" },
      { label: "Work Visa", value: "work-visa" },
      { label: "Visitor Visa", value: "visitor-visa" },
      { label: "Other Visa", value: "other-visa" },
    ],
    formConnection: {
      action:
        "https://docs.google.com/forms/d/e/1FAIpQLSetP_gF21BmmHDm0WTzSwtxaaXhagJNa2vikmbcGckRRffz4A/formResponse",
      fields: {
        name: "entry.270212441",
        option: "entry.200142716",
        email: "entry.717277890",
        phone: "entry.1974414438",
        whatsapp: "entry.277713494",
      },
    },
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
    formConnection: {
      action:
        "https://docs.google.com/forms/d/e/1FAIpQLScvLEEOsQwu9iJEbb51G8URygV3EtstfXj9JCLkVvb0UzMgXw/formResponse",
      fields: {
        name: "entry.430808753",
        option: "entry.1882265817",
        email: "entry.1015471046",
        phone: "entry.832855793",
        whatsapp: "entry.1472688816",
      },
    },
  },
  // Add more page headers as needed
};
