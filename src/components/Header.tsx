
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#2F2F2F] shadow-sm py-3">
      <div className="container-tennessine flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/47445d67-4883-4b54-94bb-36d9efd32a24.png"
            alt="Tennessine Logo"
            className="h-12 w-auto"
            style={{ minWidth: 48 }}
          />
          <span className="hidden md:inline text-[22px] font-bold text-white tracking-widest">
            TENNESSINE
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/services"
            className="text-[#F5791F] font-semibold hover:underline underline-offset-4"
          >
            Serviços
          </Link>
          <Link
            to="#"
            className="text-white opacity-80 hover:text-[#F5791F] transition-colors font-medium"
          >
            Sobre
          </Link>
          <Link
            to="#"
            className="text-white opacity-80 hover:text-[#F5791F] transition-colors font-medium"
          >
            Contato
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
