import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { BrutalistButton } from "@/components/ui/brutalist-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="font-headline text-6xl font-bold text-foreground">404</h1>
        <p className="font-body text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <p className="font-body text-sm text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <BrutalistButton asChild>
          <Link to="/">Return to Home</Link>
        </BrutalistButton>
      </div>
    </div>
  );
};

export default NotFound;
