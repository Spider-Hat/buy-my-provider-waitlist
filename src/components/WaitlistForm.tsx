import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import UserTypeSelector from "./UserTypeSelector";
import { Loader2 } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { translations } from "@/lib/i18n";

type FormData = {
  fullName: string;
  companyName?: string;
  email: string;
  whatsapp: string;
  userType: "buyer" | "supplier";
  country: string;
  categories: string[];
};

interface WaitlistFormProps {
  onSuccess: () => void;
}

const createFormSchema = (validation: {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  categories: string;
}) =>
  z.object({
    fullName: z.string().trim().min(2, validation.fullName).max(100),
    companyName: z.string().trim().max(100).optional(),
    email: z.string().trim().email(validation.email).max(255),
    whatsapp: z.string().trim().min(8, validation.whatsapp).max(20),
    userType: z.enum(["buyer", "supplier"]),
    country: z.string().min(1, validation.country),
    categories: z.array(z.string()).min(1, validation.categories),
  });

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations();

  const formSchema = useMemo(() => createFormSchema(t.form.validation), [t.form.validation]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "buyer",
      categories: [],
    },
  });

  const selectedCountry = watch("country") as string | undefined;
  const selectedCategories = (watch("categories") as string[] | undefined) || [];
  const selectedUserType = (watch("userType") as "buyer" | "supplier" | undefined) || "buyer";

  const handleCategoryToggle = (categoryValue: string) => {
    const newCategories = selectedCategories.includes(categoryValue)
      ? selectedCategories.filter((c) => c !== categoryValue)
      : [...selectedCategories, categoryValue];

    setValue("categories", newCategories, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const englishForm = translations.en.form;
      const countryLabel =
        englishForm.countryOptions.find((option) => option.value === data.country)?.label || data.country;
      const categoryLabels = data.categories
        .map((value) => englishForm.categoryOptions.find((option) => option.value === value)?.label || value)
        .join(", ");

      // Send to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbz5qwrRGrhZz8PlUoS4_sQPsPRIX67YrFBXIrMBFrzLDcLnjqQiPwdZaqvQWCP9SGMz/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            fullName: data.fullName,
            companyName: data.companyName || "",
            email: data.email,
            whatsapp: data.whatsapp,
            userType: data.userType,
            country: countryLabel,
            categories: categoryLabels,
          }),
        }
      );

      setIsSubmitting(false);
      onSuccess();
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert(t.form.errorMessage);
    }
  };

  return (
    <section id="waitlist-form" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.form.titlePrefix} {" "}
            <span className="text-gradient-primary">{t.form.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.form.description}</p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* User Type Selector */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">{t.form.userTypeLabel}</Label>
              <UserTypeSelector
                selectedType={selectedUserType}
                onTypeChange={(type) => {
                  setValue("userType", type, { shouldValidate: true });
                }}
              />
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-base">
                  {t.form.fullNameLabel}
                </Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder={t.form.fullNamePlaceholder}
                  className="bg-input border-border h-12"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-base">
                  {t.form.companyNameLabel}
                </Label>
                <Input
                  id="companyName"
                  {...register("companyName")}
                  placeholder={t.form.companyNamePlaceholder}
                  className="bg-input border-border h-12"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  {t.form.emailLabel}
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder={t.form.emailPlaceholder}
                  className="bg-input border-border h-12"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-base">
                  {t.form.whatsappLabel}
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  {...register("whatsapp")}
                  placeholder={t.form.whatsappPlaceholder}
                  className="bg-input border-border h-12"
                />
                {errors.whatsapp && (
                  <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="country" className="text-base">
                {t.form.countryLabel}
              </Label>
              <Select
                value={selectedCountry || undefined}
                onValueChange={(value) => setValue("country", value, { shouldValidate: true })}
              >
                <SelectTrigger className="bg-input border-border h-12">
                  <SelectValue placeholder={t.form.countryPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.form.countryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && (
                <p className="text-sm text-destructive">{errors.country.message}</p>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <Label className="text-base">{t.form.categoriesLabel}</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.form.categoryOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <Checkbox
                      id={option.value}
                      checked={selectedCategories.includes(option.value)}
                      onCheckedChange={() => handleCategoryToggle(option.value)}
                    />
                    <label
                      htmlFor={option.value}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors.categories && (
                <p className="text-sm text-destructive">{errors.categories.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary hover:opacity-90 text-lg h-14 rounded-xl font-bold shadow-hover hover:shadow-lg transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t.form.submittingLabel}
                </>
              ) : (
                t.form.submitLabel
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
