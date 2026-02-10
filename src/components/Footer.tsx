import belkaFe from "@/assets/belka-fe.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="section-container py-12">
        {/* EU logos banner */}
        <div className="flex justify-center mb-8">
          <img 
            src={belkaFe} 
            alt="Fundusze Europejskie dla Rozwoju Społecznego, Rzeczpospolita Polska, Dofinansowane przez Unię Europejską, PARP Grupa PFR" 
            className="max-w-full h-auto"
          />
        </div>

        {/* EU funding text */}
        <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
          Badanie realizowane w ramach projektu współfinansowanego ze środków 
          Europejskiego Funduszu Społecznego Plus w ramach programu 
          Fundusze Europejskie dla Rozwoju Społecznego 2021-2027.
        </p>

        {/* Links and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-6 border-t border-border">
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Polityka prywatności
            </a>
            <span className="text-border">|</span>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Informacja RODO
            </a>
            <span className="text-border">|</span>
            <a
              href="/List_zapowiedni_PARP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pismo PARP
            </a>
          </div>
          
          <span className="text-sm text-muted-foreground/70">
            © 2026 MCM Institute
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
