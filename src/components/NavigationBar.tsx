import { colors } from '@/styles';
import { Menu } from '@/types';
import { cx } from 'class-variance-authority';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FormDialog, TaskForm } from '.';
import { GoPlus } from 'react-icons/go';

interface NavigationBarProps {
  items: Menu[];
  activeElement: number;
  setActive: (id: number) => void;
  className?: string;
}

const NavigationBar = ({ items, activeElement, setActive, className }: NavigationBarProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleClick = (item: Menu) => {
    setActive(item.id);
    if (item.redirect) {
      navigate(item.redirect);
    }
  };

  return (
    <div className={cx('flex flex-row items-center justify-between mt-4', className)}>
      <div className="flex flex-row gap-2 items-center">
        {items
          .map((item) => (
            <Button
              variant={activeElement === item.id ? 'outline' : 'ghost'}
              key={item.id}
              onClick={() => handleClick(item)}
              className={cx('cursor-pointer p-2', activeElement === item.id ? 'border-primary-4' : 'hover:border-primary-4')}
            >
              {React.cloneElement(item.icon as React.ReactElement, {
                color: colors[activeElement === item.id ? 'primary-4' : 'neutral-2'],
                size: 24,
              })}
            </Button>
          ))
          .reverse()}
      </div>

      <Button variant={'primary'} size={'icon'} onClick={() => setOpenDialog(true)}>
        <GoPlus color={colors['neutral-1']} />
      </Button>

      <FormDialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <TaskForm handleSubmit={() => setOpenDialog(false)} handleCancel={() => setOpenDialog(false)} />
      </FormDialog>
    </div>
  );
};

export { NavigationBar };
