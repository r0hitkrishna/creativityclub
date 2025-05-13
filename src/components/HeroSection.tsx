
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="sparkling absolute top-5 left-1/4"></div>
        <div className="sparkling absolute bottom-10 right-1/3"></div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-semibold mb-6 bg-clip-text text-transparent bg-magic-gradient relative">
          {title}
        </h1>
        
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-white/80">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {primaryButtonText && primaryButtonLink && (
            <Button
              asChild
              className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium"
            >
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
          )}
          
          {secondaryButtonText && secondaryButtonLink && (
            <Button
              asChild
              variant="outline"
              className="bg-transparent border border-magic-gold/50 hover:bg-magic-gold/10 text-magic-gold px-8 py-6 rounded-full text-lg font-medium"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
