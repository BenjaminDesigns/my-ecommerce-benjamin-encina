import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="relative">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}
        viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="20" cy="20" r="1" />
      </svg>
      {totalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
          {totalItems()}
        </span>
      )}
    </Link>
  );
}