import { Task } from '@/types';
import { cx } from 'class-variance-authority';
import { AvatarComponent, TableTitle, TaskTags, TaskViewTHeader } from '.';
import moment from 'moment';

interface TaskRowProps {
  task: Task;
  className?: string;
}

const borderLClasses = {
  'neutral-1': 'border-l-neutral-1',
  'secondary-4': 'border-l-secondary-4',
  'tertiary-4': 'border-l-tertiary-4',
  'primary-4': 'border-l-primary-4',
};

const TaskRow = ({ task, className }: TaskRowProps) => {
  return (
    <div className={cx('flex flex-row bg-neutral-4', className)}>
      <TaskViewTHeader className={`min-w-[500px] border-l-4 ${borderLClasses[task.color]} : ''}`}>
        <TableTitle label={task.title} />
      </TaskViewTHeader>

      <TaskViewTHeader className={'min-w-[168px]'}>
        <TaskTags tags={task.tags} />
      </TaskViewTHeader>

      <TaskViewTHeader className={'min-w-[140px]'}>
        <TableTitle label={`${task.estimate} Points`} />
      </TaskViewTHeader>

      <TaskViewTHeader className={'min-w-[159px]'}>
        <div className="flex flex-row items-center gap-2">
          <AvatarComponent src={task?.user?.avatar} alt={task?.user?.name} avatarClassName="w-8 h-8" />
          <TableTitle label={task?.user?.name} />
        </div>
      </TaskViewTHeader>

      <TaskViewTHeader className={'min-w-[141px]'}>
        <TableTitle label={moment(task.dueDate).fromNow()} />
      </TaskViewTHeader>
    </div>
  );
};

export { TaskRow };
