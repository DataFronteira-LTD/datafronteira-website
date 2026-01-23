import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Youtube, Send } from "lucide-react";
import logo from "@/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mailchimp Configuration
// Extract list ID and datacenter from the provided ID
// Format: {list_id}-{datacenter}
// Note: These are public identifiers, not secret API keys
const MAILCHIMP_LIST_ID = "e566bb3abc5449e845b070a7dbb9702a";
const MAILCHIMP_DATACENTER = "us11";
// Note: You'll need your Mailchimp User ID (u parameter) from your Mailchimp dashboard
// Get it from: Mailchimp Dashboard > Audience > All contacts > Settings > Audience name and defaults
// Or from the embedded form code in Mailchimp (look for the "u=" parameter in the form action URL)
// For now, using the list ID as fallback - update with your actual User ID for full functionality
const MAILCHIMP_USER_ID = MAILCHIMP_LIST_ID; // Update with your actual User ID from Mailchimp dashboard

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Data Analytics", href: "/services/data-analytics" },
    { label: "Training & Support", href: "/services/training-support" },
    { label: "Data Management", href: "/services/data-management" },
    { label: "Reporting & Visualization", href: "/services/reporting-visualization" },
    { label: "Data Strategy", href: "/services/data-strategy" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Finance", href: "/industries/finance" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Technology", href: "/industries/technology" },
    { label: "Agriculture", href: "/industries/agriculture" },
    { label: "Others", href: "/industries/others" },
  ],
};

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);

    try {
      // Mailchimp embedded form approach
      // The form will submit to Mailchimp's embedded form endpoint
      // URL format: https://{datacenter}.list-manage.com/subscribe/post?u={user_id}&id={list_id}
      // Note: If you have the full form action URL from Mailchimp dashboard, you can replace the action below
      // Get it from: Mailchimp Dashboard > Audience > All contacts > Signup forms > Embedded forms
      
      const form = document.createElement("form");
      form.method = "POST";
      form.action = `https://${MAILCHIMP_DATACENTER}.list-manage.com/subscribe/post?u=${MAILCHIMP_USER_ID}&id=${MAILCHIMP_LIST_ID}`;
      form.target = "_blank";
      form.style.display = "none";
      
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.name = "EMAIL";
      emailInput.value = email;
      emailInput.required = true;
      
      // Add hidden honeypot field (Mailchimp best practice)
      const honeypot = document.createElement("input");
      honeypot.type = "text";
      honeypot.name = `b_${MAILCHIMP_LIST_ID}_${MAILCHIMP_LIST_ID}`;
      honeypot.tabIndex = -1;
      honeypot.style.display = "none";
      
      form.appendChild(emailInput);
      form.appendChild(honeypot);
      document.body.appendChild(form);
      form.submit();
      
      // Clean up after a short delay
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 1000);
      
      setEmail("");
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="DataFronteira" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Powering rewarding decisions. We help businesses transform data into actionable insights that drive growth and innovation.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:email@datafronteira.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                email@datafronteira.com
              </a>
              <a href="mailto:datafronteira@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                datafronteira@gmail.com
              </a>
              <a href="tel:+2347041300104" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                +234 704 130 0104
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Abuja, Nigeria
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/datafronteira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com/datafronteira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.instagram.com/datafronteira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://web.facebook.com/people/Datafronteira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@datafronteira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://medium.com/@datafronteira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Medium"
                >
                  <span className="text-sm font-bold">M</span>
                </a>
                <a
                  href="https://www.tiktok.com/@datafronteira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">What We Do</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest insights and data trends.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary/50 border-border text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isSubmitting}
                  className="flex-shrink-0"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DataFronteira Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
