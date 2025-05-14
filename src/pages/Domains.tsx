
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Coins, Pencil, Tent, Package, Users } from "lucide-react";

interface DomainCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  emoji: string;
}

const DomainCard = ({ icon, title, description, emoji }: DomainCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            {icon}
          </div>
          <span className="text-2xl">{emoji}</span>
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Domains = () => {
  const domainData = [
    {
      title: "DESIGN DOMAIN",
      description: "The visual brain of the club! From posters to merch, this team turns ideas into eye-catching designs that speak for the club.",
      emoji: "🎨",
      icon: <Palette className="h-6 w-6 text-primary" />
    },
    {
      title: "FINANCE DOMAIN",
      description: "The money minds! They handle budgets, sponsorships, and make sure every rupee is smartly spent and tracked.",
      emoji: "💵",
      icon: <Coins className="h-6 w-6 text-primary" />
    },
    {
      title: "EDITORIAL DOMAIN",
      description: "Where word magic happens! From quirky captions to event write-ups, this team adds the sparkle to all things written.",
      emoji: "🖊",
      icon: <Pencil className="h-6 w-6 text-primary" />
    },
    {
      title: "EVENTS & OPERATIONS",
      description: "The action squad! They plan and execute everything from fests to casual meetups—bringing every event idea to life.",
      emoji: "🎪",
      icon: <Tent className="h-6 w-6 text-primary" />
    },
    {
      title: "LOGISTICS DOMAIN",
      description: "The behind-the-scenes heroes! They handle everything from resources to on-ground execution, ensuring smooth and stress-free events.",
      emoji: "📦",
      icon: <Package className="h-6 w-6 text-primary" />
    },
    {
      title: "PR DOMAIN",
      description: "The voice of the club! They build our public presence, manage social media, and connect with sponsors and partners.",
      emoji: "🗣",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      <HeroSection
        title="Our Domains"
        subtitle="Explore the different areas where our creativity comes to life."
      />
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainData.map((domain, index) => (
              <DomainCard
                key={index}
                icon={domain.icon}
                title={domain.title}
                description={domain.description}
                emoji={domain.emoji}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Domains;
