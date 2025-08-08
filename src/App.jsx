import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Cart from "./components/NavBar/Cart";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <h2 className="text-center text-2xl text-red-600 mt-20">
                404 - El producto que estás buscando aún no spawnea...
              </h2>
            }
          />
        </Routes>
      </main>
      <ToastContainer position="bottom-right" autoClose={2500} />
    </BrowserRouter>
  );
}

export default App;
