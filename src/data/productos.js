import React, { useEffect } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase"; 

const productos = [
  {
    id: 1,
    nombre: "Teclado Pulse Wave",
    precio: 50990,
    stock: 6,
    categoria: "teclados",
    descripcion: "Teclado mecánico con retroiluminación RGB multicolor.",
    imagen: "https://drive.google.com/uc?export=view&id=1HO1cMXHDoZAziyQCB69RVcgx6AfD-84G"
  },
  {
    id: 2,
    nombre: "Teclado Dark Flex",
    precio: 74990,
    stock: 3,
    categoria: "teclados",
    descripcion: "Diseño compacto, ideal para setups minimalistas.",
    imagen: "https://drive.google.com/uc?export=view&id=1HVy9sq4Bhh1389m35QC1CxDx85seJHQ6"
  },
  {
    id: 3,
    nombre: "Teclado Steel Core",
    precio: 99990,
    stock: 2,
    categoria: "teclados",
    descripcion: "Estructura metálica y switches rojos ultra suaves.",
    imagen: "https://drive.google.com/uc?export=view&id=1wVfQuo3BAPKuDYvQMQ4A0RUUNBM7iwSV"
  },
  {
    id: 4,
    nombre: "Audífonos BassBoom",
    precio: 27990,
    stock: 7,
    categoria: "audio",
    descripcion: "Audio envolvente con refuerzo de bajos potentes.",
    imagen: "https://drive.google.com/uc?export=view&id=1WUrlGR1qItDDl34V9QmXt4CmLZV6MZtP"
  },
  {
    id: 5,
    nombre: "Audífonos AirTune",
    precio: 29990,
    stock: 9,
    categoria: "audio",
    descripcion: "Inalámbricos con autonomía de hasta 18 horas.",
    imagen: "https://drive.google.com/uc?export=view&id=147wgZQ5XXPwDzqCSXH2vuyuahRXC_CIJ"
  },
  {
    id: 6,
    nombre: "Audífonos Zen Sound",
    precio: 55990,
    stock: 4,
    categoria: "audio",
    descripcion: "Cancelación de ruido activa y sonido premium.",
    imagen: "https://drive.google.com/uc?export=view&id=1p8xV1ECFI8r6k2ZyinbQhjPXg6DG1eYF"
  },
  {
    id: 7,
    nombre: "Mouse SpeedShot",
    precio: 24990,
    stock: 5,
    categoria: "mouses",
    descripcion: "Sensor óptico preciso y diseño ergonómico.",
    imagen: "https://drive.google.com/uc?export=view&id=1vxp4NgIhlTylVwyYWr7BJZGzX2Ju9bKQ"
  },
  {
    id: 8,
    nombre: "Mouse RazorLine",
    precio: 29990,
    stock: 8,
    categoria: "mouses",
    descripcion: "Iluminación LED y hasta 7200 DPI configurables.",
    imagen: "https://drive.google.com/uc?export=view&id=1kTgdWI-heEZYcW06pgYBkEIZAg9H6XNy"
  },
  {
    id: 9,
    nombre: "Mouse Ghost RGB",
    precio: 42990,
    stock: 10,
    categoria: "mouses",
    descripcion: "Diseño ambidiestro con RGB dinámico y liviano.",
    imagen: "https://drive.google.com/uc?export=view&id=1CZHbEDnYODOFuvKMs2gXcBTL9gTD5s-1"
  }
];

export default function SubirProductos() {
  
  useEffect(() => {
    async function subirProductosAFirestore() {
      try {
        for (const producto of productos) {
          const docRef = doc(collection(db, "productos"));
          await setDoc(docRef, producto);
          console.log(`Producto ${producto.nombre} subido con id ${docRef.id}`);
        }
        console.log("¡Todos los productos fueron subidos!");
      } catch (error) {
        console.error("Error subiendo productos:", error);
      }
    }
    
    subirProductosAFirestore();
  }, []);
  
  return <div>Subiendo productos a Firestore...</div>;
}