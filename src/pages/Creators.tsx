import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Assuming ArrowLeft is still used for navigation

// Interface for Creator Profile properties
interface CreatorProps {
  name: string;
  role: string;
  image?: string; // Optional image URL
  bio: string;
  linkedin?: string; // Optional LinkedIn URL
  instagram?: string; // Optional Instagram URL
  dribbble?: string; // Optional Dribbble URL (for Rohit)
}

// Component to display a single Creator Profile card
const CreatorProfile = ({ name, role, image, bio, linkedin, instagram, dribbble }: CreatorProps) => {
  // Generate initials for the avatar fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    // Card styling with magical-card class (assuming custom styling) and hover effects
    <Card className="magical-card transform transition-all duration-500 hover:scale-105 rounded-lg shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative">
            {/* Background effect for the avatar */}
            <div className="absolute inset-0 bg-gradient-to-r from-magic-purple via-magic-teal to-magic-gold opacity-50 rounded-full blur-sm"></div>
            {/* HoverCard for displaying bio on hover */}
            <HoverCard>
              <HoverCardTrigger asChild>
                {/* Avatar component - square shape */}
                <Avatar className="h-36 w-36 border-2 border-white/10">
                  {image ? (
                    // Display image if available
                    // object-cover ensures the image fills the square space while maintaining aspect ratio
                    <AvatarImage src={image} alt={name} className="object-cover" />
                  ) : (
                    // Display initials as fallback
                    <AvatarFallback className="bg-primary/20 text-primary text-lg flex items-center justify-center">
                      {initials}
                    </AvatarFallback>
                  )}
                </Avatar>
              </HoverCardTrigger>
              {/* Content displayed on hover */}
              <HoverCardContent className="w-80 rounded-md bg-card/90 backdrop-blur-sm border-white/10 shadow-lg">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{name}</h4>
                  <p className="text-sm text-muted-foreground">{bio}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Creator Name and Role */}
          <h3 className="text-xl font-serif mb-1">{name}</h3>
          <p className="text-accent mb-4">{role}</p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mt-4">
            {/* LinkedIn Link */}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1 text-sm rounded-md bg-white/10 hover:bg-white/20 transition-all text-muted-foreground hover:text-white"
                aria-label={`${name} on LinkedIn`}
              >
                {/* LinkedIn Icon SVG */}
                <svg
                  className="w-4 h-4"
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
              </a>
            )}

            {/* Instagram Link */}
            {instagram && (
               <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1 text-sm rounded-md bg-white/10 hover:bg-white/20 transition-all text-muted-foreground hover:text-white"
                 aria-label={`${name} on Instagram`}
              >
                {/* Instagram Icon SVG */}
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            )}

             {/* Dribbble Link (for Rohit) */}
            {dribbble && (
               <a
                href={dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1 text-sm rounded-md bg-white/10 hover:bg-white/20 transition-all text-muted-foreground hover:text-white"
                 aria-label={`${name} on Dribbble`}
              >
                {/* Dribbble Icon SVG */}
                 <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                 >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.91"></path>
                    <path d="M21.75 12.84c-6.62 1.41-12.14 1-16.38-1.94"></path>
                    <path d="M10.75 19.36c3.15-2.08 5.42-5.03 5.42-5.03"></path>
                 </svg>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Creators component
const Creators = () => {
  // Array of creator data, ordered and updated as requested with sample images
  const creators: CreatorProps[] = [
    {
      name: "Rohit Krishna",
      role: "Project Lead and Ex-Design Head",
      bio: "Led the project development and previously served as the Design Head. Specializes in digital art, UI/UX design, and project management.",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac9f?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#",
      dribbble: "#"
    },
    {
      name: "Shriya Garg",
      role: "Vice President & Project Manager",
      bio: "Oversaw the project management aspects of the website development. Coordinated with team members and ensured project milestones were met.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1687cd?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Parth Khandelwal",
      role: "Finance Head & Developer",
      bio: "Combines financial expertise with web development skills. Led the financial planning and contributed to the development of the Creativity Club website.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Anushka Chandergi",
      role: "Design Head & UI Developer",
      bio: "Contributed to the design implementation and front-end development. Created visual assets and helped structure the user interface elements.",
      image: "https://images.unsplash.com/photo-1594744803329-e519c265e10b?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Veda Chandergi",
      role: "General Secretary & Content Manager",
      bio: "Managed content creation and organization for the website. Ensured all information was accurate and effectively communicated.",
      image: "https://images.unsplash.com/photo-1580489944761-c4337a53e2b1?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Haritha Nivrithi",
      role: "Content Writer & Editor",
      bio: "Crafted engaging content and ensured editorial quality for the website.",
      image: "https://images.unsplash.com/photo-1520452101351-34e62b62b85a?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Suhani Balchandani",
      role: "Tester & Editor",
      bio: "Ensured the website was bug-free and contributed to content editing.",
      image: "https://images.unsplash.com/photo-1508214751196-cdfd46dac9f5?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Aayush Raj",
      role: "Developer & Tester",
      bio: "Contributed to the website's development and testing processes.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#",
      instagram: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header section with improved back button positioning */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 md:mb-0">
            <span className="text-gradient-primary">Creators</span>
          </h1>
          
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 transition-all text-muted-foreground hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Introductory paragraph */}
        <p className="text-xl text-muted-foreground max-w-3xl">
          Meet the brilliant minds behind the Creativity Club website — a vibrant digital 
          space crafted through their creativity, technical expertise, and passion.
        </p>

        {/* Grid to display creator profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the creators array and render a CreatorProfile for each */}
          {creators.map((creator) => (
            <CreatorProfile key={creator.name} {...creator} />
          ))}
        </div>
      </div>

      {/* Sparkling effects */}
      <div className="sparkling absolute top-1/3 left-1/4"></div>
      <div className="sparkling absolute bottom-1/4 right-1/3"></div>
    </div>
  );
};

export default Creators;
