
import { Button } from "@/components/ui/button";

const ServicesPlans = ({ scrollToComparison }: { scrollToComparison: () => void }) => {
  return (
    <section className="py-16 bg-white" id="plans">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nossos Planos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="plan-card hover:shadow-lg transition-all duration-300 flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Starter</h3>
            <p className="text-center mb-4 font-medium">Suporte essencial e monitoramento básico</p>
            <p className="text-center text-sm mb-6 text-gray-500">Ideal para demandas pontuais</p>
            <div className="mt-auto flex justify-center">
              <Button onClick={scrollToComparison} className="bg-gradient-to-r from-[#d76512] to-[#f5a20a] hover:from-[#c25403] hover:to-[#e48f00] text-white border-none">
                Compare os Planos
              </Button>
            </div>
          </div>
          <div className="plan-card border-t-4 border-t-[#F5791F] scale-105 shadow-lg flex flex-col bg-gradient-to-r from-[#d76512]/5 to-[#f5a20a]/5 z-10">
            <div className="absolute top-0 right-0 bg-[#F5791F] text-white text-xs px-2 py-1 rounded-bl-lg font-semibold">
              Recomendado
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-[#F5791F]">Standard</h3>
            <p className="text-center mb-4 font-medium">Atendimento preferencial + relatórios avançados</p>
            <p className="text-center text-sm mb-6 text-gray-500">Ideal para operação contínua</p>
            <div className="mt-auto flex justify-center">
              <Button onClick={scrollToComparison} className="bg-gradient-to-r from-[#d76512] to-[#f5a20a] hover:from-[#c25403] hover:to-[#e48f00] text-white border-none">
                Compare os Planos
              </Button>
            </div>
          </div>
          <div className="plan-card hover:shadow-lg transition-all duration-300 flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Premium</h3>
            <p className="text-center mb-4 font-medium">Soluções personalizadas + consultoria técnica contínua</p>
            <p className="text-center text-sm mb-6 text-gray-500">Para estruturas exigentes e missão crítica</p>
            <div className="mt-auto flex justify-center">
              <Button onClick={scrollToComparison} className="bg-gradient-to-r from-[#d76512] to-[#f5a20a] hover:from-[#c25403] hover:to-[#e48f00] text-white border-none">
                Compare os Planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPlans;
