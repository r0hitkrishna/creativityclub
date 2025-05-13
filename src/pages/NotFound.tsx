
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-28 pb-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="relative mb-8 animate-float">
          <div className="h-32 w-32 rounded-full bg-primary/30 flex items-center justify-center border border-primary/50 mx-auto">
            <span className="text-primary font-serif text-8xl animate-glow">4</span>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-primary/10 blur-xl"></div>
          <div className="sparkling absolute top-1/4 left-1/4"></div>
          <div className="sparkling absolute bottom-1/4 right-1/4"></div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-serif font-medium mb-6">Page Not Found</h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          The magical page you're looking for seems to have vanished into another dimension. Let's guide you back to our realm.
        </p>
        
        <Button
          asChild
          className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-6 py-2"
        >
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
