import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import LanguageToggle from "@/components/LanguageToggle";

interface HeroProps {
  onJoinClick: () => void;
}

const Hero = ({ onJoinClick }: HeroProps) => {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <div className="absolute right-0 -top-10 hidden md:flex">
          <LanguageToggle />
        </div>
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" fill="currentColor" className="text-primary"/>
            </svg>
          </div>
          <div className="text-left">
            <h2 className="text-xl font-bold text-gradient-primary">{t.common.brand}</h2>
            <p className="text-xs text-muted-foreground">
              {t.common.poweredByPrefix}{" "}
              <span className="text-primary">{t.common.poweredByHighlight}</span>
            </p>
          </div>
        </div>

        <div className="mb-6 flex justify-center md:hidden">
          <LanguageToggle />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          {t.hero.headline.line1Prefix}{" "}
          <span className="text-gradient-primary">{t.hero.headline.line1Highlight}</span>
          <br />
          {t.hero.headline.line2Prefix}{" "}
          <span className="text-gradient-primary">{t.hero.headline.line2Highlight}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
          {t.hero.subheadline}
          <br />
          <span className="text-foreground font-medium">{t.hero.subheadlineHighlight}</span>
        </p>

        {/* CTA */}
        <Button
          onClick={onJoinClick}
          size="lg"
          className="group relative bg-gradient-primary hover:opacity-90 text-lg px-10 py-7 rounded-xl font-bold shadow-hover hover:shadow-lg transition-all duration-300"
        >
          {t.hero.cta}
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>

        {/* Stats or trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {t.hero.stats.map((stat) => (
            <div key={stat.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.title}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
