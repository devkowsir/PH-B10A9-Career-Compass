import careerCounseling from "../../assets/images/career-counseling.jpg";
import careerPlanningWorkshops from "../../assets/images/career-planning-workshops.jpg";
import groupCounseling from "../../assets/images/group-counseling.jpg";
import mockInterviews from "../../assets/images/mock-interviews.jpg";
import resumeReview from "../../assets/images/resume-review.jpg";
import skillAssessments from "../../assets/images/skill-assessments.jpg";
import counselor_1 from "../../assets/images/counselor-1.jpg";
import counselor_2 from "../../assets/images/counselor-2.jpg";
import counselor_3 from "../../assets/images/counselor-3.jpg";

import analysisIcon from "../../assets/images/analysis-icon.png";
import assessmentIcon from "../../assets/images/assesment-icon.png";
import careerMappingIcon from "../../assets/images/career-mapping-icon.png";
import collaborativeLearningIcon from "../../assets/images/collaborative-learning-icon.png";
import comprehensiveTestsIcon from "../../assets/images/comprehensive-tests-icon.png";
import customizationIcon from "../../assets/images/customization-icon.png";
import diversePerspectivesIcon from "../../assets/images/diverse-perspectives-icon.png";
import expertFeedbackIcon from "../../assets/images/expert-feedback-icon.png";
import expertModerationIcon from "../../assets/images/expert-moderation-icon.png";
import feedbackIcon from "../../assets/images/feedback-icon.png";
import goalSettingIcon from "../../assets/images/goal-setting-icon.png";
import groupSessionsIcon from "../../assets/images/group-sessions-icon.png";
import guidanceIcon from "../../assets/images/guidance-icon.png";
import planIcon from "../../assets/images/plan-icon.png";
import realisticIcon from "../../assets/images/realistic-icon.png";
import recommendationsIcon from "../../assets/images/recommendations-icon.png";
import tipsIcon from "../../assets/images/tips-icon.png";
import trackingSystemIcon from "../../assets/images/tracking-system-icon.png";

export const Services = [
  {
    slug: "career-counseling",
    title: "Career Counseling Sessions",
    heroSection: {
      heading: "Career Counseling Sessions",
      subHeading: "Discover the career path that suits you best!",
      image: careerCounseling,
      ctaText: "Book Now",
      ctaLink: "/book/career-counseling",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Get personalized guidance to identify your strengths, interests, and goals.",
      description:
        "Our personalized career counseling sessions are designed to help you discover the right career path. Whether you're a student or a professional seeking guidance, our experts will work with you to create actionable career plans.",
      targetAudience: "Students, fresh graduates, professionals seeking guidance.",
    },
    keyFeaturesSection: {
      heading: "Key Features",
      subHeading: "What makes this service valuable?",
      features: [
        {
          title: "One-on-One Guidance",
          description: "Get individual attention from expert counselors tailored to your needs.",
          icon: guidanceIcon,
        },
        {
          title: "Tailored Career Plans",
          description: "Receive a detailed plan aligned with your career aspirations.",
          icon: planIcon,
        },
        {
          title: "Strength & Interest Assessment",
          description: "Understand your strengths and interests through professional tools.",
          icon: assessmentIcon,
        },
      ],
    },
    pricingAndDurationSection: {
      heading: "Pricing & Duration",
      subHeading: "Flexible scheduling at affordable pricing.",
      pricing: "$50 per session",
      duration: "1-hour session",
      additionalDetails: "Available for online scheduling.",
    },
    counselorSection: {
      heading: "Meet Your Counselor",
      subHeading: "Guidance from a seasoned professional.",
      name: "Dr. Sarah Lee",
      bio: "Dr. Sarah Lee has over 10 years of experience in career counseling, helping individuals achieve clarity and professional success.",
      image: counselor_2,
      socialMedia: {
        linkedIn: "https://linkedin.com/in/dr-sarah-lee",
        twitter: "https://twitter.com/drsarahlee",
      },
    },
    testimonialsSection: {
      heading: "What Our Clients Say",
      subHeading: "Real feedback from satisfied clients.",
      testimonials: [
        {
          quote: "Dr. Sarah Lee helped me discover my true potential and land my dream job.",
          user: "Emily R., Software Engineer",
          image: "testimonial-1.jpg",
        },
        {
          quote: "The one-on-one sessions gave me the clarity I needed to pivot my career successfully.",
          user: "John P., Marketing Specialist",
          image: "testimonial-2.jpg",
        },
        {
          quote: "Her guidance was instrumental in helping me choose the right career path.",
          user: "Sarah M., Data Analyst",
          image: "testimonial-3.jpg",
        },
      ],
    },
    ctaSection: {
      heading: "Ready to Discover Your Path?",
      subHeading: "Take the first step toward a brighter future.",
      ctaButtonText: "Book Your Session Now",
      ctaButtonLink: "/book/career-counseling",
    },
  },
  {
    slug: "resume-review",
    title: "Resume Reviews",
    heroSection: {
      heading: "Resume Reviews",
      subHeading: "Optimize your resume for better opportunities and career growth.",
      image: resumeReview,
      ctaText: "Get Feedback",
      ctaLink: "/book/resume-review",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Make your resume stand out in the job market.",
      description:
        "Our resume review service ensures your resume is polished and tailored to the industry you’re targeting. We optimize content, structure, and keywords to improve your chances of getting noticed.",
      targetAudience: "Job seekers, professionals switching careers.",
    },
    keyFeaturesSection: {
      heading: "Key Features",
      subHeading: "What you can expect from this service.",
      features: [
        {
          title: "Detailed Feedback",
          description: "Receive comprehensive analysis and suggestions for improvement.",
          icon: feedbackIcon,
        },
        {
          title: "ATS Optimization",
          description: "Ensure your resume passes Applicant Tracking Systems for better visibility.",
          icon: trackingSystemIcon,
        },
        {
          title: "Customized for Industry",
          description: "Tailored recommendations based on your target industry and role.",
          icon: customizationIcon,
        },
      ],
    },
    pricingAndDurationSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable and flexible feedback sessions.",
      pricing: "$20 per review",
      duration: "Flexible, 1-hour feedback session",
      additionalDetails: "Submit your resume and get feedback within 48 hours.",
    },
    counselorSection: {
      heading: "Meet Your Expert",
      subHeading: "Resume optimization from a seasoned professional.",
      name: "John Doe",
      bio: "John Doe specializes in crafting resumes that stand out in competitive job markets. With over 8 years of experience, he has helped numerous professionals achieve their career goals.",
      image: counselor_1,
      socialMedia: {
        linkedIn: "https://linkedin.com/in/john-doe",
        twitter: "https://twitter.com/johndoeresumes",
      },
    },
    testimonialsSection: {
      heading: "What Our Clients Say",
      subHeading: "Hear from those who’ve succeeded with our help.",
      testimonials: [
        {
          quote: "My resume got noticed by multiple recruiters after the review!",
          user: "David K., Data Scientist",
          image: "testimonial-1.jpg",
        },
        {
          quote: "John’s feedback helped me align my resume with the job description perfectly.",
          user: "Anna L., Marketing Specialist",
          image: "testimonial-2.jpg",
        },
        {
          quote: "I never knew how much of a difference ATS optimization could make!",
          user: "Sophia W., Financial Analyst",
          image: "testimonial-3.jpg",
        },
      ],
    },
    ctaSection: {
      heading: "Want Your Resume to Shine?",
      subHeading: "Take the first step to land your dream job.",
      ctaButtonText: "Get Your Review Now",
      ctaButtonLink: "/book/resume-review",
    },
  },
  {
    slug: "mock-interviews",
    title: "Mock Interviews",
    heroSection: {
      heading: "Mock Interviews",
      subHeading: "Ace your next interview with confidence and preparation.",
      image: mockInterviews,
      ctaText: "Schedule Now",
      ctaLink: "/book/mock-interviews",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Simulated interviews to boost your confidence and readiness.",
      description:
        "Our mock interview service replicates real-world interview scenarios to help you practice and gain confidence. Receive constructive feedback from industry experts to refine your answers, body language, and overall performance.",
      targetAudience: "Job seekers, professionals preparing for interviews, and students entering the workforce.",
    },
    keyFeaturesSection: {
      heading: "Key Features",
      subHeading: "How this service prepares you for success.",
      features: [
        {
          title: "Realistic Scenarios",
          description: "Simulate interviews tailored to your desired role and industry.",
          icon: realisticIcon,
        },
        {
          title: "Expert Feedback",
          description: "Receive detailed feedback on your responses, communication, and presentation skills.",
          icon: expertFeedbackIcon,
        },
        {
          title: "Personalized Tips",
          description: "Get actionable advice to improve your interview performance.",
          icon: tipsIcon,
        },
      ],
    },
    pricingAndDurationSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable practice sessions for guaranteed improvement.",
      pricing: "$100 per session",
      duration: "2-hour session",
      additionalDetails: "Includes a 30-minute feedback session after the mock interview.",
    },
    counselorSection: {
      heading: "Meet Your Interview Coach",
      subHeading: "Guidance from an experienced industry professional.",
      name: "Jane Smith",
      bio: "Jane Smith has over 12 years of experience in HR and recruitment. She has conducted hundreds of interviews and specializes in preparing candidates for high-stakes roles.",
      image: counselor_1,
      socialMedia: {
        linkedIn: "https://linkedin.com/in/jane-smith",
        twitter: "https://twitter.com/janeinterviews",
      },
    },
    testimonialsSection: {
      heading: "What Our Clients Say",
      subHeading: "See how mock interviews helped others succeed.",
      testimonials: [
        {
          quote:
            "The mock interview gave me the confidence I needed to perform well in my actual interview. Jane’s feedback was incredibly helpful.",
          user: "Mark T., Software Developer",
          image: "testimonial-1.jpg",
        },
        {
          quote:
            "I landed my dream job after attending the mock interview sessions. The tips I received were game-changing.",
          user: "Laura H., Data Scientist",
          image: "testimonial-2.jpg",
        },
        {
          quote: "The realistic scenarios helped me manage my nerves and prepare thoughtful answers.",
          user: "Chris P., Project Manager",
          image: "testimonial-3.jpg",
        },
      ],
    },
    ctaSection: {
      heading: "Ready to Nail Your Next Interview?",
      subHeading: "Practice makes perfect. Schedule your mock interview today.",
      ctaButtonText: "Book Your Mock Interview",
      ctaButtonLink: "/book/mock-interviews",
    },
  },
  {
    slug: "career-planning-workshops",
    title: "Career Planning Workshops",
    heroSection: {
      heading: "Career Planning Workshops",
      subHeading: "Strategize your career with expert-led workshops.",
      image: careerPlanningWorkshops,
      ctaText: "Join Now",
      ctaLink: "/book/career-planning-workshops",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Interactive workshops to design your career roadmap.",
      description:
        "Our career planning workshops provide hands-on guidance to help you set clear career goals and develop a strategic plan to achieve them. Collaborate with peers and experts in an engaging environment designed to empower you for success.",
      targetAudience: "Students, professionals planning career transitions, and aspiring leaders.",
    },
    keyFeaturesSection: {
      heading: "Key Features",
      subHeading: "What you’ll gain from this workshop.",
      features: [
        {
          title: "Goal Setting Activities",
          description: "Define your short-term and long-term career goals effectively.",
          icon: goalSettingIcon,
        },
        {
          title: "Strategic Career Mapping",
          description: "Learn how to build a comprehensive career plan aligned with your aspirations.",
          icon: careerMappingIcon,
        },
        {
          title: "Interactive Group Sessions",
          description: "Engage with peers to share ideas, gain insights, and network effectively.",
          icon: groupSessionsIcon,
        },
      ],
    },
    pricingAndDurationSection: {
      heading: "Pricing & Duration",
      subHeading: "Plan your career in a single session.",
      pricing: "$80 per workshop",
      duration: "3-hour interactive workshop",
      additionalDetails: "Includes all materials and a post-session Q&A with experts.",
    },
    counselorSection: {
      heading: "Meet Your Workshop Leader",
      subHeading: "Guidance from an experienced career strategist.",
      name: "Emily Brown",
      bio: "Emily Brown has over 15 years of experience in career coaching and strategic planning. She specializes in helping individuals achieve clarity and direction in their professional lives.",
      image: counselor_2,
      socialMedia: {
        linkedIn: "https://linkedin.com/in/emily-brown",
        twitter: "https://twitter.com/emilystrategist",
      },
    },
    testimonialsSection: {
      heading: "What Our Attendees Say",
      subHeading: "See how our workshops have transformed careers.",
      testimonials: [
        {
          quote:
            "The workshop helped me set clear goals and gave me the tools to achieve them. Emily’s expertise was invaluable.",
          user: "Alex J., Business Analyst",
          image: "testimonial-1.jpg",
        },
        {
          quote:
            "Collaborating with others in the session opened up new perspectives for my career journey. Highly recommended!",
          user: "Rachel P., Marketing Manager",
          image: "testimonial-2.jpg",
        },
        {
          quote:
            "I walked away with a solid career plan and the confidence to follow it. The interactive activities were fantastic.",
          user: "Jason L., UX Designer",
          image: "testimonial-3.jpg",
        },
      ],
    },
    ctaSection: {
      heading: "Ready to Plan Your Dream Career?",
      subHeading: "Take the first step toward a successful future.",
      ctaButtonText: "Join the Workshop Now",
      ctaButtonLink: "/book/career-planning-workshops",
    },
  },
  {
    slug: "skill-assessments",
    title: "Skill Assessment Tests",
    heroSection: {
      heading: "Skill Assessment Tests",
      subHeading: "Identify your strengths and areas for improvement.",
      image: skillAssessments,
      ctaText: "Take the Test",
      ctaLink: "/book/skill-assessments",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Evaluate your skills and unlock your potential.",
      description:
        "Our skill assessment tests are designed to provide an in-depth understanding of your abilities. Whether you're exploring new career opportunities or planning your professional growth, these assessments help identify your strengths and areas for improvement.",
      targetAudience: "Professionals, job seekers, and students exploring career options.",
    },
    keyFeaturesSection: {
      heading: "Key Features",
      subHeading: "What makes our skill assessments effective?",
      features: [
        {
          title: "Comprehensive Tests",
          description: "Evaluate your technical, soft, and analytical skills in one platform.",
          icon: comprehensiveTestsIcon,
        },
        {
          title: "Detailed Analysis",
          description: "Receive a detailed report highlighting your strengths and improvement areas.",
          icon: analysisIcon,
        },
        {
          title: "Tailored Recommendations",
          description: "Get personalized suggestions to enhance your skills based on your results.",
          icon: recommendationsIcon,
        },
      ],
    },
    pricingAndDurationSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable assessments with flexible scheduling.",
      pricing: "$30 per test",
      duration: "45-minute online test",
      additionalDetails: "Results are delivered within 24 hours along with expert recommendations.",
    },
    counselorSection: {
      heading: "Meet Your Assessment Guide",
      subHeading: "Expert analysis from a seasoned career coach.",
      name: "Michael Green",
      bio: "Michael Green has over a decade of experience in talent assessment and career development. He specializes in identifying key strengths to help professionals achieve their goals.",
      image: counselor_3,
      socialMedia: {
        linkedIn: "https://linkedin.com/in/michael-green",
        twitter: "https://twitter.com/michaelassessment",
      },
    },
    testimonialsSection: {
      heading: "What Our Clients Say",
      subHeading: "Feedback from professionals who’ve unlocked their potential.",
      testimonials: [
        {
          quote:
            "The skill assessment gave me a clear idea of where I stand and what I need to improve. The report was incredibly detailed.",
          user: "Olivia R., Software Engineer",
          image: "testimonial-1.jpg",
        },
        {
          quote:
            "I loved how the results came with actionable recommendations tailored to my goals. Highly recommended!",
          user: "Ethan M., Data Analyst",
          image: "testimonial-2.jpg",
        },
        {
          quote:
            "The test was comprehensive yet straightforward. It helped me focus on the areas that matter most for my career growth.",
          user: "Sophia T., Marketing Specialist",
          image: "testimonial-3.jpg",
        },
      ],
    },
    ctaSection: {
      heading: "Ready to Assess Your Skills?",
      subHeading: "Take the first step to understanding your potential.",
      ctaButtonText: "Take the Test Now",
      ctaButtonLink: "/book/skill-assessments",
    },
  },
  {
    slug: "group-counseling",
    title: "Group Counseling Sessions",
    heroSection: {
      heading: "Group Counseling Sessions",
      subHeading: "Collaborate and grow with peers in a supportive environment.",
      image: groupCounseling,
      ctaText: "Join a Session",
      ctaLink: "/book/group-counseling",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Explore career options through collaborative counseling.",
      description:
        "Our group counseling sessions provide a platform to share ideas, learn from others, and receive guidance in a collaborative setting. Join peers with similar goals and benefit from expert-led discussions.",
      targetAudience: "Students, professionals exploring options, and career changers.",
    },
    keyFeaturesSection: {
      heading: "Key Features",
      subHeading: "What makes our group sessions effective?",
      features: [
        {
          title: "Collaborative Learning",
          description: "Engage with peers to share experiences and gain insights.",
          icon: collaborativeLearningIcon,
        },
        {
          title: "Expert Moderation",
          description: "Sessions led by seasoned counselors to keep discussions focused and productive.",
          icon: expertModerationIcon,
        },
        {
          title: "Diverse Perspectives",
          description: "Learn from others' experiences and broaden your career outlook.",
          icon: diversePerspectivesIcon,
        },
      ],
    },
    pricingAndDurationSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable group sessions tailored for your success.",
      pricing: "$60 per session",
      duration: "2-hour group session",
      additionalDetails: "Limited to small groups for a personalized experience.",
    },
    counselorSection: {
      heading: "Meet Your Counselor",
      subHeading: "Expert-led sessions for impactful discussions.",
      name: "Anna White",
      bio: "Anna White has over 8 years of experience in career counseling and group facilitation. She specializes in fostering collaborative environments to help individuals explore new opportunities.",
      image: counselor_3,
      socialMedia: {
        linkedIn: "https://linkedin.com/in/anna-white",
        twitter: "https://twitter.com/annawhitecounsel",
      },
    },
    testimonialsSection: {
      heading: "What Our Clients Say",
      subHeading: "See how group counseling has made a difference.",
      testimonials: [
        {
          quote:
            "The group session helped me see new career possibilities I hadn't considered before. It was an eye-opening experience.",
          user: "Mason L., Web Developer",
          image: "testimonial-1.jpg",
        },
        {
          quote:
            "Sharing ideas with others and receiving guidance from Anna was truly inspiring. The session was both informative and motivating.",
          user: "Liam S., Product Manager",
          image: "testimonial-2.jpg",
        },
        {
          quote:
            "I loved the collaborative nature of the session. It was reassuring to know others were facing similar challenges.",
          user: "Emma W., Graphic Designer",
          image: "testimonial-3.jpg",
        },
      ],
    },
    ctaSection: {
      heading: "Ready to Join a Group Session?",
      subHeading: "Collaborate with peers and gain expert guidance.",
      ctaButtonText: "Book Your Spot Now",
      ctaButtonLink: "/book/group-counseling",
    },
  },
];
