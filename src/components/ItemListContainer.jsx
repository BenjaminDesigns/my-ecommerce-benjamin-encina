import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../data/productos";
import ItemList from "./ItemList";
import { GridLoader } from "react-spinners";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = categoryId ? getProductosPorCategoria : getProductos;

    fetchData(categoryId)
      .then(res => {
        setProductos(res);
      })
      .catch(err => console.error("Error al cargar productos:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="mt-16 flex justify-center">
      {loading ? (
  <div className="flex justify-center items-center h-[60vh]">
    <GridLoader color="#2746DF" size={20} margin={2} />
  </div>
) : (
  <div className="flex flex-wrap justify-center gap-8">
    <ItemList productos={productos} />
  </div>
)}
    </div>
  );
};

export default ItemListContainer;