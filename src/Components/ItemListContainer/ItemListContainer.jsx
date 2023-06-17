import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProductByCategories, getProducts } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';


import { getDocs, collection, query, where } from 'firebase/firestore';

import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, 'items'), where('tag', '==', categoryId))
      : collection(db, 'items')

    getDocs(collectionRef)
      .then((response) => { 
        const productAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div className="flex-col pt-1">
      <div className="h-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Lista de Cursos</h1>
 <div className="flex justify-center space-x-4">
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive ? 'ActiveOption' : 'Option'
        }
        ClassName="text-white font-bold"
      >
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md">
          Todos
        </button>
      </NavLink>
      <NavLink
        to={`/category/freelancer`}
        className={({ isActive }) =>
          isActive ? 'ActiveOption' : 'Option'
        }
        ClassName="text-white font-bold"
      >
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md">
          Freelancer
        </button>
      </NavLink>
      <NavLink
        to={`/category/nomada`}
        className={({ isActive }) =>
          isActive ? 'ActiveOption' : 'Option'
        }
        ClassName="text-white font-bold"
      >
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md">
          Nómada
        </button>
      </NavLink>
    </div>
      </div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
