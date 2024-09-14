import { Tag } from '@/types';
import { cx } from 'class-variance-authority';
import { Tag as TagComponent } from '.';

interface TaskViewHeaderProps {
  tags: Tag[];
  className?: string;
}

const TaskTags = ({ tags, className }: TaskViewHeaderProps) => {
  return (
    <div className={cx('flex items-center gap-2', className)}>
      {tags.length > 0 && (
        <>
          <TagComponent key={tags[0].id} label={tags[0].name} type={tags[0].color} />
          {tags.length > 1 && <TagComponent key="more-tags" label={`+${tags.length - 1}`} type="neutral-1" />}
        </>
      )}
    </div>
  );
};

export { TaskTags };
