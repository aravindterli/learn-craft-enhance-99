import React, { useState, useEffect } from "react";
import { Search, Play, CheckCircle, Star, Users, TrendingUp, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-learning.jpg";
import optgradLogo from "@/assets/optgrad-logo.png";
import SearchModal from "./SearchModal";

interface EnhancedHeroSectionProps {
  onSearch?: (query: string) => void;
  onGoalSelect?: (goal: string) => void;
}

const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ onSearch, onGoalSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-hero animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-reverse" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-10 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-bounce-gentle" />
          
          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* OptGrad Logo */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <img 
              src={optgradLogo} 
              alt="OptGrad by Techoptima" 
              className="h-16 md:h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-glass backdrop-blur-md rounded-full border border-white/30 shadow-glow hover:shadow-primary transition-all duration-300 cursor-pointer group">
                <CheckCircle className="w-5 h-5 text-accent-light mr-3 animate-pulse-glow" />
                <span className="text-white font-medium">Guided from industry leaders</span>
                <Sparkles className="w-4 h-4 text-white/70 ml-2 group-hover:animate-wiggle" />
              </div>
              
              {/* Dynamic Title */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white block">Transform Your</span>
                  <span className="block bg-gradient-to-r from-accent-light via-secondary-light to-primary-glow bg-clip-text text-transparent min-h-[1.2em]">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                  <span className="text-white block">Today</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg font-medium">
                  Master cutting-edge skills with <span className="text-accent-light font-semibold">India's most advanced</span> upskilling platform
                </p>
              </div>

              {/* Enhanced Search Bar */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div 
                    onClick={() => setIsSearchModalOpen(true)}
                    className="relative cursor-pointer"
                  >
                    <div className="flex items-center h-16 px-8 bg-white/95 backdrop-blur-md rounded-3xl shadow-large border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]">
                      <Search className="w-6 h-6 text-muted-foreground mr-4" />
                      <span className="text-lg text-muted-foreground flex-1">
                        What would you like to learn today?
                      </span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Goal Buttons */}
                <div className="space-y-4">
                  <p className="text-white/80 font-medium flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-accent-light" />
                    Or select your goal:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {goals.map((goal, index) => (
                      <Button
                        key={goal.text}
                        variant="glass"
                        size="sm"
                        onClick={() => onGoalSelect?.(goal.text)}
                        className="text-white hover:text-foreground justify-start group animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="mr-2 group-hover:animate-bounce-gentle">{goal.icon}</span>
                        {goal.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center space-y-3 group cursor-pointer animate-fade-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      <span className="text-white">{stat.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-white group-hover:text-accent-light transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                {/* Glow effects */}
                <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse-glow" />
                <div className="absolute -inset-2 bg-gradient-secondary rounded-3xl blur-xl opacity-10 animate-glow-pulse" />
                
                <div className="relative rounded-3xl overflow-hidden shadow-large border border-white/20">
                  <img
                    src={heroImage}
                    alt="Modern Learning Platform"
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play button with enhanced effects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="glass"
                      size="xl"
                      className="rounded-full w-24 h-24 text-white group-hover:scale-110 transition-all duration-300 animate-pulse-glow"
                    >
                      <Play className="w-10 h-10 ml-1" />
                    </Button>
                  </div>

                  {/* Enhanced Floating elements */}
                  <div className="absolute -top-8 -right-8 bg-gradient-secondary rounded-3xl p-6 shadow-secondary animate-float border border-white/20 backdrop-blur-sm">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-gradient-accent rounded-3xl p-6 shadow-glow animate-bounce-gentle border border-white/20 backdrop-blur-sm">
                    <Star className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute top-1/4 -right-4 bg-gradient-primary rounded-2xl p-4 shadow-primary animate-wiggle border border-white/20 backdrop-blur-sm">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative w-full h-full animate-rotate-slow">
                    <div className="absolute top-0 left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 animate-pulse" />
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-secondary rounded-full -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary rounded-full -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
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
    </>
  );
};

export default EnhancedHeroSection;