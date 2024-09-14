import { cx } from 'class-variance-authority';
import { ReactNode } from 'react';

interface TaskColumnProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const TaskColumn = ({ title, children, className }: TaskColumnProps) => {
  return (
    <div className={cx('min-w-[348px] p-4 space-y-4', className)}>
      <p className="text-neutral-1 text-body-l font-semibold">{title}</p>
      {children}
    </div>
  );
};

export { TaskColumn };
