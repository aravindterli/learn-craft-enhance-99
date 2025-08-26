import React from "react";
import { Clock, Users, Star, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: number;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price?: string;
  originalPrice?: string;
  image?: string;
  category: string;
  onViewProgram: () => void;
  onTakeTest: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  students,
  rating,
  instructor,
  level,
  price,
  originalPrice,
  image,
  category,
  onViewProgram,
  onTakeTest,
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-success text-success-foreground";
      case "Intermediate":
        return "bg-warning text-warning-foreground";
      case "Advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case "ai & ml":
        return "from-purple-500 to-pink-500";
      case "data science":
        return "from-blue-500 to-cyan-500";
      case "blockchain":
        return "from-yellow-500 to-orange-500";
      case "cybersecurity":
        return "from-red-500 to-pink-500";
      case "medicine":
        return "from-green-500 to-emerald-500";
      case "law":
        return "from-indigo-500 to-purple-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden border border-border/50 hover:border-primary/20 hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className={`w-full h-48 bg-gradient-to-br ${getCategoryGradient(category)} flex items-center justify-center`}>
            <BookOpen className="w-16 h-16 text-white/80" />
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`bg-gradient-to-r ${getCategoryGradient(category)} text-white border-0`}>
            {category}
          </Badge>
        </div>

        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={getLevelColor(level)}>
            {level}
          </Badge>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Instructor */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">
              {instructor.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-sm font-medium text-foreground">{instructor}</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-medium">{duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-xs font-medium">{students}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="space-y-4">
          {price && (
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-foreground">{price}</span>
              {originalPrice && (
                <span className="text-lg text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
          )}

          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onViewProgram}
              className="flex-1 group-hover:border-primary group-hover:text-primary"
            >
              View Program
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onTakeTest}
              className="flex-1"
            >
              Take Test
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hover Effect Decoration */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary" />
      </div>
    </div>
  );
};

export default CourseCard;