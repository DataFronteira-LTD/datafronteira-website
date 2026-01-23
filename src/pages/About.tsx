import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Award, 
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with the highest ethical standards, ensuring data is managed responsibly and transparently.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Driven to continuously explore and implement emerging technologies and methodologies.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in all our work, ensuring precision and quality.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to form partnerships that lead to transformative outcomes.",
  },
];

const achievements = [
  { number: "10+", label: "Years Combined Experience" },
  { number: "500+", label: "Clients Served" },
  { number: "50+", label: "Data Projects Delivered" },
  { number: "99%", label: "Client Satisfaction Rate" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">DataFronteira Ltd</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Transforming Data into Actionable Insights for a Smarter Future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At DataFronteira Ltd, we are a dynamic consulting firm dedicated to 
                transforming data into actionable insights. With a deep commitment to 
                excellence, our team specializes in expert data analytics and 
                comprehensive data management services.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We empower businesses across diverse industries to harness the power 
                of data, enabling smarter decision-making and innovative strategies. 
                Our passion for technology and data drives us to continually refine 
                our methods and deliver measurable results for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((item, index) => (
                <div key={item.label} className="glass rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide unparalleled data analytics and management solutions that 
                empower organizations to unlock the full potential of their objectives. 
                We strive to transform complex data into clear, actionable insights, 
                enabling our clients to make confident, data-driven decisions that 
                foster growth and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where every business, regardless of size or industry, 
                can leverage data to drive success. By pioneering cutting-edge analytics 
                and fostering a culture of continuous improvement, DataFronteira aims to 
                be recognized as the leading partner in shaping a future where data fuels 
                strategic evolution and sustainable competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Core Values That Drive Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide everything we do, from how we work with clients 
              to how we develop solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl font-bold mb-8">
                What Sets Us Apart
              </h2>
              <div className="space-y-6">
                {[
                  { title: "End-to-End Solutions", desc: "From data strategy to implementation and ongoing support" },
                  { title: "Industry-Specific Expertise", desc: "Deep knowledge across healthcare, finance, retail, and manufacturing" },
                  { title: "Cutting-Edge Technology", desc: "Leveraging the latest tools and platforms for innovation" },
                  { title: "Proven Methodology", desc: "Structured approach ensuring consistent, high-quality results" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <div className="font-semibold text-foreground text-lg">{item.title}</div>
                      <div className="text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-10"
            >
              <h3 className="font-display text-2xl font-bold mb-6">
                Ready to Partner with Us?
              </h3>
              <p className="text-muted-foreground mb-8">
                Let's discuss how our expertise can help transform your data strategy 
                and drive meaningful business outcomes.
              </p>
              <Button size="lg" className="glow group w-full" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
