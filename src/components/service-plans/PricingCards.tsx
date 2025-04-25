
import React from 'react';
import { Button } from "@/components/ui/button";

interface PricingCardsProps {
  onRequestPlan: () => void;
}

const PricingCards = ({ onRequestPlan }: PricingCardsProps) => {
  const features = {
    bronze: [
      "Suporte remoto essencial",
      "Manutenção preventiva básica",
      "Relatórios padrões de atendimento",
    ],
    silver: [
      "Atendimento remoto e presencial com prioridade",
      "Manutenção preventiva e corretiva",
      "Treinamento operacional + consultorias técnicas",
    ],
    gold: [
      "Suporte completo personalizado",
      "Soluções integradas de manutenção e otimização",
      "Relatórios customizados e auditorias",
    ],
  };

  const handlePlanRequest = () => {
    onRequestPlan();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 py-6 px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-500">Essencial para Começar com Segurança</p>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 45.000 <span className="text-sm text-gray-500 font-normal">/ ano</span>
          </p>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Recursos</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {features.bronze.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Button 
            variant="default"
            className="w-full mt-6 bg-[#d76512] hover:bg-[#e07a32] text-white"
            onClick={handlePlanRequest}
          >
            Solicitar proposta
          </Button>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 py-6 px-6 text-center">
          <div className="absolute top-0 right-0 bg-[#F5791F] text-white text-xs px-2 py-1 rounded-bl-lg">
            Recomendado
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Standard</h3>
          <p className="text-gray-500">Para Operações em Expansão</p>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 65.000 <span className="text-sm text-gray-500 font-normal">/ ano</span>
          </p>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Recursos</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {features.silver.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Button 
            variant="default"
            className="w-full mt-6 bg-[#d76512] hover:bg-[#e07a32] text-white"
            onClick={handlePlanRequest}
          >
            Solicitar proposta
          </Button>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 py-6 px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium</h3>
          <p className="text-gray-500">Alta Performance e Suporte Estratégico</p>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">
            Personalizado
          </p>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Recursos</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {features.gold.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Button 
            variant="default"
            className="w-full mt-6 bg-[#d76512] hover:bg-[#e07a32] text-white"
            onClick={handlePlanRequest}
          >
            Solicitar proposta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
