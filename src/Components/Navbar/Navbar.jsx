import React, { useContext, useState } from 'react'
import {GiShoppingCart} from "react-icons/gi"
import ModalShoppingCart from '../ModalShoppingCart/ModalShoppingCart'
import { Link } from 'react-router-dom'
import { Context } from '../CartContext'

export default function Navbar() {


  let [cartOpen, setCartOpen] = useState(false)
 const {totalQuantity} = useContext(Context)
  const handleCart = (e) => {
    e.preventDefault()
    setCartOpen(!cartOpen)
  }

  return (
    <nav className='navBar-Container  w-full'>
        <div className='navBarImg-Container'>
          <Link to="/">
            <img className= "navBarImg" src="https://bootcamp.joshuaherreragroup.com/wp-content/uploads/2022/04/Bootcamp-blanca.png" alt="logo-bootcamp" />
          </Link>
        </div>
        <div className='navBar-Options'>
            <h4 className='navOption'>Inicio</h4>
            <h4 className='navOption'>Formaciones</h4>
            <h4 className='navOption'>Contacto</h4>
            <h4 className='navOption'>Blog</h4>
        </div>
        <Link to="/cart">
        <div className='navBarIcon-Container'>
          <h4 className='navBarCartCounter'>{totalQuantity}</h4>
          <GiShoppingCart  className='icon'/>
        </div>
          </Link>
    </nav>
  )
}

