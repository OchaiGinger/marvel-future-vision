import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPinned, Clock, Globe, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 slide-in-up">
            <span className="text-foreground">LET'S CREATE</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SOMETHING EXTRAORDINARY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto slide-in-up">
            Ready to transform your vision into architectural reality? Connect with our team of visionary designers.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 gradient-marble">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-foreground">Start Your</span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Project Journey</span>
              </h2>
              
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 shadow-architectural">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name</label>
                      <Input placeholder="Your first name" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name</label>
                      <Input placeholder="Your last name" className="bg-background/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+234 xxx xxx xxxx" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Type</label>
                    <select className="w-full p-3 rounded-md border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Residential Architecture</option>
                      <option>Commercial Building</option>
                      <option>Urban Planning</option>
                      <option>Renovation & Restoration</option>
                      <option>Interior Design</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Project Budget</label>
                    <select className="w-full p-3 rounded-md border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>₦50M - ₦100M</option>
                      <option>₦100M - ₦500M</option>
                      <option>₦500M - ₦1B</option>
                      <option>₦1B+</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Tell us about your vision</label>
                    <Textarea 
                      placeholder="Describe your architectural dreams, project requirements, timeline, and any specific features you envision..."
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="premium" size="lg" className="w-full">
                    Launch My Project
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Connect</span>
                <span className="text-foreground"> With Us</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+234 803 123 4567</p>
                    <p className="text-muted-foreground">+234 701 987 6543</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">hello@marvelarchitecture.com</p>
                    <p className="text-muted-foreground">projects@marvelarchitecture.com</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPinned className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Our Studios</h4>
                    <p className="text-muted-foreground">Lagos: Victoria Island, Lagos State</p>
                    <p className="text-muted-foreground">Abuja: Central Business District</p>
                  </div>
                </Card>

                <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <h3 className="text-xl font-bold mb-4 text-foreground">Ready for a Consultation?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute consultation with our lead architect to discuss your vision and explore possibilities.
                </p>
                <Button variant="architectural" size="lg" className="w-full">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 gradient-stone">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 slide-in-up">
            <span className="text-foreground">Global</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Presence</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 text-center slide-in-up">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">15+ Countries</h4>
              <p className="text-sm text-muted-foreground">International project delivery</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-accent/20 text-center slide-in-up">
              <MapPinned className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-bold mb-2">4 Design Studios</h4>
              <p className="text-sm text-muted-foreground">Lagos, Abuja, Accra, Nairobi</p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20 text-center slide-in-up">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock project assistance</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;