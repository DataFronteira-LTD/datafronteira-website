import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { title: "Innovation", desc: "Pushing boundaries with cutting-edge solutions" },
  { title: "Excellence", desc: "Highest standards in every project we deliver" },
  { title: "Collaboration", desc: "True partnerships for transformative outcomes" },
  { title: "Impact", desc: "Measurable results that drive real business growth" },
];

export function AboutPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Partner in{" "}
              <span className="text-gradient">Data Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At DataFronteira Ltd, we're a dynamic consulting firm dedicated to 
              transforming data into actionable insights. With a deep commitment 
              to excellence, our team specializes in expert data analytics and 
              comprehensive data management services.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-foreground">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="group" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Steps */}
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discover", desc: "Understanding your business challenges and data landscape" },
                  { step: "02", title: "Analyze", desc: "Applying advanced analytics to extract meaningful patterns" },
                  { step: "03", title: "Transform", desc: "Converting insights into strategic recommendations" },
                  { step: "04", title: "Implement", desc: "Integrating data-driven strategies into operations" },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className="glass rounded-xl p-6 flex items-center gap-6"
                  >
                    <div className="font-display text-3xl font-bold text-primary/30">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground text-lg">
                        {item.title}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
