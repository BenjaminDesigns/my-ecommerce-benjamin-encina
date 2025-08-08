import { useState } from "react";
import { Link } from "react-router-dom";
import ecccoLogo from "../../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2746DF] py-4 mx-6 my-12 rounded-lg relative">
      <div className="px-12 py-6 mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={ecccoLogo}
            alt="Logo"
            className="h-10 md:h-10 sm:h-8 max-[480px]:h-6 transition-transform hover:scale-110"
          />
        </Link>

        <ul className="text-white gap-12 items-center text-lg hidden md:flex">
          <li className="transition-transform hover:scale-110">
            <Link to="/category/teclados">Teclados</Link>
          </li>
          <li className="transition-transform hover:scale-110">
            <Link to="/category/audio">Audífonos</Link>
          </li>
          <li className="transition-transform hover:scale-110">
            <Link to="/category/mouse">Mouses</Link>
          </li>
        </ul>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <CartWidget />
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-[70%] h-full bg-[#2746DF] z-50 p-6 flex flex-col">
            <button
              className="text-white text-2xl self-end mb-8"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="text-white text-lg space-y-6">
              <li>
                <Link to="/category/teclados" onClick={() => setMenuOpen(false)}>
                  Teclados
                </Link>
              </li>
              <li>
                <Link to="/category/audio" onClick={() => setMenuOpen(false)}>
                  Audífonos
                </Link>
              </li>
              <li>
                <Link to="/category/mouse" onClick={() => setMenuOpen(false)}>
                  Mouses
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
