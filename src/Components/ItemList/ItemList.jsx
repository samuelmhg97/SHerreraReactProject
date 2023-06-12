import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className='flex flex-wrap gap-10  justify-center align-middle'>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList