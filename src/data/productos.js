import teclado from "../assets/teclado.jpg";
import mouse from "../assets/mouse.jpg";
import audifonos from "../assets/audífonos.jpg";

const productos = [
  { id: "1", nombre: "Teclado RGB", categoria: "teclados", precio: 70000, imagen: teclado },
  { id: "2", nombre: "Mouse Pro", categoria: "mouse", precio: 25000, imagen: mouse },
  { id: "3", nombre: "Audífonos Gamer", categoria: "auriculares", precio: 45000, imagen: audifonos },
];

export const getProductos = () =>
  new Promise((resolve) => setTimeout(() => resolve(productos), 1000));

export const getProductoPorId = (id) =>
  new Promise((resolve) => setTimeout(() => resolve(productos.find(p => p.id === id)), 1000));

export const getProductosPorCategoria = (categoriaId) =>
  new Promise((resolve) => setTimeout(() => resolve(productos.filter(p => p.categoria === categoriaId)), 1000));