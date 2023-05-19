import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const{categoryId} = useParams

    useEffect(() => {
        const asyncFunc = categoryId ? "papa" : getProducts

        // asyncFunc(categoryId)
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [categoryId])
  return (
    <div className='flex'>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer