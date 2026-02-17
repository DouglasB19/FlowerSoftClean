import { Flower2, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/[0.03] border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Flower2 className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-semibold text-foreground">
                Flower Soft Clean
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Especialistas em limpeza de estofados. Seu conforto é a nossa prioridade.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-foreground">Navegação</p>
            <nav className="flex flex-col gap-2">
              <a href="#servicos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>
              <a href="#antes-depois" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Antes & Depois
              </a>
              <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-foreground">Redes sociais</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/flowersoftclean2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588147073477"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Flower Soft Clean. CNPJ: 61.850.279/0001-97. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
