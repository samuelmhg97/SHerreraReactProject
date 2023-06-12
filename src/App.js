
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';


import Cart from "./Components/Cart/Cart"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer/>
  },
  {
    path: "/category/:categoryId",
    element: <ItemListContainer/>
  }, {
    path: "/item/:itemId",
    element: <ItemDetailContainer/>
  }, {
    path: "/cart",
    element: <Cart/>
  }
])

function App() {
  return (
    <BrowserRouter>
    <div className="">
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
