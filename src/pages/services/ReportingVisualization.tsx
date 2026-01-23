import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PieChart, LineChart, FileText, Presentation, CheckCircle, ArrowRight } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Interactive Dashboards",
    description: "Create dynamic, real-time dashboards that bring your data to life with intuitive visualizations."
  },
  {
    icon: LineChart,
    title: "Custom Reports",
    description: "Generate tailored reports that communicate insights effectively to stakeholders."
  },
  {
    icon: Presentation,
    title: "Executive Reporting",
    description: "High-level summaries and KPI tracking designed for leadership decision-making."
  },
];

const benefits = [
  "Real-time data visualization",
  "Automated report generation",
  "Custom KPI dashboards",
  "Interactive exploration tools",
  "Mobile-friendly reports",
  "Easy data sharing and collaboration"
];

export default function ReportingVisualization() {
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
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Reporting & Visualization
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Transform complex data into clear, compelling visual stories. Our reporting solutions make it easy to understand and share insights across your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Visualization Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to present your data in meaningful, actionable formats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
                Why Visualization Matters
              </h2>
              <p className="text-muted-foreground mb-8">
                Data without context is just numbers. Our visualization solutions help you tell compelling stories with your data.
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
                Ready to visualize your data?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our reporting solutions can help you communicate insights more effectively.
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
