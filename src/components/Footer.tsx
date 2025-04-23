import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tennessine-black text-white py-12">
      <div className="container-tennessine">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tennessine</h3>
            <p className="text-gray-300 mb-4">
              Soluções que garantem a máxima eficiência e segurança em cada projeto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tennessine-copper transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-tennessine-copper transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-tennessine-copper transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-tennessine-copper transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-tennessine-copper transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/services/plans" className="text-gray-300 hover:text-tennessine-copper transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-tennessine-copper transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-tennessine-copper transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-medium">Endereço:</span> Av. Exemplo, 1234, São Paulo, SP
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-medium">Email:</span> info@tennessine.com.br
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Telefone:</span> (11) 5555-5555
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Tennessine Instrumentação Analítica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
