import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="border rounded p-4 flex justify-between items-center shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h4 className="font-bold">{item.nombre}</h4>
          <p>Cantidad: {item.cantidad}</p>
          <p>Precio unitario: ${item.precio.toLocaleString("es-CL")}</p>
        </div>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-sm text-red-500 hover:underline"
      >
        Eliminar
      </button>
    </div>
  );
}
