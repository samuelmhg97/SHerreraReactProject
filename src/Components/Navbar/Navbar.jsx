import React, { useState } from 'react'
import {GiShoppingCart} from "react-icons/gi"
import ModalShoppingCart from '../ModalShoppingCart/ModalShoppingCart'
import { Link } from 'react-router-dom'

export default function Navbar() {

  let carItems =  []

  let [cartOpen, setCartOpen] = useState(false)

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
        <div className='navBarIcon-Container' onClick={handleCart}>
          <h4 className='navBarCartCounter'>{carItems.length}</h4>
          <GiShoppingCart  className='icon'/>
          <ModalShoppingCart open = {cartOpen}/>
        </div>
    </nav>
  )
}

