import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound, TaskManager } from '../pages';

function RoutesProvider() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <TaskManager />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export { RoutesProvider };
