import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import Recycling from './screens/Recycling';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: 'recycling',
    element: <Recycling />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;