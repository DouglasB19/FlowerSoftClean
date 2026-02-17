import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511999261550?text=Olá! Gostaria de agendar uma limpeza.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:scale-110 transition-all"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
