import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      {/* Hero Section for the About page */}
      <HeroSection
        title="About Our Club"
        subtitle="Learn more about the Creativity Club, our mission, and our magical journey."
      />

      {/* Divider */}
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div> {/* Assuming magical-divider is a custom class */}
      </div>

      {/* Section: Our Story */}
      <section className="py-12 px-4 relative">
        {/* Floating rune elements (assuming these are styled elsewhere) */}
        <div className="floating-rune animate-float" style={{ top: '10%', left: '5%', fontSize: '2rem' }}>✦</div>
        <div className="floating-rune animate-float" style={{ top: '40%', right: '8%', fontSize: '1.5rem', animationDelay: '1s' }}>✧</div>

        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our <span className="text-accent">Story</span></h2>
          <div className="prose prose-lg prose-invert max-w-none"> {/* prose classes for typography styling */}
            {/* Grid for the three story points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* The Beginning */}
              <div className="magical-card p-6 flex flex-col items-center text-center rounded-lg shadow-lg"> {/* Card styling */}
                {/* Icon/Symbol */}
                <div className="text-3xl mb-4 bg-magic-purple/20 w-16 h-16 rounded-full flex items-center justify-center text-magic-purple animate-magical-appear">
                  ✦ {/* Symbol */}
                </div>
                {/* Subheading */}
                <h3 className="text-xl font-serif mb-3 magic-accent">The Beginning</h3> {/* Subheading styling */}
                {/* Description */}
                <p className="text-muted-foreground">
                  Established in 2015 by a group of passionate artists and writers, beginning as a
                  small circle of friends united by their love for creative expression.
                </p>
              </div>

              {/* Growth */}
              <div className="magical-card p-6 flex flex-col items-center text-center rounded-lg shadow-lg"> {/* Card styling */}
                {/* Icon/Symbol */}
                <div className="text-3xl mb-4 bg-magic-teal/20 w-16 h-16 rounded-full flex items-center justify-center text-magic-teal animate-magical-appear" style={{ animationDelay: "0.2s" }}>
                  ✧ {/* Symbol */}
                </div>
                {/* Subheading */}
                <h3 className="text-xl font-serif mb-3 magic-accent">Growth</h3> {/* Subheading styling */}
                {/* Description */}
                <p className="text-muted-foreground">
                  Our activities grew to include workshops, exhibitions, collaborative
                  projects, and social events—nurturing a thriving creative
                  community.
                </p>
              </div>

              {/* Today */}
              <div className="magical-card p-6 flex flex-col items-center text-center rounded-lg shadow-lg"> {/* Card styling */}
                {/* Icon/Symbol */}
                <div className="text-3xl mb-4 bg-magic-gold/20 w-16 h-16 rounded-full flex items-center justify-center text-magic-gold animate-magical-appear" style={{ animationDelay: "0.4s" }}>
                  ✵ {/* Symbol */}
                </div>
                {/* Subheading */}
                <h3 className="text-xl font-serif mb-3 magic-accent">Today</h3> {/* Subheading styling */}
                {/* Description */}
                <p className="text-muted-foreground">
                  Today, the club is a testament to the power of creative
                  collaboration—offering inspiration, encouragement, and support to
                  all its members.
                </p>
              </div>
            </div>

            {/* Additional Story Paragraphs */}
            <div className="magical-card p-6 rounded-lg shadow-lg"> {/* Card styling */}
              <p className="text-xl text-muted-foreground mb-6">
                Over time, we’ve broadened our initiatives to feature workshops,
                exhibitions, collaborative projects, and social events. Our diverse
                membership brings together individuals from various backgrounds, all
                driven by a shared passion to explore and express creativity.
              </p>
              <p className="text-xl text-muted-foreground">
                The Creativity Club continues to thrive as a beacon of creative
                collaboration—offering inspiration, support, and growth
                opportunities for every member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div> {/* Assuming magical-divider is a custom class */}
      </div>

      {/* Section: What We Do */}
      <section className="py-12 px-4 relative">
        {/* Floating rune element (assuming styled elsewhere) */}
        <div className="floating-rune animate-float" style={{ top: '30%', left: '10%', fontSize: '1.8rem', animationDelay: '1.5s' }}>⋆</div>

        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-12 text-center">What <span className="text-accent">We Do</span></h2>

          {/* Grid for the three "What We Do" points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Workshops & Classes */}
            <Card className="magical-card border-white/10 transform transition-all hover:rotate-1 rounded-lg shadow-lg"> {/* Card styling */}
              {/* Top border gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magic-purple to-magic-teal"></div>
              <CardContent className="p-6">
                {/* Icon */}
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-magical-spin">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg> {/* Sample icon (can be replaced) */}
                </div>
                {/* Subheading */}
                <h3 className="text-2xl font-display mb-4 text-center">Workshops & Classes</h3> {/* Subheading styling */}
                {/* Description */}
                <p className="text-muted-foreground">
                  We host regular workshops and classes across a variety of creative
                  fields—writing, drawing, painting, photography, and more. These
                  sessions help members enhance their skills and discover new avenues
                  for creative expression.
                </p>
              </CardContent>
            </Card>

            {/* Exhibitions & Showcases */}
            <Card className="magical-card border-white/10 transform transition-all hover:rotate-1 rounded-lg shadow-lg"> {/* Card styling */}
              {/* Top border gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magic-teal to-magic-gold"></div>
              <CardContent className="p-6">
                {/* Icon */}
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-magical-spin" style={{ animationDelay: "2s" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg> {/* Sample icon (can be replaced) */}
                </div>
                {/* Subheading */}
                <h3 className="text-2xl font-display mb-4 text-center">Exhibitions & Showcases</h3> {/* Subheading styling */}
                {/* Description */}
                <p className="text-muted-foreground">
                  We provide platforms for members to display their work through
                  exhibitions, performances, and online galleries. These events offer a
                  chance to connect with wider audiences and receive constructive
                  feedback.
                </p>
              </CardContent>
            </Card>

            {/* Collaborative Projects */}
            <Card className="magical-card border-white/10 transform transition-all hover:rotate-1 rounded-lg shadow-lg"> {/* Card styling */}
              {/* Top border gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magic-gold to-magic-purple"></div>
              <CardContent className="p-6">
                {/* Icon */}
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-magical-spin" style={{ animationDelay: "4s" }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg> {/* Sample icon (can be replaced) */}
                </div>
                {/* Subheading */}
                <h3 className="text-2xl font-display mb-4 text-center">Collaborative Projects</h3> {/* Subheading styling */}
                {/* Description */}
                <p className="text-muted-foreground">
                  We support collaborative projects that unite members with diverse skills
                  and viewpoints. From community art installations to literary
                  anthologies, these efforts foster collective creativity and a sense
                  of belonging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-md mx-auto">
        <div className="magical-divider"></div> {/* Assuming magical-divider is a custom class */}
      </div>

      {/* Section: Our Values */}
      <section className="py-12 px-4 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        {/* Sparkling and floating rune effects (assuming styled elsewhere) */}
        <div className="sparkling absolute top-1/4 left-1/4"></div>
        <div className="sparkling absolute bottom-1/3 right-1/4"></div>
        <div className="floating-rune animate-float" style={{ bottom: '10%', left: '20%', fontSize: '2rem', animationDelay: '3s' }}>✹</div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our <span className="text-accent">Values</span></h2>
          {/* Grid for the four values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
            {/* Inclusivity Value */}
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1 rounded-lg shadow-lg"> {/* Card styling */}
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">✦</span> {/* Symbol */}
                <h3 className="text-xl font-display">Inclusivity</h3> {/* Subheading */}
              </div>
              <p className="text-muted-foreground">
                We embrace creative individuals from all backgrounds, skill levels, and
                disciplines. Our community is a safe, supportive space where everyone
                is free to express themselves.
              </p>
            </div>
            {/* Collaboration Value */}
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1 rounded-lg shadow-lg"> {/* Card styling */}
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">✧</span> {/* Symbol */}
                <h3 className="text-xl font-display">Collaboration</h3> {/* Subheading */}
              </div>
              <p className="text-muted-foreground">
                We believe creativity flourishes through collaboration. By encouraging
                the exchange of ideas, we help members grow together.
              </p>
            </div>
            {/* Growth Value */}
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1 rounded-lg shadow-lg"> {/* Card styling */}
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">✵</span> {/* Symbol */}
                <h3 className="text-xl font-display">Growth</h3> {/* Subheading */}
              </div>
              <p className="text-muted-foreground">
                We're dedicated to nurturing our members’ growth, confidence, and
                creativity—offering resources, feedback, and encouragement along
                the way.
              </p>
            </div>
            {/* Community Value */}
            <div className="magical-card p-6 transform transition-all hover:-translate-y-1 rounded-lg shadow-lg"> {/* Card styling */}
              <div className="flex items-center mb-3">
                <span className="text-2xl text-accent mr-3">⋆</span> {/* Symbol */}
                <h3 className="text-xl font-display">Community</h3> {/* Subheading */}
              </div>
              <p className="text-muted-foreground">
                We cultivate a strong sense of belonging. Members support one another
                through challenges and celebrate each other’s successes.
              </p>
            </div>
          </div>

          {/* Call to action at the bottom of the values section */}
          <div className="mt-12 p-6 magical-card inline-block rounded-lg shadow-lg"> {/* Card styling */}
            <p className="text-2xl font-handwritten text-accent">Join us on this magical journey!</p> {/* Styled text */}
            <p className="text-muted-foreground mt-4">Together, we can create something truly extraordinary.</p> {/* Supporting text */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
