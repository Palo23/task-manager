import { IoGridOutline } from 'react-icons/io5';
import { Tabs, TabsList, TabsTrigger } from '.';
import { IoIosAddCircleOutline, IoIosMenu } from 'react-icons/io';

const NavTabs = () => {
  return (
    <Tabs defaultValue="dashboard" className="w-screen h-fit bg-neutral-4">
      <TabsList className="w-full h-10 bg-neutral-4 py-12">
        <TabsTrigger value="dashboard" className="w-full flex flex-col gap-1">
          <IoGridOutline size={24} />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="addproject" className="w-full flex flex-col gap-1">
          <IoIosAddCircleOutline size={24} />
          Add Project
        </TabsTrigger>
        <TabsTrigger value="mytask" className="w-full flex flex-col gap-1">
          <IoIosMenu size={24} />
          My Task
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export { NavTabs };
