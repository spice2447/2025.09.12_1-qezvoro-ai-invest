// src/components/about/Roadmap.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Roadmap({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">{dictionary?.title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {dictionary?.plans?.map((plan: any, index: number) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-xl">{plan.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {plan.goals.map((goal: string, goalIndex: number) => (
                    <li key={goalIndex}>{goal}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}