import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="font-display text-9xl font-bold text-primary/20 mb-4">
              404
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2" size={18} />
                  Go Back
                </Link>
              </Button>
              <Button size="lg" className="glow" asChild>
                <Link to="/">
                  <Home className="mr-2" size={18} />
                  Back to Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
