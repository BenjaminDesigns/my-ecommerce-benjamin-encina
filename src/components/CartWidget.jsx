import React from 'react';
import carrito from '../assets/carrito.png';

const CartWidget = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={carrito} alt="Carrito" className="h-10 invert" />
      <p className="text-white">2</p>
    </div>
  );
};

export default CartWidget;