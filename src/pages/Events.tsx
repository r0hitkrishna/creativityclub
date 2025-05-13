
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const EventCard = ({ title, date, time, description, image, link, category }: EventCardProps) => {
  return (
    <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-0 right-0 bg-primary/80 text-white px-3 py-1 text-sm">
          {category}
        </div>
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center gap-4 text-sm mb-3 text-muted-foreground">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{time}</span>
          </div>
        </div>
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to={link}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Events = () => {
  const events = [
    {
      id: "creative-writing",
      title: "Creative Writing Workshop",
      date: "May 15, 2023",
      time: "6:00 PM",
      description: "Join us for a magical journey into the world of creative writing. Learn techniques to craft compelling stories.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      category: "Workshop",
      type: "upcoming"
    },
    {
      id: "art-exhibition",
      title: "Magical Art Exhibition",
      date: "June 5, 2023",
      time: "7:00 PM",
      description: "Explore a collection of enchanting artworks created by our talented club members.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
      category: "Exhibition",
      type: "upcoming"
    },
    {
      id: "photography-workshop",
      title: "Capturing Magic: Photography Workshop",
      date: "June 20, 2023",
      time: "3:00 PM",
      description: "Learn how to capture magical moments through the lens of your camera.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Workshop",
      type: "upcoming"
    },
    {
      id: "poetry-night",
      title: "Enchanted Poetry Night",
      date: "April 10, 2023",
      time: "7:00 PM",
      description: "An evening of mystical poetry readings and performances by club members.",
      image: "https://images.unsplash.com/photo-1470091688026-38b51162c8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "Performance",
      type: "past"
    },
    {
      id: "drawing-class",
      title: "Magical Creatures Drawing Class",
      date: "March 25, 2023",
      time: "4:00 PM",
      description: "Learn to draw fantastical creatures from your imagination.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      category: "Workshop",
      type: "past"
    },
    {
      id: "collaborative-project",
      title: "Collaborative Storytelling Project",
      date: "February 18, 2023",
      time: "6:30 PM",
      description: "Join forces with fellow creatives to craft an enchanting collective story.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      category: "Project",
      type: "past"
    },
  ];

  return (
    <>
      <HeroSection
        title="Club Events"
        subtitle="Discover our magical workshops, exhibitions, and creative gatherings."
      />
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                  .filter(event => event.type === "upcoming")
                  .map(event => (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      description={event.description}
                      image={event.image}
                      link={`/events/${event.id}`}
                      category={event.category}
                    />
                  ))
                }
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                  .filter(event => event.type === "past")
                  .map(event => (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      date={event.date}
                      time={event.time}
                      description={event.description}
                      image={event.image}
                      link={`/events/${event.id}`}
                      category={event.category}
                    />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-6">Host Your Own Event</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Are you a member with a creative idea for an event? We encourage our community to propose and lead their own magical gatherings.
          </p>
          <Button asChild className="bg-gradient-to-r from-magic-purple to-magic-teal hover:opacity-90 text-white px-6 py-2">
            <Link to="/contact">Submit Your Idea</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Events;
