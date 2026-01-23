import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Database, 
  LineChart, 
  Shield, 
  Lightbulb,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description: "Uncover hidden patterns and trends with our advanced analytics services, transforming complex data into actionable business intelligence.",
  },
  {
    icon: Database,
    title: "Data Management Solutions",
    description: "Streamline your data infrastructure with comprehensive management solutions that organize, secure, and optimize your valuable information.",
  },
  {
    icon: LineChart,
    title: "Predictive Modeling",
    description: "Leverage machine learning and statistical models to forecast trends, predict outcomes, and stay ahead of market changes.",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Implement robust data governance frameworks that ensure quality, compliance, and security across your organization.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Consulting",
    description: "Develop comprehensive data strategies aligned with your business objectives to drive digital transformation and growth.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Empower your teams with expert training and ongoing support to build internal data capabilities and self-sufficiency.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Data Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer end-to-end data solutions tailored to your business needs, 
            helping you make informed decisions and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/50 border border-transparent">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
