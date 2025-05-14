
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 py-12 px-4 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/30 flex items-center justify-center border border-primary/50">
              <span className="text-primary font-serif text-2xl animate-glow">C</span>
            </div>
            <span className="font-serif text-xl font-medium tracking-wider">
              <span className="text-primary">Creativity</span>{" "}
              <span className="text-accent">Club</span>
            </span>
          </div>
          <p className="text-muted-foreground">
            Unleashing imagination and crafting magic through creative expression since 2020.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
            <li><Link to="/events" className="text-muted-foreground hover:text-white transition-colors">Events</Link></li>
            <li><Link to="/members" className="text-muted-foreground hover:text-white transition-colors">Members</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-4">Connect</h3>
          <p className="text-muted-foreground mb-2">Join us in our magical journey</p>
          <div className="flex gap-4 mb-4">
            <a 
              href="https://www.facebook.com/creativityclubvit/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a 
              href="https://www.instagram.com/creativityclub_vit/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Creativity Club. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute w-96 h-96 -top-48 -right-48 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
