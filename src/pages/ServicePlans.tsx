
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, FileMinus, FilePlus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicePlans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennessine-black to-tennessine-gray-dark text-white py-16">
        <div className="container-tennessine">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planos de Serviço Tennessine: Compare e Escolha o Ideal para Você
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Conheça em detalhes nossos planos de serviço e escolha a solução que melhor atende às necessidades da sua operação.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Tabela Completa de Comparação</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left border-b border-gray-200 w-1/4">Recursos</th>
                  <th className="py-4 px-6 text-center border-b border-gray-200 w-1/4">
                    <span className="block text-lg font-bold">Starter</span>
                    <span className="block text-tennessine-gray-medium text-sm">Básico</span>
                  </th>
                  <th className="py-4 px-6 text-center border-b border-gray-200 w-1/4 bg-gray-100">
                    <span className="block text-lg font-bold text-tennessine-copper">Standard</span>
                    <span className="block text-tennessine-gray-medium text-sm">Recomendado</span>
                  </th>
                  <th className="py-4 px-6 text-center border-b border-gray-200 w-1/4">
                    <span className="block text-lg font-bold">Premium</span>
                    <span className="block text-tennessine-gray-medium text-sm">Avançado</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Suporte Técnico */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium" colSpan={4}>Suporte Técnico</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Suporte remoto</td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Visitas técnicas para manutenção corretiva</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Visitas técnicas para manutenção preventiva</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Auditoria técnica anual</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Tempo de resposta</td>
                  <td className="py-4 px-6 text-center">Até 48h</td>
                  <td className="py-4 px-6 text-center bg-gray-50">Até 24h</td>
                  <td className="py-4 px-6 text-center">Até 4h</td>
                </tr>

                {/* Capacitação e Treinamento */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium" colSpan={4}>Capacitação e Treinamento</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Treinamento operacional básico</td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Consultorias técnicas remotas</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Treinamento avançado por aplicação</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Workshops customizados in-loco</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>

                {/* Validação e Qualificação */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium" colSpan={4}>Validação e Qualificação</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Suporte na qualificação de instalação (IQ)</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Suporte na qualificação operacional (OQ)</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Suporte na validação de métodos (PQ)</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>

                {/* Outros Benefícios */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium" colSpan={4}>Outros Benefícios</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Desconto em peças</td>
                  <td className="py-4 px-6 text-center">5%</td>
                  <td className="py-4 px-6 text-center bg-gray-50">10%</td>
                  <td className="py-4 px-6 text-center">15%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Prioridade para agendamentos</td>
                  <td className="py-4 px-6 text-center">Padrão</td>
                  <td className="py-4 px-6 text-center bg-gray-50">Alta</td>
                  <td className="py-4 px-6 text-center">Máxima</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Relatórios técnicos detalhados</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">Acesso a webinars exclusivos</td>
                  <td className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Preços e Condições</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Starter */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-2 text-center">Starter</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">R$ 15.000</span>
                <span className="text-tennessine-gray-medium">/ano</span>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Métodos de pagamento:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 7 dias (DDL)</li>
                  <li>• 15 dias (DDL)</li>
                  <li>• 30 dias (DDL)</li>
                </ul>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Solicitar proposta para este plano <FileMinus size={18} />
              </button>
            </div>
            
            {/* Plano Standard */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-tennessine-copper transform scale-105">
              <div className="absolute top-0 right-0 bg-tennessine-copper text-white text-xs px-2 py-1 rounded-bl-lg">Recomendado</div>
              <h3 className="text-xl font-bold mb-2 text-center">Standard</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">R$ 35.000</span>
                <span className="text-tennessine-gray-medium">/ano</span>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Métodos de pagamento:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 7 dias (DDL)</li>
                  <li>• 15 dias (DDL)</li>
                  <li>• 30 dias (DDL)</li>
                </ul>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Solicitar proposta para este plano <FilePlus size={18} />
              </button>
            </div>
            
            {/* Plano Premium */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-2 text-center">Premium</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">R$ 60.000</span>
                <span className="text-tennessine-gray-medium">/ano</span>
              </div>
              <div className="mb-6">
                <h4 className="font-medium mb-2">Métodos de pagamento:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 7 dias (DDL)</li>
                  <li>• 15 dias (DDL)</li>
                  <li>• 30 dias (DDL)</li>
                </ul>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Solicitar proposta para este plano <FilePlus size={18} />
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-tennessine-gray-medium">
            <p>Valores estimados anuais para contratos com base técnica definida. Podem variar conforme linha de equipamento.</p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container-tennessine max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Termos e Condições Gerais</h2>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Restrições de cobertura</h3>
            <p className="mb-4">Os serviços contratados abrangem apenas os itens explicitamente listados em cada plano. Qualquer serviço adicional estará sujeito a cobranças extras conforme tabela vigente.</p>
            <p>Equipamentos em más condições de conservação ou com modificações não autorizadas pelo fabricante podem não ser elegíveis para determinados serviços.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Responsabilidade do cliente para acesso técnico</h3>
            <p className="mb-4">O cliente deve garantir acesso adequado aos equipamentos, incluindo permissões de segurança, liberação de acesso às instalações e disponibilidade de pessoal autorizado durante as visitas técnicas.</p>
            <p>Requisitos específicos de segurança da instituição devem ser informados com antecedência.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Regras para rescisão de contrato</h3>
            <p className="mb-4">A rescisão antecipada de contratos está sujeita a multa de 30% sobre o valor remanescente.</p>
            <p>A notificação de não renovação deve ser enviada com pelo menos 30 dias de antecedência do término do contrato vigente.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Observações sobre peças, upgrades e carga horária</h3>
            <ul className="space-y-2">
              <li>• Peças de reposição são cobradas separadamente, com descontos conforme o plano contratado.</li>
              <li>• Upgrades de software e hardware não estão inclusos em nenhum plano e são orçados separadamente.</li>
              <li>• Treinamentos têm carga horária definida: Básico (4h), Avançado (8h) e Customizado (conforme necessidade).</li>
              <li>• O número de visitas técnicas é limitado conforme cada plano.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Diferença entre manutenção corretiva e preventiva</h3>
            <p className="mb-4"><span className="font-medium">Manutenção corretiva:</span> Destina-se à resolução de falhas já ocorridas que prejudicam ou impedem o funcionamento normal do equipamento.</p>
            <p><span className="font-medium">Manutenção preventiva:</span> Procedimentos periódicos programados para verificação, limpeza, ajustes e calibrações visando prevenir falhas e garantir a confiabilidade do sistema.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tennessine-copper text-white">
        <div className="container-tennessine text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para escolher seu plano?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe para uma análise personalizada das necessidades da sua organização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services#contact" className="bg-white text-tennessine-copper hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center gap-2">
              Solicitar proposta <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/551155555555" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center gap-2">
              Falar via WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Floating Button */}
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

export default ServicePlans;
