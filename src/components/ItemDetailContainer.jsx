import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductoPorId(itemId)
      .then(res => setProducto(res))
      .catch(err => console.error("Error al obtener producto:", err));
  }, [itemId]);

  return (
    <div className="mt-16 flex justify-center">
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p className="text-xl font-medium">Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;