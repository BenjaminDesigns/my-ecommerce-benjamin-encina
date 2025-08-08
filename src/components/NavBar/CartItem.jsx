import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <>
      <style>{`
        @media (max-width: 480px) {
          .cart-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .cart-item button {
            width: 100%;
            margin-top: 0.75rem; /* mt-3 */
            text-align: center;
          }
        }
      `}</style>

      <div className="cart-item border rounded p-4 flex justify-between items-center shadow-sm bg-white">
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
          onClick={() => removeFromCart(item.id)}
          className="text-sm text-red-500 hover:underline"
        >
          Eliminar
        </button>
      </div>
    </>
  );
}