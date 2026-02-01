import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Dlaczego otrzymałem zaproszenie do badania?",
    answer: "Zaproszenie otrzymują osoby, które uczestniczyły w szkoleniach realizowanych w ramach konkursu 'GOZ - to się opłaca'. Twoja opinia jest kluczowa dla oceny skuteczności programu.",
  },
  {
    question: "Czy moje odpowiedzi są anonimowe?",
    answer: "Tak, badanie jest w pełni anonimowe. Wyniki prezentowane są wyłącznie w formie zbiorczej - nigdy indywidualnie.",
  },
  {
    question: "Ile czasu zajmie wypełnienie ankiety?",
    answer: "Ankieta zajmuje około 15 minut.",
  },
  {
    question: "Czy otrzymam wynagrodzenie za udział?",
    answer: "Udział w ankiecie nie jest wynagradzany.",
  },
  {
    question: "Kto ma dostęp do moich odpowiedzi?",
    answer: "Dostęp ma wyłącznie zespół badawczy MCM Institute. Dane są przechowywane zgodnie z RODO.",
  },
  {
    question: "Czy mogę zrezygnować w trakcie badania?",
    answer: "Tak, udział jest dobrowolny. Możesz zrezygnować w dowolnym momencie bez podawania przyczyny.",
  },
  {
    question: "Do kiedy mogę wypełnić ankietę?",
    answer: "Termin podany jest w zaproszeniu. Zachęcamy do szybkiego wypełnienia.",
  },
  {
    question: "Mam problemy techniczne. Co robić?",
    answer: "Skontaktuj się z naszym help-deskiem telefonicznie lub mailowo.",
  },
  {
    question: "Jak zostaną wykorzystane wyniki?",
    answer: "Wyniki posłużą do opracowania raportu z rekomendacjami dla PARP. Raport zostanie opublikowany.",
  },
  {
    question: "Co to jest 'GOZ - to się opłaca'?",
    answer: "Konkurs PARP oferujący szkolenia i doradztwo z gospodarki obiegu zamkniętego, współfinansowany z Funduszy Europejskich.",
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
