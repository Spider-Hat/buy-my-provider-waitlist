import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import SuccessState from "@/components/SuccessState";
import { useTranslations } from "@/hooks/useTranslations";

const Index = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <main className="relative min-h-screen">
      <Hero onJoinClick={scrollToForm} />
      
      <div ref={formRef}>
        <WaitlistForm onSuccess={handleSuccess} />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-orbitron font-bold text-foreground">{t.common.brand}</span> — {t.common.poweredByPrefix}{" "}
            <span className="text-primary">{t.common.poweredByHighlight}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Success overlay */}
      {showSuccess && <SuccessState />}
    </main>
  );
};

export default Index;
