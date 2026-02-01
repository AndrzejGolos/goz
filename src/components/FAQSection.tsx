import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Dlaczego otrzymałem zaproszenie do badania?",
    answer: "Zaproszenie otrzymują osoby, które uczestniczyły w szkoleniach realizowanych w ramach konkursu 'GOZ - to się opłaca'. Twoja opinia jako uczestnika szkolenia jest kluczowa dla oceny skuteczności programu i przygotowania lepszych programów wsparcia w przyszłości.",
  },
  {
    question: "Czy moje odpowiedzi są anonimowe?",
    answer: "Tak, badanie jest w pełni anonimowe. Twoje odpowiedzi nie będą powiązane z Twoimi danymi osobowymi, a wyniki będą prezentowane wyłącznie w formie zbiorczej - nigdy indywidualnie.",
  },
  {
    question: "Ile czasu zajmie wypełnienie ankiety?",
    answer: "Wypełnienie ankiety zajmuje około 15 minut.",
  },
  {
    question: "Czym różni się ankieta online od telefonicznej?",
    answer: "Ankietę online (CAWI) wypełniasz samodzielnie na komputerze lub telefonie. Ankieta telefoniczna (CATI) to rozmowa z ankieterem, który zadaje te same pytania. Kontaktujemy się telefonicznie tylko z osobami, które nie wypełniły ankiety online.",
  },
  {
    question: "Czy otrzymam wynagrodzenie za udział?",
    answer: "Udział w badaniu nie jest wynagradzany. Twój wkład to cenny głos, który pomoże ulepszyć przyszłe programy wsparcia dla przedsiębiorstw.",
  },
  {
    question: "Kto ma dostęp do moich odpowiedzi?",
    answer: "Dostęp do surowych danych z badania ma wyłącznie zespół badawczy MCM Institute. Dane są przechowywane zgodnie z przepisami RODO i przekazywane PARP wyłącznie w formie zagregowanej.",
  },
  {
    question: "Czy mogę zrezygnować w trakcie badania?",
    answer: "Tak, udział w badaniu jest całkowicie dobrowolny. Możesz zrezygnować w dowolnym momencie bez podawania przyczyny i bez żadnych konsekwencji.",
  },
  {
    question: "Do kiedy mogę wypełnić ankietę?",
    answer: "Termin zakończenia zbierania odpowiedzi podany jest w zaproszeniu do badania. Zachęcamy do wypełnienia ankiety jak najszybciej po otrzymaniu zaproszenia - pomaga nam to w sprawnej realizacji projektu.",
  },
  {
    question: "Mam problemy techniczne. Co robić?",
    answer: "W przypadku problemów technicznych prosimy o kontakt telefoniczny lub mailowy z naszym help-deskiem. Dane kontaktowe znajdziesz w sekcji Kontakt poniżej.",
  },
  {
    question: "Jak zostaną wykorzystane wyniki badania?",
    answer: "Wyniki badania posłużą do opracowania raportu ewaluacyjnego dla PARP zawierającego wnioski i rekomendacje dotyczące przyszłych programów wsparcia w obszarze zielonej gospodarki. Raport zostanie opublikowany.",
  },
  {
    question: "Co to jest 'GOZ - to się opłaca'?",
    answer: "'GOZ - to się opłaca' to konkurs realizowany przez PARP w ramach programu Fundusze Europejskie dla Rozwoju Społecznego. Projekty w ramach konkursu oferują szkolenia i doradztwo dla przedsiębiorstw z zakresu gospodarki obiegu zamkniętego i rozwiązań niskoemisyjnych.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background">
      <div className="section-container">
        <h2 className="section-heading mb-12">
          Najczęściej zadawane pytania
        </h2>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
