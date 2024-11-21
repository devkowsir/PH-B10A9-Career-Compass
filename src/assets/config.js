import clock from "./images/clock.png";
import customerSatisfaction from "./images/customer-satisfaction.png";
import groupDiscussion from "./images/group-discussion.png";
import lowPrice from "./images/low-price.png";
import testimonial1 from "./images/testimonial-1.jpg";
import testimonial2 from "./images/testimonial-2.jpg";
import testimonial3 from "./images/testimonial-3.jpg";
import testimonials from "./images/testimonials.jpg";
import uniqueVisitor from "./images/unique-visitor.png";
import whyChooseUs from "./images/why-choose-us.jpg";
import careerCounseling from "./images/career-counseling.jpg";
import careerPlanning from "./images/career-planning-workshops.jpg";
import groupCounseling from "./images/group-counseling.jpg";
import mockInterviews from "./images/mock-interviews.jpg";
import resumeReview from "./images/resume-review.jpg";
import skillAssessments from "./images/skill-assessments.jpg";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.jpg";
import slider3 from "./images/slider-3.jpg";

export const SiteName = "Career Compass";
export const SiteSlogan = "Navigate Your Path, Empower Your Future";

export const BannerSection = {
  heading: "Discover Your Dream Career Today",
  description: "Personalized guidance for a brighter professional future.",
  slides: [
    { caption: "Expert Advice, Anytime.", image: slider1 },
    { caption: "Plan Your Path with Precision.", image: slider2 },
    { caption: "Turn Your Goals into Achievements.", image: slider3 },
  ],
};

export const ServicesSection = {
  heading: "Our Services",
  description: "Explore a range of personalized career counseling services designed to help you succeed.",
  cards: [
    {
      slug: "career-counseling",
      image: careerCounseling,
      serviceName: "Career Counseling Sessions",
      shortName: "Career Counselling",
      category: "Online",
      description: "Get personalized career advice from expert counselors to navigate your professional journey.",
      pricing: 50,
      duration: "05-12-24, 5-6 PM",
      counselor: "Dr. Sarah Lee",
      rating: 4.8,
    },
    {
      slug: "resume-review",
      image: careerPlanning,
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
      image: groupCounseling,
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
      image: mockInterviews,
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
      image: resumeReview,
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
      image: skillAssessments,
      serviceName: "Group Counseling Sessions",
      shortName: "Group Counselling",
      category: "Offline",
      description: "Collaborate with peers and counselors in group sessions to explore career options.",
      pricing: 60,
      duration: "10-12-24, 3-5 PM",
      counselor: "Anna White",
      rating: 4.3,
    },
  ],
};

export const WhyChooseUsSection = {
  headline: "Why Choose CareerCompass?",
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
      description: "With a 95% satisfaction rate, we’ve helped thousands of users achieve their career dreams.",
      icon: customerSatisfaction,
    },
    {
      feature: "Flexible Scheduling",
      description: "Access online and offline sessions that work with your schedule.",
      icon: clock,
    },
    {
      feature: "Affordable Pricing",
      description: "Quality career guidance at prices that won’t break the bank.",
      icon: lowPrice,
    },
  ],
  image: whyChooseUs,
};

export const TestimonialsSection = {
  headline: "What Our Clients Say",
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
