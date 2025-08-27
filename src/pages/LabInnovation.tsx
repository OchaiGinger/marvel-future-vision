import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Atom, 
  Blocks, 
  Palette, 
  Glasses, 
  Dna, 
  Zap, 
  Landmark, 
  ArrowRight 
} from "lucide-react";
import Header from "@/components/Header";

const LabInnovation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
            <span className="text-foreground">WHERE</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IMPOSSIBLE SPACES
            </span>
            <br />
            <span className="text-foreground">BECOME POSSIBLE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto slide-in-up">
            Our Innovation Lab pushes the boundaries of architectural design, creating revolutionary solutions for tomorrow's built environment.
          </p>
        </div>
      </section>

      {/* Advanced Design Mastery */}
      <section className="py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 slide-in-up">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                CUTTING-EDGE
              </span>
              <br />
              <span className="text-foreground">ARCHITECTURAL INNOVATION</span>
            </h2>
            <p className="text-xl text-muted-foreground slide-in-up">
              Where mathematics meets beauty in perfect harmony
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-depth slide-in-left">
              <Atom className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Parametric Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Computational geometries that defy traditional structural limitations, creating impossible forms that are both beautiful and structurally sound.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-depth slide-in-right">
              <Blocks className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Modular Construction</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Revolutionary building methods that reduce construction time by 60% while maintaining uncompromising excellence in every detail.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-depth slide-in-left">
              <Palette className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Experiential Space Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Multi-sensory interior environments that engage all human senses, creating spaces that evoke emotion and inspire action.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-depth slide-in-right">
              <Glasses className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mixed-Reality Integration</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                AR/VR environments that respond dynamically to users, blending physical and digital realities for unprecedented experiences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Lab Features */}
      <section className="py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">OUR</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> INNOVATION LAB</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/30 shadow-glow slide-in-up">
              <Dna className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Biophilic Integration</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Living architecture that purifies air, regulates temperature, and creates symbiotic relationships between built and natural environments.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border-accent/30 shadow-glow slide-in-up">
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Adaptive Structures</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Weather-aware, responsive buildings that transform their configuration based on environmental conditions and usage patterns.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/30 shadow-glow slide-in-up">
              <Landmark className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Cultural Heritage Fusion</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Designs that seamlessly blend traditional cultural elements with cutting-edge functionality, honoring the past while embracing the future.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="architectural" size="lg" className="slide-in-up">
              Explore Our Research
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabInnovation;