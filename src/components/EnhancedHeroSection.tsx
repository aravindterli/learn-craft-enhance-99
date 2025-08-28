import React, { useState, useEffect } from "react";
import { Search, Play, CheckCircle, Star, Users, TrendingUp, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-learning.jpg";
import optgradLogo from "@/assets/optgrad-logo.png";
import SearchModal from "./SearchModal";
import SignupModal from "./SignupModal";

interface EnhancedHeroSectionProps {
  onSearch?: (query: string) => void;
  onGoalSelect?: (goal: string) => void;
}

const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ onSearch, onGoalSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  
  const dynamicWords = ["Skills", "Knowledge", "Expertise", "Career", "Future"];
  
  // Typewriter effect
  useEffect(() => {
    const word = dynamicWords[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, dynamicWords]);

  const goals = [
    { text: "Get a promotion", icon: <TrendingUp className="w-4 h-4" /> },
    { text: "Industry Certification", icon: <Star className="w-4 h-4" /> },
    { text: "New career path", icon: <Target className="w-4 h-4" /> },
    { text: "Study Abroad", icon: <Sparkles className="w-4 h-4" /> },
    { text: "Free Course", icon: <Zap className="w-4 h-4" /> },
    { text: "First job prep", icon: <Users className="w-4 h-4" /> },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "1.8M+", label: "Active Learners", color: "from-blue-500 to-cyan-500" },
    { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "Average Rating", color: "from-yellow-500 to-orange-500" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500" }
  ];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim());
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Clean White Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-surface" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Elegant Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-reverse" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-10 right-1/4 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-bounce-gentle" />
          
          {/* Subtle Floating Particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-up">
              {/* Top row with logo and signup button */}
              <div className="flex justify-between items-center mb-8">
                {/* OptGrad Logo on left */}
                <div className="flex items-center text-foreground text-3xl font-bold hover:scale-105 transition-transform duration-300 animate-fade-in">
                  <img 
                    src={optgradLogo} 
                    alt="OptGrad by Techoptima" 
                    className="h-10 w-auto mr-3"
                  />
                  OptGrad
                </div>
                
                {/* Signup Button on right */}
                <Button 
                  onClick={() => setIsSignupModalOpen(true)}
                  className="bg-black text-white hover:bg-black/90 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  Sign Up Free
                </Button>
              </div>
              
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-full shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <CheckCircle className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground font-medium">Guided from industry leaders</span>
                <Sparkles className="w-4 h-4 text-muted-foreground ml-2 group-hover:text-primary group-hover:animate-wiggle transition-colors" />
              </div>
              
              {/* Dynamic Title */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground block">Transform Your</span>
                  <span className="block bg-gradient-primary bg-clip-text text-transparent min-h-[1.2em]">
                    {currentText}
                    <span className="animate-pulse text-primary">|</span>
                  </span>
                  <span className="text-foreground block">Today</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                  Master cutting-edge skills with <span className="text-primary font-semibold">India's most advanced</span> upskilling platform designed for modern professionals
                </p>
              </div>

              {/* Enhanced Search Bar */}
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div 
                    onClick={() => setIsSearchModalOpen(true)}
                    className="relative cursor-pointer"
                  >
                    <div className="flex items-center h-18 px-8 bg-card backdrop-blur-sm rounded-3xl shadow-large border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/10">
                      <Search className="w-6 h-6 text-muted-foreground mr-4 group-hover:text-primary transition-colors" />
                      <span className="text-lg text-muted-foreground flex-1 group-hover:text-foreground transition-colors">
                        What would you like to learn today?
                      </span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Goal Buttons */}
                <div className="space-y-6">
                  <p className="text-muted-foreground font-medium flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-primary" />
                    Or select your goal:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {goals.map((goal, index) => (
                      <Button
                        key={goal.text}
                        variant="outline"
                        size="sm"
                        onClick={() => onGoalSelect?.(goal.text)}
                        className="text-foreground hover:text-primary-foreground hover:bg-primary border-border hover:border-primary justify-start group animate-fade-in transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="mr-2 group-hover:animate-bounce-gentle transition-transform">{goal.icon}</span>
                        {goal.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center space-y-4 group cursor-pointer animate-fade-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-flex p-4 bg-card border border-border rounded-2xl group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 shadow-soft group-hover:shadow-primary/10">
                      <span className="text-primary group-hover:text-primary-glow transition-colors">{stat.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                {/* Elegant glow effects */}
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="absolute -inset-2 bg-accent/5 rounded-3xl blur-xl opacity-20" />
                
                <div className="relative rounded-3xl overflow-hidden shadow-large border border-border/50 group-hover:border-primary/20 transition-colors">
                  <img
                    src={heroImage}
                    alt="Modern Learning Platform"
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Clean Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Modern play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full w-20 h-20 bg-card/90 backdrop-blur-sm text-primary hover:bg-card hover:scale-110 border border-border/50 shadow-large transition-all duration-300"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>

                  {/* Clean floating elements */}
                  <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-medium border border-border/50 animate-float">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-medium border border-border/50 animate-bounce-gentle">
                    <Star className="w-6 h-6 text-accent" />
                  </div>

                  <div className="absolute top-1/4 -right-3 bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-medium border border-border/50 animate-wiggle">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Subtle orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative w-full h-full animate-rotate-slow">
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary/30 rounded-full -translate-x-1/2 animate-pulse" />
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent/30 rounded-full -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary/20 rounded-full -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SearchModal 
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSearch={onSearch}
      />
      
      <SignupModal 
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </>
  );
};

export default EnhancedHeroSection;