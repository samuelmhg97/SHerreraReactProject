import React, { useContext } from 'react';
import { Context } from '../CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';


const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src="https://cdn-icons-png.flaticon.com/512/489/489432.png?w=826&t=st=1686880593~exp=1686881193~hmac=23f7e7c634b840f1b7aed276cb9a4642253df48099a653b0fac2d9c4dda0102b"
        alt="Logo Carro vacio"
        className="w-24 h-24 mb-4"
      />
      <p className="text-gray-500 text-xl">Upss, no tienes nada en tu carrito.</p>
    </div>
  );
};

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(Context);

  if (totalQuantity === 0) {
    return (
      <div className="text-center">
        <h1>
          <Link to="/">Productos</Link>
        </h1>
        <EmptyCartMessage />
      </div>
    );
  }

  return (
    <div className="max-w-xxl mx-auto p-4">
      <div className="bg-gray-900 rounded p-4">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <h3>Total: ${total}</h3>
        <div>
          <button
            className="bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded mr-2"
            onClick={clearCart}
          >
            Limpiar carrito
          </button>
          <Link
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded"
            to="/checkout"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
