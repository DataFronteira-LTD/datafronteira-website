import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { label: "Data Analytics", href: "/services/data-analytics" },
      { label: "Training & Support", href: "/services/training-support" },
      { label: "Data Management", href: "/services/data-management" },
      { label: "Reporting & Visualization", href: "/services/reporting-visualization" },
      { label: "Data Strategy", href: "/services/data-strategy" },
    ]
  },
  { 
    label: "Industries", 
    href: "/industries",
    dropdown: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Technology", href: "/industries/technology" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Others", href: "/industries/others" },
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="DataFronteira" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group flex items-center gap-1 py-2",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={cn("transition-transform", openDropdown === item.label && "rotate-180")} />}
                {isActive(item.href) && !item.dropdown && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
              
              {/* Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-56"
                    >
                      <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary",
                              location.pathname === subItem.href
                                ? "text-primary bg-muted/50"
                                : "text-muted-foreground"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/contact">Request Demo</Link>
          </Button>
          <Button size="sm" className="glow" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border max-h-[80vh] overflow-y-auto"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={cn(
                        "text-lg font-medium py-2 transition-colors flex-1",
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="p-2 text-muted-foreground"
                      >
                        <ChevronDown size={18} className={cn("transition-transform", openDropdown === item.label && "rotate-180")} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 border-l-2 border-border ml-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={cn(
                              "block py-2 text-sm transition-colors",
                              location.pathname === subItem.href
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
