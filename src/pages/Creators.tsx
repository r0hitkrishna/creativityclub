
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CreatorProps {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedin?: string;
}

const CreatorProfile = ({ name, role, image, bio, linkedin }: CreatorProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="magical-card transform transition-all duration-500 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-magic-purple via-magic-teal to-magic-gold opacity-50 rounded-full blur-sm"></div>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Avatar className="h-24 w-24 border-2 border-white/10">
                  {image ? (
                    <AvatarImage src={image} alt={name} />
                  ) : (
                    <AvatarFallback className="bg-primary/20 text-primary text-lg">
                      {initials}
                    </AvatarFallback>
                  )}
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{name}</h4>
                  <p className="text-sm text-muted-foreground">{bio}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <h3 className="text-xl font-serif mb-1">{name}</h3>
          <p className="text-accent mb-4">{role}</p>
          <p className="text-muted-foreground mb-4 text-sm">{bio}</p>
          
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-md bg-white/10 hover:bg-white/20 transition-all"
            >
              <svg 
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Creators = () => {
  const creators: CreatorProps[] = [
    {
      name: "Parth Khandelwal",
      role: "Finance Head & Developer",
      bio: "Combines financial expertise with web development skills. Led the financial planning and contributed to the development of the Creativity Club website.",
      linkedin: "https://www.linkedin.com/in/parthkhandelwal/"
    },
    {
      name: "Rohit Krishna",
      role: "Design Head",
      bio: "Creative designer responsible for the visual elements and user experience of the Creativity Club website. Specializes in digital art and UI/UX design.",
      linkedin: "https://www.linkedin.com/in/rohitkrishna/"
    },
    {
      name: "Shriya Garg",
      role: "Vice President & Project Manager",
      bio: "Oversaw the project management aspects of the website development. Coordinated with team members and ensured project milestones were met.",
      linkedin: "https://www.linkedin.com/in/shriyagarg/"
    },
    {
      name: "Anushka Chandergi",
      role: "Design Head & UI Developer",
      bio: "Contributed to the design implementation and front-end development. Created visual assets and helped structure the user interface elements.",
      linkedin: "https://www.linkedin.com/in/anushkachandergi/"
    },
    {
      name: "Veda Chandergi",
      role: "General Secretary & Content Manager",
      bio: "Managed content creation and organization for the website. Ensured all information was accurate and effectively communicated.",
      linkedin: "https://www.linkedin.com/in/vedachandergi/"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <Link 
            to="/" 
            className="flex items-center text-muted-foreground hover:text-white transition-all group mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif">
            <span className="text-gradient-primary">Creators</span>
          </h1>
        </div>
        
        <div className="mb-12">
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the talented individuals who brought the Creativity Club website to life. 
            This magical corner of the web was created through their combined creativity, 
            technical skills, and passion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <CreatorProfile key={creator.name} {...creator} />
          ))}
        </div>
      </div>
      
      <div className="sparkling absolute top-1/3 left-1/4"></div>
      <div className="sparkling absolute bottom-1/4 right-1/3"></div>
    </div>
  );
};

export default Creators;
