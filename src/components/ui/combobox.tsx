import * as React from 'react';
import { ChevronsUpDown, Command } from 'lucide-react';

import { Button, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger } from '.';

interface ComboBoxProps {
  options: { label: string; value: string }[];
  title: string;
  icon?: React.ReactNode;
  onChange: (value: string) => void;
}

const ComboBox = ({ options, title, icon, onChange }: ComboBoxProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="border-0 bg-[#94979A1A]">
          {value ? (
            options.find((option) => option.value === value)?.label
          ) : (
            <div className="flex items-center">
              {icon && icon}
              {`Select ${title}...`}
            </div>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${title}`} />
          <CommandList>
            <CommandEmpty>No ${title?.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {icon && icon}
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export { ComboBox };
