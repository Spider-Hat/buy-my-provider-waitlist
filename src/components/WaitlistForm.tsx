import { useState } from "react";
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

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  companyName: z.string().max(100).optional(),
  contact: z.string().min(5, "Please provide a valid email or WhatsApp number"),
  userType: z.enum(["buyer", "supplier"]),
  country: z.string().min(1, "Please select your country"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess: () => void;
}

const categories = [
  "Electronics & Technology",
  "Textiles & Apparel",
  "Home & Furniture",
  "Industrial Equipment",
  "Beauty & Personal Care",
  "Food & Beverages",
  "Automotive Parts",
  "Sports & Outdoors",
  "Toys & Games",
  "Other",
];

const countries = [
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", 
  "Costa Rica", "Ecuador", "El Salvador", "Guatemala", 
  "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", 
  "Perú", "Uruguay", "Venezuela", "Other"
];

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [userType, setUserType] = useState<"buyer" | "supplier">("buyer");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "buyer",
      categories: [],
    },
  });

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    setValue("categories", newCategories);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    setIsSubmitting(false);
    onSuccess();
  };

  return (
    <section id="waitlist-form" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Join the <span className="text-gradient-primary">Revolution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of B2B sourcing. Get early access and exclusive benefits.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* User Type Selector */}
            <div>
              <Label className="text-lg font-orbitron mb-4 block">I am a...</Label>
              <UserTypeSelector 
                selectedType={userType} 
                onTypeChange={(type) => {
                  setUserType(type);
                  setValue("userType", type);
                }}
              />
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-base">Full Name *</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="bg-input border-border h-12"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-base">Company Name (Optional)</Label>
                <Input
                  id="companyName"
                  {...register("companyName")}
                  placeholder="Acme Corp"
                  className="bg-input border-border h-12"
                />
              </div>
            </div>

            {/* Contact & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-base">Email or WhatsApp *</Label>
                <Input
                  id="contact"
                  {...register("contact")}
                  placeholder="email@example.com or +52 123 456 7890"
                  className="bg-input border-border h-12"
                />
                {errors.contact && (
                  <p className="text-sm text-destructive">{errors.contact.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-base">Country / Region *</Label>
                <Select onValueChange={(value) => setValue("country", value)}>
                  <SelectTrigger className="bg-input border-border h-12">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-sm text-destructive">{errors.country.message}</p>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <Label className="text-base">Product Categories of Interest *</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => handleCategoryToggle(category)}
                  >
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryToggle(category)}
                    />
                    <label
                      htmlFor={category}
                      className="text-sm cursor-pointer flex-1"
                    >
                      {category}
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
              className="w-full bg-gradient-primary hover:opacity-90 text-lg h-14 rounded-xl font-orbitron font-bold shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Joining Waitlist...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
