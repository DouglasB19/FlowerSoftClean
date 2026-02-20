import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  time: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrea Silva",
    message: "Olá profissionais responsáveis, trabalho maravilhoso, super indico a empresa flower soft clean. Pode confiar 😍",
    time: "09:47",
    rating: 5,
  },
  {
    id: 2,
    name: "Joana Lima",
    message: "Fez um ótimo trabalho nas minhas cadeiras. Parecem novas de novo. Muito bom 👏👏",
    time: "21:23",
    rating: 5,
  },
  {
    id: 3,
    name: "Giovanni Vaughan",
    message: "Excelente profissional, deixou meu sofá limpinho!! Equipamento profissional.",
    time: "20:15",
    rating: 5,
  },
  {
    id: 4,
    name: "Murilo Vieira",
    message: "Douglas é um profissional muito competente e honesto.",
    time: "23:21",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Feedback real dos nossos clientes via WhatsApp. Sua satisfação é nossa prioridade.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={item}
              className="flex flex-col"
            >
              {/* WhatsApp-style card */}
              <div className="bg-card rounded-2xl border border-border p-1 shadow-sm hover:shadow-md transition-shadow">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                  <div className="w-9 h-9 rounded-full bg-whatsapp/15 flex items-center justify-center text-sm font-bold text-whatsapp-dark">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < t.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chat bubble */}
                <div className="p-4">
                  <div className="relative bg-whatsapp-bubble rounded-xl rounded-tl-sm px-4 py-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      {t.message}
                    </p>
                    <div className="flex justify-end mt-1">
                      <span className="text-[10px] text-muted-foreground">
                        {t.time} ✓✓
                      </span>
                    </div>
                    {/* Bubble tail */}
                    <div className="absolute -top-0 -left-1.5 w-3 h-3 bg-whatsapp-bubble" style={{
                      clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                    }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
