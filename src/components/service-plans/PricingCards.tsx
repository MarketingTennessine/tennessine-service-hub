
import React from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Starter</CardTitle>
          <CardDescription className="text-lg">Essencial para Começar com Segurança</CardDescription>
          <div className="text-2xl font-bold mt-4">A partir de R$ 45 mil/ano</div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">Ideal para quem busca suporte técnico básico, manutenção preventiva e tranquilidade no dia a dia, sem comprometer o orçamento.</p>
          <ul className="space-y-2">
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Suporte remoto essencial</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Manutenção preventiva básica</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Relatórios padrões de atendimento</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Solicitar proposta</Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg border-orange-200 bg-orange-50">
        <CardHeader>
          <div className="bg-orange-500 text-white text-xs uppercase font-bold py-1 px-3 rounded absolute top-0 right-0 mt-4 mr-4">Recomendado</div>
          <CardTitle>Standard</CardTitle>
          <CardDescription className="text-lg">Para Operações em Expansão</CardDescription>
          <div className="text-2xl font-bold mt-4">A partir de R$ 65 mil/ano</div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">Perfeito para quem precisa de suporte técnico ágil, manutenção corretiva programada e maior robustez na gestão de equipamentos em operação contínua.</p>
          <ul className="space-y-2">
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Atendimento remoto e presencial com prioridade</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Manutenção preventiva e corretiva</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Treinamento operacional + consultorias técnicas</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Solicitar proposta</Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Premium</CardTitle>
          <CardDescription className="text-lg">Alta Performance e Suporte Estratégico</CardDescription>
          <div className="text-2xl font-bold mt-4">Personalizado</div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">Solução customizada para quem exige confiabilidade máxima, consultoria técnica contínua e performance otimizada em ambientes críticos e de alta exigência.</p>
          <ul className="space-y-2">
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Suporte completo personalizado</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Soluções integradas de manutenção e otimização</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Relatórios customizados e auditorias</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Solicitar proposta</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCards;
