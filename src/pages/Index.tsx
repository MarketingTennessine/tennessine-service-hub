import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-tennessine-black to-tennessine-gray-dark text-white py-20">
          <div className="container-tennessine">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tennessine Instrumentação Analítica
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Soluções analíticas de alta precisão para indústrias e laboratórios. Qualidade e excelência em cada análise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary">
                  Conheça Nossos Serviços
                </Link>
                <a href="#" className="btn-secondary">
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-tennessine text-center">
            <h2 className="text-3xl font-bold mb-8">Bem-vindo à Tennessine</h2>
            <p className="text-lg text-tennessine-gray-medium max-w-3xl mx-auto mb-8">
              Oferecemos soluções de instrumentação analítica de alta qualidade com foco em desempenho e confiabilidade para laboratórios e indústrias.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-tennessine-copper hover:text-tennessine-copper-dark font-medium">
                Saiba mais sobre nossos serviços →
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
