import { motion } from "framer-motion";
import { Flame, Heart, Wallet, Users, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Flavors That Hit Different",
    description: "Our recipes aren't toned down for mass appeal. You get the real, bold, fiery Telangana taste — the way your family kitchen smells during festivals.",
  },
  {
    icon: Heart,
    title: "Cooked with Genuine Care",
    description: "Every dish is prepared using traditional methods — clay pot cooking, hand-ground masalas, and locally sourced country chicken and mutton.",
  },
  {
    icon: Wallet,
    title: "Feast Without the Bill Shock",
    description: "Premium taste at student-friendly prices. Bring your friends, bring your family — nobody leaves hungry or broke.",
  },
  {
    icon: Users,
    title: "Perfect for Every Occasion",
    description: "Whether it's a quick lunch between classes, a weekend family dinner, or a celebration — our warm ambiance fits them all.",
  },
  {
    icon: Leaf,
    title: "Something for Everyone",
    description: "From spicy non-veg specials to flavorful veg curries, tangy rice varieties to Chinese fusion — we've got every craving covered.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Why Telangana Ruchulu
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Not Just Food. It's an{" "}
            <span className="text-primary italic">Experience.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border/50 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
