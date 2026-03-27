import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="visit" className="bg-warm-dark text-primary-foreground">
      {/* Map */}
      <div className="w-full h-[300px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.55!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x899e2f8a5b1c8d11!2sTelangana+Ruchulu!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Telangana Ruchulu location on Google Maps"
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Telangana <span className="text-accent">Ruchulu</span>
            </h3>
            <p className="text-primary-foreground/60 leading-relaxed mb-6">
              Authentic Telangana cuisine served with warmth and tradition. Where every meal feels like coming home.
            </p>
            <p className="text-primary-foreground/40 text-sm italic">
              "Ruchulu" means flavors — and that's exactly what we bring to your plate.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-primary-foreground/70 text-sm">
                  LB Nagar, Hyderabad,<br />Telangana, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Mon – Sun: 11:00 AM – 10:30 PM</p>
                  <p className="text-primary-foreground/50">Open all days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "About", "Menu", "Testimonials"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/60 text-sm hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-primary-foreground/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-primary-foreground/70" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Telangana Ruchulu. All rights reserved. Made with ❤️ and a lot of mirchi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
