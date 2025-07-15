import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, imagen, precio }) => {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-xl p-8 text-gray-900 flex gap-12 items-center">
      <img src={imagen} alt={nombre} className="w-80 rounded-lg shadow-md" />

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{nombre}</h2>
        <p className="text-2xl font-semibold text-blue-700">${precio}</p>
        <ItemCount stock={10} initial={1} onAdd={(cantidad) => alert(`Agregado al carrito: ${cantidad}`)} />
      </div>
    </div>
  );
};

export default ItemDetail;