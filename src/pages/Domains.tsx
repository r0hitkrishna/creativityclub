
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Coins, Pencil, Tent, Package, Users } from "lucide-react"; // Assuming these icons are still desired

// Interface for Domain Card properties
interface DomainCardProps {
  icon: React.ReactNode; // Icon for the domain
  title: string; // Title of the domain (e.g., DESIGN DOMAIN)
  domainHead: string; // Title for the domain head (random name)
  description: string; // Description of the domain
  // Removed emoji as requested
}

// Component to display a single Domain Card
const DomainCard = ({ icon, title, domainHead, description }: DomainCardProps) => {
  return (
    // Card styling with rounded corners and subtle background
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden h-full rounded-lg shadow-lg">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          {/* Domain Icon */}
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            {icon}
          </div>
          {/* Domain Title */}
          <h3 className="text-xl font-serif">{title}</h3>
          {/* Removed emoji */}
        </div>

        {/* Sample Image */}
        {/* Added a placeholder image above the description */}
        <div className="mb-4">
           <img
            src="https://placehold.co/400x200/8A2BE2/FFFFFF?text=Sample+Image" // Placeholder image URL
            alt={`Sample image for ${title}`}
            className="w-full h-auto rounded-md"
          />
        </div>


        {/* Domain Head Title */}
        {/* Added the domainHead title above the description */}
        <h4 className="text-lg font-semibold mb-2 text-primary">{domainHead}</h4>

        {/* Domain Description */}
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

// Main Domains component
const Domains = () => {
  // Data for each domain
  const domainData = [
    {
      title: "DESIGN DOMAIN",
      domainHead: "Alex Creative", // Sample random name
      description: "The visual brain of the club! From posters to merch, this team turns ideas into eye-catching designs that speak for the club.",
      // Removed emoji: "耳",
      icon: <Palette className="h-6 w-6 text-primary" />
    },
    {
      title: "FINANCE DOMAIN",
      domainHead: "Ben Ledger", // Sample random name
      description: "The money minds! They handle budgets, sponsorships, and make sure every rupee is smartly spent and tracked.",
      // Removed emoji: "跳",
      icon: <Coins className="h-6 w-6 text-primary" />
    },
    {
      title: "EDITORIAL DOMAIN",
      domainHead: "Chloe Wordsmith", // Sample random name
      description: "Where word magic happens! From quirky captions to event write-ups, this team adds the sparkle to all things written.",
      // Removed emoji: "槙",
      icon: <Pencil className="h-6 w-6 text-primary" />
    },
    {
      title: "EVENTS & OPERATIONS",
      domainHead: "David Organizer", // Sample random name
      description: "The action squad! They plan and execute everything from fests to casual meetups—bringing every event idea to life.",
      // Removed emoji: "蒔",
      icon: <Tent className="h-6 w-6 text-primary" />
    },
    {
      title: "LOGISTICS DOMAIN",
      domainHead: "Eva Coordinator", // Sample random name
      description: "The behind-the-scenes heroes! They handle everything from resources to on-ground execution, ensuring smooth and stress-free events.",
      // Removed emoji: "逃",
      icon: <Package className="h-6 w-6 text-primary" />
    },
    {
      title: "PR DOMAIN",
      domainHead: "Finn Communicator", // Sample random name
      description: "The voice of the club! They build our public presence, manage social media, and connect with sponsors and partners.",
      // Removed emoji: "離",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      {/* Hero Section for the Domains page */}
      <HeroSection
        title="Our Domains"
        subtitle="Explore the different areas where our creativity comes to life."
      />

      {/* Section displaying the domain cards in a grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Grid layout for domain cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through domain data and render a DomainCard for each */}
            {domainData.map((domain, index) => (
              <DomainCard
                key={index} // Using index as key, consider a unique ID if available
                icon={domain.icon}
                title={domain.title}
                domainHead={domain.domainHead} // Pass the domainHead
                description={domain.description}
                // Removed emoji prop
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Domains;
