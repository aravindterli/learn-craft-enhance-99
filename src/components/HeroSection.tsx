import React, { useState, useRef, useEffect } from "react";
import { Search, Play, CheckCircle, Star, Users, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-learning.jpg";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
  onGoalSelect?: (goal: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onGoalSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const goals = [
    "Get a promotion",
    "Industry Certification", 
    "New career path",
    "Study Abroad",
    "Free Course",
    "First job prep",
    "Interview skills",
    "International degree"
  ];

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "1.8M+", label: "Active Learners" },
    { icon: <Star className="w-5 h-5" />, value: "4.8/5", label: "Average Rating" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "95%", label: "Success Rate" }
  ];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <CheckCircle className="w-4 h-4 text-accent-light mr-2" />
                <span className="text-white text-sm font-medium">Guided from industry leaders</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                See One
                <span className="block bg-gradient-to-r from-accent-light to-secondary-light bg-clip-text text-transparent">
                  Do One
                </span>
                <span className="block">Teach One</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Master cutting-edge skills with India's most advanced upskilling platform. 
                Learn from industry experts and transform your career.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    placeholder="What would you like to learn today?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="w-full h-14 pl-6 pr-32 text-lg bg-white/95 backdrop-blur-md border-white/20 rounded-2xl shadow-large focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  />
                  
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-20 p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  
                  <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    className="absolute right-2 top-2 bottom-2 px-6"
                  >
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Goal Buttons */}
            <div className="space-y-4">
              <p className="text-white/80 font-medium">Or select your goal:</p>
              <div className="flex flex-wrap gap-3">
                {goals.map((goal) => (
                  <Button
                    key={goal}
                    variant="glass"
                    size="sm"
                    onClick={() => onGoalSelect?.(goal)}
                    className="text-white hover:text-foreground"
                  >
                    {goal}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex justify-center text-accent-light">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Modern Learning Platform"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay with play button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                <Button
                  variant="glass"
                  size="xl"
                  className="rounded-full w-20 h-20 text-white"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-secondary rounded-2xl p-4 shadow-secondary animate-pulse-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-accent rounded-2xl p-4 shadow-glow animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;