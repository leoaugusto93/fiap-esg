import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './screens/Login';
import Home from './screens/Home';
import NotFound from './screens/NotFound';

const router = createBrowserRouter ([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Login />,
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