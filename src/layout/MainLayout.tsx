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
    <div className="w-full h-screen p-6">
      <div className="flex flex-row gap-4 h-full">
        <div className="hidden md:flex md:w-1/3 lg:w-1/4">
          <SideBar items={menuItems} activeElement={active} setActive={setActive} />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4">
          <TopNavigationBar />
          <NavigationBar items={menuItems} activeElement={active} setActive={setActive} />

          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
