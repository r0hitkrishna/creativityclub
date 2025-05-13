
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

interface MemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const MemberCard = ({ name, role, bio, image, socialLinks }: MemberCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden">
      <div className="p-1 bg-gradient-to-r from-magic-purple via-magic-teal to-magic-gold rounded-t-xl">
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif mb-1">{name}</h3>
        <p className="text-accent mb-4">{role}</p>
        <p className="text-muted-foreground mb-4">{bio}</p>
        
        {socialLinks && (
          <div className="flex gap-3">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label={`${name}'s Twitter`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            )}
            
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label={`${name}'s Instagram`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            )}
            
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label={`${name}'s LinkedIn`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Members = () => {
  const boardMembers = [
    {
      name: "Emily Wells",
      role: "President",
      bio: "Emily is a novelist and painter who believes in the transformative power of creativity. She founded the Creativity Club to create a space where artists of all kinds could come together.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Marcus Chen",
      role: "Vice President",
      bio: "Marcus is a digital artist and animator who specializes in creating magical worlds and creatures. He oversees the club's exhibition programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sofia Rodriguez",
      role: "Workshop Coordinator",
      bio: "Sofia is a poet and creative writing instructor who loves helping others find their voice. She plans and organizes the club's workshops and classes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      socialLinks: {
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "James Harper",
      role: "Treasurer",
      bio: "James is a photographer and business student who manages the club's finances and helps secure funding for events and projects.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: {
        linkedin: "#"
      }
    },
    {
      name: "Aisha Patel",
      role: "Communications Director",
      bio: "Aisha is a graphic designer and social media specialist who handles the club's online presence and designs promotional materials.",
      image: "https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "David Kim",
      role: "Events Manager",
      bio: "David is a musician and event planner who coordinates the club's social events and performance nights.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      socialLinks: {
        instagram: "#"
      }
    }
  ];

  return (
    <>
      <HeroSection
        title="Board Members"
        subtitle="Meet the magical minds behind the Creativity Club."
      />
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Interested in becoming a board member? Elections are held annually in September, and all club members are eligible to run for positions.
          </p>
          <p className="text-muted-foreground mb-6">
            Board members serve one-year terms and are responsible for planning club events, managing resources, and ensuring that the club continues to be a magical space for creative expression.
          </p>
          <div className="sparkling absolute bottom-1/4 right-1/4"></div>
        </div>
      </section>
    </>
  );
};

export default Members;
