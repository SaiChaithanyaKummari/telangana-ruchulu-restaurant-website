import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-spice-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Your Table is Waiting in LB Nagar
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 leading-relaxed">
            Stop scrolling, start eating. Walk in today and taste why hundreds of families and students call Telangana Ruchulu their favorite spot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 rounded-full font-bold shadow-xl"
              asChild
            >
              <a href="https://maps.google.com/?cid=9907263419469612305" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 text-base px-8 py-6 rounded-full font-bold backdrop-blur-sm"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Call to Reserve
              </a>
            </Button>
          </div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/20"
          >
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Weekend Special: 10% off on family meals — this Saturday & Sunday only!
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
