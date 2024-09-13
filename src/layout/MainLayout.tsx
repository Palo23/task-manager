import { NavigationBar, SideBar, TopNavigationBar } from '@/components';
import { Menu } from '@/types';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoGridOutline } from 'react-icons/io5';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [active, setActive] = useState(1);

  const menuItems: Menu[] = [
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

  return (
    <div className="w-full flex flex-row p-6 gap-4">
      <div className="hidden lg:flex lg:w-1/4">
        <SideBar items={menuItems} activeElement={active} setActive={setActive} />
      </div>
      <div className="w-full lg:w-3/4">
        <TopNavigationBar />
        <NavigationBar items={menuItems} activeElement={active} setActive={setActive} />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
