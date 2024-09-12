import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import AddProduct from './products/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "addProduct",
    element: <AddProduct />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
)
