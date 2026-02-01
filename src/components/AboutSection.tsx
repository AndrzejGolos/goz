const AboutSection = () => {
  return (
    <section id="o-badaniu" className="bg-background">
      <div className="section-container">
        <div className="w-full">
          <h2 className="section-heading mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            O badaniu
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Na zlecenie Polskiej Agencji Rozwoju Przedsiębiorczości (PARP) realizujemy 
              ewaluację programu wsparcia przedsiębiorstw w zakresie zielonej gospodarki. 
              Badanie dotyczy szkoleń realizowanych w ramach konkursu 
              <span className="font-semibold text-primary">&nbsp;„GOZ - to się opłaca"&nbsp;</span> 
              w programie Fundusze Europejskie dla Rozwoju Społecznego 2021-2027.
            </p>
            
            <p className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Celem badania jest ocena, w jakim stopniu szkolenia odpowiadają na potrzeby 
              przedsiębiorstw, jak zdobyte kompetencje są wykorzystywane w praktyce 
              oraz jakie przynoszą efekty.
            </p>
            
            <div 
              className="pt-8 border-t border-border animate-fade-up" 
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-sm text-muted-foreground/80">
                Badanie realizuje <span className="font-medium text-secondary">MCM Institute</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;