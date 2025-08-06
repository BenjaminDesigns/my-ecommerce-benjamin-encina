import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ producto }) {
  const { addToCart } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border rounded-lg shadow-md flex flex-col md:flex-row gap-8 bg-white">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full md:w-1/2 h-64 object-contain"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
          <p className="text-gray-600 mb-4">{producto.descripcion}</p>
          <p className="text-indigo-600 text-xl font-semibold">
            ${producto.precio.toLocaleString("es-CL")}
          </p>
          <p className="text-sm text-gray-500 mt-2">Stock: {producto.stock}</p>
        </div>
        {agregado ? (
          <Link
            to="/cart"
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={producto.stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
}