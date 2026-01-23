import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

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
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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
              <a href="tel:+2347041300104" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                +234 704 130 0104
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Abuja, Nigeria
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
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DataFronteira Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
