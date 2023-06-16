import React, { createContext, useContext, useState } from 'react'

export const Context = createContext([])

export const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem =  (item, qty) => {
        if(!isInCart(item.id)) {
            setCart((prevState) => [...prevState, {...item, qty}]) 
        }
        else {
            alert("este producto ya fue agregadoyyyuuyuuuyy")
        } 
            
    }

    const removeItem  = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const totalQuantity = cart.length

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const value = {cart, addItem, removeItem, clearCart, totalQuantity}

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  )
}
