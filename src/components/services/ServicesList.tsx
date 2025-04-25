
import { FlaskConical, Users, Wrench, Truck } from "lucide-react";
import ServiceSection from "../ServiceSection";

const ServicesList = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#d76512]">Nossos Serviços Técnicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceSection
            title="Manutenção Preventiva e Corretiva"
            description="Com nossa manutenção preventiva, você evita paradas inesperadas e prolonga a vida útil dos seus instrumentos analíticos. A manutenção corretiva busca solucionar problemas após falhas, restabelecendo o funcionamento dos equipamentos com segurança e eficiência."
            icon={<Wrench size={48} className="text-[#d76512]" />}
          />
          <ServiceSection
            title="Treinamentos e Capacitações Sob Medida"
            description="Nossos técnicos e engenheiros são treinados pelos fabricantes, no Brasil e no exterior. Oferecemos treinamentos personalizados para atender às necessidades específicas do seu laboratório e capacitar sua equipe."
            icon={<Users size={48} className="text-[#d76512]" />}
          />
          <ServiceSection
            title="Qualificação de Equipamentos"
            description="Realizamos qualificações de instalação, operação e desempenho (IQ, OQ, PQ), garantindo a conformidade com normas e padrões de qualidade exigidos em ambientes regulatórios."
            icon={<FlaskConical size={48} className="text-[#d76512]" />}
          />
          <ServiceSection
            title="Soluções em Logística Integrada e Comércio Exterior"
            description="Oferecemos suporte logístico completo para transporte, consolidação de peças e apoio a importações/exportações. Isso garante rapidez e segurança em atendimentos que envolvem peças internacionais ou transporte técnico especializado."
            icon={<Truck size={48} className="text-[#d76512]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
