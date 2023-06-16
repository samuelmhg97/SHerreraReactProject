import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Cart from "./Components/Cart/Cart"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"; 
import Navbar from './Components/Navbar/Navbar';
import { Context, CustomProvider } from './Components/CartContext';


const router = createBrowserRouter([
  {
    path: "/",
    element:( <div>
      <CustomProvider>
      <Navbar/>
      <ItemListContainer/>
      </CustomProvider>

    </div>)
  },
  {
    path: "/category/:categoryId",
    element:( <div>
      <CustomProvider>
      <Navbar/>
      <ItemListContainer/>
      </CustomProvider>
    </div>)
  }, {
    path: "/item/:itemId",
    element:( <div>
      <CustomProvider>
      <Navbar/>
      <ItemDetailContainer/>
      </CustomProvider>
    </div>)
  }, {
    path: "/cart",
    element:( <div>
      <CustomProvider>
      <Navbar/>
      <Cart/>
      </CustomProvider>
    </div>)
  }
])

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
