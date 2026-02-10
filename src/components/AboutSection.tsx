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
              <p className="text-base text-muted-foreground">
                Badanie realizuje <span className="font-semibold text-secondary">MCM Institute</span> na zlecenie
                Polskiej Agencji Rozwoju Przedsiębiorczości.
              </p>
              <a
                href="/List_zapowiedni_PARP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-5 py-3 text-base font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Pismo przewodnie PARP (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;