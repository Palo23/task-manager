import { TaskCard, TaskColumn } from '@/components';
import { Images } from '@/lib';
import { Task } from '@/types';

const TaskManager = () => {
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
    <div className="flex flex-row gap-2 overflow-x-scroll">
      <TaskColumn title="Working (03)">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} className="bg-neutral-4" />
        ))}
      </TaskColumn>

      <TaskColumn title="In Progress (03)">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} className="bg-neutral-4" />
        ))}
      </TaskColumn>

      <TaskColumn title="Completed (03)">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} className="bg-neutral-4" />
        ))}
      </TaskColumn>
    </div>
  );
};

export { TaskManager };
