
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle2, Clock, Users as UsersIcon } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  accent?: boolean;
  duration?: string;
  students?: number;
  price?: string;
  image?: string;
  level?: string;
  outcomes?: string[];
  schedule?: string;
}> = ({ title, description, icon, delay, accent = false, duration, students, price, image, level, outcomes = [], schedule }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className={cn(
        "rounded-xl h-full transition-all duration-300 hover:shadow-elegant-hover overflow-hidden flex flex-col hover-lift",
        accent 
          ? "bg-primary text-white" 
          : "bg-white border border-border/60 hover:border-primary/20"
      )}>
        {image && (
          <div className="relative h-52 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
            {level && (
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium tracking-wide px-3 py-1 rounded-full">
                {level}
              </div>
            )}
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          {!image && (
            <div className={cn(
              "w-14 h-14 rounded-lg flex items-center justify-center mb-6",
              accent ? "bg-white/10" : "bg-primary/10"
            )}>
              {icon}
            </div>
          )}
          <h3 className={cn(
            "text-xl font-semibold mb-3",
            accent ? "text-white" : "text-gray-900"
          )}>{title}</h3>
          <p className={cn(
            "leading-relaxed mb-4 text-sm",
            accent ? "text-white/80" : "text-gray-700"
          )}>
            {description}
          </p>
          
          {duration && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                <div className={cn(
                  "text-sm px-3 py-1 rounded-full flex items-center gap-2",
                  accent ? "bg-white/10 text-white" : "bg-primary/10 text-gray-700"
                )}>
                  <Clock className={cn("w-4 h-4", accent ? "text-white/80" : "text-primary")}/>
                  {duration}
                </div>
              </div>

              <Collapsible>
                <div className={cn(
                  "flex items-center justify-between mt-4 pt-4 border-t",
                  accent ? "border-white/10" : "border-gray-200"
                )}>
                  <div className="price-container">
                    <span className={cn(
                      "font-display font-semibold text-lg tracking-tight",
                      accent ? "text-white" : "text-gray-900"
                    )}>
                      {price}
                    </span>
                    <span className={cn(
                      "block text-xs mt-0.5",
                      accent ? "text-white/60" : "text-gray-600"
                    )}>
                      Per Course
                    </span>
                  </div>
                  <a href="/courses" className={cn(
                    "px-3 py-1.5 rounded text-xs tracking-wide font-medium inline-flex items-center gap-2 transition-all",
                    accent ? "bg-white text-primary hover:bg-white/90" : "bg-primary/90 text-white hover:bg-primary"
                  )}>
                    View details
                  </a>
                </div>
                
              </Collapsible>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Services: React.FC = () => {
  const courses = [
    {
      title: "A1 (Beginner) German Course",
      description: "Start your German language journey with essentials for everyday communication.",
      image: "/learn.png",
      duration: "10 Weeks",
      students: 0,
      price: "KSh22,000.00",
      level: "German Language Courses",
      schedule: "Weekdays or Weekends, 2 sessions/week",
      outcomes: [
        "Introduce yourself and handle simple interactions",
        "Understand basic phrases and directions",
        "Build core vocabulary and pronunciation"
      ]
    },
    {
      title: "A2 (Elementary) German Course",
      description: "Build on your foundation with everyday conversations and simple texts.",
      image: "/learn.png",
      duration: "8 Weeks",
      students: 0,
      price: "KSh22,000.00",
      level: "German Language Courses",
      schedule: "Flexible morning/evening sessions",
      outcomes: [
        "Participate in routine exchanges",
        "Read short texts and messages",
        "Write simple emails and notes"
      ]
    },
    {
      title: "B1 (Intermediate) German Course",
      description: "Advance your skills to discuss work, study, and daily topics with confidence.",
      image: "/learn.png",
      duration: "8 Weeks", 
      students: 0,
      price: "KSh35,000.00",
      level: "German Language Courses",
      accent: true,
      schedule: "Evenings and Saturdays, exam‑prep included",
      outcomes: [
        "Handle familiar situations at work/school",
        "Express opinions and reasons",
        "Prepare for B1 certification tasks"
      ]
    },
    {
      title: "B2 (Upper Intermediate) German Course",
      description: "Master complex grammar and fluency for academic and professional settings.",
      image: "/learn.png",
      duration: "8 Weeks",
      students: 0,
      price: "KSh35,000.00",
      level: "German Language Courses",
      schedule: "Intensive track available",
      outcomes: [
        "Understand complex texts and discussions",
        "Produce clear, detailed writing",
        "Prepare for B2 exams and interviews"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20">
      <div className="section">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 text-sm font-medium tracking-wide">
              Our Courses
            </div>
            <h2 className="section-title text-center mb-6">Explore our Premium Courses</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Structured, level‑based courses taught by expert instructors. Build speaking, listening, reading, and writing skills with measurable outcomes.
            </p>
            <a href="/courses" className="inline-block text-primary font-medium mt-2 hover:underline">
              View All Courses
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <ServiceCard
              key={index}
              title={course.title}
              description={course.description}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              delay={100 + (index * 100)}
              accent={course.accent || false}
              duration={course.duration}
              students={course.students}
              price={course.price}
              image={course.image}
              level={course.level}
            />
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-foreground/5 p-8 md:p-10 rounded-xl border border-border/40">
              <h3 className="text-2xl font-display font-bold mb-4">Learn German from A1 to B2</h3>
              <p className="text-foreground/70 mb-6">
                Join DB German Training Institute in Kapsabet or online. Flexible schedules and small classes.
              </p>
              <a 
                href="/courses" 
                className="button-transition inline-block bg-primary text-white px-8 py-3.5 rounded-md font-medium"
              >
                View More
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
