import React, { useState, useRef, useEffect } from "react";
import { Search, X, TrendingUp, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface SearchResult {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  rating: number;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch?: (query: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data
  const mockResults: SearchResult[] = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      description: "Learn the basics of ML algorithms and applications",
      category: "AI & ML",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8
    },
    {
      id: 2,
      title: "Data Analysis with Python",
      description: "Master data analysis using Python libraries",
      category: "Data Science",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.7
    },
    {
      id: 3,
      title: "Blockchain Development",
      description: "Build decentralized applications on blockchain",
      category: "Blockchain",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.9
    }
  ];

  const trendingSearches = [
    "Machine Learning",
    "Python Programming", 
    "Data Science",
    "Blockchain",
    "AI Ethics",
    "Web Development"
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = mockResults.filter(
          item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (searchQuery: string) => {
    if (onSearch) {
      onSearch(searchQuery);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-large overflow-hidden animate-scale-pulse">
        {/* Header */}
        <div className="flex items-center p-6 border-b border-border/50">
          <div className="flex items-center flex-1 space-x-4">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <Search className="w-6 h-6 text-white" />
            </div>
            <Input
              ref={inputRef}
              placeholder="Search for courses, topics, or skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
              className="text-lg border-0 focus-visible:ring-0 bg-transparent"
            />
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="max-h-96 overflow-y-auto">
          {query.length === 0 && (
            <div className="p-6 space-y-6">
              {/* Trending Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Trending Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((term) => (
                    <Button
                      key={term}
                      variant="secondary"
                      size="sm"
                      onClick={() => handleSearch(term)}
                      className="rounded-full"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {query.length > 0 && query.length <= 2 && (
            <div className="p-8 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Type at least 3 characters to search</p>
            </div>
          )}

          {isLoading && (
            <div className="p-8 text-center">
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Searching courses...</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-4 space-y-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleSearch(result.title)}
                  className="p-4 rounded-2xl hover:bg-surface cursor-pointer transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {result.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center space-x-3 mt-3">
                        <Badge variant="secondary" className="text-xs">
                          {result.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {result.duration}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          ⭐ {result.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {query.length > 2 && !isLoading && results.length === 0 && (
            <div className="p-8 text-center">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">No courses found for "{query}"</p>
              <p className="text-sm text-muted-foreground">Try different keywords or browse our categories</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {query.length > 2 && results.length > 0 && (
          <div className="p-4 border-t border-border/50 bg-surface/50">
            <Button 
              onClick={() => handleSearch(query)}
              className="w-full"
              variant="hero"
            >
              View all results for "{query}"
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;