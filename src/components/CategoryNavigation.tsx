import React from "react";
import { Brain, BarChart3, Lock, Shield, Stethoscope, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Category {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const categories: Category[] = [
  {
    name: "AI & ML",
    icon: <Brain className="w-6 h-6" />,
    description: "Artificial Intelligence & Machine Learning",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Data Science", 
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Analytics & Big Data",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "BlockChain",
    icon: <Lock className="w-6 h-6" />,
    description: "Cryptocurrency & Web3",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "CyberSecurity",
    icon: <Shield className="w-6 h-6" />,
    description: "Information Security",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Medicine",
    icon: <Stethoscope className="w-6 h-6" />,
    description: "Healthcare & Medical Sciences",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Law",
    icon: <Scale className="w-6 h-6" />,
    description: "Legal Studies & Justice",
    color: "from-indigo-500 to-purple-500"
  }
];

interface CategoryNavigationProps {
  onCategoryClick: (categoryName: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ onCategoryClick }) => {
  return (
    <section className="bg-gradient-surface py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Top Categories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover industry-leading programs designed by experts from top companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => onCategoryClick(category.name)}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
          <Button variant="outline" size="lg">
            Browse All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;