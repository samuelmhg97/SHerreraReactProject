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


const router = createBrowserRouter([
  {
    path: "/",
    element:( <div>
      <Navbar/>
      <ItemListContainer/>
    </div>)
  },
  {
    path: "/category/:categoryId",
    element:( <div>
      <Navbar/>
      <ItemListContainer/>
    </div>)
  }, {
    path: "/item/:itemId",
    element:( <div>
      <Navbar/>
      <ItemDetailContainer/>
    </div>)
  }, {
    path: "/cart",
    element:( <div>
      <Navbar/>
      <Cart/>
    </div>)
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
{/* 
    <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
