import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronDown, 
  Building2, 
  Leaf, 
  MapPin, 
  Home,
  Atom,
  Blocks,
  Palette,
  Glasses,
  Dna,
  Zap,
  Landmark,
  ArrowRight,
  Award,
  Globe,
  Users,
  Rocket,
  Phone,
  Mail,
  MapPinned
} from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const MarvelLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll to next slide when clicking CTA
  const scrollToSlide = (slideIndex: number) => {
    const element = document.getElementById(`slide-${slideIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSlide(slideIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll('[data-slide]');
      const current = Array.from(slides).findIndex(slide => {
        const rect = slide.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (current >= 0) setCurrentSlide(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* SLIDE 1: EXPLOSIVE HERO ENTRANCE */}
      <section 
        id="slide-0" 
        data-slide="0"
        className="min-h-screen relative flex items-center justify-center gradient-hero overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Floating Architectural Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rotate-45 float-animation"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-primary/20 rounded-full float-delayed"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-accent/40 float-delayed-2"></div>
          <div className="absolute bottom-20 right-20 w-16 h-32 bg-gradient-to-t from-primary/30 to-transparent float-animation"></div>
        </div>

        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-8 slide-in-up">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              REVOLUTIONIZE
            </span>
            <br />
            <span className="text-foreground">YOUR BUILT</span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent">
              ENVIRONMENT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto slide-in-up" style={{animationDelay: '0.2s'}}>
            Where visionary architecture meets tomorrow's technology. We don't just build spaces — we craft experiences that define generations.
          </p>
          
          <Button 
            variant="hero" 
            size="xl" 
            onClick={() => scrollToSlide(1)}
            className="slide-in-up"
            style={{animationDelay: '0.4s'}}
          >
            DISCOVER THE FUTURE OF DESIGN
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* SLIDE 2: VISION THAT INSPIRES */}
      <section id="slide-1" data-slide="1" className="min-h-screen flex items-center justify-center py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OUR VISION
            </span>
            <span className="text-foreground"> – ARCHITECTING TOMORROW</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-5xl mx-auto leading-relaxed slide-in-up">
            At Marvel, we don't just design buildings – we architect experiences. Our revolutionary approach transforms how people live, work, and connect within spaces. We're not traditional architects; we're spatial visionaries crafting tomorrow's built reality today.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center slide-in-up">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center slide-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Consultation</div>
            </div>
            <div className="text-center slide-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Global Awards</div>
            </div>
          </div>

          <Button 
            variant="architectural" 
            size="lg" 
            onClick={() => scrollToSlide(2)}
            className="slide-in-up"
          >
            Explore Our Services
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* SLIDE 3: REVOLUTIONARY DESIGN SERVICES */}
      <section id="slide-2" data-slide="2" className="min-h-screen flex items-center justify-center py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center slide-in-up">
            <span className="text-foreground">Core Offerings That</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Spaces
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural slide-in-left">
              <Building2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Smart Architecture Solutions</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Intelligent designs using IoT integration, adaptive lighting systems, and automated climate control that responds to human behavior and environmental conditions.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural slide-in-right">
              <Leaf className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Sustainable Design Innovation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Eco-conscious architecture with solar integration, rainwater harvesting systems, and biophilic elements that harmonize with nature.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural slide-in-left" style={{animationDelay: '0.2s'}}>
              <MapPin className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Urban Planning Mastery</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Complete communities designed for optimal commerce, culture, and human connection, creating spaces that inspire and thrive.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural slide-in-right" style={{animationDelay: '0.2s'}}>
              <Home className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Luxury Residential Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bespoke tech-enhanced homes with timeless aesthetic appeal, where every detail serves both beauty and functional excellence.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="premium" 
              size="lg" 
              onClick={() => scrollToSlide(3)}
              className="slide-in-up"
            >
              Discover Advanced Solutions
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 4: ADVANCED DESIGN MASTERY */}
      <section id="slide-3" data-slide="3" className="min-h-screen flex items-center justify-center py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                CUTTING-EDGE
              </span>
              <br />
              <span className="text-foreground">ARCHITECTURAL INNOVATION</span>
            </h2>
            <p className="text-xl text-muted-foreground slide-in-up" style={{animationDelay: '0.1s'}}>
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

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-depth slide-in-left" style={{animationDelay: '0.2s'}}>
              <Palette className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Experiential Space Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Multi-sensory interior environments that engage all human senses, creating spaces that evoke emotion and inspire action.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-depth slide-in-right" style={{animationDelay: '0.2s'}}>
              <Glasses className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Mixed-Reality Integration</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                AR/VR environments that respond dynamically to users, blending physical and digital realities for unprecedented experiences.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSlide(4)}
              className="slide-in-up"
            >
              Enter The Innovation Lab
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 5: INNOVATION DESIGN LABORATORY */}
      <section id="slide-4" data-slide="4" className="min-h-screen flex items-center justify-center py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">WHERE</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                IMPOSSIBLE SPACES
              </span>
              <br />
              <span className="text-foreground">BECOME POSSIBLE</span>
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

            <Card className="p-8 bg-card/30 backdrop-blur-sm border-accent/30 shadow-glow slide-in-up" style={{animationDelay: '0.1s'}}>
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Adaptive Structures</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Weather-aware, responsive buildings that transform their configuration based on environmental conditions and usage patterns.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/30 shadow-glow slide-in-up" style={{animationDelay: '0.2s'}}>
              <Landmark className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Cultural Heritage Fusion</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Designs that seamlessly blend traditional cultural elements with cutting-edge functionality, honoring the past while embracing the future.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="architectural" 
              size="lg" 
              onClick={() => scrollToSlide(5)}
              className="slide-in-up"
            >
              View Success Stories
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 6: SUCCESS STORIES & PORTFOLIO HIGHLIGHTS */}
      <section id="slide-5" data-slide="5" className="min-h-screen flex items-center justify-center py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">OUR CLIENTS DON'T JUST</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BUILD – THEY INSPIRE
              </span>
              <br />
              <span className="text-foreground">GENERATIONS</span>
            </h2>
          </div>

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
              <h3 className="text-2xl font-bold mb-4 text-accent">Heritage Cultural Center (Abuja)</h3>
              <p className="text-muted-foreground mb-4">50,000 sq ft traditional-modern fusion, celebrating Nigerian heritage while embracing contemporary functionality.</p>
              <div className="flex items-center text-primary">
                <Landmark className="w-5 h-5 mr-2" />
                <span>Cultural Heritage • Architecture Excellence</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural slide-in-left" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold mb-4 text-primary">GreenVille Eco-Community (Enugu)</h3>
              <p className="text-muted-foreground mb-4">200-unit sustainable community, 100% solar powered, sold out in 6 months, redefining eco-living standards.</p>
              <div className="flex items-center text-accent">
                <Leaf className="w-5 h-5 mr-2" />
                <span>100% Renewable • Community Excellence</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural slide-in-right" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold mb-4 text-accent">Infinity Luxury Resort (Calabar)</h3>
              <p className="text-muted-foreground mb-4">300% ROI achieved through biomimetic design, creating an immersive nature-integrated hospitality experience.</p>
              <div className="flex items-center text-primary">
                <Building2 className="w-5 h-5 mr-2" />
                <span>Biomimetic Design • Luxury Excellence</span>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center slide-in-up">
              <div className="text-4xl font-black text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Value Created</div>
            </div>
            <div className="text-center slide-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl font-black text-accent mb-2">200%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-black text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Global Awards</div>
            </div>
            <div className="text-center slide-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl font-black text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="premium" 
              size="lg" 
              onClick={() => scrollToSlide(6)}
              className="slide-in-up"
            >
              Meet Our Visionary Team
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 7: VISIONARY LEADERSHIP TEAM */}
      <section id="slide-6" data-slide="6" className="min-h-screen flex items-center justify-center py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">MEET THE</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ARCHITECTS OF TOMORROW
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural text-center slide-in-up">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Chukwu Azubuike Ihunaya</h3>
              <p className="text-primary mb-4 font-semibold">Chief Design Officer & Founder</p>
              <p className="text-muted-foreground">Visionary architect with 15+ years revolutionizing spatial design. Pioneer in biophilic architecture and smart building integration.</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-architectural text-center slide-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Leaf className="w-12 h-12 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Elena Martinez</h3>
              <p className="text-accent mb-4 font-semibold">Sustainable Design Director</p>
              <p className="text-muted-foreground">Global leader in eco-architecture, transforming the industry with net-positive energy buildings and regenerative design principles.</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural text-center slide-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Atom className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Kai Patel</h3>
              <p className="text-primary mb-4 font-semibold">Parametric Design Specialist</p>
              <p className="text-muted-foreground">Mathematical genius creating impossible geometries. Leading expert in computational design and AI-assisted architectural generation.</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="architectural" 
              size="lg" 
              onClick={() => scrollToSlide(7)}
              className="slide-in-up"
            >
              Meet Senior Design Team
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 8 & 9: SENIOR & EXTENDED DESIGN TEAMS - Combined for better UX */}
      <section id="slide-7" data-slide="7" className="min-h-screen flex items-center justify-center py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                COMPLETE INNOVATION
              </span>
              <br />
              <span className="text-foreground">ECOSYSTEM</span>
            </h2>
          </div>

          {/* Senior Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary slide-in-up">Senior Design Team</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center slide-in-left">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Aisha Stevens</h4>
                <p className="text-sm text-accent mb-2">Urban Planning Strategist</p>
                <p className="text-xs text-muted-foreground">Smart city pioneer</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 text-center slide-in-left" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2">Marcus Lee</h4>
                <p className="text-sm text-primary mb-2">Adaptive Architecture Specialist</p>
                <p className="text-xs text-muted-foreground">Responsive building expert</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center slide-in-right" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Zara Ahmed</h4>
                <p className="text-sm text-accent mb-2">Interior Experience Director</p>
                <p className="text-xs text-muted-foreground">Sensory design master</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 text-center slide-in-right" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2">James Rodriguez</h4>
                <p className="text-sm text-primary mb-2">Structural Innovation Chief</p>
                <p className="text-xs text-muted-foreground">Engineering excellence</p>
              </Card>
            </div>
          </div>

          {/* Extended Team */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-accent slide-in-up">Extended Creative Team</h3>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { name: "Amara Okafor", role: "Smart Building Technology Lead", icon: Blocks },
                { name: "David Chen", role: "Lighting Design Virtuoso", icon: Zap },
                { name: "Sarah Williams", role: "Landscape Architecture Director", icon: Leaf },
                { name: "Michael Thompson", role: "Project Management Director", icon: Users },
                { name: "Fatima Al-Rashid", role: "Design Research Analyst", icon: Atom },
                { name: "Oliver Kim", role: "Digital Design Coordinator", icon: Glasses }
              ].map((member, index) => (
                <Card key={index} className="p-4 bg-card/30 backdrop-blur-sm border-primary/10 text-center slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <member.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h5 className="font-semibold text-sm mb-1">{member.name}</h5>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="premium" 
              size="lg" 
              onClick={() => scrollToSlide(8)}
              className="slide-in-up"
            >
              See Global Influence
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 10: GLOBAL DESIGN INFLUENCE */}
      <section id="slide-8" data-slide="8" className="min-h-screen flex items-center justify-center py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">FROM</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> NEW YORK </span>
              <span className="text-foreground">TO</span>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> TOKYO</span>
              <br />
              <span className="text-foreground">FROM</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> DUBAI </span>
              <span className="text-foreground">TO</span>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> ABUJA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/30 shadow-glow slide-in-left">
              <Globe className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">International Landmarks</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Iconic projects across 6 continents, each setting new standards for architectural excellence and cultural integration.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border-accent/30 shadow-glow slide-in-up">
              <Building2 className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Smart Cities Portfolio</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Master-planned smart cities in Singapore, eco-resorts in Brazil, and revolutionary urban developments across Africa.
              </p>
            </Card>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/30 shadow-glow slide-in-right">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Global Partnerships</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Strategic collaborations with UN-Habitat, African Development Bank, and leading real estate firms worldwide.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-8 slide-in-up">
              Marvel isn't just an architecture firm — we're a global design movement
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSlide(9)}
              className="slide-in-up"
            >
              See Future Roadmap
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 11: FUTURE DESIGN ROADMAP */}
      <section id="slide-9" data-slide="9" className="min-h-screen flex items-center justify-center py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                THE FUTURE IS NOW
              </span>
              <br />
              <span className="text-foreground">2025 ARCHITECTURAL BREAKTHROUGHS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-depth slide-in-up">
              <Dna className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Living Building Systems</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Self-healing concrete that repairs micro-cracks autonomously and energy-positive facades that generate more power than they consume.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-primary font-semibold">Coming 2025</p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 shadow-depth slide-in-up" style={{animationDelay: '0.1s'}}>
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Emotionally Intelligent Spaces</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Mood-responsive lighting and AI-optimized comfort systems that adapt to occupants' emotional and physiological states in real-time.
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-accent font-semibold">Beta Testing 2025</p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-depth slide-in-up" style={{animationDelay: '0.2s'}}>
              <Rocket className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Space Architecture</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Mars habitat research & development program, pioneering zero-gravity construction techniques for the next frontier.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-primary font-semibold">R&D Phase</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-bold text-foreground mb-8 slide-in-up">
              The future is now. Don't get left behind.
            </p>
            <Button 
              variant="architectural" 
              size="lg" 
              onClick={() => scrollToSlide(10)}
              className="slide-in-up"
            >
              Join The Revolution
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* SLIDE 12: PARTNERSHIP INVITATION */}
      <section id="slide-10" data-slide="10" className="min-h-screen flex items-center justify-center py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 slide-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              JOIN THE DESIGN
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              REVOLUTION
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-foreground mb-8 slide-in-up" style={{animationDelay: '0.1s'}}>
            DON'T JUST BUILD, <span className="text-primary font-bold">INSPIRE</span>
          </p>

          <p className="text-xl text-muted-foreground mb-16 max-w-4xl mx-auto slide-in-up" style={{animationDelay: '0.2s'}}>
            Visionary developers, governments, corporations, and homeowners choose Marvel to define generations. 
            <br />
            <span className="text-primary font-semibold">Together, we design tomorrow's world today.</span>
          </p>

          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { title: "Real Estate Developers", desc: "Premium ROI" },
              { title: "Government Partners", desc: "Smart Cities" },
              { title: "Corporate Clients", desc: "Iconic Headquarters" },
              { title: "Luxury Homeowners", desc: "Bespoke Residences" },
              { title: "Hospitality Groups", desc: "Destination Properties" }
            ].map((partner, index) => (
              <Card key={index} className="p-6 bg-card/40 backdrop-blur-sm border-primary/20 text-center slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h4 className="font-bold mb-2 text-primary">{partner.title}</h4>
                <p className="text-sm text-muted-foreground">{partner.desc}</p>
              </Card>
            ))}
          </div>

          <Button 
            variant="hero" 
            size="xl" 
            onClick={() => scrollToSlide(11)}
            className="slide-in-up"
          >
            START YOUR TRANSFORMATION
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* SLIDE 13: URGENT CONTACT & CONVERSION */}
      <section id="slide-11" data-slide="11" className="min-h-screen flex items-center justify-center py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 slide-in-up">
              <span className="text-foreground">LET'S</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> DESIGN TOMORROW</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 slide-in-up">
              Great architecture doesn't wait. Every day you delay is another opportunity competitors take.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-primary/30 shadow-glow slide-in-left">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPinned className="w-6 h-6 text-accent mr-4" />
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-muted-foreground">57A Old Enugu Road, Abakaliki, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-accent mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">08085047194</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-accent mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@marvelarchitecture.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-accent mr-4" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="text-muted-foreground">www.marvelarchitecture.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="font-semibold text-primary mb-2">Global Offices</p>
                <p className="text-muted-foreground">Nigeria • London • Dubai • New York</p>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-accent/30 shadow-glow slide-in-right">
              <h3 className="text-2xl font-bold mb-6 text-accent">Start Your Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">1</div>
                  <div>
                    <p className="font-semibold">Free Consultation</p>
                    <p className="text-sm text-muted-foreground">Discover your project's potential</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-accent/10 rounded-lg">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold mr-4">2</div>
                  <div>
                    <p className="font-semibold">Site Analysis</p>
                    <p className="text-sm text-muted-foreground">Comprehensive opportunity assessment</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">3</div>
                  <div>
                    <p className="font-semibold">Concept Presentation</p>
                    <p className="text-sm text-muted-foreground">Visionary design reveal</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-accent/10 rounded-lg">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold mr-4">4</div>
                  <div>
                    <p className="font-semibold">Investment Proposal</p>
                    <p className="text-sm text-muted-foreground">ROI-focused project roadmap</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground mb-8 slide-in-up">
              <span className="text-primary">Extraordinary spaces await</span> — let's build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="slide-in-up">
                Schedule Free Consultation
                <Phone className="ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="slide-in-up" style={{animationDelay: '0.1s'}}>
                View Portfolio
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {Array.from({ length: 12 }, (_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === i 
                ? 'bg-primary shadow-glow scale-125' 
                : 'bg-primary/30 hover:bg-primary/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MarvelLanding;