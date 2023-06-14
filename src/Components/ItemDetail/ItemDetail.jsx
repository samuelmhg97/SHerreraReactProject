import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, titulo, descripcion, precio, urlImagen, tag, stock}) => {
  return (
    <article>
        <h2>{titulo}</h2>
        <img src={urlImagen} alt="" />
        <h2>{descripcion}</h2>
        <p>{id}</p>
        <p>{tag}</p>
        <p>{stock}</p>
        <ItemCount initial={1} stock={10} onAdd={(qty) => console.log(qty)}/>
    </article>
    
  )
}

export default ItemDetail