import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Context } from '../CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, titulo, descripcion, precio, urlImagen, tag, stock }) => {
  const [qtyAdded, setQtyAdded] = useState(0);
  const { addItem } = useContext(Context);

  const handleOnAdd = (qty) => {
    setQtyAdded(qty);

    const item = {
      id,
      precio,
      titulo,
    };

    addItem(item, qty);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-gray-900 shadow-lg rounded-xl p-6 space-y-3">
        <div className="relative h-64 w-full mb-3">
          <img src={urlImagen} alt="Just a flower" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-200 truncate whitespace-normal">
            {titulo}
          </h2>
          <p className="text-sm text-gray-400">Description: {descripcion}</p>
          <p className="text-white text-xl font-semibold">${precio}</p>
          <p className="text-sm text-gray-400">Tag: {tag}</p>
          <p className="text-sm text-gray-400">Stock: {stock}</p>
        </div>
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
