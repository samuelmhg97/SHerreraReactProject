import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductByCategories, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import { NavLink, Link  } from 'react-router-dom'



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const{categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategories : getProducts

        asyncFunc(categoryId)
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
        <div>
            <NavLink to= {`/`} className={({isActive}) => isActive? "ActiveOption" : "Option"}>
                <button>
                    todos
                </button>
            </NavLink>
            <NavLink to= {`/category/freelancer`} className={({isActive}) => isActive? "ActiveOption" : "Option"}>
                <button>
                    freelancer
                </button>                
            </NavLink>
            <NavLink to= {`/category/nomada`} className={({isActive}) => isActive? "ActiveOption" : "Option"}>
                <button>
                    nomada
                </button>      
            </NavLink>
        </div>
        </div>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer