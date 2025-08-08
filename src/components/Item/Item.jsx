import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ id, nombre, precio, imagen, stock }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useContext(CartContext);

  const formatoPrecio = (numero) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(numero);

  const handleAddToCart = () => {
    if (stock <= 0) {
      toast.error("No queda stock disponible de este producto");
      return;
    }
    addToCart({ id, nombre, precio, imagen, stock }, 1);
    toast.success(`${nombre} añadido al carrito`);
  };

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-4 text-gray-900 flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4 text-center">{nombre}</h2>

      <div
        className="relative overflow-hidden rounded-md mb-4 aspect-square cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >


        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          className={`w-full h-full object-cover transition duration-300 ${
            hovered ? "filter-none" : "filter grayscale"
          }`}
        />
      </div>

      <p className="text-lg font-bold mb-4 text-center">
        {formatoPrecio(precio)}
      </p>

      <div className="flex gap-4">
        <Link
          to={`/item/${id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-center transition cursor-pointer"
        >
          Ver más
        </Link>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition cursor-pointer"
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default Item;
