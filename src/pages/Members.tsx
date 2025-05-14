
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Instagram, Linkedin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MemberData {
  name: string;
  role: string;
  instagram: string;
  linkedin?: string;
  image: string;
}

const MemberCard = ({ member }: { member: MemberData }) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden h-full">
      <div className="p-1 bg-gradient-to-r from-magic-purple via-magic-teal to-magic-gold rounded-t-xl">
        <AspectRatio ratio={1} className="bg-muted/20">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center rounded-t-lg"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=600&auto=format&fit=crop";
            }}
            style={{ objectFit: "cover", backgroundBlendMode: "overlay", backgroundColor: "rgba(38, 30, 58, 0.7)" }}
          />
        </AspectRatio>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif mb-1">{member.name}</h3>
        <p className="text-accent mb-4">{member.role}</p>
        
        <div className="flex gap-3">
          <a
            href={member.instagram}
            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
            aria-label={`${member.name}'s Instagram`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" />
          </a>
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label={`${member.name}'s LinkedIn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const BoardCarousel = ({ year, members }: { year: string, members: MemberData[] }) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-8 text-center">
        Board of {year}
      </h2>
      
      <Carousel
        className="max-w-6xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {members.map((member, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 pl-4">
              <MemberCard member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="relative static mx-2" />
          <CarouselNext className="relative static mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

const Members = () => {
  const boardMembers2025: MemberData[] = [
    {
      name: "Palak Goyal",
      role: "President",
      instagram: "https://www.instagram.com/palak__goyal2404/",
      linkedin: "https://www.linkedin.com/in/palak-goyal-362309222/",
      image: "https://i.ibb.co/d4jwYDwc/palak.jpg"
    },
    {
      name: "Shriya Garg",
      role: "Vice President",
      instagram: "https://www.instagram.com/_shriyagarg_26/",
      linkedin: "https://www.linkedin.com/in/shriya-garg-sg26/",
      image: "https://i.ibb.co/VWsvQH95/shriya.jpg"
    },
    {
      name: "Veda Chandergi",
      role: "General Secretary",
      instagram: "https://www.instagram.com/vedach05/",
      linkedin: "https://www.linkedin.com/in/veda-chandergi-5b9611215/",
      image: "https://i.ibb.co/NnxtZ3wZ/veda.jpg"
    },
    {
      name: "Anushka Chandergi",
      role: "Design Head",
      instagram: "https://www.instagram.com/anushkavc0302/",
      linkedin: "https://www.linkedin.com/in/anushka-chandergi-535925213/",
      image: "https://i.ibb.co/TMMRhK1g/anushka.jpg"
    },
    {
      name: "Haritha Nivrithi",
      role: "Editorial Head",
      instagram: "https://www.instagram.com/haritha_nivrithi/",
      linkedin: "https://www.linkedin.com/in/haritha-nivrithi-992267227/",
      image: "https://i.ibb.co/Kx6FBCPK/haritha.jpg"
    },
    {
      name: "Surbhi Raj",
      role: "Events Head",
      instagram: "https://www.instagram.com/surbhiraj979/",
      linkedin: "https://www.linkedin.com/in/surbhi-raj-545018225/",
      image: "https://i.ibb.co/bggdWw2C/surbhi.jpg"
    },
    {
      name: "Pawan Kumar Sahu",
      role: "Operations Head",
      instagram: "https://www.instagram.com/pawan_kumar_sahu_s19/",
      linkedin: "https://www.linkedin.com/in/pawan-kumar-sahu-541401225/",
      image: "https://i.ibb.co/4R9BHCp5/pawan.jpg"
    },
    {
      name: "Shubh Kumar",
      role: "Logistics Head",
      instagram: "https://www.instagram.com/shubhkumar763/",
      linkedin: "https://www.linkedin.com/in/shubh-kumar-24359122a/",
      image: "https://i.ibb.co/R40vWmfK/shubh.jpg"
    },
    {
      name: "Parth Khandelwal",
      role: "Finance Head",
      instagram: "https://www.instagram.com/parthkhandelwal78/",
      linkedin: "https://www.linkedin.com/in/parth-khandelwal-pk78/",
      image: "https://i.ibb.co/N29xv9g/parth.jpg"
    },
    {
      name: "Kashish Agarwal",
      role: "PR & Outreach Head",
      instagram: "https://www.instagram.com/ag_kashish02/",
      linkedin: "https://www.linkedin.com/in/kashish-agarwal-ka02/",
      image: "https://i.ibb.co/gZ0szHsD/kashish.jpg"
    }
  ];

  const boardMembers2024: MemberData[] = [
    {
      name: "Nivid Saxena",
      role: "President",
      instagram: "http://instagram.com/beast_boyy_2310/",
      linkedin: "https://www.linkedin.com/in/nividsaxena/",
      image: "https://i.postimg.cc/pLqGXrRK/nivid.jpg"
    },
    {
      name: "Love Soni",
      role: "Vice President",
      instagram: "https://www.instagram.com/lovesoni_12/",
      linkedin: "https://www.linkedin.com/in/love-soni-69511321a/",
      image: "https://i.postimg.cc/wxmGc9Qd/love.jpg"
    },
    {
      name: "Tanisha Chetani",
      role: "General Secretary",
      instagram: "https://www.instagram.com/_tanisha_2803/",
      linkedin: "https://www.linkedin.com/in/tanisha-chetani/",
      image: "https://i.postimg.cc/Zn8jkKwB/tanisha.jpg"
    },
    {
      name: "Rohit Krishna",
      role: "Design Head",
      instagram: "https://www.instagram.com/r0hitkrishna/",
      linkedin: "https://www.linkedin.com/in/rohit-krishna/",
      image: "https://i.postimg.cc/Bvbh83nk/rohit-png.jpg"
    },
    {
      name: "Sruti Samantaray",
      role: "Editorial Head",
      instagram: "https://www.instagram.com/sruti.samantaray/",
      linkedin: "https://www.linkedin.com/in/sruti-samantaray/",
      image: "https://i.postimg.cc/W3JXn7r7/shruti.jpg"
    },
    {
      name: "Anshika Babel",
      role: "Creative Head",
      instagram: "https://www.instagram.com/anshikababel/",
      linkedin: "https://www.linkedin.com/in/anshika-babel/",
      image: "https://i.postimg.cc/7Zxtk08x/anshika.jpg"
    },
    {
      name: "Shravya Jain",
      role: "Events Head",
      instagram: "https://www.instagram.com/shravya.j_/",
      linkedin: "https://www.linkedin.com/in/shravya-jain/",
      image: "https://i.postimg.cc/rpHfxHdm/shravya.jpg",
    },
    {
      name: "Shubhi Nair",
      role: "Operations Head",
      instagram: "https://www.instagram.com/shubhi_nair/",
      linkedin: "https://www.linkedin.com/in/shubhi-nair/",
      image: "https://i.postimg.cc/x8DgFb3V/shubhi.jpg"
    },
    {
      name: "Tanishka Kothavale",
      role: "Logistics Head",
      instagram: "https://www.instagram.com/tanishkaa_2601/",
      linkedin: "https://www.linkedin.com/in/tanishka-kothavale/",
      image: "https://i.postimg.cc/qBy16jpJ/tanishka.jpg"
    },
    {
      name: "Abhinandan Agarwal",
      role: "Finance Head",
      instagram: "https://www.instagram.com/abhhinandann/",
      linkedin: "https://www.linkedin.com/in/abhinandan-agarwal/",
      image: "https://i.postimg.cc/YqNDZ8Pn/abhi.jpg"
    },
    {
      name: "Adarsh Anand",
      role: "PR & Outreach Head",
      instagram: "https://www.instagram.com/adarsh__185/",
      linkedin: "https://www.linkedin.com/in/adarsh-anand/",
      image: "https://i.postimg.cc/GhnSX6XT/adarsh.jpg"
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
          <BoardCarousel year="2025" members={boardMembers2025} />
          <div className="magical-divider my-16"></div>
          <BoardCarousel year="2024" members={boardMembers2024} />
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
