import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";
import { feedbackColors } from "@/lib/brand";

const SuccessState = () => {
  const t = useTranslations();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-eerie/80 backdrop-blur-sm animate-fade-in">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-lime/30 rounded-full blur-2xl"></div>
            <CheckCircle2
              className="relative w-24 h-24 animate-success-scale"
              strokeWidth={1.5}
              style={{ color: feedbackColors.positive }}
            />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-scale-in text-white">
          {t.success.title}
        </h2>

        <p className="text-xl text-brand-cultured/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t.success.description}
        </p>

        <div className="bg-white border border-brand-cultured rounded-2xl p-8 mb-8 animate-scale-in text-left" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg font-bold mb-4">{t.success.whatsNext}</h3>
          <ul className="space-y-3 text-brand-auro">
            {t.success.steps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="text-brand-cerulean mt-1">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full md:w-auto px-8 h-12 rounded-xl border-brand-cultured/70 bg-white text-brand-cerulean hover:bg-brand-cultured/40"
          >
            {t.success.backHome}
          </Button>
        </div>

        <p className="mt-8 text-sm text-brand-cultured/80 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Questions? Contact us at <a href="mailto:buymyprovider@spiderhat.com" className="text-brand-lime hover:underline">buymyprovider@spiderhat.com</a>
          {t.success.contact}{" "}
          <a href="mailto:hello@buymyprovider.com" className="text-brand-lime hover:underline">hello@buymyprovider.com</a>
        </p>
      </div>
    </div>
  );
};

export default SuccessState;
