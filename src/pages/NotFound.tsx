import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="text-center space-y-8 px-4 relative z-10">
        {/* 404 Display */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent animate-pulse-glow">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </div>

        {/* Message */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page not found
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            The page you're looking for seems to have gone on a learning adventure. 
            Let's get you back on track to discover amazing courses!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-w-[200px]"
          >
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </Button>
          
          <Button
            asChild
            variant="glass"
            size="lg"
            className="min-w-[200px] text-white"
          >
            <Link to="/search">
              <Search className="w-5 h-5 mr-2" />
              Browse Courses
            </Link>
          </Button>
        </div>

        {/* Back link */}
        <div className="pt-8">
          <Button
            asChild
            variant="link"
            className="text-white/70 hover:text-white"
          >
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default NotFound;
