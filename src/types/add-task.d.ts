export type AddTask = {
  title: string;
  label: string[];
  estimate: string;
  assignee: string | number;
  dueDate: timestamp;
};
