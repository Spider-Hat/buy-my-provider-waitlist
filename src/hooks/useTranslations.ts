import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/i18n";

export const useTranslations = () => {
  const { language } = useLanguage();

  return useMemo(() => translations[language], [language]);
};
