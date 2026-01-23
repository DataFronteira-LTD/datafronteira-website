import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "DataFronteira transformed our approach to customer data. Their insights helped us increase conversion rates by 37% and customer retention by 42% in just six months.",
    author: "Anthony Onu",
    role: "Chief Executive Officer",
    company: "Kulengalabs Ltd.",
  },
  {
    quote: "The team's expertise in predictive analytics gave us a competitive edge. We now make decisions backed by data, not guesswork, and the results speak for themselves.",
    author: "Sarah Mitchell",
    role: "Director of Operations",
    company: "TechVentures Inc.",
  },
  {
    quote: "Working with DataFronteira was a game-changer. Their data governance framework helped us achieve compliance while improving our data quality across all departments.",
    author: "James Adebayo",
    role: "CTO",
    company: "FinanceFirst Group",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what business leaders 
            have to say about working with DataFronteira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-2xl p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={16} />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
