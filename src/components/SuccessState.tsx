import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessState = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <CheckCircle2 className="relative w-24 h-24 text-primary animate-success-scale" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-scale-in">
          You're on the list!
        </h2>

        <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          You're officially on the list. We'll reach out as soon as BuyMyProvider opens early access.
        </p>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg font-bold mb-4">What's Next?</h3>
          <ul className="space-y-3 text-left text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>You'll receive an email confirmation shortly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Our team will review your profile</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Early access invites will be sent in the coming weeks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>Follow us for updates and exclusive content</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full md:w-auto px-8 h-12 rounded-xl border-primary/50 hover:bg-primary/10"
          >
            Back to Home
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Questions? Contact us at <a href="mailto:buymyprovider@spiderhat.com" className="text-primary hover:underline">buymyprovider@spiderhat.com</a>
        </p>
      </div>
    </div>
  );
};

export default SuccessState;
