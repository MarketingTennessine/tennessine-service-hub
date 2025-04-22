
import { Link } from "react-router-dom";

/**
 * Header Tennessine: Branco, detalhes laranja, logo centralizada/maior e navegação preta com hover laranja
 */
const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-[#E5E5E5]">
      <div className="container-tennessine flex justify-between items-center py-3">
        <Link to="/services" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/47445d67-4883-4b54-94bb-36d9efd32a24.png"
            alt="Tennessine Logo"
            className="h-20 w-auto"  // Aumentada!
            style={{ minWidth: 80 }}
          />
        </Link>
        <nav className="flex gap-6">
          <Link
            to="/services"
            className="text-[#2F2F2F] font-semibold px-3 py-1 rounded-md border-2 border-transparent hover:text-white hover:bg-[#F5791F] hover:border-[#F5791F] transition-colors"
          >
            Serviços
          </Link>
          <Link
            to="/services/plans"
            className="text-[#2F2F2F] font-semibold px-3 py-1 rounded-md border-2 border-transparent hover:text-white hover:bg-[#F5791F] hover:border-[#F5791F] transition-colors"
          >
            Planos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
