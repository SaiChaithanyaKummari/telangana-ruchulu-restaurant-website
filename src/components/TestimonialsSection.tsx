import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Reddy",
    role: "Regular Customer",
    text: "The Naatu Kodi Pulusu here tastes exactly like my grandmother's cooking. I've tried many Telangana restaurants in Hyderabad, but nothing comes close to this. My family's go-to spot for Sunday lunches!",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "College Student",
    text: "As a student, I need food that's filling, affordable, and tastes like home. Telangana Ruchulu nails all three. The mutton curry with rice is my comfort meal after a long day of classes.",
    rating: 5,
  },
  {
    name: "Sravani & Karthik",
    role: "Family Diners",
    text: "We celebrated our anniversary here — the ambiance is beautiful, the staff is warm, and the food? Outstanding. The Gutti Vankaya was the star of the evening. Highly recommend for family gatherings!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            What Our Guests Say
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Loved by <span className="text-primary italic">Hundreds</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-md border border-border/50 relative"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
