
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-[#E5E5E5]">
      <div className="container-tennessine flex justify-between items-center py-3">
        <Link to="/services" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/47445d67-4883-4b54-94bb-36d9efd32a24.png"
            alt="Tennessine Logo"
            className="h-12 w-auto"
            style={{ minWidth: 48 }}
          />
        </Link>
        <nav className="flex gap-6">
          <Link
            to="/services"
            className="text-[#2F2F2F] font-semibold px-3 py-1 rounded-md transition-colors hover:text-white hover:bg-[#F5791F]"
          >
            Serviços
          </Link>
          <Link
            to="/services/plans"
            className="text-[#2F2F2F] font-semibold px-3 py-1 rounded-md transition-colors hover:text-white hover:bg-[#F5791F]"
          >
            Planos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
