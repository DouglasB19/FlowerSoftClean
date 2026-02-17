import { MessageCircle, Sparkles } from "lucide-react";
import sofaTitulo from "@/assets/sofa-titulo.jpeg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511999261550?text=Olá! Gostaria de agendar uma limpeza.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent via-background to-flower-soft opacity-60" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-flower-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Limpeza profissional de estofados
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Seu sofá como novo,{" "}
              <span className="text-primary">sem sair de casa</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 mx-auto lg:mx-0">
              Limpeza especializada de sofás, colchões, tapetes e cadeiras.
              Resultados surpreendentes com atendimento no conforto do seu lar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-whatsapp hover:bg-whatsapp-dark text-primary-foreground gap-2 rounded-full px-8 text-base h-12 w-full sm:w-auto shadow-lg shadow-whatsapp/25"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agende pelo WhatsApp
                </Button>
              </a>
              <a href="#antes-depois">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base h-12 w-full sm:w-auto"
                >
                  Ver resultados
                </Button>
              </a>
            </div>

          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl border border-border overflow-hidden shadow-2xl shadow-primary/10">
              <img src={sofaTitulo} alt="Sofá limpo após higienização profissional" className="w-full h-full object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-2 left-2 bg-card rounded-xl shadow-lg border border-border p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center">
                <span className="text-lg">⭐</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">4.9/5</p>
                <p className="text-xs text-muted-foreground">Avaliação média</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
