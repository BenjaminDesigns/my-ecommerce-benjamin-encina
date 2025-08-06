import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "../../db/db";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const productosRef = collection(db, "productos");
        const q = categoryId
          ? query(productosRef, where("categoria", "==", categoryId))
          : productosRef;

        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (productos.length === 0) return <p className="text-center text-red-500">No hay productos disponibles.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ItemList productos={productos} />
    </div>
  );
}