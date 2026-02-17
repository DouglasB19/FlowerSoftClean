import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import sofaAntes from "@/assets/sofa-antes.jpeg";
import sofaDepois from "@/assets/sofa-depois.jpeg";
import tapeteAntes from "@/assets/tapete-antes.jpeg";
import tapeteDepois from "@/assets/tapete-depois.jpeg";
import colchaoAntes from "@/assets/colchao-antes.jpeg";
import colchaoDepois from "@/assets/colchao-depois.jpeg";
import cadeiraAntes from "@/assets/cadeira-antes.jpeg";
import cadeiraDepois from "@/assets/cadeira-depois.jpeg";
import carroAntes from "@/assets/carro-antes.jpeg";
import carroDepois from "@/assets/carro-depois.jpeg";

interface BeforeAfterItem {
  id: number;
  label: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage?: string;
  afterImage?: string;
}

const comparisons: BeforeAfterItem[] = [
  { id: 1, label: "Sofá de tecido", beforeLabel: "Antes", afterLabel: "Depois", beforeImage: sofaAntes, afterImage: sofaDepois },
  { id: 2, label: "Colchão casal", beforeLabel: "Antes", afterLabel: "Depois", beforeImage: colchaoAntes, afterImage: colchaoDepois },
  { id: 3, label: "Tapete sala", beforeLabel: "Antes", afterLabel: "Depois", beforeImage: tapeteAntes, afterImage: tapeteDepois },
  { id: 4, label: "Cadeira sala", beforeLabel: "Antes", afterLabel: "Depois", beforeImage: cadeiraAntes, afterImage: cadeiraDepois },
  { id: 5, label: "Carpete carro", beforeLabel: "Antes", afterLabel: "Depois", beforeImage: carroAntes, afterImage: carroDepois },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BeforeAfterSection = () => {
  return (
    <section id="antes-depois" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Resultados reais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Antes & Depois
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Veja a transformação que fazemos nos seus estofados. Os resultados falam por si.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {comparisons.map((comp) => (
            <motion.div
              key={comp.id}
              variants={item}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Label */}
              <div className="px-5 py-3 bg-accent/50 border-b border-border">
                <p className="text-sm font-semibold text-foreground">{comp.label}</p>
              </div>

              {/* Before / After Grid */}
              <div className="grid grid-cols-2 relative">
                {/* Before */}
                <div className="relative aspect-[3/3] bg-muted">
                  {comp.beforeImage ? (
                    <img src={comp.beforeImage} alt={`${comp.label} - Antes`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-destructive">A</span>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">
                        Foto antes
                      </p>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 bg-foreground/70 text-background text-xs font-medium px-2 py-0.5 rounded-full">
                    {comp.beforeLabel}
                  </span>
                </div>

                {/* Divider Arrow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </div>

                {/* After */}
                <div className="relative aspect-[3/3] bg-accent">
                  {comp.afterImage ? (
                    <img src={comp.afterImage} alt={`${comp.label} - Depois`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">D</span>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">
                        Foto depois
                      </p>
                    </div>
                  )}
                  <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                    {comp.afterLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
