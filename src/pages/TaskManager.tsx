import { TopNavigationBar } from '@/components';

const TaskManager = () => {
  return (
    <div className="w-full flex flex-row p-6">
      <div className="w-1/4">
        {/* TODO: Add sidebar */}
        <h1>Sidebar</h1>
      </div>
      <div className="w-full lg:w-3/4">
        <TopNavigationBar />
      </div>
    </div>
  );
};

export { TaskManager };
