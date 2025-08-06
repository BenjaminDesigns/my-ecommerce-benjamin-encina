import { useState } from "react";

export default function ItemCount({ stock, inicial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(inicial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="mt-4 flex flex-col items-start gap-2">
      <div className="flex items-center gap-4">
        <button className="bg-gray-200 px-2 rounded" onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button className="bg-gray-200 px-2 rounded" onClick={incrementar}>+</button>
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        onClick={() => onAdd(cantidad)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
