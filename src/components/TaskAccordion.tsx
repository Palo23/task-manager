import { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, TableTitle } from '.';
import { cx } from 'class-variance-authority';

interface TaskAccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TaskAccordion = ({ title, children, className }: TaskAccordionProps) => {
  return (
    <Accordion className={cx('bg-neutral-4', className)} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-neutral-1 gap-2 px-3">
          <TableTitle label={title} />
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { TaskAccordion };
