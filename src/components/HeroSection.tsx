import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("o-badaniu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient min-h-[85vh] flex items-center">
      <div className="section-container w-full">
        <div className="max-w-4xl animate-fade-up">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide uppercase mb-6">
            Badanie ewaluacyjne
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-8">
            Badanie ewaluacyjne szkoleń z&nbsp;zakresu zielonej gospodarki
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Twoja opinia pomoże ulepszyć przyszłe programy wsparcia dla przedsiębiorstw 
            w&nbsp;obszarze gospodarki obiegu zamkniętego i&nbsp;niskoemisyjności. 
            Wypełnienie ankiety zajmie około 20&nbsp;minut.
          </p>
          
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToAbout}
            className="group"
          >
            Dowiedz się więcej
            <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;