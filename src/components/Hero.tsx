import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
}

const Hero = ({ onJoinClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" fill="currentColor" className="text-primary"/>
            </svg>
          </div>
          <div className="text-left">
            <h2 className="text-xl font-orbitron font-bold text-gradient-primary">BuyMyProvider</h2>
            <p className="text-xs text-muted-foreground">Powered by SpiderHat × TADOS</p>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
          Connecting <span className="text-gradient-primary">Trusted Buyers</span>
          <br />
          and <span className="text-gradient-primary">Verified Suppliers</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
          BuyMyProvider bridges LATAM buyers with verified Chinese suppliers.
          <br />
          <span className="text-foreground font-medium">Join now for early access.</span>
        </p>

        {/* CTA */}
        <Button 
          onClick={onJoinClick}
          size="lg"
          className="group relative bg-gradient-primary hover:opacity-90 text-lg px-10 py-7 rounded-xl font-raleway font-bold shadow-hover hover:shadow-lg transition-all duration-300"
        >
          Join the Waitlist
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>

        {/* Stats or trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">LATAM</div>
            <div className="text-sm text-muted-foreground">Trusted Buyers</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">China</div>
            <div className="text-sm text-muted-foreground">Verified Suppliers</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support & Verification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
