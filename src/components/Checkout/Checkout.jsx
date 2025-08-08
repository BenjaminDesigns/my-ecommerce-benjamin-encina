import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ordenId, setOrdenId] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !email || !telefono) return alert("Completa todos los campos");

    const orden = {
      comprador: { nombre, email, telefono },
      items: cart.map(({ id, nombre, precio, cantidad }) => ({
        id, nombre, precio, cantidad
      })),
      total: totalPrice(),
      fecha: Timestamp.fromDate(new Date())
    };

    try {
      setEnviando(true);
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      clearCart();
      toast.success("Gracias por comprar con nosotros");
    } catch (error) {
      console.error("Error al generar orden:", error);
    } finally {
      setEnviando(false);
    }
  };

  if (ordenId) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Gracias por tu compra!</h2>
        <p className="text-lg">Tu ID de orden es:</p>
        <p className="font-mono text-indigo-600 mt-2">{ordenId}</p>
        <Link to="/" className="block mt-6 text-indigo-600 underline">Volver al inicio</Link>
      </div>
    );
  }

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
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          disabled={enviando}
        >
          {enviando ? "Generando orden..." : "Comprar"}
        </button>
      </form>
    </div>
  );
}
