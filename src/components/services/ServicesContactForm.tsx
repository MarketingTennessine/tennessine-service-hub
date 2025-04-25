
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ServicesContactForm = () => {
  const { toast } = useToast();
  
  const handlePlanSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Em breve entraremos em contato.",
    });
  };

  return (
    <section className="py-16 bg-[#FAFAFA]" id="contact">
      <div className="container-tennessine">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 border border-[#E5E5E5]">
            <h3 className="text-xl font-bold mb-4 text-center">Escolha o Plano Ideal para Seu Laboratório</h3>
            <p className="mb-6 text-center text-gray-600">Solicite uma proposta personalizada com base nas suas necessidades e melhore a performance dos seus equipamentos.</p>
            <form onSubmit={handlePlanSubmit} className="space-y-4">
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
                <Button type="submit" className="bg-[#F5791F] hover:bg-[#E65A00] text-white">
                  Quero escolher um plano
                </Button>
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
  );
};

export default ServicesContactForm;
