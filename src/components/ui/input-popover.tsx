import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import React from 'react';
import { Input } from './input';
import { cx } from 'class-variance-authority';

interface InputPopoverProps {
  value: string[];
  onChange: (value: string) => void;
  title: string;
  icon?: React.ReactNode;
  placeholder: string;
  className?: string;
}

const InputPopover = ({ value, onChange, title, icon, placeholder, className }: InputPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger className="flex flex-row items-center p-2 rounded-md gap-2 border-0 bg-[#94979A1A]">
        {icon && icon}
        {title}
      </PopoverTrigger>
      <PopoverContent>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cx('w-full py-5 border-neutral-1 border z-[9999] bg-neutral-4', className)}
        />
      </PopoverContent>
    </Popover>
  );
};

export { InputPopover };
