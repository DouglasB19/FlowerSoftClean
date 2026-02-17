import { motion } from "framer-motion";
import douglasImg from "@/assets/douglas.jpeg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">

          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Conheça nosso trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Quem cuida da sua casa
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-64 h-80 md:w-72 md:h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">

            <img

              alt="Douglas, fundador da Flower Soft Clean"
              className="w-full h-full object-cover object-top" src="/lovable-uploads/ef661c55-4bd7-4260-af8c-d88b42f2e920.jpg" />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center md:text-left">

            <h3 className="text-2xl font-bold text-foreground mb-1 font-display">Douglas</h3>
            <p className="text-sm text-primary font-medium mb-6">Fundador da Flower Soft Clean</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Por trás da Flower Soft Clean está Douglas, profissional dedicado à higienização de estofados.
              </p>
              <p>
                Atuando há mais de 1 ano na área, ele trabalha com responsabilidade, cuidado e respeito pelo lar de cada cliente.
              </p>
              <p>
                Seu compromisso é oferecer um serviço de qualidade, proporcionando mais saúde e conforto para toda a família.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;