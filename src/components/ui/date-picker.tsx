import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
}

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('justify-start text-left font-normal text-neutral-1 border-0 bg-[#94979A1A]', !value && 'text-muted-foreground')}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-neutral-1" />
          {value ? format(value, 'PPP') : <span className="text-neutral-1">Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          className="bg-neutral-4 border-0 text-neutral-1"
          mode="single"
          selected={value}
          onSelect={(selectedDate) => {
            onChange(selectedDate as Date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
