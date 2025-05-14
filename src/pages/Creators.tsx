
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
                {/* Avatar component - Increased size and ensured square shape */}
                {/* Changed h-24 w-24 to h-36 w-36 for a larger square */}
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
                {/* Instagram Icon SVG (simple outline) */}
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
                {/* Dribbble Icon SVG (simple outline) */}
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
      role: "Project Lead and Ex-Design Head", // Updated role
      bio: "Led the project development and previously served as the Design Head. Specializes in digital art, UI/UX design, and project management.",
      // Sample image for Rohit Krishna
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac9f?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#", // Placeholder Instagram
      dribbble: "#" // Placeholder Dribbble
    },
    {
      name: "Shriya Garg",
      role: "Vice President & Project Manager", // Role remains the same
      bio: "Oversaw the project management aspects of the website development. Coordinated with team members and ensured project milestones were met.",
      // Sample image for Shriya Garg
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1687cd?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    },
    {
      name: "Parth Khandelwal",
      role: "Finance Head & Developer", // Role remains the same
      bio: "Combines financial expertise with web development skills. Led the financial planning and contributed to the development of the Creativity Club website.",
      // Sample image for Parth Khandelwal
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    },
    {
      name: "Anushka Chandergi",
      role: "Design Head & UI Developer", // Role remains the same
      bio: "Contributed to the design implementation and front-end development. Created visual assets and helped structure the user interface elements.",
      // Sample image for Anushka Chandergi
      image: "https://images.unsplash.com/photo-1594744803329-e519c265e10b?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    },
    {
      name: "Veda Chandergi",
      role: "General Secretary & Content Manager", // Role remains the same
      bio: "Managed content creation and organization for the website. Ensured all information was accurate and effectively communicated.",
      // Sample image for Veda Chandergi
      image: "https://images.unsplash.com/photo-1580489944761-c4337a53e2b1?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    },
    // Added new creators with sample images
    {
      name: "Haritha Nivrithi",
      role: "Content Writer & Editor",
      bio: "Crafted engaging content and ensured editorial quality for the website.",
      // Sample image for Haritha Nivrithi
      image: "https://images.unsplash.com/photo-1520452101351-34e62b62b85a?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    },
    {
      name: "Suhani Balchandani",
      role: "Tester & Editor",
      bio: "Ensured the website was bug-free and contributed to content editing.",
      // Sample image for Suhani Balchandani
      image: "https://images.unsplash.com/photo-1508214751196-cdfd46dac9f5?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    },
    {
      name: "Aayush Raj",
      role: "Developer & Tester",
      bio: "Contributed to the website's development and testing processes.",
      // Sample image for Aayush Raj
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "#", // Placeholder LinkedIn
      instagram: "#" // Placeholder Instagram
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back to Home link */}
        <div className="flex items-center mb-12">
          <Link
            to="/"
            className="flex items-center text-muted-foreground hover:text-white transition-all group mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-serif">
            <span className="text-gradient-primary">Creators</span>
          </h1>
        </div>

        {/* Introductory paragraph */}
        <div className="mb-12">
          <p className="text-xl text-muted-foreground max-w-3xl">
            Meet the talented individuals who brought the Creativity Club website to life.
            This magical corner of the web was created through their combined creativity,
            technical skills, and passion.
          </p>
        </div>

        {/* Grid to display creator profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the creators array and render a CreatorProfile for each */}
          {creators.map((creator) => (
            <CreatorProfile key={creator.name} {...creator} />
          ))}
        </div>
      </div>

      {/* Sparkling effects (assuming these are styled elsewhere) */}
      <div className="sparkling absolute top-1/3 left-1/4"></div>
      <div className="sparkling absolute bottom-1/4 right-1/3"></div>
    </div>
  );
};

export default Creators;
