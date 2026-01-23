import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, TrendingUp, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Pioneering Data Excellence
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Your Data Into{" "}
              <span className="text-gradient">Actionable Insights</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Unlock the full potential of your data with our advanced analytics 
              and management platform. Visualize trends, predict outcomes, and 
              make data-driven decisions that propel your business forward.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow group" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
              <div>
                <div className="font-display text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-2xl p-6 card-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Analytics Dashboard</div>
                      <div className="text-xs text-muted-foreground">Real-time insights</div>
                    </div>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
                </div>

                {/* Chart */}
                <div className="h-48 flex items-end gap-2 mb-6">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-primary/30 to-primary"
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <TrendingUp size={14} className="text-primary" />
                      Revenue Growth
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground">+42%</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Database size={14} className="text-accent" />
                      Data Processed
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground">2.4TB</div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 glass rounded-xl p-4 card-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="text-accent" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                    <div className="font-semibold text-foreground">+37%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
