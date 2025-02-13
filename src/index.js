import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Admin from "./pages/AddNewProduct";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";
import ProtectedRoute from './pages/ProtectedRoute';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element:<Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/carts', element:( 
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute> 
        )
      },
      { path: '/admin/product', element:(
          <ProtectedRoute reqiredAdmin>
            <Admin />
          </ProtectedRoute>  
        )
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
