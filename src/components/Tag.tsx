import { colors } from '@/styles';
import { cx } from 'class-variance-authority';
import React from 'react';

interface TagProps {
  label: string;
  type: 'neutral-1' | 'secondary-4' | 'tertiary-4' | 'primary-4';
  icon?: JSX.Element;
  className?: string;
}

const Tag = ({ label, type, icon, className }: TagProps) => {
  return (
    <div className={cx('flex flex-row items-center gap-2 px-2 py-1 rounded-2xl', `bg-${type}`, className)}>
      {icon &&
        React.cloneElement(icon, {
          color: colors[type],
          size: 18,
        })}
      <span className={`text-${type} font-semibold text-sm`}>{label}</span>
    </div>
  );
};

export { Tag };
