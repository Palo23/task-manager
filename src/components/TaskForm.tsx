import { AddTask, Task } from '@/types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { cx } from 'class-variance-authority';
import { Button, ComboBox, DatePicker, Input, InputPopover } from '.';
import { PiPlusMinusFill } from 'react-icons/pi';
import { colors } from '@/styles';
import { FaUser } from 'react-icons/fa';
import { AiOutlineTag } from 'react-icons/ai';

interface TaskFormProps {
  handleSubmit: (task: AddTask) => void;
  handleCancel: () => void;
  task?: Task;
  className?: string;
}

const TaskForm = ({ handleSubmit, handleCancel, className }: TaskFormProps) => {
  const initialValues: AddTask = {
    title: '',
    estimate: '0',
    dueDate: '',
    label: [],
    assignee: 0,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    estimate: Yup.number().required('Estimate is required'),
    dueDate: Yup.string().required('Due date is required'),
  });

  const onSubmit = (values: AddTask) => {
    handleSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={cx('flex flex-col gap-4', className)}>
          <div className="w-full flex flex-col gap-4">
            <Input
              className="text-body-l text-neutral-1"
              placeholder="Task Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && <span className="text-primary-4 text-body-s">{errors.title}</span>}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-2 items-center ">
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <ComboBox
                icon={<PiPlusMinusFill color={colors['neutral-1']} size={18} />}
                title="Estimate"
                options={[
                  {
                    label: '0 Points',
                    value: '0',
                  },
                  {
                    label: '1 Point',
                    value: '1',
                  },
                  {
                    label: '2 Points',
                    value: '2',
                  },
                  {
                    label: '4 Points',
                    value: '4',
                  },
                  {
                    label: '8 Points',
                    value: '8',
                  },
                ]}
                onChange={(value) => {
                  handleChange({
                    target: {
                      name: 'estimate',
                      value,
                    },
                  });
                }}
              />
              {errors.estimate && touched.estimate && <span className="text-primary-4 text-body-s">{errors.estimate}</span>}
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <ComboBox
                icon={<FaUser color={colors['neutral-1']} size={18} />}
                title="Assignee"
                options={[
                  {
                    label: '0 Points',
                    value: '0',
                  },
                  {
                    label: '1 Point',
                    value: '1',
                  },
                  {
                    label: '2 Points',
                    value: '2',
                  },
                  {
                    label: '4 Points',
                    value: '4',
                  },
                  {
                    label: '8 Points',
                    value: '8',
                  },
                ]}
                onChange={(value) => {
                  handleChange({
                    target: {
                      name: 'estimate',
                      value,
                    },
                  });
                }}
              />
              {errors.estimate && touched.estimate && <span className="text-error text-body-s">{errors.estimate}</span>}
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <InputPopover
                title="Label"
                icon={<AiOutlineTag color={colors['neutral-1']} size={18} />}
                value={values.label}
                onChange={(value) => {
                  handleChange({
                    ...values.label,
                    target: {
                      name: 'label',
                      value,
                    },
                  });
                }}
                placeholder="Add Label"
              />
              {errors.estimate && touched.estimate && <span className="text-error text-body-s">{errors.estimate}</span>}
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <DatePicker
                onChange={(date: Date) => {
                  handleChange({
                    target: {
                      name: 'dueDate',
                      value: date,
                    },
                  });
                }}
                value={values.dueDate}
              />
              {errors.dueDate && touched.dueDate && <span className="text-error text-body-s">{errors.dueDate}</span>}
            </div>
          </div>

          <div className="flex flex-row justify-end items-center gap-2 mt-4">
            <Button type="submit" variant={'outline'} size={'lg'} onClick={handleCancel} className="text-neutral-1">
              Cancel
            </Button>
            <Button type="submit" variant={'primary'} size={'lg'}>
              Create
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export { TaskForm };
