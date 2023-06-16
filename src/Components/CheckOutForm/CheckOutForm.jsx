import React, { useState } from 'react';

const CheckOutForm = ({ onConfirm }) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      username,
      phone,
      email
    };

    onConfirm(userData);
  };

  return (
    <div className="bg-black bg-opacity-40 p-4 rounded-md">
      <h2 className="text-lg font-semibold text-white mb-4">Complete el formulario de compra</h2>
      <form onSubmit={handleConfirm} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium text-white">
            Nombre
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            placeholder="Ingrese su nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium text-white">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            placeholder="Ingrese su teléfono"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            placeholder="Ingrese su email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Confirmar Compra
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
