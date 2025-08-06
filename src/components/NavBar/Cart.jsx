import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Link to="/" className="text-indigo-600 underline">
          Volver al catálogo
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Tu carrito</h2>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          Total: ${totalPrice().toLocaleString("es-CL")}
        </h3>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}