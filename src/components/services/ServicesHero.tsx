
import { Link } from "react-router-dom";

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#d76512] to-[#f5a20a] text-white py-20">
      <div className="container-tennessine">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços Tennessine: Confiabilidade e Excelência em Cada Etapa
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Contrate serviços técnicos, treinamentos ou manutenção especializada com suporte em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tennessine.com.br/?route=checkout/cotacao_servicos" target="_blank" rel="noopener noreferrer" className="bg-[#2F2F2F] hover:bg-black text-white px-6 py-2.5 rounded-md font-medium text-center">
                Quero solicitar um serviço
              </a>
              <Link to="/services/plans" className="bg-[#E5E5E5] hover:bg-white text-[#2F2F2F] px-6 py-2.5 rounded-md font-medium text-center">
                Quero escolher um plano
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/lovable-uploads/74fd2516-83e1-43b1-88ec-72a270abd913.png"
              alt="Pesquisa científica avançada e inovação"
              className="rounded-lg shadow-2xl object-cover w-full max-w-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
