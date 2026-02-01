import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="bg-muted/30">
      <div className="section-container">
        <div className="w-full">
          <h2 className="section-heading mb-8">Kontakt</h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Masz pytania? Skontaktuj się z nami.
          </p>
          
          <div className="space-y-4">
            <p className="text-muted-foreground font-medium text-primary">
              Help-desk:
            </p>
            
            <a
              href="tel:+48732144833"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <Phone className="w-5 h-5" />
              732 144 833
            </a>
            
            <div>
              <a
                href="mailto:ewaluacja@mcminstitute.com"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                ewaluacja@mcminstitute.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
