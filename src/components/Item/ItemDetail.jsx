import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../Item/ItemCount";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetail({ producto }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
    toast.success("Producto agregado al carrito");
  };

  const handleCancel = () => {
    removeFromCart(producto.id);
    setAgregado(false);
    toast.info("Producto eliminado del carrito");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 border rounded-lg shadow-md flex flex-col md:flex-row gap-8 bg-white">
      <div className="md:w-1/2 p-4 flex items-start justify-start">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex flex-col justify-between md:w-1/2">
        <div>
          <h2 className="text-3xl font-bold mb-3">{producto.nombre}</h2>
          <p className="text-gray-600 mb-5">{producto.descripcion}</p>
          <p className="text-indigo-600 text-2xl font-semibold">
            ${producto.precio.toLocaleString("es-CL")}
          </p>

          {producto.stock <= 3 && (
            <div className="inline-block bg-red-600 mt-2 text-white text-sm px-3 py-1 rounded-full mb-1">
              Últimas unidades
            </div>
          )}

          <p className="text-sm text-gray-500 mt-1">Stock: {producto.stock}</p>
        </div>

        {agregado ? (
          <div className="mt-6 flex gap-4 max-[470px]:flex-col">
            <Link
              to="/cart"
              className="flex-1 bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 text-center transition"
            >
              Finalizar compra
            </Link>
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-gray-300 text-gray-900 px-4 py-3 rounded hover:bg-gray-400 transition"
            >
              Seguir comprando
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 bg-red-500 text-white px-4 py-3 rounded hover:bg-red-600 transition"
            >
              Cancelar
            </button>
          </div>
        ) : (
          <ItemCount stock={producto.stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
}