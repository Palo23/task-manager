import { Images } from '@/lib';
import { cx } from 'class-variance-authority';
import { IoGridOutline } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import { useState } from 'react';
import { SideBarItem } from './SideBarItem';

interface SideBarProps {
  className?: string;
}

const menuItems = [
  {
    id: 1,
    icon: <IoGridOutline />,
    label: 'DASHBOARD',
    redirect: '/',
  },
  {
    id: 2,
    icon: <IoIosMenu />,
    label: 'MY TASK',
    redirect: '/my-tasks',
  },
];

const SideBar = ({ className }: SideBarProps) => {
  const [active, setActive] = useState(1);

  return (
    <div className={cx('h-screen bg-neutral-4 rounded-3xl w-full', className)}>
      <div className="flex flex-row justify-center items-center p-6">
        <img src={Images.logo} alt="RAVN Logo" className="w-10 h-10" />
      </div>

      <ul>
        {menuItems.map((item) => (
          <SideBarItem
            key={item.id}
            icon={item.icon}
            redirect={item.redirect}
            label={item.label}
            active={active === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export { SideBar };
