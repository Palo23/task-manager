import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound, TaskManager, TaskView } from '../pages';
import { MainLayout } from '@/layout';

function RoutesProvider() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <TaskManager />,
        },
        {
          path: '/my-tasks',
          element: <TaskView />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export { RoutesProvider };
