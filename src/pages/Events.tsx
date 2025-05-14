
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

interface PreviousEventProps {
  name: string;
  date: string;
  venue: string;
  eventType: string;
  description: string;
  image: string;
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

const PreviousEventCard = ({ name, date, venue, eventType, description, image }: PreviousEventProps) => {
  return (
    <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-0 right-0 bg-primary/80 text-white px-3 py-1 text-sm">
          {eventType}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif mb-2">{name}</h3>
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
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{venue}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const VerticalEventSlider = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Creative Writing Workshop",
      date: "June 15, 2023",
      time: "3:00 PM",
      description: "Join us for a workshop on creative writing techniques and storytelling.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
    },
    {
      id: 2,
      title: "Digital Art Masterclass",
      date: "June 22, 2023",
      time: "4:30 PM",
      description: "Learn digital art techniques from professional artists.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Photography Basics",
      date: "July 5, 2023",
      time: "2:00 PM",
      description: "Learn the fundamentals of photography and composition.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    }
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        direction: "vertical"
      }}
      orientation="vertical"
      className="w-full h-[500px]"
    >
      <CarouselContent className="h-full">
        {upcomingEvents.map((event, index) => (
          <CarouselItem key={event.id} className="h-[500px]">
            <div className="p-2 h-full">
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 h-full flex flex-col">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </AspectRatio>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm mb-3 text-muted-foreground">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-primary">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link to={`#`}>Register Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
};

const Events = () => {
  const previousEvents = [
    {
      name: "TWIST A TALE",
      date: "March 7",
      venue: "Ambedkar Auditorium",
      eventType: "Workshop",
      description: "Dive into the world of imagination with us at our \"Twist a Tale\" event! Let's paint stories with words and create memories that last a lifetime. Join us for an evening of magic and wonder!",
      image: "https://i.postimg.cc/Z58cYrXh/Whats-App-Image-2025-05-14-at-5-05-35-PM-2.jpg"
    },
    {
      name: "FRIENDSHIP DAY",
      date: "4th August, 2024",
      venue: "Opp SMV",
      eventType: "Stall",
      description: "Get ready to celebrate the best thing in life—friendship!💖 Join us for a day filled with laughter, unforgettable memories, and great fun! We've got refreshing activities lined up like twister and heads up, face painting😶‍🌫 and a Photo Booth📸 to capture your memories and a whole lot of joy. 🥳💫",
      image: "https://i.postimg.cc/1zMrwy9C/Whats-App-Image-2025-05-14-at-5-05-35-PM-1.jpg"
    },
    {
      name: "CID",
      date: "Aug 11",
      venue: "Kamraj",
      eventType: "Competition",
      description: "🕵‍♀🌌 A chilling data breach has unleashed a wave of darkness. The deeper you probe, the more unsettling truths you'll uncover. Are you prepared to confront the darkness and reveal what lies hidden? 🕵‍♀💼 The digital realm is cloaked in darkness, and the secrets are buried deep🤐🌃. Prepare for an immersive journey through a web of intrigue and deception where every moment is crucial. Follow the trail of cryptic hints and uncover the truth lurking in the shadows. 🧐🕵‍♀",
      image: "https://i.postimg.cc/QMjqFFrK/Whats-App-Image-2025-05-14-at-5-05-35-PM.jpg"
    },
    {
      name: "CASA",
      date: "Aug 13",
      venue: "MB210",
      eventType: "Workshop",
      description: "From the shadows of substance abuse to the light of new possibilities. 🌅 Join us at Hopeful Horizons, where resilience meets hope, as we stand together, overcoming addiction and forging paths to brighter futures.✨",
      image: "https://i.postimg.cc/yYSjtqPx/Whats-App-Image-2025-05-14-at-5-05-34-PM-1.jpg"
    },
    {
      name: "DESIGN ALCHEMY",
      date: "Oct 4",
      venue: "Kamraj Auditorium",
      eventType: "Workshop",
      description: "From concept to clickable! 🎯 Step into our hands-on workshop, 'Design Alchemy: Figma Fundamentals', where your ideas come to life. Ready to unleash your creativity and craft stunning designs?",
      image: "https://i.postimg.cc/13hBZWCH/Whats-App-Image-2025-05-14-at-5-05-34-PM.jpg"
    },
    {
      name: "SDG FUTURE FORWARD",
      date: "Oct 8",
      venue: "SMV 209",
      eventType: "Workshop",
      description: "Step into a world where bold ideas meet green innovation! Join us for 'Future Forward: Towards a Greener Tomorrow', as we embark on an exploration of the Sustainable Development Goals under visionary guidance.",
      image: "https://i.postimg.cc/Y9n8KMZG/Whats-App-Image-2025-05-14-at-5-05-33-PM-2.jpg"
    },
    {
      name: "LIGHT THE WAY",
      date: "Oct 9",
      venue: "Greenos",
      eventType: "Stall",
      description: "Get ready to illuminate your mind!🌟 Join us in celebrating mental health with creativity and connection!🙌✨ Explore our fun stalls filled with surprises and artistic delights.🎪❤ Let's shine a light on mental well-being together. 💫",
      image: "https://i.postimg.cc/268TKVcN/Whats-App-Image-2025-05-14-at-5-05-33-PM-1.jpg"
    },
    {
      name: "MISSION MILKYWAY",
      date: "Oct 10",
      venue: "MB 210",
      eventType: "Competition",
      description: "Join us for an out-of-this-world☄event this space week and blow some steam off at Mission Milkyway 🚀 Gather up your crew and prepare for some fun yet competitive games and challenges, but don't float out too far, make sure to make it back to Earth in time for CATs 😉 #SpaceWeek #VITV",
      image: "https://i.postimg.cc/G3fzX3v6/Whats-App-Image-2025-05-14-at-5-05-33-PM.jpg"
    },
    {
      name: "PILLOW FIGHT",
      date: "21-22 FEB",
      venue: "Woodys",
      eventType: "Competition",
      description: "luff flies, cheers ignite—who will stand tall in this feathery fight? Not all battles need armor and swords—some just need the perfect swing. 🛡⚔ Brace yourself for a showdown where quick reflexes and fearless strikes will decide the last one standing. 🫣🪶",
      image: "https://i.postimg.cc/5yXgfDWP/Whats-App-Image-2025-05-14-at-5-05-29-PM.jpg"
    },
    {
      name: "SHENANIGANS",
      date: "8 MARCH",
      venue: "Opp SMV",
      eventType: "Stall",
      description: "Glitz, glam, and a little spree, SHE-NANIGANS is the place to be! 💃🏻✨ A day to celebrate strength, resilience, and the unstoppable spirit of women! From laughter-filled moments to inspiring conversations, let's come together to uplift, empower, and embrace the magic we bring to the world. 🩷🎀 Whether you're here to express, explore, or simply enjoy the vibes, this is your time to shine! 🌸✨",
      image: "https://i.postimg.cc/hGn2VCVj/Whats-App-Image-2025-05-14-at-5-05-26-PM.jpg"
    }
  ];

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
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-8 text-center">
                  Featured Upcoming Events
                </h2>
                <VerticalEventSlider />
              </div>
              
              <div className="mt-16">
                <h3 className="text-2xl font-serif font-medium mb-8 text-center">
                  More Upcoming Events
                </h3>
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
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-8 text-center">
                Previous Events
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {previousEvents.map((event, index) => (
                  <PreviousEventCard
                    key={index}
                    name={event.name}
                    date={event.date}
                    venue={event.venue}
                    eventType={event.eventType}
                    description={event.description}
                    image={event.image}
                  />
                ))}
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
