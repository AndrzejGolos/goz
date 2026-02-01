import { Monitor, Phone } from "lucide-react";

const participationMethods = [
  {
    icon: Monitor,
    title: "Ankieta online",
    subtitle: "~15 minut",
    text: "Ankieta internetowa dostępna na komputerze lub telefonie",
  },
  {
    icon: Phone,
    title: "Ankieta telefoniczna",
    subtitle: "~15 minut",
    text: "Rozmowa telefoniczna z przeszkolonym ankieterem",
  },
];

const ParticipationSection = () => {
  return (
    <section id="udzial" className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-heading mb-12">
          Jak wygląda udział w badaniu?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mb-10">
          {participationMethods.map((method, index) => (
            <div
              key={method.title}
              className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 p-6 lg:p-8 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <method.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-1">
                {method.title}
              </h3>
              
              <span className="inline-block text-sm font-medium text-secondary mb-3">
                {method.subtitle}
              </span>
              
              <p className="text-muted-foreground leading-relaxed">
                {method.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground/80 text-center max-w-2xl mx-auto">
          Udział w badaniu jest całkowicie dobrowolny i anonimowy. 
          Wszystkie odpowiedzi są poufne.
        </p>
      </div>
    </section>
  );
};

export default ParticipationSection;
