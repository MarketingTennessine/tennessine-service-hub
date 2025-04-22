
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const testimonials = [
  {
    quote:
      "A Tennessine transformou nossa operação com sua excelência em serviços. A confiança que temos neles é inabalável!",
    name: "João Silva",
    company: "Gerente, Empresa XYZ",
  },
];

const beneficios = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#F5791F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="14" rx="3" />
        <path d="M9 20h6v-4m4 4h6V6A2 2 0 0 0 19 4" />
      </svg>
    ),
    title: "Consultoria & Execução Técnica",
    description: "Instalações, validações e suporte especializado.",
    cta: "Saiba Mais",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#F5791F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17l6 6 10-10" />
      </svg>
    ),
    title: "Capacitação Profissional",
    description: "Treinamentos operacionais e por aplicação.",
    cta: "Inscreva-se",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#F5791F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="12" r="8" />
        <rect x="8" y="20" width="16" height="4" rx="2" />
      </svg>
    ),
    title: "Manutenção Estratégica",
    description: "Qualificações e manutenção preventiva/corretiva.",
    cta: "Descubra",
  },
];

const galleryImages = [
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    alt: "Instalação técnica",
  },
  {
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
    alt: "Treinamento laboratório",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    alt: "Manutenção preventiva",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />

      <main className="flex-grow">
        <section className="bg-[#FFF] py-14 md:py-20 border-b border-[#E5E5E5]">
          <div className="container-tennessine grid md:grid-cols-2 gap-y-10 gap-x-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#000] leading-snug">
                Serviços Tennessine: <br /> Confiabilidade e Excelência em Cada Etapa
              </h1>
              <p className="text-[18px] mb-8 text-[#333333] font-normal max-w-xl">
                Na Tennessine, oferecemos soluções que garantem a máxima eficiência e segurança em cada projeto. Nosso time é dedicado à prestação de serviços de alta qualidade, adaptados às suas necessidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services/plans" className="px-6 py-2.5 bg-[#F5791F] text-white rounded-md font-medium transition-colors hover:bg-[#C86714] text-center">
                  Solicite uma proposta
                </Link>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white border border-[#F5791F] text-[#F5791F] rounded-md font-medium transition-colors hover:bg-[#F8F1ED] text-center">
                  Fale com um especialista
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
                alt="Profissional técnico laboratório"
                className="rounded-lg shadow-md border border-[#E5E5E5] w-full max-w-xs md:max-w-[360px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="container-tennessine">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-2">
                Nossos diferenciais
              </h2>
              <p className="text-[#333333] text-md md:text-lg">
                Conheça os principais benefícios de contar com a Tennessine para seus serviços em laboratório e indústria.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {beneficios.map((item, idx) => (
                <div key={idx} className="bg-[#FFF] border border-[#E5E5E5] p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#000] mb-2">{item.title}</h3>
                  <p className="text-[#333333] mb-4">{item.description}</p>
                  <button className="text-[#F5791F] text-sm font-semibold hover:underline">{item.cta}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] border-t border-b border-[#E5E5E5] py-12">
          <div className="container-tennessine max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="uppercase font-semibold text-[#F5791F] text-sm mb-2 tracking-wide">Depoimento</span>
              <svg width="36" height="28" fill="none" className="mb-4 text-[#F5791F]" viewBox="0 0 38 28"><path d="M9.667 28C7.0207 28 4.79622 27.0515 2.99355 25.1546C1.19087 23.2577 0.289536 20.8897 0.289536 18.0506C0.289536 14.3799 2.02786 11.0573 5.5045 8.08264L14.6791 0L18.0348 4.03759L9.69606 11.6198C11.8976 13.2774 13.0967 15.3232 13.2932 17.7571C13.4577 19.6323 12.9574 21.1336 11.7922 22.261C10.6832 23.3877 9.01556 23.951 6.78928 23.951C6.73964 26.1503 7.56939 27.7126 9.27852 28H9.667Z" fill="#F5791F" /><path d="M28.667 28C26.0207 28 23.7962 27.0515 21.9935 25.1546C20.1909 23.2577 19.2895 20.8897 19.2895 18.0506C19.2895 14.3799 21.0279 11.0573 24.5045 8.08264L33.6791 0L37.0348 4.03759L28.6961 11.6198C30.8976 13.2774 32.0967 15.3232 32.2932 17.7571C32.4577 19.6323 31.9574 21.1336 30.7922 22.261C29.6832 23.3877 28.0156 23.951 25.7893 23.951C25.7396 26.1503 26.5694 27.7126 28.2785 28H28.667Z" fill="#F5791F"/></svg>
              <blockquote className="text-center text-xl font-medium text-[#333333] italic max-w-2xl">
                "{testimonials[0].quote}"
                <span className="block mt-4 text-base font-normal not-italic text-[#666]">
                  — {testimonials[0].name}
                  <span className="ml-1 text-[#AAA] text-sm">{testimonials[0].company}</span>
                </span>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="container-tennessine">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-2 text-center">
              Galeria de Imagens
            </h2>
            <p className="text-[#333333] mb-8 text-center">Confira nossos últimos serviços realizados com excelência.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {galleryImages.map(({ img, alt }, idx) => (
                <div key={idx} className="rounded-xl shadow bg-[#fafbfc] border border-[#E5E5E5] overflow-hidden flex items-center justify-center h-64">
                  <img src={img} alt={alt} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-16 border-t border-[#E5E5E5]" id="contato">
          <div className="container-tennessine max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-1">Entre em contato</h2>
            <p className="mb-6 text-[#333333]">Preencha o formulário abaixo para nos contatar</p>
            <form className="space-y-5">
              <div>
                <label htmlFor="nome" className="block font-medium text-[#333333] mb-1">
                  Nome *
                </label>
                <input id="nome" type="text" required placeholder="Seu nome" className="w-full border border-[#E5E5E5] rounded-md py-2 px-4 text-[#333] bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-[#333333] mb-1">
                  E-mail *
                </label>
                <input id="email" type="email" required placeholder="seu@email.com" className="w-full border border-[#E5E5E5] rounded-md py-2 px-4 text-[#333] bg-white" />
              </div>
              <div>
                <label htmlFor="mensagem" className="block font-medium text-[#333333] mb-1">
                  Mensagem
                </label>
                <textarea id="mensagem" rows={4} placeholder="Digite sua mensagem..." className="w-full border border-[#E5E5E5] rounded-md py-2 px-4 text-[#333] bg-white"></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input id="termos" type="checkbox" required className="accent-[#F5791F]" />
                <label htmlFor="termos" className="text-[#333333] text-sm">
                  Aceito os Termos
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2F2F2F] hover:bg-[#1A1A1A] text-white font-semibold rounded-md py-3 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
