import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslations();

  const nextLanguageLabel = language === "en" ? "ES" : "EN";
  const ariaLabel = language === "en" ? t.common.switchToSpanish : t.common.switchToEnglish;

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      className="rounded-full px-4 py-2 text-sm font-medium"
      aria-label={ariaLabel}
    >
      {nextLanguageLabel}
    </Button>
  );
};

export default LanguageToggle;
