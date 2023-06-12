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
    <div className='flex-col pt-1'>
        <div className='h-20 flex flex-col justify-center items-center'>
        <h1 className=''>Lista de Cursos</h1>
        </div>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer