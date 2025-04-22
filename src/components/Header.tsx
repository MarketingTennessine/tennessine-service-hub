
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-tennessine flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-tennessine-black">
          Tennessine
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-tennessine-gray-dark hover:text-tennessine-copper transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-tennessine-copper font-medium">
            Serviços
          </Link>
          <Link to="#" className="text-tennessine-gray-dark hover:text-tennessine-copper transition-colors">
            Sobre
          </Link>
          <Link to="#" className="text-tennessine-gray-dark hover:text-tennessine-copper transition-colors">
            Contato
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-tennessine-gray-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
