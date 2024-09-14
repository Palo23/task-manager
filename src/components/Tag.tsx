import { colors } from '@/styles';
import { cx } from 'class-variance-authority';
import React from 'react';

interface TagProps {
  label: string;
  type: 'neutral-1' | 'secondary-4' | 'tertiary-4' | 'primary-4';
  icon?: JSX.Element;
  className?: string;
}

const borderClasses = {
  'neutral-1': 'border-neutral-1',
  'secondary-4': 'border-secondary-4',
  'tertiary-4': 'border-tertiary-4',
  'primary-4': 'border-primary-4',
};

const textClasses = {
  'neutral-1': 'text-neutral-1',
  'secondary-4': 'text-secondary-4',
  'tertiary-4': 'text-tertiary-4',
  'primary-4': 'text-primary-4',
};

const Tag = ({ label, type, icon, className }: TagProps) => {
  return (
    <div
      className={cx(
        'bg-[#94979A1A] flex flex-row items-center gap-2 px-2 py-1 rounded-md',
        borderClasses[type],
        icon ? 'justify-start' : 'justify-center',
        className
      )}
    >
      {icon &&
        React.cloneElement(icon, {
          color: colors[type],
          size: 18,
        })}
      <span className={`${textClasses[type]} font-semibold text-body-m text-center`}>{label}</span>
    </div>
  );
};

export { Tag };
