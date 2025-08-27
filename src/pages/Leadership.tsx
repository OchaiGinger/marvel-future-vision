import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import chukwuImg from "@/assets/team/chukwu-azubuike-ihunaya.webp";
import elenaImg from "@/assets/team/elena-martinez.webp";
import kaiImg from "@/assets/team/kai-patel.webp";
import aishaImg from "@/assets/team/aisha-stevens.webp";
import marcusImg from "@/assets/team/marcus-lee.webp";
import zaraImg from "@/assets/team/zara-ahmed.webp";
import jamesImg from "@/assets/team/james-rodriguez.webp";
import amaraImg from "@/assets/team/amara-okafor.webp";
import davidImg from "@/assets/team/david-chen.webp";
import sarahImg from "@/assets/team/sarah-williams.webp";
import michaelImg from "@/assets/team/michael-thompson.webp";
import fatimaImg from "@/assets/team/fatima-al-rashid.webp";
import oliverImg from "@/assets/team/oliver-kim.webp";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
            <span className="text-foreground">THE VISIONARIES</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BEHIND THE MAGIC
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto slide-in-up">
            Meet the extraordinary minds who transform architectural dreams into revolutionary realities.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">Leadership</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural text-center slide-in-up">
              <img
                src={chukwuImg}
                alt="Chukwu Azubuike Ihunaya"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-primary shadow-elegant"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Chukwu Azubuike Ihunaya</h3>
              <p className="text-primary font-semibold mb-4">Founder & Chief Visionary</p>
              <p className="text-muted-foreground">Revolutionary architect transforming African urban landscapes with sustainable innovation and cultural fusion.</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural text-center slide-in-up">
              <img
                src={elenaImg}
                alt="Elena Martinez"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-accent shadow-elegant"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Elena Adebayo</h3>
              <p className="text-accent font-semibold mb-4">Lead Design Director</p>
              <p className="text-muted-foreground">Pioneering sustainable architecture with award-winning biophilic designs that harmonize nature and technology.</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural text-center slide-in-up">
              <img
                src={kaiImg}
                alt="Kai Patel"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-primary shadow-elegant"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Kai Olumide</h3>
              <p className="text-primary font-semibold mb-4">Innovation Strategy Chief</p>
              <p className="text-muted-foreground">Computational design expert pushing architectural boundaries through parametric innovation and smart building integration.</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 text-center slide-in-up">
              <img
                src={aishaImg}
                alt="Aisha Stevens"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-border shadow-depth"
                loading="lazy"
              />
              <h4 className="font-bold mb-2">Aisha Adunni</h4>
              <p className="text-sm text-primary mb-2">Operations Excellence Director</p>
              <p className="text-xs text-muted-foreground">Project delivery mastery</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/10 text-center slide-in-up">
              <img
                src={marcusImg}
                alt="Marcus Taiwo"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-border shadow-depth"
                loading="lazy"
              />
              <h4 className="font-bold mb-2">Marcus Taiwo</h4>
              <p className="text-sm text-primary mb-2">Adaptive Architecture Specialist</p>
              <p className="text-xs text-muted-foreground">Responsive building expert</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 text-center slide-in-up">
              <img
                src={zaraImg}
                alt="Zara Ahmed"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-border shadow-depth"
                loading="lazy"
              />
              <h4 className="font-bold mb-2">Zara Folake</h4>
              <p className="text-sm text-primary mb-2">Technology Integration Lead</p>
              <p className="text-xs text-muted-foreground">Smart systems architect</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/10 text-center slide-in-up">
              <img
                src={jamesImg}
                alt="James Benjamin"
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-border shadow-depth"
                loading="lazy"
              />
              <h4 className="font-bold mb-2">James Benjamin</h4>
              <p className="text-sm text-primary mb-2">Structural Innovation Chief</p>
              <p className="text-xs text-muted-foreground">Engineering excellence</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">Our Complete</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { name: "Amara Okafor", role: "Smart Building Technology Lead", img: amaraImg },
              { name: "David Noah", role: "Lighting Design Virtuoso", img: davidImg },
              { name: "Sarah Williams", role: "Landscape Architecture Director", img: sarahImg },
              { name: "Michael Samuel", role: "Project Management Director", img: michaelImg },
              { name: "Fatima Al-Rashid", role: "Design Research Analyst", img: fatimaImg },
              { name: "Oliver Peter", role: "Digital Design Coordinator", img: oliverImg }
            ].map((member, index) => (
              <Card key={index} className="p-4 bg-card/30 backdrop-blur-sm border-primary/10 text-center slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-border shadow-depth"
                  loading="lazy"
                />
                <h4 className="font-bold mb-2 text-sm">{member.name}</h4>
                <p className="text-xs text-primary mb-1">{member.role}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="premium" size="lg">
              Join Our Team
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;