
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <Card className="relative overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gray-50 pb-6 pt-8 text-center border-b">
          <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">Starter</CardTitle>
          <CardDescription className="text-gray-600">Essencial para Começar com Segurança</CardDescription>
          <div className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 45.000 <span className="text-sm text-gray-500 font-normal">/ ano</span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Ideal para operações de baixa complexidade
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-900">Recursos</h4>
          <ul className="space-y-3">
            {features.bronze.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="rounded-full bg-orange-100 p-1 mr-3 mt-0.5">
                  <Check className="h-3 w-3 text-orange-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-4 pb-8">
          <Button 
            variant="default"
            className="w-full bg-gradient-to-r from-[#d76512] to-[#f5a20a] hover:from-[#c25403] hover:to-[#e48f00] text-white shadow-md"
            onClick={onRequestPlan}
          >
            Solicitar proposta
          </Button>
        </CardFooter>
      </Card>

      {/* Standard Plan */}
      <Card className="relative overflow-hidden border-2 border-[#F5791F] hover:shadow-xl transition-all duration-300 scale-105 z-10">
        <div className="absolute top-0 right-0 bg-[#F5791F] text-white text-xs font-semibold px-3 py-1.5 rounded-bl-lg">
          Recomendado
        </div>
        <CardHeader className="bg-gradient-to-r from-[#d76512]/10 to-[#f5a20a]/10 pb-6 pt-8 text-center border-b">
          <CardTitle className="text-2xl font-semibold text-[#d76512] mb-2">Standard</CardTitle>
          <CardDescription className="text-gray-600">Para Operações em Expansão</CardDescription>
          <div className="mt-4 text-3xl font-extrabold text-gray-900">
            R$ 65.000 <span className="text-sm text-gray-500 font-normal">/ ano</span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Ideal para operações contínuas e estruturadas
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-900">Recursos</h4>
          <ul className="space-y-3">
            {features.silver.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="rounded-full bg-orange-200 p-1 mr-3 mt-0.5">
                  <Check className="h-3 w-3 text-orange-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-4 pb-8">
          <Button 
            variant="default"
            className="w-full bg-gradient-to-r from-[#d76512] to-[#f5a20a] hover:from-[#c25403] hover:to-[#e48f00] text-white shadow-md"
            onClick={onRequestPlan}
          >
            Solicitar proposta
          </Button>
        </CardFooter>
      </Card>

      {/* Premium Plan */}
      <Card className="relative overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gray-50 pb-6 pt-8 text-center border-b">
          <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">Premium</CardTitle>
          <CardDescription className="text-gray-600">Alta Performance e Suporte Estratégico</CardDescription>
          <div className="mt-4 text-3xl font-extrabold text-gray-900">
            Personalizado
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Para ambientes críticos ou de alta performance
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-900">Recursos</h4>
          <ul className="space-y-3">
            {features.gold.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="rounded-full bg-orange-100 p-1 mr-3 mt-0.5">
                  <Check className="h-3 w-3 text-orange-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-4 pb-8">
          <Button 
            variant="default"
            className="w-full bg-gradient-to-r from-[#d76512] to-[#f5a20a] hover:from-[#c25403] hover:to-[#e48f00] text-white shadow-md"
            onClick={onRequestPlan}
          >
            Solicitar proposta
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCards;
