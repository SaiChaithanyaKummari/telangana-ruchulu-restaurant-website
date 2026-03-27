import { motion } from "framer-motion";
import interiorImage from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={interiorImage}
                alt="Warm interior of Telangana Ruchulu restaurant"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-display text-3xl font-bold">4.2★</p>
              <p className="text-sm text-primary-foreground/80">Google Rating</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Taste of Home,{" "}
              <span className="text-primary italic">Right Here in LB Nagar</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Craving the bold, unapologetic flavors you grew up with? Tired of restaurants that water down traditional recipes? At Telangana Ruchulu, we cook exactly the way it's meant to be — fiery spices, slow-cooked gravies, and recipes passed down through generations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're a student looking for a hearty, affordable meal or a family wanting to gather around comforting homestyle food — this is your spot. No shortcuts. No compromises. Just pure Telangana soul on a plate.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Dishes on Menu</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Authentic Recipes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
