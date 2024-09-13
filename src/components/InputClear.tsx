import { cx } from 'class-variance-authority';
import { Input } from './ui';
import { GoXCircle } from 'react-icons/go';
import { colors } from '@/styles';
import { useState } from 'react';

interface InputClearProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputClassName?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputClear = ({ value, onChange, className, inputClassName, inputProps }: InputClearProps) => {
  const [isFocused, setFocused] = useState(false);
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={cx('w-full flex flex-row justify-between items-center', className)}>
      <Input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClassName}
        {...inputProps}
      />
      {(isFocused || value) && <GoXCircle color={colors['neutral-2']} size={24} className="cursor-pointer" onClick={handleClear} />}
    </div>
  );
};

export { InputClear };
