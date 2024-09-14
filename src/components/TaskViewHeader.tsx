import { TableTitle, TaskViewTHeader } from '.';

const TaskViewHeader = () => {
  const tableHeaders = [
    {
      label: '# Task Name',
      className: 'min-w-[500px]',
    },
    {
      label: 'Task Tags',
      className: 'min-w-[168px]',
    },
    {
      label: 'Estimate',
      className: 'min-w-[140px]',
    },
    {
      label: 'Task Assign Name',
      className: 'min-w-[159px]',
    },
    {
      label: 'Due Date',
      className: 'min-w-[141px]',
    },
  ];

  return (
    <div className="w-fit flex flex-row bg-neutral-4">
      {tableHeaders.map((header, index) => (
        <TaskViewTHeader key={index} className={header.className}>
          <TableTitle label={header.label} />
        </TaskViewTHeader>
      ))}
    </div>
  );
};

export { TaskViewHeader };
