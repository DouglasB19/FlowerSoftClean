import { Sofa, BedDouble, RectangleHorizontal, Armchair, Car } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sofa,
    title: "Sofás",
    description: "Limpeza profunda que remove manchas, ácaros e maus odores, devolvendo a maciez e a cor original.",
  },
  {
    icon: BedDouble,
    title: "Colchões",
    description: "Higienização completa para noites de sono mais saudáveis, eliminando ácaros e bactérias.",
  },
  {
    icon: RectangleHorizontal,
    title: "Tapetes",
    description: "Lavagem especializada que revitaliza fibras e remove sujeiras profundas sem danificar o material.",
  },
  {
    icon: Armchair,
    title: "Cadeiras",
    description: "Limpeza cuidadosa de cadeiras de escritório, jantar e decorativas, como novas em minutos.",
  },
  {
    icon: Car,
    title: "Higienização Automotiva",
    description: "Limpeza completa de bancos, forros e carpetes do seu veículo, eliminando odores e manchas.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Cuidamos dos seus estofados
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Atendemos a domicílio com equipamentos profissionais e produtos de alta qualidade.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-display">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
