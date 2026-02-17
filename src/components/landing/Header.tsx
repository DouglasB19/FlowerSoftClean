import { useState } from "react";
import { MessageCircle, Menu, X, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Antes & Depois", href: "#antes-depois" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5511999261550?text=Olá! Gostaria de agendar uma limpeza.";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Flower2 className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl font-semibold text-foreground">
            Flower Soft Clean
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <Button className="bg-whatsapp hover:bg-whatsapp-dark text-primary-foreground gap-2 rounded-full px-6">
            <MessageCircle className="h-4 w-4" />
            Agende pelo WhatsApp
          </Button>
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-whatsapp hover:bg-whatsapp-dark text-primary-foreground gap-2 rounded-full px-6 mt-2">
                  <MessageCircle className="h-4 w-4" />
                  Agende pelo WhatsApp
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
