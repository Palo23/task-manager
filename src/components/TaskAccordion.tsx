import { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, TableTitle } from '.';

interface TaskAccordionProps {
  title: string;
  children: ReactNode;
}

const TaskAccordion = ({ title, children }: TaskAccordionProps) => {
  return (
    <Accordion className="bg-neutral-4 px-3" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-neutral-1 gap-2">
          <TableTitle label={title} />
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { TaskAccordion };
