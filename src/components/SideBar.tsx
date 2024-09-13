import { Images } from '@/lib';
import { cx } from 'class-variance-authority';
import { SideBarItem } from './SideBarItem';
import { Menu } from '@/types';

interface SideBarProps {
  items: Menu[];
  activeElement: number;
  setActive: (id: number) => void;
  className?: string;
}

const SideBar = ({ items, activeElement, setActive, className }: SideBarProps) => {
  return (
    <div className={cx('h-screen bg-neutral-4 rounded-3xl w-full', className)}>
      <div className="flex flex-row justify-center items-center p-6">
        <img src={Images.logo} alt="RAVN Logo" className="w-10 h-10" />
      </div>

      <ul>
        {items.map((item) => (
          <SideBarItem
            key={item.id}
            icon={item.icon}
            redirect={item.redirect}
            label={item.label}
            active={activeElement === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export { SideBar };
