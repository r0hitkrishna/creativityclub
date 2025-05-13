
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  linkText,
  linkTo
}: { 
  title: string; 
  description: string; 
  icon: React.ComponentType<any>;
  linkText: string;
  linkTo: string;
}) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link 
          to={linkTo} 
          className="text-accent inline-flex items-center group"
        >
          {linkText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="ml-1 transition-transform group-hover:translate-x-1"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
};

const UpcomingEvent = () => {
  return (
    <div className="rounded-xl p-1 magic-border">
      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6">
        <div className="mb-4">
          <span className="text-accent text-sm font-medium">UPCOMING EVENT</span>
        </div>
        <h3 className="text-2xl font-serif mb-2">Creative Writing Workshop</h3>
        <p className="text-muted-foreground mb-4">
          Join us for a magical journey into the world of creative writing. Learn techniques to craft compelling stories.
        </p>
        <div className="flex items-center gap-4 text-sm mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>May 15, 2023</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>6:00 PM</span>
          </div>
        </div>
        <div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/events/creative-writing">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection
        title="Explore Your Magic"
        subtitle="Unlock your creative potential through art, writing, and collaborative magic. Join our community of imaginative souls."
        primaryButtonText="Join Us"
        primaryButtonLink="/about"
        secondaryButtonText="Explore Events"
        secondaryButtonLink="/events"
      />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">Ignite Your Imagination</h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              The Creativity Club is a sanctuary for those who seek to express themselves through various artistic mediums and magical creative pursuits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Creative Workshops"
              description="Attend our regular workshops led by experienced artists and writers."
              icon={(props) => (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h5"></path><path d="M17 12h5"></path><path d="M8 4v16l8-8-8-8z"></path>
                </svg>
              )}
              linkText="View Workshops"
              linkTo="/events"
            />
            <FeatureCard
              title="Collaborative Projects"
              description="Work with fellow members on exciting creative projects and exhibitions."
              icon={(props) => (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 0-6-6"></path><path d="M6 8a6 6 0 0 1 6-6"></path><path d="M6 20.33a6 6 0 0 0 6-6"></path><path d="M18 20.33a6 6 0 0 1-6-6"></path><circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
              linkText="Our Projects"
              linkTo="/about"
            />
            <FeatureCard
              title="Community Events"
              description="Connect with like-minded individuals through our social and networking events."
              icon={(props) => (
                <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              )}
              linkText="Join Events"
              linkTo="/events"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">
                Find Your Creative Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Creativity Club provides a supportive environment for artists, writers, and creative thinkers to share ideas, learn new skills, and collaborate on magical projects.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a seasoned creator or just beginning your journey, you'll find a place in our enchanted community.
              </p>
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div>
              <UpcomingEvent />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">
            Join Our Magical Journey
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-10">
            Ready to unlock your creative potential? Become a member of the Creativity Club today and start your magical journey with like-minded creators.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
