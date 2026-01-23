import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Database, 
  LineChart, 
  Shield,
  Lightbulb,
  GraduationCap,
  FileSearch,
  PieChart,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Uncover hidden patterns and trends with our advanced analytics services.",
    features: [
      "Descriptive & diagnostic analytics",
      "Custom KPI dashboards",
      "Business intelligence reporting",
      "Data exploration & discovery",
    ],
  },
  {
    icon: Database,
    title: "Data Management Solutions",
    description: "Streamline your data infrastructure with comprehensive management solutions.",
    features: [
      "Data architecture design",
      "Data integration & ETL",
      "Master data management",
      "Data warehousing",
    ],
  },
  {
    icon: LineChart,
    title: "Predictive Modeling & Forecasting",
    description: "Leverage machine learning to forecast trends and predict outcomes.",
    features: [
      "Machine learning models",
      "Time series forecasting",
      "Risk assessment models",
      "Customer behavior prediction",
    ],
  },
  {
    icon: Shield,
    title: "Data Governance & Quality",
    description: "Implement robust frameworks ensuring quality, compliance, and security.",
    features: [
      "Data quality management",
      "Compliance frameworks",
      "Data lineage tracking",
      "Security protocols",
    ],
  },
  {
    icon: PieChart,
    title: "Reporting & Visualization",
    description: "Communicate insights effectively with custom visualization tools.",
    features: [
      "Interactive dashboards",
      "Automated reporting",
      "Custom visualizations",
      "Real-time data displays",
    ],
  },
  {
    icon: Lightbulb,
    title: "Data Strategy Consulting",
    description: "Develop comprehensive data strategies aligned with your business objectives.",
    features: [
      "Data maturity assessment",
      "Roadmap development",
      "Technology selection",
      "Change management",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Empower your teams with expert training and ongoing support.",
    features: [
      "Analytics tool training",
      "Best practices workshops",
      "Ongoing technical support",
      "Knowledge transfer",
    ],
  },
  {
    icon: FileSearch,
    title: "Research & Market Analysis",
    description: "Gain competitive intelligence through comprehensive market research.",
    features: [
      "Market research & analysis",
      "Competitive intelligence",
      "Customer insights",
      "Trend analysis",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Comprehensive{" "}
              <span className="text-gradient">Data Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From analytics and management to strategy and training—we provide 
              end-to-end solutions to help your organization thrive in a data-driven world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-primary/30 border border-transparent transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={16} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that delivers consistent results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "We begin by understanding your business challenges and data landscape." },
              { step: "02", title: "Analyze", desc: "Our experts apply advanced analytics to extract meaningful patterns." },
              { step: "03", title: "Transform", desc: "We convert insights into strategic recommendations and solutions." },
              { step: "04", title: "Implement", desc: "We help integrate data-driven strategies into your operations." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="font-display text-6xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Your Partner in{" "}
                <span className="text-gradient">Data Excellence</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Whether you need cutting-edge analytics, robust data management, 
                strategic insights, or comprehensive training—our team is here to help.
              </p>

              <Button size="lg" className="glow group" asChild>
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
