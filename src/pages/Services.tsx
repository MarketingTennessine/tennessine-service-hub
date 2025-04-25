
import { Link } from "react-router-dom";
import { FlaskConical, Atom, TestTube, ArrowRight, Users, Wrench, MessageSquare, Truck, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import ServiceSection from "../components/ServiceSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/lovable-uploads/781e0e4c-cc97-4e67-8085-de72c65c4cc5.png",
    alt: "Equipamento de laboratório IS20 com computador",
  },
  {
    src: "/lovable-uploads/b69698c7-eb96-4bf3-9411-c3a951d81500.png",
    alt: "Equipe técnica com equipamento de laboratório",
  },
  {
    src: "/lovable-uploads/f582b519-6ebe-4692-a771-cd58424d543f.png",
    alt: "Sistema analítico avançado com equipe",
  },
  {
    src: "/lovable-uploads/89c70a3b-bb51-43db-80fe-b6f4a6c9e349.png",
    alt: "Equipamento de análise Falcon com interface",
  },
  {
    src: "/lovable-uploads/b45f8ceb-4729-4dd1-b77c-0df3b5b7a816.png",
    alt: "Equipe técnica com equipamento analítico",
  },
];

const testimonials = [
  {
    content: "O suporte da Tennessine garantiu a continuidade da nossa operação com rapidez e qualidade incomparáveis.",
    author: "Carla M.",
    company: "Laboratório XYZ",
  },
  {
    content: "Graças à equipe técnica da Tennessine, nosso laboratório opera com muito mais eficiência e confiabilidade.",
    author: "Roberto S.",
    company: "Instituto de Pesquisas ABC",
  },
  {
    content: "A capacitação técnica fornecida pela Tennessine foi fundamental para otimizar nossos processos analíticos.",
    author: "Patricia L.",
    company: "Centro de Análises Químicas",
  },
  {
    content: "O plano Premium superou nossas expectativas, especialmente no suporte contínuo e assistência técnica.",
    author: "Marcelo D.",
    company: "Indústria Farmacêutica",
  },
];

const GalleryCarousel = () => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {galleryImages.map((img, i) => (
          <CarouselItem key={img.src} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="p-0 aspect-video">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full"
                    draggable={false}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

const TestimonialsSection = () => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card className="bg-white border border-gray-200 rounded-xl shadow-md h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <MessageSquare className="text-[#F5791F] mb-4 h-8 w-8" />
                  <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
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

      {/* Serviços Técnicos Section */}
      <section className="py-16 bg-gradient-to-r from-[#d76512] to-[#f5a20a] text-white">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços Técnicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceSection
              title="Manutenção Preventiva e Corretiva"
              description="Com nossa manutenção preventiva, você evita paradas inesperadas e prolonga a vida útil dos seus instrumentos analíticos. A manutenção corretiva busca solucionar problemas após falhas, restabelecendo o funcionamento dos equipamentos com segurança e eficiência."
              icon={<Wrench size={48} className="text-white" />}
              isLight={true}
            />
            <ServiceSection
              title="Treinamentos e Capacitações Sob Medida"
              description="Nossos técnicos e engenheiros são treinados pelos fabricantes, no Brasil e no exterior. Oferecemos treinamentos personalizados para atender às necessidades específicas do seu laboratório e capacitar sua equipe."
              icon={<Users size={48} className="text-white" />}
              isLight={true}
            />
            <ServiceSection
              title="Qualificação de Equipamentos"
              description="Realizamos qualificações de instalação, operação e desempenho (IQ, OQ, PQ), garantindo a conformidade com normas e padrões de qualidade exigidos em ambientes regulatórios."
              icon={<FlaskConical size={48} className="text-white" />}
              isLight={true}
            />
            <ServiceSection
              title="Soluções em Logística Integrada e Comércio Exterior"
              description="Oferecemos suporte logístico completo para transporte, consolidação de peças e apoio a importações/exportações. Isso garante rapidez e segurança em atendimentos que envolvem peças internacionais ou transporte técnico especializado."
              icon={<Truck size={48} className="text-white" />}
              isLight={true}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white" id="testimonials">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">O Que Nossos Clientes Dizem</h2>
          <TestimonialsSection />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#FAFAFA]" id="gallery">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">Galeria de Serviços</h2>
          <GalleryCarousel />
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white" id="plans">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">Nossos Planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="plan-card flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2F2F2F]">Starter</h3>
              <p className="text-center mb-4 font-medium">Suporte essencial e monitoramento básico</p>
              <p className="text-center text-sm mb-6 text-gray-500">Ideal para demandas pontuais</p>
              <div className="mt-auto flex justify-center">
                <Link to="/services/plans" className="bg-[#F5791F] hover:bg-[#E65A00] text-white px-6 py-2.5 rounded-md font-medium transition-colors">
                  Compare os Planos
                </Link>
              </div>
            </div>
            <div className="plan-card border-t-4 border-t-[#F5791F] scale-105 shadow-lg flex flex-col">
              <div className="absolute top-0 right-0 bg-[#F5791F] text-white text-xs px-2 py-1 rounded-bl-lg">
                Recomendado
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-[#F5791F]">Standard</h3>
              <p className="text-center mb-4 font-medium">Atendimento preferencial + relatórios avançados</p>
              <p className="text-center text-sm mb-6 text-gray-500">Ideal para operação contínua</p>
              <div className="mt-auto flex justify-center">
                <Link to="/services/plans" className="bg-[#F5791F] hover:bg-[#E65A00] text-white px-6 py-2.5 rounded-md font-medium transition-colors">
                  Compare os Planos
                </Link>
              </div>
            </div>
            <div className="plan-card flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2F2F2F]">Premium</h3>
              <p className="text-center mb-4 font-medium">Soluções personalizadas + consultoria técnica contínua</p>
              <p className="text-center text-sm mb-6 text-gray-500">Para estruturas exigentes e missão crítica</p>
              <div className="mt-auto flex justify-center">
                <Link to="/services/plans" className="bg-[#F5791F] hover:bg-[#E65A00] text-white px-6 py-2.5 rounded-md font-medium transition-colors">
                  Compare os Planos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-16 bg-[#FAFAFA]" id="contact">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">Entre em Contato</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 border border-[#E5E5E5]">
              <h3 className="text-xl font-bold mb-4 text-center">Escolha o Plano Ideal para Seu Laboratório</h3>
              <p className="mb-6 text-center text-gray-600">Solicite uma proposta personalizada com base nas suas necessidades e melhore a performance dos seus equipamentos.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Nome *</label>
                    <input type="text" className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Organização *</label>
                    <input type="text" className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1">Departamento</label>
                  <input type="text" className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">Telefone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1">E-mail *</label>
                    <input type="email" className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1">Localização *</label>
                  <input type="text" className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1">Plano de Interesse *</label>
                  <select className="w-full px-4 py-2 border border-[#E5E5E5] rounded-md" required>
                    <option value="">Selecione um plano</option>
                    <option value="starter">Starter</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                <div className="flex justify-center pt-4">
                  <button type="submit" className="bg-[#F5791F] hover:bg-[#E65A00] text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">
                    Quero escolher um plano
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 border border-[#E5E5E5] flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-6">Serviços Técnicos ou Contrato Personalizado</h3>
              <p className="text-[#333333] mb-8">
                Precisa de serviços pontuais ou um contrato personalizado? 
                Entre em contato através do nosso formulário específico no site oficial.
              </p>
              <a
                href="https://tennessine.com.br/?route=checkout/cotacao_servicos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5791F] hover:bg-[#E65A00] text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Quero solicitar um serviço
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5521998960117"
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
