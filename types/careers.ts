export interface CareerPosition {
  title: string;
  location: string;
  experience: string;
  type: string;
  aboutUs: string;
  keyResponsibilities: string[];
  qualifications: string[];
  whatWeOffer: string[];
}

export const careerPositions: Record<string, CareerPosition> = {
  "oet-trainer": {
    title: "OET Trainer",
    location: "Thodupuzha",
    experience: "3+ Years of experience",
    type: "Full Time",
    aboutUs:
      "EZmigrate Limited is a leading consultancy specializing in educational and career pathways for individuals aspiring to study and work abroad. We are seeking a Senior Occupational English Trainer to lead our training team and help clients achieve their goals through superior English language education.",
    keyResponsibilities: [
      "Design and implement customized English training syllabi for overseas education and career preparation.",
      "Lead and manage a team of trainers, ensuring high-quality instruction and professional growth.",
      "Oversee student engagement, including recruitment, retention, and registration for overseas education services.",
      "Manage online and offline training programs, optimizing operations for efficiency and effectiveness.",
      "Collaborate on business development, branding, and social media strategies to expand EZmigrate's presence.",
      "Provide personalized client counseling, recommending study programs aligned with their goals.",
    ],
    qualifications: [
      "Bachelor's degree (Nursing, English, or related field); Master's degree preferred.",
      "3+ years of English teaching experience, with 2+ years in a leadership role.",
      "Strong curriculum development, leadership, and communication skills.",
      "Experience with digital tools for online education and familiarity with study/work abroad challenges.",
    ],
    whatWeOffer: [
      "Competitive salary and benefits.",
      "Opportunities for professional growth in a dynamic work environment.",
      "A chance to make a meaningful impact on students' lives.",
    ],
  },
  // Add more positions as needed
};
