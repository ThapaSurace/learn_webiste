import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export type FaqItem = {
  value: string;
  question: string;
  answer: string;
};

interface FaqAccordionProps {
  items: FaqItem[];
  /** optional default item to open on first render */
  defaultValue?: string;
}

export default function FaqAccordion({ items, defaultValue }: FaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={defaultValue}
    >
      {items.map(({ value, question, answer }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
