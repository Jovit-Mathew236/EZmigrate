export interface ProgramType {
  title: string;
  shortForm: string;
  description: string;
  duration?: string;
  eligibilityRequirements?: string[];
  syllabus?: { title: string; description: string }[];
  benefits?: { title: string; description: string }[];
  careerProspects?: string[];
  examDetails?: {
    format?: string;
    sections?: string[];
    scoringSystem?: string;
    validity?: string;
    cost?: string;
  };
  whoShouldApply?: string[];
  trainingApproach?: { title: string; description: string }[];
  successStories?: { name: string; testimonial: string; score?: string }[];
}

export interface ProgramCategory {
  id: string;
  name: string;
  description: string;
  programs: Record<string, ProgramType>;
}

// Define the program categories and their programs
export const programCategories: ProgramCategory[] = [
  {
    id: "language-education",
    name: "Language Education",
    description:
      "Comprehensive preparation for English language proficiency tests required for migration, education, and professional registration.",
    programs: {
      oet: {
        title: "Occupational English Test (OET)",
        shortForm: "OET",
        description:
          "The Occupational English Test (OET) is designed for healthcare professionals who wish to register and practice in English-speaking countries. It assesses the ability to communicate effectively in a healthcare environment. OET is recognized by regulatory healthcare councils in Australia, the UK, Ireland, New Zealand, Dubai, Singapore, and many others. It's available for 12 healthcare professions, including nursing, medicine, pharmacy, physiotherapy, and more.",
        duration: "8-12 weeks (flexible schedules available)",
        eligibilityRequirements: [
          "Healthcare professionals seeking registration in English-speaking countries",
          "Basic understanding of English language",
          "Commitment to regular practice and assignments",
        ],
        syllabus: [
          {
            title: "Listening Skills",
            description:
              "Understanding medical consultations, healthcare lectures, and workplace communications",
          },
          {
            title: "Reading Comprehension",
            description:
              "Interpreting healthcare texts, medical journals, and professional guidelines",
          },
          {
            title: "Writing Proficiency",
            description:
              "Composing effective referral letters, discharge summaries, and patient notes",
          },
          {
            title: "Speaking Ability",
            description:
              "Conducting patient interviews, explaining procedures, and professional role-plays",
          },
        ],
        benefits: [
          {
            title: "Healthcare-Specific Content",
            description:
              "Material tailored to healthcare scenarios, enhancing professional relevance",
          },
          {
            title: "Global Recognition",
            description: "Accepted by healthcare boards and councils worldwide",
          },
          {
            title: "Profession-Specific Assessment",
            description:
              "Tests designed for specific healthcare roles, including nursing, medicine, and allied health",
          },
          {
            title: "Pathway to Registration",
            description:
              "Essential qualification for healthcare professionals seeking overseas practice",
          },
        ],
        examDetails: {
          format: "Four sub-tests: Listening, Reading, Writing, and Speaking",
          sections: [
            "Listening (45 minutes)",
            "Reading (60 minutes)",
            "Writing (45 minutes)",
            "Speaking (20 minutes)",
          ],
          scoringSystem:
            "Scores range from 0-500 in each sub-test, graded A (highest) to E (lowest)",
          validity: "2 years",
          cost: "Approximately $587 AUD",
        },
        whoShouldApply: [
          "Nurses seeking registration in the UK, Australia, Ireland, or New Zealand",
          "Doctors planning to practice in English-speaking countries",
          "Pharmacists, physiotherapists, and other healthcare professionals requiring English proficiency certification",
          "Healthcare workers applying for migration visas to English-speaking countries",
        ],
        trainingApproach: [
          {
            title: "Expert Instruction",
            description:
              "Classes led by experienced OET trainers with healthcare backgrounds",
          },
          {
            title: "Practice Tests",
            description:
              "Regular mock exams under timed conditions for realistic preparation",
          },
          {
            title: "Personalized Feedback",
            description:
              "Individual assessment and guidance on improving weak areas",
          },
          {
            title: "Healthcare Vocabulary",
            description:
              "Specialized medical terminology relevant to your profession",
          },
        ],
        successStories: [
          {
            name: "Dr. Anand Sharma",
            testimonial:
              "The OET training at EZmigrate was instrumental in my success. The healthcare-specific approach helped me understand exactly what was expected in real medical scenarios.",
            score: "Grade A in all sections",
          },
          {
            name: "Nurse Priya Patel",
            testimonial:
              "Thanks to the excellent coaching, I cleared OET with high scores on my first attempt and secured my UK nursing registration within months.",
            score: "Grade B in all sections",
          },
        ],
      },
      ielts: {
        title: "International English Language Testing System (IELTS)",
        shortForm: "IELTS",
        description:
          "IELTS is the world's most popular English language proficiency test for higher education and global migration. It assesses all four language skills: listening, reading, writing, and speaking.",
        duration: "4-12 weeks (flexible schedules available)",
        eligibilityRequirements: [
          "Individuals seeking to study, work, or migrate to English-speaking countries",
          "Basic understanding of English language",
          "Minimum age of 16 years (recommended)",
        ],
        syllabus: [
          {
            title: "Listening Skills",
            description:
              "Understanding conversations, lectures, and discussions in various contexts",
          },
          {
            title: "Reading Comprehension",
            description:
              "Interpreting complex texts, articles, and academic materials",
          },
          {
            title: "Writing Proficiency",
            description: "Producing essays, reports, and analytical responses",
          },
          {
            title: "Speaking Ability",
            description:
              "Participating in interviews, discussions, and presenting opinions",
          },
        ],
        benefits: [
          {
            title: "Global Recognition",
            description:
              "Accepted by over 11,000 organizations in 140 countries",
          },
          {
            title: "Academic and General Options",
            description: "Choose the test format that aligns with your goals",
          },
          {
            title: "Face-to-Face Speaking Assessment",
            description: "Real conversation with a certified examiner",
          },
          {
            title: "Fast Results",
            description: "Available online 13 days after the test",
          },
        ],
        examDetails: {
          format: "Four sections: Listening, Reading, Writing, and Speaking",
          sections: [
            "Listening (30 minutes)",
            "Reading (60 minutes)",
            "Writing (60 minutes)",
            "Speaking (11-14 minutes)",
          ],
          scoringSystem: "Band scores from 1 (lowest) to 9 (highest)",
          validity: "2 years",
          cost: "Approximately $215-240 USD",
        },
        whoShouldApply: [
          "Students applying to universities in the UK, Australia, Canada, and New Zealand",
          "Professionals seeking work opportunities abroad",
          "Individuals applying for permanent residency in Australia, Canada, and New Zealand",
          "Anyone needing to demonstrate English proficiency for academic or professional purposes",
        ],
        trainingApproach: [
          {
            title: "Comprehensive Curriculum",
            description: "Structured program covering all test components",
          },
          {
            title: "Regular Mock Tests",
            description: "Full-length practice exams with detailed feedback",
          },
          {
            title: "Band Score Enhancement",
            description:
              "Targeted strategies to achieve your required band score",
          },
          {
            title: "Personalized Coaching",
            description: "Individual attention to address specific challenges",
          },
        ],
        successStories: [
          {
            name: "Rahul Mehta",
            testimonial:
              "The IELTS trainers at EZmigrate helped me identify my weaknesses and provided targeted practice that boosted my confidence. I achieved Band 8 overall!",
            score: "Band 8.0",
          },
          {
            name: "Sneha Gupta",
            testimonial:
              "After struggling with Writing for months, the structured approach at EZmigrate helped me improve from Band 6 to Band 7.5 in just six weeks.",
            score: "Band 7.5",
          },
        ],
      },
      pte: {
        title: "Pearson Test of English (PTE Academic)",
        shortForm: "PTE",
        description:
          "PTE Academic is a computer-based English language test that measures reading, writing, listening, and speaking abilities. Known for its fast results and AI scoring, it's widely accepted for study, work, and migration purposes.",
        duration: "4-8 weeks (flexible schedules available)",
        eligibilityRequirements: [
          "Individuals seeking to study, work, or migrate to English-speaking countries",
          "Basic understanding of English language",
          "No minimum age requirement (recommended 16+)",
        ],
        syllabus: [
          {
            title: "Speaking & Writing",
            description:
              "Integrated skills including personal introduction, reading aloud, describing images, and essay writing",
          },
          {
            title: "Reading",
            description:
              "Multiple-choice questions, reordering paragraphs, and fill in the blanks",
          },
          {
            title: "Listening",
            description:
              "Summarizing spoken text, multiple-choice questions, fill in the blanks, and highlight correct summary",
          },
        ],
        benefits: [
          {
            title: "Fast Results",
            description: "Typically available within 48 hours",
          },
          {
            title: "Computer-Based Assessment",
            description: "Unbiased AI scoring system",
          },
          {
            title: "Global Recognition",
            description:
              "Accepted by thousands of institutions worldwide, especially in Australia and New Zealand",
          },
          {
            title: "Single 3-Hour Test",
            description: "Complete all components in one sitting",
          },
        ],
        examDetails: {
          format: "Computer-based test with three main parts",
          sections: [
            "Speaking & Writing (77-93 minutes)",
            "Reading (32-41 minutes)",
            "Listening (45-57 minutes)",
          ],
          scoringSystem: "Scores range from 10-90 for each skill and overall",
          validity: "2 years",
          cost: "Approximately $210 USD",
        },
        whoShouldApply: [
          "Students applying to universities that accept PTE Academic scores",
          "Individuals applying for Australian and New Zealand visas",
          "Professionals seeking work opportunities abroad",
          "Anyone preferring a computer-based test with quick results",
        ],
        trainingApproach: [
          {
            title: "Computer-Based Practice",
            description:
              "Familiarization with the testing environment and format",
          },
          {
            title: "AI-Scoring Insights",
            description: "Understanding how the automated scoring works",
          },
          {
            title: "Time Management Skills",
            description: "Strategies to complete each section efficiently",
          },
          {
            title: "Integrated Skills Training",
            description:
              "Practicing tasks that combine multiple language abilities",
          },
        ],
        successStories: [
          {
            name: "Vikram Singh",
            testimonial:
              "The PTE coaching at EZmigrate was spot-on with their prediction of exam patterns. Their computer-based practice sessions perfectly simulated the real test experience.",
            score: "Score: 82/90",
          },
          {
            name: "Neha Kumar",
            testimonial:
              "I was struggling with the speaking section until I joined EZmigrate. Their specialized techniques helped me improve my fluency and content score dramatically.",
            score: "Score: 79/90",
          },
        ],
      },
    },
  },
  {
    id: "professional-registration",
    name: "Professional Registration",
    description:
      "Specialized training programs designed to help healthcare professionals pass registration exams for practicing in foreign countries.",
    programs: {
      osce: {
        title: "OSCE for RN Registration in New Zealand",
        shortForm: "OSCE",
        description:
          "The OSCE (Objective Structured Clinical Examination) is a critical component of the process for registering as a Registered Nurse (RN) in New Zealand. The OSCE assesses an individual's clinical skills, knowledge, and practical competencies, ensuring that international nurses meet the required standards for safe practice within New Zealand's healthcare system. This examination is a mandatory requirement for international nurses who wish to become licensed to practice as RNs in New Zealand. The OSCE evaluates both theoretical understanding and practical application of nursing skills in real-life scenarios.",
        duration:
          "One day examination (typically 6-10 stations, 8-10 minutes each)",
        eligibilityRequirements: [
          "Hold an internationally recognized nursing qualification equivalent to the New Zealand nursing standard",
          "Application for registration with the Nursing Council of New Zealand (NCNZ)",
          "Demonstrate English proficiency through tests like IELTS or OET",
          "Provide evidence of recent clinical experience (may be required on a case-by-case basis)",
        ],
        syllabus: [
          {
            title: "Theory Component",
            description:
              "Evaluation of nursing theory, principles, and guidelines including nursing assessment, care planning, infection control, medications administration, ethical and legal principles, patient advocacy, and cultural safety and competence.",
          },
          {
            title: "Clinical Skills Stations",
            description:
              "Performance of basic nursing procedures (vital signs, wound care, medication administration), patient assessment, and management of critical care scenarios.",
          },
          {
            title: "Communication and Interpersonal Skills",
            description:
              "Demonstration of effective communication with patients, families, and healthcare team members in various scenarios.",
          },
          {
            title: "Clinical Reasoning",
            description:
              "Critical thinking and decision-making in simulated scenarios, including prioritization of care, problem identification, and appropriate nursing interventions.",
          },
          {
            title: "Patient Safety",
            description:
              "Demonstration of safe practice following New Zealand's healthcare standards, including proper infection control, medication safety, and culturally safe care.",
          },
        ],
        benefits: [
          {
            title: "New Zealand Registration",
            description:
              "Successful completion is a key step toward obtaining registration as a Registered Nurse in New Zealand",
          },
          {
            title: "International Recognition",
            description:
              "New Zealand nursing qualifications are well-respected globally, opening opportunities for international practice",
          },
          {
            title: "Career Advancement",
            description:
              "Access to diverse nursing roles in New Zealand's comprehensive healthcare system",
          },
          {
            title: "Standardized Assessment",
            description:
              "Objective evaluation of clinical competencies relevant to New Zealand nursing practice",
          },
        ],
        examDetails: {
          format: "Series of 6-10 stations with simulated clinical scenarios",
          sections: [
            "Station 1: Patient history and assessment",
            "Station 2: Medication administration",
            "Station 3: Emergency situation management",
            "Station 4: Wound assessment and care",
            "Station 5: Health education and counseling",
            "Station 6: Communication with patients/family members",
          ],
          scoringSystem:
            "Based on meeting required criteria outlined by the Nursing Council of New Zealand",
          validity: "Results valid for the registration application process",
          cost: "Approximately NZD 1,100 to 1,400",
        },
        whoShouldApply: [
          "International nurses seeking registration in New Zealand",
          "Nurses with qualifications from outside New Zealand",
          "Healthcare professionals planning to relocate to New Zealand",
          "Nurses interested in expanding their practice to New Zealand's healthcare system",
        ],
        trainingApproach: [
          {
            title: "NCNZ Guidelines Review",
            description:
              "Comprehensive study of Nursing Council of New Zealand standards and expectations",
          },
          {
            title: "Practice Examinations",
            description:
              "Simulated OSCE scenarios to familiarize candidates with the exam format",
          },
          {
            title: "Clinical Skills Enhancement",
            description:
              "Hands-on practice of core nursing skills required for the examination",
          },
          {
            title: "Communication Training",
            description:
              "Development of effective interpersonal and professional communication skills",
          },
          {
            title: "Time Management Strategies",
            description:
              "Techniques for completing tasks efficiently within the time constraints of each station",
          },
        ],
        successStories: [
          {
            name: "Nurse Maria Rodriguez",
            testimonial:
              "The OSCE preparation at EZmigrate was incredibly thorough. Their simulated stations were almost identical to what I experienced in the actual exam, which gave me the confidence to perform well. I'm now registered and working as an RN in Auckland.",
          },
          {
            name: "Nurse David Chen",
            testimonial:
              "After struggling with the clinical reasoning components, EZmigrate's focused coaching helped me understand exactly what the examiners were looking for. Their cultural competence training was particularly valuable for practicing in New Zealand's diverse healthcare environment.",
          },
        ],
      },
      "nclex-rn": {
        title: "National Council Licensure Examination (NCLEX-RN)",
        shortForm: "NCLEX-RN",
        description:
          "The NCLEX-RN is a standardized exam used to determine if a candidate is prepared for entry-level nursing practice in the United States and Canada. Passing this exam is essential for obtaining a nursing license in these countries.",
        duration: "8-16 weeks (flexible schedules available)",
        eligibilityRequirements: [
          "Graduation from an approved nursing program",
          "Authorization to Test (ATT) from a nursing regulatory body (NRB)",
          "Meeting eligibility criteria set by the state/province board of nursing",
        ],
        syllabus: [
          {
            title: "Safe and Effective Care Environment",
            description: "Management of care, safety, and infection control",
          },
          {
            title: "Health Promotion and Maintenance",
            description:
              "Growth and development, prevention, and early detection of disease",
          },
          {
            title: "Psychosocial Integrity",
            description: "Coping, adaptation, and mental health concepts",
          },
          {
            title: "Physiological Integrity",
            description:
              "Basic care, pharmacological therapies, reduction of risk potential, and physiological adaptation",
          },
        ],
        benefits: [
          {
            title: "International Recognition",
            description:
              "License valid across the United States and reciprocity with many countries",
          },
          {
            title: "Career Opportunities",
            description: "Access to nursing positions in the US and Canada",
          },
          {
            title: "Comprehensive Assessment",
            description:
              "Thorough evaluation of nursing knowledge and critical thinking",
          },
          {
            title: "Professional Advancement",
            description:
              "Foundation for specialized nursing certifications and advanced practice",
          },
        ],
        examDetails: {
          format: "Computerized Adaptive Test (CAT)",
          sections: [
            "Minimum 75 questions, maximum 145 questions",
            "Multiple-choice, multiple-response, fill-in-the-blank, and hot spot questions",
            "Time limit: 5 hours",
          ],
          scoringSystem: "Pass/Fail based on meeting the passing standard",
          validity:
            "Varies by state/province (typically indefinite once registered)",
          cost: "Approximately $200-$300 USD (plus international scheduling fees)",
        },
        whoShouldApply: [
          "Nurses seeking to practice in the United States or Canada",
          "International nursing graduates pursuing North American licensure",
          "Registered nurses wanting to relocate to the US or Canada",
          "Nursing students preparing for post-graduation licensure",
        ],
        trainingApproach: [
          {
            title: "Comprehensive Content Review",
            description:
              "Systematic coverage of all NCLEX-RN test plan categories",
          },
          {
            title: "Test-Taking Strategies",
            description:
              "Techniques for analyzing and answering various question types",
          },
          {
            title: "Adaptive Quizzing",
            description: "Practice with CAT-style question banks",
          },
          {
            title: "Critical Thinking Development",
            description: "Clinical judgment and decision-making exercises",
          },
          {
            title: "Simulated Exams",
            description: "Full-length practice tests under timed conditions",
          },
        ],
        successStories: [
          {
            name: "Nurse James Patel",
            testimonial:
              "The NCLEX-RN program at EZmigrate was rigorous but exactly what I needed. Their question banks and rationales were comprehensive, and the adaptive quizzing helped me understand the CAT format perfectly.",
          },
          {
            name: "Nurse Sophia Chen",
            testimonial:
              "After studying on my own and feeling overwhelmed, I joined EZmigrate's NCLEX program. The structured approach and expert guidance made all the difference. I passed in 75 questions on my first attempt!",
          },
        ],
      },
      fmge: {
        title: "Foreign Medical Graduate Examination (FMGE)",
        shortForm: "FMGE",
        description:
          "The FMGE, also known as the MCI Screening Test, is a licensing exam conducted by the National Board of Examinations (NBE) in India. It assesses whether foreign medical graduates are qualified to practice medicine in India.",
        duration: "12-24 weeks (intensive preparation)",
        eligibilityRequirements: [
          "Indian citizens who have completed medical education from foreign institutions",
          "Possession of a primary medical qualification recognized by the Medical Council of India",
          "Completion of internship or practical training as required by the foreign medical institution",
        ],
        syllabus: [
          {
            title: "Pre-Clinical Subjects",
            description: "Anatomy, Physiology, Biochemistry",
          },
          {
            title: "Para-Clinical Subjects",
            description:
              "Pharmacology, Pathology, Microbiology, Forensic Medicine",
          },
          {
            title: "Clinical Subjects",
            description:
              "Medicine, Surgery, Obstetrics & Gynecology, Pediatrics, Community Medicine",
          },
          {
            title: "Specialized Topics",
            description:
              "ENT, Ophthalmology, Dermatology, Psychiatry, Orthopedics",
          },
        ],
        benefits: [
          {
            title: "Medical License in India",
            description: "Eligibility to practice medicine in India",
          },
          {
            title: "Comprehensive Medical Knowledge Review",
            description: "Thorough revision of all medical disciplines",
          },
          {
            title: "Career Path in India",
            description: "Opportunity to work in the Indian healthcare system",
          },
          {
            title: "Pathway to Further Specialization",
            description:
              "Eligibility for postgraduate medical education in India",
          },
        ],
        examDetails: {
          format: "Computer-based multiple-choice questions",
          sections: [
            "Part A: 150 questions",
            "Part B: 150 questions",
            "Total: 300 questions to be completed in 5.5 hours",
          ],
          scoringSystem: "Minimum passing score: 150 out of 300 (50%)",
          validity: "Unlimited attempts (conducted twice a year)",
          cost: "Approximately INR 5,500",
        },
        whoShouldApply: [
          "Indian citizens with foreign medical degrees seeking to practice in India",
          "Foreign medical graduates returning to India after education abroad",
          "Doctors planning to establish their medical career in India",
          "Medical graduates preparing for postgraduate medical entrance exams in India",
        ],
        trainingApproach: [
          {
            title: "Subject-Wise Training",
            description:
              "Systematic coverage of all 19 subjects in the FMGE syllabus",
          },
          {
            title: "High-Yield Focus",
            description: "Emphasis on frequently tested topics and concepts",
          },
          {
            title: "Regular Assessment",
            description: "Subject-wise and comprehensive mock tests",
          },
          {
            title: "Expert Faculty",
            description:
              "Guidance from experienced medical educators and FMGE specialists",
          },
          {
            title: "Last-Minute Revision",
            description:
              "Condensed review materials for final preparation phase",
          },
        ],
        successStories: [
          {
            name: "Dr. Priya Sharma",
            testimonial:
              "After two unsuccessful attempts, I joined EZmigrate's FMGE program. Their systematic approach, high-yield content focus, and rigorous testing schedule were exactly what I needed to finally clear the exam.",
          },
          {
            name: "Dr. Rajiv Verma",
            testimonial:
              "The FMGE coaching at EZmigrate stands out for its comprehensive coverage and expert faculty. The subject specialists helped me understand complex concepts clearly, and the mock tests accurately reflected the actual exam pattern.",
          },
        ],
      },
      cbt: {
        title: "Computer-Based Test (CBT) for Nursing Registration",
        shortForm: "CBT",
        description:
          "The Computer-Based Test is a nursing theory examination required for international nurses seeking registration in countries like the UK, Australia, and New Zealand. It assesses theoretical knowledge and professional competencies before the practical OSCE assessment.",
        duration: "6-12 weeks (depending on prior knowledge)",
        eligibilityRequirements: [
          "Qualified nurses with nursing degrees from non-UK/Australia/NZ institutions",
          "English language proficiency certification (IELTS/OET)",
          "Application approval from the relevant nursing council (e.g., NMC, NMBA)",
        ],
        syllabus: [
          {
            title: "Professional Values and Practice",
            description:
              "Ethical practices, legal frameworks, and professional standards",
          },
          {
            title: "Communication and Interpersonal Skills",
            description: "Effective communication in healthcare settings",
          },
          {
            title: "Nursing Practice and Decision-Making",
            description:
              "Evidence-based practice, clinical judgment, and care planning",
          },
          {
            title: "Leadership, Management, and Team Working",
            description: "Collaborative practice and healthcare team dynamics",
          },
        ],
        benefits: [
          {
            title: "First Step to Registration",
            description:
              "Essential component of the nursing registration process",
          },
          {
            title: "Theoretical Knowledge Verification",
            description:
              "Ensures nurses meet host country's standards of practice",
          },
          {
            title: "Computer-Based Format",
            description: "Flexible testing dates and locations worldwide",
          },
          {
            title: "Preparation for OSCE",
            description:
              "Builds theoretical foundation for practical assessment",
          },
        ],
        examDetails: {
          format: "Computer-based multiple-choice questions",
          sections: [
            "Typically 120-170 questions",
            "Time limit: 3-4 hours",
            "Scenario-based and standalone questions",
          ],
          scoringSystem: "Pass/Fail based on meeting the required standard",
          validity: "Results typically valid for 2-3 years",
          cost: "Approximately $120-$180 USD",
        },
        whoShouldApply: [
          "International nurses applying for UK Nursing and Midwifery Council (NMC) registration",
          "Nurses seeking registration with the Nursing and Midwifery Board of Australia (NMBA)",
          "Healthcare professionals requiring theory examination before practical assessment",
          "Nurses in the process of overseas registration",
        ],
        trainingApproach: [
          {
            title: "Comprehensive Theory Review",
            description:
              "Systematic coverage of all required knowledge domains",
          },
          {
            title: "Country-Specific Practices",
            description:
              "Focus on healthcare systems and practices of the target country",
          },
          {
            title: "Question Bank Practice",
            description: "Extensive practice with CBT-style questions",
          },
          {
            title: "Test-Taking Strategies",
            description:
              "Techniques for analyzing and answering multiple-choice questions",
          },
          {
            title: "Mock Examinations",
            description: "Full-length practice tests under timed conditions",
          },
        ],
        successStories: [
          {
            name: "Nurse Thomas Lee",
            testimonial:
              "The CBT preparation at EZmigrate was comprehensive and focused on the UK nursing context, which was exactly what I needed. The practice questions were very similar to the actual test, and I passed with confidence.",
          },
          {
            name: "Nurse Aisha Rahman",
            testimonial:
              "After struggling with understanding the Australian nursing requirements, EZmigrate's CBT program provided clarity and structure. Their country-specific approach helped me understand the expectations and standards of the NMBA.",
          },
        ],
      },
    },
  },
];
