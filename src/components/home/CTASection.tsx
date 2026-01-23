import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8"
              >
                <Sparkles className="text-primary" size={32} />
              </motion.div>

              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Ready to Transform Your{" "}
                <span className="text-gradient">Data Strategy?</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you unlock the full 
                potential of your data. Schedule a free consultation with our team today.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="glow group" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8">
                Join 500+ businesses accelerating their growth with DataFronteira
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
