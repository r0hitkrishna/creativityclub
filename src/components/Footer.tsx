
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-12 px-4 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
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
          <p className="text-muted-foreground mb-2">
            Unleashing imagination and crafting magic through creative expression since 2015.
          </p>
          <p className="text-sm text-accent font-semibold mt-2">
            Create || Carve || Captivate
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
            <li><Link to="/events" className="text-muted-foreground hover:text-white transition-colors">Events</Link></li>
            <li><Link to="/domains" className="text-muted-foreground hover:text-white transition-colors">Domains</Link></li>
            <li><Link to="/members" className="text-muted-foreground hover:text-white transition-colors">Members</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/creators" className="text-muted-foreground hover:text-white transition-colors">Creators</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-4">Miscellaneous Links</h3>
          <ul className="space-y-3">
            <li><Link to="/gallery" className="text-muted-foreground hover:text-white transition-colors">Secret Gallery</Link></li>
            <li><Link to="/games/2048" className="text-muted-foreground hover:text-white transition-colors">2048 Game</Link></li>
            <li><Link to="/games/dino" className="text-muted-foreground hover:text-white transition-colors">Dino Game</Link></li>
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
              aria-label="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/creativityclub_vit/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/creativity-club-vit/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
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
