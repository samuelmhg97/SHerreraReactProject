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
import CheckOut from './Components/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element:( <div>

      <Navbar/>
      <ItemListContainer/>
      <Footer/>


    </div>)
  },
  {
    path: "/category/:categoryId",
    element:( <div>

      <Navbar/>
      <ItemListContainer/>
      <Footer/>

    </div>)
  }, {
    path: "/item/:itemId",
    element:( <div>

      <Navbar/>
      <ItemDetailContainer/>
      <Footer/>

    </div>)
  }, {
    path: "/cart",
    element:( <div>

      <Navbar/>
      <Cart/>
      <Footer/>

    </div>)
  }, {
    path: "/checkout",
    element:( <div>

      <Navbar/>
      <CheckOut/>

    </div>)
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider>
    <RouterProvider router={router} />
    </CustomProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
