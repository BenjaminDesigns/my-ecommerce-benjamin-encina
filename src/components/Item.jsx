import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imagen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-4 text-gray-900">
      <h2 className="text-2xl font-semibold mb-4 text-center">{nombre}</h2>

      <div
        className="overflow-hidden rounded-md mb-4 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={imagen}
          alt={nombre}
          className={`w-full h-48 object-cover transition duration-300 ${
            hovered ? "filter-none" : "filter grayscale"
          }`}
        />
      </div>

      <p className="text-lg font-bold mb-4 text-center">${precio}</p>

      <div className="flex gap-4">
        <Link
          to={`/item/${id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-center transition"
        >
          Ver detalle
        </Link>
        <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 rounded-md transition">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Item;