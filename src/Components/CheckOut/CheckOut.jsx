import React, { useContext, useState } from 'react';
import { Context } from '../CartContext';
import { Timestamp, collection, documentId, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { getDocs, addDoc } from 'firebase/firestore';
import { FaCheckCircle } from 'react-icons/fa'
import { RiShoppingCartLine } from "react-icons/ri"
import { Link } from 'react-router-dom';


const CheckOut = ({onConfirm}) => {
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(Context);

  const createOrder = async ({ username, phone, email }) => {
    try {
      const objOrder = {
        buyer: {
          username,
          phone,
          email
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date())
      };
  
      const batch = writeBatch(db);
  
      const outOfStock = [];
  
      const ids = cart.map(prod => prod.id);
  
      const productsRef = collection(db, "items");
  
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
  
      const { docs } = productsAddedFromFirestore;
  
      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
  
        const productAddedCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedCart?.qty;
  
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
  
      if (outOfStock.length === 0) {
        await new Promise((resolve, reject) => {
          batch
            .commit()
            .then(() => resolve())
            .catch(error => reject(error));
        });
  
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
  
        setOrderId(orderAdded.id);
  
        clearCart();
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  if (orderId) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-6xl text-green-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">¡Gracias por tu compra!</h1>
          <p className="text-lg mb-4">Tu pedido ha sido procesado con éxito.</p>
          <p className="text-lg mb-4">ID del pedido: {orderId}</p>
          <RiShoppingCartLine className="text-4xl text-gray-500" />
          <Link>
          </Link>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mt-4"
          >
            <Link to="/">
                Realizar otro pedido          
          </Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">CheckOut</h1> 
      <div className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-xl p-6 space-y-4">
        <CheckOutForm onConfirm={createOrder} />
      </div>
    </div>
  );
};

export default CheckOut;
