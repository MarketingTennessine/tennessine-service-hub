import React from 'react';
import { RocketIcon, ShieldCheckIcon, Code2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardsProps {
  onRequestPlan: () => void;
}

const PricingCards = ({ onRequestPlan }: PricingCardsProps) => {
  const features = {
    bronze: [
      "Suporte técnico via chat e e-mail",
      "Monitoramento básico de equipamentos",
      "Relatórios mensais de status",
    ],
    silver: [
      "Suporte técnico prioritário",
      "Monitoramento avançado com alertas",
      "Análise de dados e recomendações",
      "Consultoria técnica trimestral",
    ],
    gold: [
      "Suporte técnico VIP 24/7",
      "Monitoramento preditivo com IA",
      "Otimização de performance",
      "Consultoria técnica mensal",
      "Treinamento personalizado",
    ],
  };

  const handlePlanRequest = () => {
    onRequestPlan();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Bronze Plan */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 py-6 px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Bronze</h3>
          <p className="text-gray-500">Ideal para pequenas operações</p>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 1.500 <span className="text-sm text-gray-500 font-normal">/ ano</span>
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
            Solicitar Plano Bronze
          </Button>
        </div>
      </div>

      {/* Silver Plan */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 py-6 px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Silver</h3>
          <p className="text-gray-500">Para empresas em crescimento</p>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 4.000 <span className="text-sm text-gray-500 font-normal">/ ano</span>
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
            Solicitar Plano Silver
          </Button>
        </div>
      </div>

      {/* Gold Plan */}
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 py-6 px-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Gold</h3>
          <p className="text-gray-500">Solução completa para alta performance</p>
          <p className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 8.000 <span className="text-sm text-gray-500 font-normal">/ ano</span>
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
            Solicitar Plano Gold
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
