import clock from "../../assets/images/clock-icon.png";
import customerSatisfaction from "../../assets/images/customer-satisfaction-icon.png";
import groupDiscussion from "../../assets/images/group-discussion-icon.png";
import lowPrice from "../../assets/images/low-price-icon.png";
import testimonial1 from "../../assets/images/testimonial-1.jpg";
import testimonial2 from "../../assets/images/testimonial-2.jpg";
import testimonial3 from "../../assets/images/testimonial-3.jpg";
import testimonials from "../../assets/images/testimonials.jpg";
import uniqueVisitor from "../../assets/images/unique-visitor-icon.png";
import whyChooseUs from "../../assets/images/why-choose-us.jpg";
import careerCounseling from "../../assets/images/career-counseling.jpg";
import careerPlanning from "../../assets/images/career-planning-workshops.jpg";
import groupCounseling from "../../assets/images/group-counseling.jpg";
import mockInterviews from "../../assets/images/mock-interviews.jpg";
import resumeReview from "../../assets/images/resume-review.jpg";
import provenTrackRecord from "../../assets/images/proven-track-record-icon.png";
import skillAssessments from "../../assets/images/skill-assessments.jpg";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";

export const SiteName = "Career Compass";
export const SiteSlogan = "Navigate Your Path, Empower Your Future";

export const BannerSection = {
  heading: "Discover Your Dream Career Today",
  subHeading: "Personalized guidance for a brighter professional future.",
  slides: [
    { caption: "Plan Your Path with Precision.", image: slider1 },
    { caption: "Expert Advice, Anytime.", image: slider2 },
    { caption: "Turn Your Goals into Achievements.", image: slider3 },
  ],
};

export const WhyChooseUsSection = {
  heading: "Why Choose CareerCompass?",
  subHeading: "Empowering Your Career with Expert Guidance and Proven Results",
  content: [
    {
      feature: "Expert Counselors",
      description:
        "Our team of certified professionals brings years of experience and expertise to guide you toward the right career path.",
      icon: groupDiscussion,
    },
    {
      feature: "Personalized Services",
      description:
        "We understand that every individual is unique. That’s why our services are tailored to fit your specific goals and aspirations.",
      icon: uniqueVisitor,
    },
    {
      feature: "High Satisfaction Rates",
      description:
        "With a 95% satisfaction rate, we’ve helped thousands of users achieve their career dreams and they have also recommended hundred others.",
      icon: customerSatisfaction,
    },
    {
      feature: "Flexible Scheduling",
      description:
        "Access online and offline sessions that work with your schedule. Our clients consistently achieve their goals with our guidance.",
      icon: clock,
    },
    {
      feature: "Affordable Pricing",
      description:
        "Quality career guidance at prices that won’t break the bank. Our clients consistently achieve their goals with our guidance.",
      icon: lowPrice,
    },
    {
      feature: "Proven Track Record",
      description:
        "With a track record of thousands of successful career transformations, CareerCompass is a trusted name in career counseling.",
      icon: provenTrackRecord,
    },
  ],
  image: whyChooseUs,
};

export const ServicesSection = {
  heading: "Our Services",
  subHeading: "Tailored Solutions to Help You Succeed at Every Step of Your Career",
  description: "Explore a range of personalized career counseling services designed to help you succeed.",
  cards: [
    {
      slug: "career-counseling",
      image: careerCounseling,
      serviceName: "Career Counseling Sessions",
      shortName: "Career Counselling",
      category: "Offline",
      description: "Get personalized career advice from expert counselors to navigate your professional journey.",
      pricing: 50,
      duration: "05-12-24, 5-6 PM",
      counselor: "Dr. Sarah Lee",
      rating: 4.8,
    },
    {
      slug: "resume-review",
      image: resumeReview,
      serviceName: "Resume Reviews",
      shortName: "Resume Review",
      category: "Online",
      description: "Have your resume professionally reviewed and optimized for job applications.",
      pricing: 20,
      duration: "Flexible, 1-hour feedback session",
      counselor: "John Doe",
      rating: 4.5,
    },
    {
      slug: "mock-interviews",
      image: mockInterviews,
      serviceName: "Mock Interviews",
      shortName: "Mock Interviews",
      category: "Group",
      description: "Participate in mock interviews to build confidence and get expert feedback.",
      pricing: 100,
      duration: "06-12-24, 4-6 PM",
      counselor: "Jane Smith",
      rating: 4.7,
    },
    {
      slug: "career-planning-workshops",
      image: careerPlanning,
      serviceName: "Career Planning Workshops",
      shortName: "Career Planning",
      category: "Offline",
      description: "Join our hands-on workshops to create a strategic career roadmap.",
      pricing: 80,
      duration: "07-12-24, 10 AM-1 PM",
      counselor: "Emily Brown",
      rating: 4.6,
    },
    {
      slug: "skill-assessments",
      image: skillAssessments,
      serviceName: "Skill Assessment Tests",
      shortName: "Skill Assesment",
      category: "Online",
      description: "Evaluate your skills with our comprehensive assessments to identify areas of improvement.",
      pricing: 30,
      duration: "Available Anytime",
      counselor: "Michael Green",
      rating: 4.4,
    },
    {
      slug: "group-counseling",
      image: groupCounseling,
      serviceName: "Group Counseling Sessions",
      shortName: "Group Counselling",
      category: "Group",
      description: "Collaborate with peers and counselors in group sessions to explore career options.",
      pricing: 60,
      duration: "10-12-24, 3-5 PM",
      counselor: "Anna White",
      rating: 4.3,
    },
  ],
};

export const TestimonialsSection = {
  heading: "What Our Clients Say",
  subHeading: "Real Stories of Success from Our Satisfied Clients",
  testimonials: [
    {
      quote:
        "CareerCompass helped me discover my true potential and land my dream job. The guidance I received was invaluable.",
      user: "Emily R., Software Engineer",
      image: testimonial1,
    },
    {
      quote:
        "The resume review service was a game-changer! My new resume helped me stand out and secure multiple interviews.",
      user: "John P., Marketing Specialist",
      image: testimonial2,
    },
    {
      quote:
        "Mock interviews gave me the confidence I needed to excel. I can't thank the counselors enough for their support!",
      user: "Sarah M., Data Analyst",
      image: testimonial3,
    },
  ],
  image: testimonials,
};

export const FAQsSection = {
  heading: "Frequently Asked Questions",
  subHeading: "Answers to common questions about our services.",
  faqs: [
    {
      question: "What services does CareerCompass offer?",
      answer:
        "CareerCompass provides career counseling, resume reviews, mock interviews, career planning workshops, and skill assessment tests tailored to your professional needs.",
    },
    {
      question: "Are the sessions conducted online or offline?",
      answer: "We offer both online and offline services. The availability depends on the specific service you choose.",
    },
    {
      question: "How do I book a service?",
      answer:
        "You can book a service directly through our website. Visit the service page, select your desired time slot, and confirm your booking.",
    },
    {
      question: "Can I reschedule a booked session?",
      answer: "Yes, you can reschedule a session by contacting us at least 24 hours before the scheduled time.",
    },
    {
      question: "Do you offer group counseling sessions?",
      answer: "Yes, we provide group counseling sessions for collaborative learning and shared experiences.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept payments via credit/debit cards, PayPal, and direct bank transfers. All transactions are secure.",
    },
    {
      question: "Can I get a refund if I cancel my session?",
      answer:
        "Refunds are available for cancellations made at least 48 hours before the session. Refund policies vary by service.",
    },
    {
      question: "Are the counselors certified professionals?",
      answer:
        "Yes, all our counselors are certified and have extensive experience in career guidance and professional development.",
    },
    {
      question: "What industries do your services cater to?",
      answer:
        "Our services cater to a wide range of industries, including technology, healthcare, finance, education, and more.",
    },
    {
      question: "Can I take multiple services simultaneously?",
      answer:
        "Yes, you can book and participate in multiple services at the same time, depending on your schedule and availability.",
    },
  ],
};
