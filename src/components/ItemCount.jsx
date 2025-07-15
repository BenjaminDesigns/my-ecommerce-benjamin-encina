import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <button
          onClick={decrementar}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded"
        >
          -
        </button>
        <span className="text-xl">{cantidad}</span>
        <button
          onClick={incrementar}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(cantidad)}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;