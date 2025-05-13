
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <HeroSection
        title="About Our Club"
        subtitle="Learn more about the Creativity Club, our mission, and our magical journey."
      />
      
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Our Mission</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              The Creativity Club is dedicated to fostering a vibrant community where creativity flourishes and magical moments are shared. Our mission is to provide a supportive environment for creative individuals to explore their talents, learn new skills, and collaborate with like-minded enthusiasts.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              We believe that creativity is a form of magic that resides within everyone. Through our various activities and events, we aim to help our members unlock this magic and use it to enrich their lives and the world around them.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Our Story</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Founded in 2020 by a group of passionate artists and writers, the Creativity Club began as a small gathering of friends who shared a common love for creative expression. What started as informal meetups in local cafes quickly grew into a structured organization with a clear vision.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              Over the years, we have expanded our activities to include workshops, exhibitions, collaborative projects, and social events. Our membership has grown to include creative individuals from various backgrounds and disciplines, all united by the desire to explore and express their creativity.
            </p>
            <p className="text-xl text-muted-foreground">
              Today, the Creativity Club stands as a testament to the power of creative community, providing inspiration, support, and opportunities for creative growth to all our members.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-12 text-center">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Workshops & Classes</h3>
                <p className="text-muted-foreground">
                  We organize regular workshops and classes on various creative disciplines, including writing, drawing, painting, photography, and more. These sessions are designed to help members develop their skills and explore new forms of creative expression.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Exhibitions & Showcases</h3>
                <p className="text-muted-foreground">
                  We provide platforms for members to showcase their creative work through exhibitions, readings, performances, and online galleries. These events give members an opportunity to share their creations with a wider audience and receive valuable feedback.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Collaborative Projects</h3>
                <p className="text-muted-foreground">
                  We facilitate collaborative projects that bring together members with different skills and perspectives. These projects range from community art installations to literary anthologies, fostering a sense of community and collective creativity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Inclusivity</h3>
              <p className="text-muted-foreground">
                We welcome creative individuals of all backgrounds, skill levels, and disciplines. Our community is a safe and supportive space for everyone to express themselves freely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe that creative magic is amplified when shared. We encourage collaboration and the exchange of ideas among our members.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Growth</h3>
              <p className="text-muted-foreground">
                We are committed to helping our members grow their skills and confidence. We provide resources, feedback, and opportunities for creative development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2 text-accent">Community</h3>
              <p className="text-muted-foreground">
                We foster a sense of belonging and community among our members. We celebrate each other's successes and support each other through challenges.
              </p>
            </div>
          </div>
          <div className="sparkling absolute top-1/4 left-1/4"></div>
        </div>
      </section>
    </>
  );
};

export default About;
