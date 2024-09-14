import { Task } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui';
import { BsThreeDots } from 'react-icons/bs';
import { colors } from '@/styles';
import { AvatarComponent } from './AvatarComponent';
import { GoPaperclip } from 'react-icons/go';
import { PiGitBranch } from 'react-icons/pi';
import { cx } from 'class-variance-authority';
import { FaRegComment } from 'react-icons/fa';
import { Tag } from '.';
import moment from 'moment';
import { IoMdAlarm } from 'react-icons/io';

interface TaskCardProps {
  task: Task;
  className?: string;
}

const TaskCard = ({ task, className }: TaskCardProps) => {
  return (
    <Card className={cx('w-full bg-neutral-4 border-0 rounded-lg', className)}>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-body-l text-neutral-1">{task.title}</CardTitle>
        <BsThreeDots color={colors['neutral-2']} size={18} />
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <span className="text-body-m text-neutral-1">{task.estimate} Points</span>
          <Tag label={moment(task.dueDate).fromNow()} icon={<IoMdAlarm />} type="neutral-1" />
        </div>

        <div className="grid grid-cols-12 items-center gap-2 mt-3">
          {task.tags.map((tag) => (
            <div className="col-span-6">
              <Tag key={tag.id} label={tag.name} type={tag.color} />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center">
        <AvatarComponent src={task?.user?.avatar} alt={task?.user?.name} avatarClassName="w-8 h-8" />

        <div className="flex flex-row gap-3 justify-end items-center">
          <GoPaperclip color={colors['neutral-1']} size={11} />

          <div className="flex flex-row items-center gap-1">
            <span className="text-neutral-1 text-sm">5</span>
            <PiGitBranch color={colors['neutral-1']} size={11} />
          </div>

          <div className="flex flex-row items-center gap-1">
            <span className="text-neutral-1 text-sm">3</span>
            <FaRegComment color={colors['neutral-1']} size={11} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export { TaskCard };
