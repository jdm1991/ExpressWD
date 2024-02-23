import "../styles/q&a.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function QandAnswers() {
  return (
    <Accordion type="single" collapsible className="w-full pl-5 pr-5 py-5 bg-[#255036]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
        <AccordionContent className="text-white">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-white">Is it styled?</AccordionTrigger>
        <AccordionContent className="text-white">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-white">Is it animated?</AccordionTrigger>
        <AccordionContent className="text-white">
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
