import React from 'react';

const CartItem = ({ titulo, precio, qty }) => {
  return (
    <div className="bg-transparent">
      <div className="flex items-center justify-between p-2">
        <h3 className="text-lg font-semibold text-white">{titulo}</h3>
        <div className="flex">
          <p className="text-gray-300">Precio: ${precio}</p>
          <p className="text-gray-300 ml-2">Qty: {qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
