import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'


import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId}=  useParams()

    useEffect(() => {
        const docRef = doc(db, "items", itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        } )
    }, [itemId])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer