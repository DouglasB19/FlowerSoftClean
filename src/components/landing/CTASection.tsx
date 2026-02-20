import { MessageCircle, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5511999261550?text=Olá! Gostaria de agendar uma limpeza.";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent to-flower-soft/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Pronto para transformar{" "}
            <span className="text-primary">seus estofados?</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 mb-10">
            Entre em contato agora e agende sua limpeza. Atendimento rápido,
            prático e com resultados que você vai amar.
          </p>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-dark text-primary-foreground gap-3 rounded-full px-10 text-lg h-14 shadow-xl shadow-whatsapp/25 hover:shadow-2xl hover:shadow-whatsapp/30 transition-all"
            >
              <MessageCircle className="h-6 w-6" />
              Fale conosco no WhatsApp
            </Button>
          </a>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">Horário</p>
              <p className="text-xs text-muted-foreground">Agenda 100% flexível — você escolhe o dia e a hora.</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">Região</p>
              <p className="text-xs text-muted-foreground">Levamos nosso serviço até você em São Paulo e arredores.</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">Contato</p>
              <p className="text-xs text-muted-foreground">(11) 99926-1550</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
