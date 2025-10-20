import { Building2, Store } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";

interface UserTypeSelectorProps {
  selectedType: "buyer" | "supplier";
  onTypeChange: (type: "buyer" | "supplier") => void;
}

const UserTypeSelector = ({ selectedType, onTypeChange }: UserTypeSelectorProps) => {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <button
        type="button"
        onClick={() => onTypeChange("buyer")}
        className={cn(
          "relative group p-8 rounded-2xl border-2 transition-all duration-300",
          "hover:scale-[1.02] active:scale-[0.98]",
          selectedType === "buyer"
            ? "border-primary bg-primary/10 shadow-hover"
            : "border-border bg-card/50 hover:border-primary/50"
        )}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center transition-all",
            selectedType === "buyer" 
              ? "bg-gradient-primary" 
              : "bg-muted"
          )}>
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{t.form.buyerTitle}</h3>
            <p className="text-sm text-muted-foreground">{t.form.buyerDescription}</p>
          </div>
        </div>
        {selectedType === "buyer" && (
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
        )}
      </button>

      <button
        type="button"
        onClick={() => onTypeChange("supplier")}
        className={cn(
          "relative group p-8 rounded-2xl border-2 transition-all duration-300",
          "hover:scale-[1.02] active:scale-[0.98]",
          selectedType === "supplier"
            ? "border-primary bg-primary/10 shadow-hover"
            : "border-border bg-card/50 hover:border-primary/50"
        )}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center transition-all",
            selectedType === "supplier" 
              ? "bg-gradient-primary" 
              : "bg-muted"
          )}>
            <Store className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{t.form.supplierTitle}</h3>
            <p className="text-sm text-muted-foreground">{t.form.supplierDescription}</p>
          </div>
        </div>
        {selectedType === "supplier" && (
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default UserTypeSelector;
