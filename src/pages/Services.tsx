
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Images, Check, X } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennessine-black to-tennessine-gray-dark text-white py-20">
        <div className="container-tennessine">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Serviços Tennessine: Confiabilidade e Excelência em Cada Etapa
              </h1>
              <p className="text-lg mb-8 text-gray-200">
                Na Tennessine, oferecemos soluções que garantem a máxima eficiência e segurança em cada projeto. Nosso time é dedicado à prestação de serviços de alta qualidade, adaptados às suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                  Solicite uma proposta <ArrowRight size={18} />
                </a>
                <a href="#" className="btn-secondary flex items-center justify-center gap-2">
                  Fale com um especialista <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600"
                alt="Serviço técnico profissional"
                className="rounded-lg shadow-2xl animate-slide-in-right object-cover w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios-Chave Section */}
      <section className="py-16 bg-gray-50" id="benefits">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios-Chave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="service-card animate-slide-in-bottom">
              <div className="flex justify-center mb-6">
                <FileText size={48} className="text-tennessine-copper" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Consultoria & Execução Técnica</h3>
              <p className="text-tennessine-gray-medium text-center">
                Instalações, validações e suporte especializado para garantir o máximo desempenho de seus equipamentos.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="service-card animate-slide-in-bottom" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-center mb-6">
                <FileText size={48} className="text-tennessine-copper" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Capacitação Profissional</h3>
              <p className="text-tennessine-gray-medium text-center">
                Treinamentos operacionais e por aplicação, preparando sua equipe para maximizar o uso dos equipamentos.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="service-card animate-slide-in-bottom" style={{ animationDelay: "0.4s" }}>
              <div className="flex justify-center mb-6">
                <FileText size={48} className="text-tennessine-copper" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Manutenção Estratégica</h3>
              <p className="text-tennessine-gray-medium text-center">
                Qualificações e manutenção preventiva/corretiva, garantindo o funcionamento contínuo e eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-white" id="testimonials">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex justify-center mb-4">
                <Users size={32} className="text-tennessine-copper" />
              </div>
              <p className="text-lg italic text-center mb-6">
                "A Tennessine transformou nossa operação com sua excelência em serviços. A confiança que temos neles é inabalável! A equipe é sempre muito atenciosa e competente."
              </p>
              <div className="text-center">
                <p className="font-bold">Ricardo Oliveira</p>
                <p className="text-tennessine-gray-medium">Diretor Técnico, Laboratório Exemplo</p>
              </div>
            </div>
            
            {/* Pagination dots for carousel */}
            <div className="flex justify-center mt-6 gap-2">
              <button className="h-3 w-3 rounded-full bg-tennessine-copper"></button>
              <button className="h-3 w-3 rounded-full bg-gray-300"></button>
              <button className="h-3 w-3 rounded-full bg-gray-300"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section className="py-16 bg-gray-50" id="gallery">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Galeria de Serviços Realizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400" 
                alt="Serviço de instalação"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 2 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=600&h=400" 
                alt="Treinamento profissional"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 3 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400" 
                alt="Manutenção de equipamentos"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 4 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400" 
                alt="Consultoria técnica"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 5 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400" 
                alt="Capacitação de equipe"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image 6 */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400" 
                alt="Análise de dados"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section className="py-16 bg-white" id="plans">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Starter */}
            <div className="plan-card border-t-4 border-t-gray-400">
              <h3 className="text-xl font-bold mb-4 text-center">Starter</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Suporte remoto</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Treinamento operacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Resposta padrão</span>
                </li>
              </ul>
              <p className="text-center text-sm text-tennessine-gray-medium mb-6">
                Indicado para clientes com demanda pontual
              </p>
              <div className="flex justify-center">
                <Link to="/services/plans" className="btn-secondary">
                  Saiba mais
                </Link>
              </div>
            </div>
            
            {/* Plano Standard */}
            <div className="plan-card border-t-4 border-t-tennessine-copper transform scale-105 shadow-lg">
              <div className="absolute top-0 right-0 bg-tennessine-copper text-white text-xs px-2 py-1 rounded-bl-lg">Popular</div>
              <h3 className="text-xl font-bold mb-4 text-center">Standard</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Suporte + visitas corretivas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Treinamento operacional + Consultorias remotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Resposta acelerada</span>
                </li>
              </ul>
              <p className="text-center text-sm text-tennessine-gray-medium mb-6">
                Ideal para clientes em operação contínua
              </p>
              <div className="flex justify-center">
                <Link to="/services/plans" className="btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
            
            {/* Plano Premium */}
            <div className="plan-card border-t-4 border-t-black">
              <h3 className="text-xl font-bold mb-4 text-center">Premium</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Suporte total + visitas e auditoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Treinamento completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Atendimento prioritário</span>
                </li>
              </ul>
              <p className="text-center text-sm text-tennessine-gray-medium mb-6">
                Para laboratórios e indústrias em ritmo avançado
              </p>
              <div className="flex justify-center">
                <Link to="/services/plans" className="btn-secondary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/services/plans" className="flex items-center gap-2 text-tennessine-copper hover:text-tennessine-copper-dark transition-colors font-medium">
              Compare os Planos em Detalhe <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organização *</label>
                  <input 
                    type="text" 
                    id="organization" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Departamento (opcional)</label>
                  <input 
                    type="text" 
                    id="department" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Localização *</label>
                  <input 
                    type="text" 
                    id="location" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-tennessine-copper focus:border-tennessine-copper"
                  required
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-tennessine-copper focus:ring-tennessine-copper border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-600">
                      Concordo com os termos de privacidade e uso de dados para contato comercial
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button type="submit" className="btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/551155555555"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.5025 3.49765C18.2462 1.24093 15.2462 0 12.0525 0C5.4637 0 0.105031 5.35909 0.105031 11.9485C0.105031 14.0611 0.650635 16.1241 1.68394 17.9403L0 24L6.20141 22.3461C7.95115 23.2845 9.9837 23.7756 12.0525 23.7756C18.6413 23.7756 24 18.4165 24 11.8268C23.8787 8.63473 22.7594 5.75438 20.5025 3.49765ZM12.0525 21.7835C10.2637 21.7835 8.47487 21.2923 6.92513 20.3103L6.5637 20.0669L2.84106 21.0599L3.83434 17.4596L3.59064 17.0985C2.48674 15.4841 1.91779 13.6168 1.91779 11.7186C1.91779 6.35909 6.4843 1.87696 12.0525 1.87696C14.7331 1.87696 17.2715 2.9818 19.1631 4.87416C21.0547 6.76651 22.1586 9.30654 22.1586 11.9876C22.1586 17.347 17.5906 21.7835 12.0525 21.7835ZM17.5113 14.4305C17.2275 14.3088 15.7594 13.5839 15.4755 13.5013C15.1917 13.4187 14.9869 13.3774 14.7821 13.6581C14.5774 13.9388 14.0084 14.5739 13.8431 14.7783C13.6777 14.9827 13.513 15.0033 13.2292 14.8816C11.1637 13.8493 9.79064 13.0418 8.41779 10.7369C8.0525 10.1429 8.60387 10.1842 9.11603 9.15947C9.23935 8.9551 9.19947 8.77123 9.1201 8.60785C9.04072 8.44448 8.48936 6.97482 8.24565 6.40734C8.00195 5.85985 7.75825 5.94186 7.59294 5.94186C7.42763 5.94186 7.22283 5.92099 7.01802 5.92099C6.81321 5.92099 6.48936 6.00299 6.20552 6.28369C5.92168 6.56438 5.15658 7.28932 5.15658 8.75898C5.15658 10.2286 6.25301 11.6579 6.3968 11.8623C6.54059 12.0667 8.4677 15.1668 11.5476 16.4536C13.513 17.2215 14.2982 17.3022 15.2715 17.1594C15.8624 17.0776 17.0319 16.4536 17.2756 15.8041C17.5193 15.1547 17.5193 14.6071 17.4399 14.4715C17.3606 14.3359 17.1558 14.2747 16.872 14.1517L17.5113 14.4305Z" fill="white"/>
          </svg>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
