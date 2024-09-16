import { TaskRow, TaskViewHeader } from '@/components';
import { TaskAccordion } from '@/components/TaskAccordion';
import { Images } from '@/lib';
import { Task } from '@/types';

const TaskView = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      details: 'Task 1 Details',
      tags: [],
      estimate: '4',
      user: {
        id: 1,
        name: 'User 1',
        avatar: Images.avatar,
        email: 'test@yopmail.com',
        role: 'Admin',
      },
      dueDate: '2025-02-01T08:30:00Z',
      color: 'primary-4',
    },
    {
      id: 2,
      title: 'Task 2',
      details: 'Task 2 Details',
      tags: [
        {
          id: 1,
          name: 'IOS APP',
          color: 'secondary-4',
        },
        {
          id: 2,
          name: 'Android APP',
          color: 'secondary-4',
        },
        {
          id: 3,
          name: 'Web APP',
          color: 'primary-4',
        },
      ],
      estimate: '4',
      user: {
        id: 2,
        name: 'User 2',
        avatar: Images.avatar,
        email: 'test@yopmail.com',
        role: 'Admin',
      },
      dueDate: '2025-01-15T12:00:00Z',
      color: 'secondary-4',
    },
    {
      id: 2,
      title: 'Task 3',
      details: 'Task 3 Details',
      tags: [],
      estimate: '2',
      user: {
        id: 2,
        name: 'User 2',
        avatar: Images.avatar,
        email: 'test@yopmail.com',
        role: 'Admin',
      },
      dueDate: '2025-12-31T23:59:59Z',
      color: 'tertiary-4',
    },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-scroll py-4">
      <TaskViewHeader />

      <div className="bg-neutral-4 mt-6">
        <TaskAccordion className="w-fit" title={`To Do (${tasks.length})`}>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TaskAccordion>
      </div>

      <div className="bg-neutral-4 mt-6">
        <TaskAccordion className="w-fit" title={`In Progress`}>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TaskAccordion>
      </div>

      <div className="bg-neutral-4 mt-6">
        <TaskAccordion className="w-fit" title={`Reviews`}>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TaskAccordion>
      </div>
    </div>
  );
};

export { TaskView };
