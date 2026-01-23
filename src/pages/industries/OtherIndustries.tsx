import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Briefcase, GraduationCap, Truck, CheckCircle, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Optimize property management, predict market trends, and enhance tenant experiences."
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Improve student outcomes, optimize resource allocation, and enhance learning experiences."
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Streamline supply chains, optimize routes, and reduce delivery times."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Enhance client services, optimize project delivery, and improve profitability."
  },
];

const benefits = [
  "Tailored solutions for your industry",
  "Deep domain expertise",
  "Proven methodologies",
  "Scalable implementations",
  "Continuous support and optimization",
  "Measurable business outcomes"
];

export default function OtherIndustries() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-mesh min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Industries</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Other Industries
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Data solutions that transcend industry boundaries. Whatever your sector, we can help you harness the power of data to drive business success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expertise extends across multiple sectors and industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                No matter your industry, we bring expertise, proven methodologies, and a commitment to delivering measurable results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Don't see your industry?
              </h3>
              <p className="text-muted-foreground mb-6">
                We work with businesses across all sectors. Let's discuss how we can help transform your operations with data.
              </p>
              <Button className="w-full glow" asChild>
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
