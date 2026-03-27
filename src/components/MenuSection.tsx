import { motion } from "framer-motion";
import { Star } from "lucide-react";

const menuCategories = [
  {
    name: "Signature Non-Veg",
    tag: "Most Popular",
    items: [
      { name: "Naatu Kodi Pulusu", desc: "Country chicken slow-cooked in tangy tamarind gravy with rustic spices", price: "₹280" },
      { name: "Telangana Special Mutton", desc: "Bone-in mutton simmered in a fiery chili-coconut masala", price: "₹350" },
      { name: "Chicken Fry (Boneless)", desc: "Crispy, spice-crusted chicken tossed with curry leaves & green chilies", price: "₹250" },
    ],
  },
  {
    name: "Rice Specials",
    tag: "Comfort Food",
    items: [
      { name: "Chinta Pandu Pulihora", desc: "Tangy tamarind rice with peanuts, dal, and aromatic tempering", price: "₹150" },
      { name: "Jeera Rice", desc: "Fragrant basmati rice with cumin and ghee", price: "₹120" },
      { name: "Coconut Rice", desc: "Freshly grated coconut with seasoned rice and curry leaves", price: "₹130" },
    ],
  },
  {
    name: "Veg Delights",
    tag: "Fresh & Flavorful",
    items: [
      { name: "Gutti Vankaya Kura", desc: "Stuffed brinjal curry in a peanut-sesame gravy — a Telangana classic", price: "₹180" },
      { name: "Pappu Charu", desc: "Comforting lentil rasam with tomatoes and tamarind", price: "₹120" },
      { name: "Mixed Veg Curry", desc: "Seasonal vegetables in a home-style spiced gravy", price: "₹160" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our Menu
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Crafted with Fire &{" "}
            <span className="text-primary italic">Tradition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every dish is a tribute to Telangana's culinary heritage. Here are some favorites our guests keep coming back for.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-md"
            >
              <div className="bg-primary/5 px-6 py-5 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-foreground">{cat.name}</h3>
                <span className="text-xs font-semibold bg-accent/20 text-accent-foreground px-3 py-1 rounded-full">
                  {cat.tag}
                </span>
              </div>
              <div className="divide-y divide-border/50">
                {cat.items.map((item) => (
                  <div key={item.name} className="px-6 py-5 hover:bg-secondary/30 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="text-primary font-bold font-display text-lg ml-4 shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-1 text-sm">
            <Star className="w-4 h-4 inline text-accent mr-1" />
            Prices are indicative. Visit us for the full menu experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
