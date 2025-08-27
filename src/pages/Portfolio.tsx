import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, ArrowRight, Globe, MapPin } from "lucide-react";
import Header from "@/components/Header";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OUR PORTFOLIO
            </span>
            <br />
            <span className="text-foreground">INSPIRING GENERATIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto slide-in-up">
            Discover our revolutionary projects that redefine architectural boundaries and create lasting impact.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural slide-in-left">
              <h3 className="text-2xl font-bold mb-4 text-primary">Azure Corporate Tower (Lagos)</h3>
              <p className="text-muted-foreground mb-4">LEED Platinum certified, +35% property value increase, setting new standards for sustainable commercial architecture in West Africa.</p>
              <div className="flex items-center text-accent">
                <Award className="w-5 h-5 mr-2" />
                <span>LEED Platinum • Green Building Award</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural slide-in-right">
              <h3 className="text-2xl font-bold mb-4 text-accent">Marina Bay Residential Complex (Abuja)</h3>
              <p className="text-muted-foreground mb-4">30% faster construction timeline with revolutionary modular techniques. 97% resident satisfaction rating in first year.</p>
              <div className="flex items-center text-primary">
                <Globe className="w-5 h-5 mr-2" />
                <span>International Design Excellence Award</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural slide-in-left">
              <h3 className="text-2xl font-bold mb-4 text-primary">Tech Innovation Campus (Port Harcourt)</h3>
              <p className="text-muted-foreground mb-4">Africa's first net-positive energy campus. Biophilic design increases productivity by 23% according to occupancy studies.</p>
              <div className="flex items-center text-accent">
                <Award className="w-5 h-5 mr-2" />
                <span>Sustainable Innovation Award</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural slide-in-right">
              <h3 className="text-2xl font-bold mb-4 text-accent">Heritage Cultural Center (Kano)</h3>
              <p className="text-muted-foreground mb-4">Seamless fusion of traditional Hausa architecture with smart building technology. UNESCO recognition for cultural preservation.</p>
              <div className="flex items-center text-primary">
                <Globe className="w-5 h-5 mr-2" />
                <span>UNESCO Heritage Innovation Award</span>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="premium" size="lg">
              View All Projects
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center slide-in-up">
            <span className="text-foreground">Project</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Highlights</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 text-center slide-in-up">
              <div className="text-4xl font-black text-primary mb-4">500+</div>
              <h4 className="font-bold mb-2">Projects Completed</h4>
              <p className="text-sm text-muted-foreground">Across residential, commercial, and institutional sectors</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20 text-center slide-in-up">
              <div className="text-4xl font-black text-accent mb-4">15+</div>
              <h4 className="font-bold mb-2">Countries</h4>
              <p className="text-sm text-muted-foreground">Global reach with local expertise</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 text-center slide-in-up">
              <div className="text-4xl font-black text-primary mb-4">50+</div>
              <h4 className="font-bold mb-2">Awards Won</h4>
              <p className="text-sm text-muted-foreground">Recognition for design excellence and innovation</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;