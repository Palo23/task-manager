import { SideBar } from '@/components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="w-full flex flex-row p-6 gap-4">
      <div className="hidden lg:flex lg:w-1/4">
        <SideBar />
      </div>
      <div className="w-full lg:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export { MainLayout };
