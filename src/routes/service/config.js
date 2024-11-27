import careerCounseling from "../../assets/images/career-counseling.jpg";
import careerPlanningWorkshops from "../../assets/images/career-planning-workshops.jpg";
import groupCounseling from "../../assets/images/group-counseling.jpg";
import mockInterviews from "../../assets/images/mock-interviews.jpg";
import resumeReview from "../../assets/images/resume-review.jpg";
import skillAssessments from "../../assets/images/skill-assessments.jpg";
import counselor_1 from "../../assets/images/counselor-1.jpg";
import counselor_2 from "../../assets/images/counselor-2.jpg";
import counselor_3 from "../../assets/images/counselor-3.jpg";
import testimonial_1 from "../../assets/images/testimonial-1.jpg";
import testimonial_2 from "../../assets/images/testimonial-2.jpg";
import testimonial_3 from "../../assets/images/testimonial-3.jpg";

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

export const BookingTimes = [
  { time: "8:00 AM" },
  { time: "9:00 AM" },
  { time: "10:00 AM" },
  { time: "11:00 AM" },
  { time: "12:00 PM" },
  { time: "1:00 PM" },
  { time: "2:00 PM" },
  { time: "3:00 PM" },
  { time: "4:00 PM" },
  { time: "5:00 PM" },
  { time: "6:00 PM" },
  { time: "7:00 PM" },
  { time: "8:00 PM" },
];

export const Services = [
  {
    slug: "career-counseling",
    title: "Career Counseling Sessions",
    category: "Offline",
    heroSection: {
      heading: "Career Counseling Sessions",
      subHeading: "Discover the career path that suits you best!",
      image: careerCounseling,
      ctaText: "Book Now",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Get personalized guidance to identify your strengths, interests, and goals.",
      image: careerCounseling,
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
    pricingSection: {
      heading: "Pricing & Duration",
      subHeading: "Flexible scheduling at affordable pricing.",
      basePrice: 50,
      baseDuration: "1-hour online session",
      availability: "Weekdays and Weekends",
      customizationOptions: [
        {
          name: "Additional Duration",
          description: "Extend the session by 30 minutes",
          priceAdjustment: 20,
          enabled: false,
        },
        {
          name: "Follow-Up Session",
          description: "Schedule a follow-up counseling session",
          priceAdjustment: 40,
          enabled: false,
        },
        {
          name: "Priority Scheduling",
          description: "Book a session at your preferred time",
          priceAdjustment: 10,
          enabled: false,
        },
      ],
      cta: "Book This Service",
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
          image: testimonial_1,
        },
        {
          quote: "The one-on-one sessions gave me the clarity I needed to pivot my career successfully.",
          user: "John P., Marketing Specialist",
          image: testimonial_2,
        },
        {
          quote: "Her guidance was instrumental in helping me choose the right career path.",
          user: "Sarah M., Data Analyst",
          image: testimonial_3,
        },
      ],
    },
    faqsSection: {
      heading: "Career Counseling FAQs",
      subHeading: "Find answers to common questions about our career counseling sessions.",
      faqs: [
        {
          question: "Who can benefit from career counseling?",
          answer:
            "Anyone seeking career guidance, including students, fresh graduates, and professionals looking to change or advance their careers.",
        },
        {
          question: "How are the sessions conducted?",
          answer: "Sessions are conducted online via video calls to provide convenience and flexibility.",
        },
        {
          question: "What can I expect from a career counseling session?",
          answer:
            "You will receive personalized advice, actionable insights, and a clear career path based on your goals and strengths.",
        },
      ],
    },
  },
  {
    slug: "resume-review",
    title: "Resume Reviews",
    category: "Online",
    heroSection: {
      heading: "Resume Reviews",
      subHeading: "Optimize your resume for better opportunities and career growth.",
      image: resumeReview,
      ctaText: "Get Feedback",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Make your resume stand out in the job market.",
      image: resumeReview,
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
    pricingSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable and flexible feedback sessions.",
      basePrice: 20,
      baseDuration: "Flexible, 1-hour feedback session",
      availability: "Anytime",
      customizationOptions: [
        {
          name: "Express Review",
          description: "Get your resume reviewed within 24 hours",
          priceAdjustment: 15,
          enabled: false,
        },
        {
          name: "Cover Letter Review",
          description: "Add a cover letter review to your session",
          priceAdjustment: 10,
          enabled: false,
        },
        {
          name: "Industry-Specific Optimization",
          description: "Tailor your resume for a specific industry",
          priceAdjustment: 20,
          enabled: false,
        },
      ],
      cta: "Book This Service",
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
          image: testimonial_1,
        },
        {
          quote: "John’s feedback helped me align my resume with the job description perfectly.",
          user: "Anna L., Marketing Specialist",
          image: testimonial_2,
        },
        {
          quote: "I never knew how much of a difference ATS optimization could make!",
          user: "Sophia W., Financial Analyst",
          image: testimonial_3,
        },
      ],
    },
    faqsSection: {
      heading: "Resume Review FAQs",
      subHeading: "Get clarity on our resume review process and services.",
      faqs: [
        {
          question: "How do I submit my resume for review?",
          answer: "You can upload your resume during the booking process or email it to us after booking.",
        },
        {
          question: "What does the review process include?",
          answer:
            "We analyze your resume for structure, content, ATS optimization, and industry relevance, providing actionable feedback.",
        },
        {
          question: "How soon will I get my reviewed resume?",
          answer:
            "We typically return the reviewed resume within 2-3 business days unless express service is selected.",
        },
      ],
    },
  },
  {
    slug: "mock-interviews",
    title: "Mock Interviews",
    category: "Group",
    heroSection: {
      heading: "Mock Interviews",
      subHeading: "Ace your next interview with confidence and preparation.",
      image: mockInterviews,
      ctaText: "Schedule Now",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Simulated interviews to boost your confidence and readiness.",
      image: mockInterviews,
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
    pricingSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable practice sessions for guaranteed improvement.",
      basePrice: 100,
      baseDuration: "2-hour group or 1-hour one-on-one session",
      availability: "Weekdays and Weekends",
      customizationOptions: [
        {
          name: "One-on-One Mock Interview",
          description: "Upgrade to a personalized one-on-one session",
          priceAdjustment: 50,
          enabled: false,
        },
        {
          name: "Session Recording",
          description: "Receive a video recording of your session",
          priceAdjustment: 20,
          enabled: false,
        },
        {
          name: "Follow-Up Feedback",
          description: "Get additional feedback after the session",
          priceAdjustment: 25,
          enabled: false,
        },
      ],
      cta: "Book This Service",
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
          image: testimonial_1,
        },
        {
          quote:
            "I landed my dream job after attending the mock interview sessions. The tips I received were game-changing.",
          user: "Laura H., Data Scientist",
          image: testimonial_2,
        },
        {
          quote: "The realistic scenarios helped me manage my nerves and prepare thoughtful answers.",
          user: "Chris P., Project Manager",
          image: testimonial_3,
        },
      ],
    },
    faqsSection: {
      heading: "Mock Interview FAQs",
      subHeading: "Learn more about how our mock interview sessions work.",
      faqs: [
        {
          question: "What types of interviews are covered?",
          answer: "We cover behavioral, technical, and industry-specific interviews tailored to your job application.",
        },
        {
          question: "Can I choose the interviewer’s industry expertise?",
          answer: "Yes, you can request an interviewer with expertise in your target industry.",
        },
        {
          question: "Will I receive feedback after the interview?",
          answer:
            "Yes, you will receive detailed feedback to improve your responses, body language, and overall performance.",
        },
      ],
    },
  },
  {
    slug: "career-planning-workshops",
    title: "Career Planning Workshops",
    category: "Offline",
    heroSection: {
      heading: "Career Planning Workshops",
      subHeading: "Strategize your career with expert-led workshops.",
      image: careerPlanningWorkshops,
      ctaText: "Join Now",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Interactive workshops to design your career roadmap.",
      image: careerPlanningWorkshops,
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
    pricingSection: {
      heading: "Pricing & Duration",
      subHeading: "Plan your career in a single session.",
      basePrice: 80,
      baseDuration: "3-hour interactive workshop",
      availability: "Scheduled dates only",
      customizationOptions: [
        {
          name: "Workshop Materials",
          description: "Get printed materials and resources",
          priceAdjustment: 10,
          enabled: false,
        },
        {
          name: "Post-Workshop Support",
          description: "Receive 2 follow-up sessions with an expert",
          priceAdjustment: 50,
          enabled: false,
        },
        {
          name: "Networking Session",
          description: "Join an exclusive networking session post-workshop",
          priceAdjustment: 30,
          enabled: false,
        },
      ],
      cta: "Book This Service",
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
          image: testimonial_1,
        },
        {
          quote:
            "Collaborating with others in the session opened up new perspectives for my career journey. Highly recommended!",
          user: "Rachel P., Marketing Manager",
          image: testimonial_2,
        },
        {
          quote:
            "I walked away with a solid career plan and the confidence to follow it. The interactive activities were fantastic.",
          user: "Jason L., UX Designer",
          image: testimonial_3,
        },
      ],
    },
    faqsSection: {
      heading: "Career Planning Workshop FAQs",
      subHeading: "Get details about our career planning workshops.",
      faqs: [
        {
          question: "What happens during the workshop?",
          answer:
            "The workshop includes hands-on activities, career mapping, and group discussions led by industry experts.",
        },
        {
          question: "Do I need to prepare anything for the workshop?",
          answer: "No prior preparation is required. Just bring an open mind and your enthusiasm to participate.",
        },
        {
          question: "Are workshop materials provided?",
          answer: "Yes, all attendees will receive workshop materials and resources to take home.",
        },
      ],
    },
  },
  {
    slug: "skill-assessments",
    title: "Skill Assessment Tests",
    category: "Online",
    heroSection: {
      heading: "Skill Assessment Tests",
      subHeading: "Identify your strengths and areas for improvement.",
      image: skillAssessments,
      ctaText: "Take the Test",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Evaluate your skills and unlock your potential.",
      image: skillAssessments,
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
    pricingSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable assessments with flexible scheduling.",
      basePrice: 30,
      baseDuration: "30-minute test with instant results",
      availability: "Available Anytime",
      customizationOptions: [
        {
          name: "Detailed Report",
          description: "Get a comprehensive skill analysis report",
          priceAdjustment: 15,
          enabled: false,
        },
        {
          name: "Skill Improvement Plan",
          description: "Receive personalized recommendations",
          priceAdjustment: 25,
          enabled: false,
        },
        {
          name: "Live Assessment Feedback",
          description: "One-on-one live feedback session",
          priceAdjustment: 20,
          enabled: false,
        },
      ],
      cta: "Take the Test",
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
          image: testimonial_1,
        },
        {
          quote:
            "I loved how the results came with actionable recommendations tailored to my goals. Highly recommended!",
          user: "Ethan M., Data Analyst",
          image: testimonial_2,
        },
        {
          quote:
            "The test was comprehensive yet straightforward. It helped me focus on the areas that matter most for my career growth.",
          user: "Sophia T., Marketing Specialist",
          image: testimonial_3,
        },
      ],
    },
    faqsSection: {
      heading: "Skill Assessment FAQs",
      subHeading: "Understand how our skill assessment tests can help you.",
      faqs: [
        {
          question: "What skills are assessed?",
          answer:
            "Our assessments cover a wide range of skills, including technical, analytical, and soft skills relevant to various industries.",
        },
        {
          question: "How long does the assessment take?",
          answer: "Each assessment takes approximately 30 minutes to complete.",
        },
        {
          question: "Will I receive a detailed report?",
          answer: "Yes, you will get a comprehensive report with your results and recommendations for improvement.",
        },
      ],
    },
  },
  {
    slug: "group-counseling",
    title: "Group Counseling Sessions",
    category: "Group",
    heroSection: {
      heading: "Group Counseling Sessions",
      subHeading: "Collaborate and grow with peers in a supportive environment.",
      image: groupCounseling,
      ctaText: "Join a Session",
    },
    overviewSection: {
      heading: "Service Overview",
      subHeading: "Explore career options through collaborative counseling.",
      image: groupCounseling,
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
    pricingSection: {
      heading: "Pricing & Duration",
      subHeading: "Affordable group sessions tailored for your success.",
      basePrice: 60,
      baseDuration: "2-hour offline session",
      availability: "Scheduled dates only",
      customizationOptions: [
        {
          name: "Additional Counselor",
          description: "Include an additional expert for the session",
          priceAdjustment: 40,
          enabled: false,
        },
        {
          name: "Session Recording",
          description: "Receive a recording of the group session",
          priceAdjustment: 20,
          enabled: false,
        },
        {
          name: "Extended Session",
          description: "Add an extra hour to the session",
          priceAdjustment: 30,
          enabled: false,
        },
      ],
      cta: "Join the Group",
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
          image: testimonial_1,
        },
        {
          quote:
            "Sharing ideas with others and receiving guidance from Anna was truly inspiring. The session was both informative and motivating.",
          user: "Liam S., Product Manager",
          image: testimonial_2,
        },
        {
          quote:
            "I loved the collaborative nature of the session. It was reassuring to know others were facing similar challenges.",
          user: "Emma W., Graphic Designer",
          image: testimonial_3,
        },
      ],
    },
    faqsSection: {
      heading: "Group Counseling FAQs",
      subHeading: "Find answers about our group counseling sessions.",
      faqs: [
        {
          question: "What is the focus of group counseling?",
          answer:
            "Group counseling focuses on collaborative discussions to explore career options, share experiences, and gain diverse perspectives.",
        },
        {
          question: "How many people are in each session?",
          answer:
            "Each group session typically includes 5-10 participants to ensure a productive and engaging environment.",
        },
        {
          question: "Who facilitates the group sessions?",
          answer: "Our group sessions are facilitated by experienced counselors skilled in managing group dynamics.",
        },
      ],
    },
  },
];
