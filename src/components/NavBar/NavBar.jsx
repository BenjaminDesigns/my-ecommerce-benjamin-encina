import React from 'react';
import { Link } from 'react-router-dom';
import ecccoLogo from "../../assets/logo.png";
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-[#2746DF] py-6 mx-12 my-12 rounded-lg">
      <div className="px-12 py-6 mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={ecccoLogo}
            alt="Logo"
            className="h-10 transition-transform hover:scale-110"
          />
        </Link>

        <ul className="text-white flex gap-12 items-center text-lg">
          <li className="transition-transform hover:scale-110">
            <Link to="/categoria/teclados">Teclados</Link>
          </li>
          <li className="transition-transform hover:scale-110">
            <Link to="/categoria/audio">Audífonos</Link>
          </li>
          <li className="transition-transform hover:scale-110">
            <Link to="/categoia/mouse">Mouses</Link>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;