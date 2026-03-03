import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Stay Ahead in Health & Science
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-lg mx-auto">
            Get weekly curated insights from leading researchers, clinicians, and
            industry experts — delivered straight to your inbox.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary font-medium animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              You're subscribed! Check your inbox.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
