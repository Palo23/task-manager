import { colors } from '@/styles';
import { cx } from 'class-variance-authority';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SideBarItemProps {
  icon: React.ReactNode;
  label: string;
  redirect?: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
}

const SideBarItem = ({ icon, label, redirect, onClick, active = false, className }: SideBarItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    if (redirect) {
      navigate(redirect);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={cx(
        'cursor-pointer flex flex-row items-center pl-3 gap-4 py-4',
        active ? 'bg-li-gradient border-r-2 border-primary-4' : '',
        className
      )}
    >
      {React.cloneElement(icon as React.ReactElement, {
        color: colors[active ? 'primary-4' : 'neutral-2'],
        size: 24,
      })}
      <p className={`${active ? 'text-primary-4' : 'text-neutral-2'}`}>{label}</p>
    </li>
  );
};

export { SideBarItem };
