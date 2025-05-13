
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <HeroSection
        title="About Our Club"
        subtitle="Learn more about the Creativity Club, our mission, and our magical journey."
      />
      
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div>
      </div>
      
      <section className="py-12 px-4 relative">
        <div className="floating-rune animate-float" style={{ top: '10%', left: '5%', fontSize: '2rem' }}>✦</div>
        <div className="floating-rune animate-float" style={{ top: '40%', right: '8%', fontSize: '1.5rem', animationDelay: '1s' }}>✧</div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our <span className="text-accent">Mission</span></h2>
          <div className="prose prose-lg prose-invert max-w-none magical-card p-6">
            <p className="text-xl text-muted-foreground mb-6">
              The Creativity Club is dedicated to fostering a vibrant community where creativity flourishes and magical moments are shared. Our mission is to provide a supportive environment for creative individuals to explore their talents, learn new skills, and collaborate with like-minded enthusiasts.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              We believe that creativity is a form of <span className="text-accent font-handwritten text-2xl">magic</span> that resides within everyone. Through our various activities and events, we aim to help our members unlock this magic and use it to enrich their lives and the world around them.
            </p>
          </div>
        </div>
      </section>
      
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div>
      </div>
      
      <section className="py-12 px-4 bg-gradient-to-b from-background to-card/30 relative">
        <div className="floating-rune animate-float" style={{ bottom: '20%', right: '15%', fontSize: '2rem', animationDelay: '2s' }}>✵</div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our <span className="text-accent">Story</span></h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="magical-card p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-4 bg-magic-purple/20 w-16 h-16 rounded-full flex items-center justify-center text-magic-purple animate-magical-appear">
                  ✦
                </div>
                <h3 className="text-xl font-serif mb-3 magic-accent">The Beginning</h3>
                <p className="text-muted-foreground">Founded in 2020 by a group of passionate artists and writers, as a small gathering of friends with a love for creative expression.</p>
              </div>
              
              <div className="magical-card p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-4 bg-magic-teal/20 w-16 h-16 rounded-full flex items-center justify-center text-magic-teal animate-magical-appear" style={{ animationDelay: "0.2s" }}>
                  ✧
                </div>
                <h3 className="text-xl font-serif mb-3 magic-accent">Growth</h3>
                <p className="text-muted-foreground">We expanded our activities to workshops, exhibitions, collaborative projects, and social events, growing our community.</p>
              </div>
              
              <div className="magical-card p-6 flex flex-col items-center text-center">
                <div className="text-3xl mb-4 bg-magic-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-magic-gold animate-magical-appear" style={{ animationDelay: "0.4s" }}>
                  ✵
                </div>
                <h3 className="text-xl font-serif mb-3 magic-accent">Today</h3>
                <p className="text-muted-foreground">The club now stands as a testament to the power of creative community, providing inspiration and support to all members.</p>
              </div>
            </div>
            
            <div className="magical-card p-6">
              <p className="text-xl text-muted-foreground mb-6">
                Over the years, we have expanded our activities to include workshops, exhibitions, collaborative projects, and social events. Our membership has grown to include creative individuals from various backgrounds and disciplines, all united by the desire to explore and express their creativity.
              </p>
              <p className="text-xl text-muted-foreground">
                Today, the Creativity Club stands as a testament to the power of creative community, providing inspiration, support, and opportunities for creative growth to all our members.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div>
      </div>
      
      <section className="py-12 px-4 relative">
        <div className="floating-rune animate-float" style={{ top: '30%', left: '10%', fontSize: '1.8rem', animationDelay: '1.5s' }}>⋆</div>
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-12 text-center">What <span className="text-accent">We Do</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="magical-card border-white/10 transform transition-all hover:rotate-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magic-purple to-magic-teal"></div>
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-magical-spin">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-display mb-4 text-center">Workshops & Classes</h3>
                <p className="text-muted-foreground">
                  We organize regular workshops and classes on various creative disciplines, including writing, drawing, painting, photography, and more. These sessions are designed to help members develop their skills and explore new forms of creative expression.
                </p>
              </CardContent>
            </Card>
            
            <Card className="magical-card border-white/10 transform transition-all hover:rotate-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magic-teal to-magic-gold"></div>
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-magical-spin" style={{ animationDelay: "2s" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-display mb-4 text-center">Exhibitions & Showcases</h3>
                <p className="text-muted-foreground">
                  We provide platforms for members to showcase their creative work through exhibitions, readings, performances, and online galleries. These events give members an opportunity to share their creations with a wider audience and receive valuable feedback.
                </p>
              </CardContent>
            </Card>
            
            <Card className="magical-card border-white/10 transform transition-all hover:rotate-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magic-gold to-magic-purple"></div>
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-magical-spin" style={{ animationDelay: "4s" }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-display mb-4 text-center">Collaborative Projects</h3>
                <p className="text-muted-foreground">
                  We facilitate collaborative projects that bring together members with different skills and perspectives. These projects range from community art installations to literary anthologies, fostering a sense of community and collective creativity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div>
      </div>
      
      <section className="py-12 px-4 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="sparkling absolute top-1/4 left-1/4"></div>
        <div className="sparkling absolute bottom-1/3 right-1/4"></div>
        <div className="floating-rune animate-float" style={{ bottom: '10%', left: '20%', fontSize: '2rem', animationDelay: '3s' }}>✹</div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our <span className="text-accent">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">✦</span>
                <h3 className="text-xl font-display">Inclusivity</h3>
              </div>
              <p className="text-muted-foreground">
                We welcome creative individuals of all backgrounds, skill levels, and disciplines. Our community is a safe and supportive space for everyone to express themselves freely.
              </p>
            </div>
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">✧</span>
                <h3 className="text-xl font-display">Collaboration</h3>
              </div>
              <p className="text-muted-foreground">
                We believe that creative magic is amplified when shared. We encourage collaboration and the exchange of ideas among our members.
              </p>
            </div>
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">✵</span>
                <h3 className="text-xl font-display">Growth</h3>
              </div>
              <p className="text-muted-foreground">
                We are committed to helping our members grow their skills and confidence. We provide resources, feedback, and opportunities for creative development.
              </p>
            </div>
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">⋆</span>
                <h3 className="text-xl font-display">Community</h3>
              </div>
              <p className="text-muted-foreground">
                We foster a sense of belonging and community among our members. We celebrate each other's successes and support each other through challenges.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 magical-card inline-block">
            <p className="text-2xl font-handwritten text-accent">Join us on this magical journey!</p>
            <p className="text-muted-foreground mt-4">Together, we can create something truly extraordinary.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
