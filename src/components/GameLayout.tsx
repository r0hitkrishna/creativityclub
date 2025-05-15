
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface GameLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  instructions?: string;
  controls?: {
    desktop?: React.ReactNode;
    mobile?: React.ReactNode;
  };
  mobileFriendly?: boolean;
}

const GameLayout = ({
  title,
  description,
  children,
  instructions,
  controls,
  mobileFriendly = true
}: GameLayoutProps) => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button and title */}
        <div className="flex flex-col items-center mb-6">
          <Link
            to="/"
            className="self-center inline-flex items-center px-4 py-2 text-sm rounded-full bg-white/5 hover:bg-white/10 transition-all text-muted-foreground hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-serif text-center">
            <span className="text-gradient-primary">{title}</span>
          </h1>
          
          <p className="text-muted-foreground mt-2 text-center max-w-lg">
            {description}
          </p>
        </div>
        
        {/* Device compatibility notice */}
        {!mobileFriendly && (
          <div className="md:hidden bg-yellow-500/20 border border-yellow-500/40 text-yellow-200 p-4 rounded-lg mb-6">
            <p className="text-sm text-center">
              This game works best on desktop devices with a keyboard. Mobile experience may be limited.
            </p>
          </div>
        )}
        
        {/* Game container */}
        <div className="bg-card/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg mb-6">
          {children}
        </div>
        
        {/* Game controls & instructions */}
        {(instructions || controls) && (
          <div className="mt-8 bg-card/20 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-serif mb-4 text-center">How to Play</h2>
            
            {instructions && (
              <div className="mb-6">
                <p className="text-muted-foreground">{instructions}</p>
              </div>
            )}
            
            {controls && (
              <div className="space-y-4">
                {controls.desktop && (
                  <div className="hidden md:block">
                    <h3 className="text-lg font-medium mb-2">Desktop Controls:</h3>
                    {controls.desktop}
                  </div>
                )}
                
                {controls.mobile && (
                  <div className="md:hidden">
                    <h3 className="text-lg font-medium mb-2">Mobile Controls:</h3>
                    {controls.mobile}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-center gap-4 mt-6">
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary">
                <Link to="/games/2048">Play 2048</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary">
                <Link to="/games/dino">Play Dino</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary">
                <Link to="/games/snake">Play Snake</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="sparkling absolute top-1/4 right-1/3 opacity-30"></div>
      <div className="sparkling absolute bottom-1/3 left-1/4 opacity-30"></div>
    </div>
  );
};

export default GameLayout;
