import Item from "./Item";

export default function ItemList({ productos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productos.map(({ id, nombre, precio, imagen }) => (
        <Item key={id} id={id} nombre={nombre} precio={precio} imagen={imagen} />
      ))}
    </div>
  );
}
