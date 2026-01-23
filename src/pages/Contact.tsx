import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "OgzxDm5d23KAiLsTvTM5a";
const EMAILJS_SERVICE_ID = "service_pgpgob8";
const EMAILJS_TEMPLATE_ID = "template_dbbt20w";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hi@datafronteira.com",
    link: "mailto:hi@datafronteira.com",
    note: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+234 704 130 0104",
    link: "tel:+2347041300104",
    note: "Available during business hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "No. 10 Durban Street, Wuse 2, Abuja, Nigeria",
    link: "https://maps.app.goo.gl/hT7xXDzTSbG61FzB9",
    note: "Click for directions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday – Friday: 9AM – 5PM (GMT)",
    link: null,
    note: "Closed on weekends and holidays",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      firstName: formData.firstName,
      surname: formData.lastName || "",
      email: formData.email,
      phone: formData.phone || "",
      enquiryType: formData.enquiryType,
      message: formData.message,
      to_email: "datafronteira@gmail.com",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiryType: "",
        message: "",
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you harness the power of data. Get in touch to 
              discuss your needs, request a service, or share feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold mb-2">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-primary" size={40} />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        enquiryType: "",
                        message: "",
                      });
                    }}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="bg-secondary/50 border-border"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          className="bg-secondary/50 border-border"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-secondary/50 border-border"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+234 700 000 0000"
                          className="bg-secondary/50 border-border"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="enquiryType">Enquiry Type *</Label>
                      <Select 
                        required
                        value={formData.enquiryType}
                        onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                      >
                        <SelectTrigger className="bg-secondary/50 border-border">
                          <SelectValue placeholder="Select enquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Enquiry</SelectItem>
                          <SelectItem value="service">Service Request</SelectItem>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="enquiryType" value={formData.enquiryType} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or enquiry..."
                        rows={5}
                        required
                        className="bg-secondary/50 border-border resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">Other Ways to Reach Us</h2>
                <p className="text-muted-foreground">
                  If you prefer not to use the form, we're available through these channels.
                </p>
              </div>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{item.title}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{item.value}</div>
                      )}
                      <div className="text-sm text-muted-foreground mt-1">{item.note}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map placeholder */}
              <div className="glass rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Our Location</h3>
                <div className="aspect-video rounded-lg bg-secondary/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="text-sm text-muted-foreground">
                      Wuse 2, Abuja, Nigeria
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/hT7xXDzTSbG61FzB9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline mt-2 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
