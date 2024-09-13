import { cx } from 'class-variance-authority';
import { ReactNode } from 'react';

interface TaskViewHeaderProps {
  children: ReactNode;
  className?: string;
}

const TaskViewTHeader = ({ children, className }: TaskViewHeaderProps) => {
  return <div className={cx('flex items-center border border-neutral-3 p-4', className)}>{children}</div>;
};

export { TaskViewTHeader };
