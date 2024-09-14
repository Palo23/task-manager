import { Tag, User } from '.';

export type Task = {
  id: number;
  title: string;
  details: string;
  tags: Tag[];
  estimate: string;
  user: User;
  dueDate: timestamp;
  color: 'neutral-1' | 'secondary-4' | 'tertiary-4' | 'primary-4';
};
