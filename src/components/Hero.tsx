import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import LanguageToggle from "@/components/LanguageToggle";

interface HeroProps {
  onJoinClick: () => void;
}

const logoVariants = {
  primary: {
    src: "/branding/RGB_BP_Logo_Principal_Color_SinSlogan.png",
    alt: "Buy My Provider logotipo horizontal",
  },
  secondary: {
    src: "/branding/RGB_BP_Logo_Secundario_Color_SinSlogan.png",
    alt: "Buy My Provider logotipo secundario",
  },
  icon: {
    src: "/branding/RGB_BP_Logo_Icono_Color.png",
    alt: "Isotipo Buy My Provider",
  },
} as const;

type LogoVariant = keyof typeof logoVariants;

const BrandLogo = ({ variant = "primary" }: { variant?: LogoVariant }) => {
  const { src, alt } = logoVariants[variant];

  return (
    <div
      className="inline-flex items-center justify-center rounded-[32px] bg-white border border-brand-cultured/70 px-8 py-6 shadow-soft"
      aria-label={alt}
    >
      <img src={src} alt={alt} className="h-20 w-auto" loading="eager" />
    </div>
  );
};

const Hero = ({ onJoinClick }: HeroProps) => {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[hsl(var(--background))]">
      {/* Subtle background accent matching Cultured + Denim overlay */}
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-blue-jeans/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-brand-cultured/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in px-4">
        <div className="absolute right-0 -top-10 hidden md:flex">
          <LanguageToggle />
        </div>

        <div className="mb-8 flex flex-col items-center gap-4">
          <BrandLogo variant="primary" />
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cerulean font-semibold">
            {t.common.poweredByPrefix} <span className="text-brand-denim">{t.common.poweredByHighlight}</span>
          </p>
        </div>

        <div className="mb-6 flex justify-center md:hidden">
          <LanguageToggle />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-brand-eerie">
          {t.hero.headline.line1Prefix}{" "}
          <span className="text-gradient-primary">{t.hero.headline.line1Highlight}</span>
          <br />
          {t.hero.headline.line2Prefix}{" "}
          <span className="text-gradient-primary">{t.hero.headline.line2Highlight}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-brand-auro max-w-3xl mx-auto mb-8">
          {t.hero.subheadline}
          <br />
          <span className="text-brand-eerie font-semibold">{t.hero.subheadlineHighlight}</span>
        </p>

        {/* CTA */}
        <Button
          onClick={onJoinClick}
          size="lg"
          className="group relative bg-gradient-primary hover:opacity-95 text-lg px-10 py-7 rounded-2xl font-bold text-primary-foreground shadow-hover transition-all duration-300"
        >
          {t.hero.cta}
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Button>

        {/* Stats or trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.hero.stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/90 border border-brand-cultured rounded-2xl p-6 text-left shadow-soft"
            >
              <div className="text-3xl font-bold text-brand-cerulean mb-2">{stat.title}</div>
              <div className="text-sm text-brand-auro">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
