import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import CategoryNavigation from "@/components/CategoryNavigation";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Award, Users, BookOpen, Star, TrendingUp, ChevronRight, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [coursesLoading, setCoursesLoading] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Enhanced course data with more details
  const featuredCourses = [
    {
      id: 1,
      title: "Advanced Machine Learning & AI Mastery",
      description: "Comprehensive program covering neural networks, deep learning, computer vision, and natural language processing with hands-on projects using TensorFlow and PyTorch.",
      duration: "12 weeks",
      students: "15.2K+",
      rating: 4.9,
      instructor: "Dr. Sarah Chen",
      level: "Advanced" as const,
      price: "₹4,999",
      originalPrice: "₹8,999", 
      category: "AI & ML",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Data Science & Analytics Bootcamp",
      description: "Master data analysis, statistical modeling, and machine learning. Work with Python, R, SQL, and build real-world data science projects from scratch.",
      duration: "10 weeks",
      students: "22.8K+",
      rating: 4.8,
      instructor: "Prof. Michael Rodriguez",
      level: "Intermediate" as const,
      price: "₹3,999",
      originalPrice: "₹6,999",
      category: "Data Science",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Blockchain & Web3 Development",
      description: "Build decentralized applications, smart contracts, and DeFi protocols. Learn Solidity, Web3.js, and deploy on Ethereum, Polygon, and other networks.",
      duration: "14 weeks", 
      students: "8.4K+",
      rating: 4.7,
      instructor: "Alex Thompson",
      level: "Intermediate" as const,
      price: "₹5,499",
      originalPrice: "₹9,999",
      category: "Blockchain",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Cybersecurity & Ethical Hacking",
      description: "Comprehensive cybersecurity program covering penetration testing, network security, incident response, and advanced threat detection techniques.",
      duration: "16 weeks",
      students: "11.6K+", 
      rating: 4.8,
      instructor: "Sarah Wilson",
      level: "Advanced" as const,
      price: "₹6,299",
      originalPrice: "₹10,999",
      category: "CyberSecurity",
      image: "/api/placeholder/400/250"
    }
  ];

  const enhancedFeatures = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI-Powered Learning Paths",
      description: "Personalized curriculum powered by advanced AI algorithms that adapt to your learning style and pace",
      gradient: "from-purple-500 to-pink-500",
      stats: "98% Success Rate"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Industry-Expert Mentorship", 
      description: "Learn directly from professionals at Google, Microsoft, Amazon, and other leading tech companies",
      gradient: "from-blue-500 to-cyan-500", 
      stats: "500+ Mentors"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Globally Recognized Certificates",
      description: "Earn industry-recognized certifications that boost your career prospects and salary potential",
      gradient: "from-green-500 to-emerald-500",
      stats: "95% Hiring Rate"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Scientist at Google",
      content: "This platform transformed my career completely. The AI program helped me land my dream job at Google!",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Rahul Kumar", 
      role: "Blockchain Developer",
      content: "Best investment I ever made. The instructors are world-class and the community support is amazing.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Anita Patel",
      role: "ML Engineer at Microsoft", 
      content: "From zero coding experience to Microsoft in 8 months. The structured learning path made all the difference.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const handleSearch = (query: string) => {
    setCoursesLoading(true);
    toast({
      title: "Searching courses...",
      description: `Looking for "${query}" in our course catalog`,
    });
    
    setTimeout(() => {
      const searchParams = new URLSearchParams();
      searchParams.append("q", query);
      navigate(`/search?${searchParams.toString()}`);
      setCoursesLoading(false);
    }, 1000);
  };

  const handleGoalSelect = (goal: string) => {
    toast({
      title: "Goal Selected!",
      description: `Finding courses to help you: ${goal.toLowerCase()}`,
    });
    
    const goalParams = new URLSearchParams();
    goalParams.append("goal", goal);
    navigate(`/search?${goalParams.toString()}`);
  };

  const handleCategoryClick = (categoryName: string) => {
    toast({
      title: "Category Selected",
      description: `Exploring ${categoryName} courses`,
    });
    
    const searchParams = new URLSearchParams();
    searchParams.append("category", categoryName);
    searchParams.append("source", "category-icon");
    navigate(`/search?${searchParams.toString()}`);
  };

  const handleViewProgram = (courseId: number) => {
    toast({
      title: "Loading Course Details",
      description: "Preparing comprehensive course information...",
    });
    
    setTimeout(() => {
      navigate(`/course-details/${courseId}`);
    }, 500);
  };

  const handleTakeTest = (courseId: number) => {
    toast({
      title: "Assessment Ready!",
      description: "Starting your skill assessment test",
    });
    
    setTimeout(() => {
      navigate(`/assessment/${courseId}`);
    }, 500);
  };

  const handleStartFreeTrial = () => {
    toast({
      title: "Free Trial Activated!",
      description: "Welcome! You now have access to premium content for 7 days.",
    });
  };

  const handleExplorePrograms = () => {
    navigate('/programs');
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection onSearch={handleSearch} onGoalSelect={handleGoalSelect} />

      {/* Category Navigation */}
      <CategoryNavigation onCategoryClick={handleCategoryClick} />

      {/* Enhanced Features Section */}
      <section id="features" data-animate className="py-24 bg-gradient-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-reverse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-20 ${isVisible.features ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-primary mr-2 animate-pulse-glow" />
              <span className="text-foreground font-medium">Why 1.8M+ Learners Choose Us</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Experience the
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Future of Learning
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionary learning experience designed to accelerate your career growth with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {enhancedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative ${isVisible.features ? 'animate-slide-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-large transition-all duration-500 border border-white/20 hover:border-white/40 hover:scale-105 h-full">
                  {/* Icon with gradient */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <span className="text-white">{feature.icon}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Stats badge */}
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} rounded-full`}>
                      <span className="text-white font-semibold text-sm">{feature.stats}</span>
                    </div>
                  </div>

                  {/* Hover decoration */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Courses */}
      <section id="courses" data-animate className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row lg:items-center justify-between mb-16 ${isVisible.courses ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="space-y-6 lg:max-w-2xl">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-primary/20">
                <BookOpen className="w-5 h-5 text-primary mr-2 animate-bounce-gentle" />
                <span className="text-foreground font-medium">Featured Programs</span>
              </div>
              
              <h2 className="text-5xl font-bold text-foreground">
                Handpicked by
                <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                  Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Carefully curated programs designed by experts from top tech companies
              </p>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <Button 
                variant="outline" 
                size="lg" 
                className="group hover:bg-primary hover:text-primary-foreground"
                onClick={() => navigate('/courses')}
              >
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => (
              <div 
                key={course.id}
                className={`${isVisible.courses ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  students={course.students}
                  rating={course.rating}
                  instructor={course.instructor}
                  level={course.level}
                  price={course.price}
                  originalPrice={course.originalPrice}
                  category={course.category}
                  image={course.image}
                  onViewProgram={() => handleViewProgram(course.id)}
                  onTakeTest={() => handleTakeTest(course.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" data-animate className="py-24 bg-gradient-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-reverse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-20 ${isVisible.testimonials ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Star className="w-5 h-5 text-yellow-500 mr-2 animate-pulse-glow" />
              <span className="text-foreground font-medium">Success Stories</span>
            </div>
            
            <h2 className="text-5xl font-bold text-foreground mb-8">
              Transforming
              <span className="bg-gradient-accent bg-clip-text text-transparent ml-3">
                Careers Worldwide
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands who've accelerated their careers with our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group relative ${isVisible.testimonials ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -inset-2 bg-gradient-primary rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity" />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-white/20 hover:border-primary/20 hover:scale-105">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle" />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-white/30 mb-8">
              <TrendingUp className="w-5 h-5 text-white mr-2 animate-pulse-glow" />
              <span className="text-white font-medium">Join 1.8M+ Successful Learners</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-accent-light to-secondary-light bg-clip-text text-transparent">
                Your Future?
              </span>
            </h2>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Start your learning journey today and join millions who've accelerated their careers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                variant="secondary" 
                size="xl"
                onClick={handleStartFreeTrial}
                className="group shadow-secondary hover:shadow-glow"
              >
                <Play className="w-6 h-6 mr-2 group-hover:animate-bounce-gentle" />
                Start Free Trial
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={handleExplorePrograms}
                className="text-white border-white/30 hover:border-white/60"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-16 border-t border-white/20">
              {[
                { value: "1.8M+", label: "Students Enrolled", icon: <Users className="w-6 h-6" /> },
                { value: "500+", label: "Expert Instructors", icon: <Award className="w-6 h-6" /> },
                { value: "95%", label: "Completion Rate", icon: <TrendingUp className="w-6 h-6" /> },
                { value: "4.8★", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-accent-light mb-2 flex justify-center group-hover:animate-bounce-gentle">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;