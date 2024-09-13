import { cx } from 'class-variance-authority';

interface TableTitleProps {
  label: string;
  className?: string;
}

const TableTitle = ({ label, className }: TableTitleProps) => {
  return <p className={cx('text-neutral-1 text-body-m', className)}>{label}</p>;
};

export { TableTitle };
