
import React from 'react';
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Starter</CardTitle>
          <CardDescription className="text-lg">Básico</CardDescription>
          <div className="text-2xl font-bold mt-4">R$ 45.000/ano</div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Suporte remoto ilimitado</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Documentação completa</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Treinamento operacional básico</li>
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
          <CardDescription className="text-lg">Recomendado</CardDescription>
          <div className="text-2xl font-bold mt-4">R$ 65.500/ano</div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Tudo do Starter</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> 1 visita para manutenção corretiva</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> 2 consultorias técnicas remotas</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Solicitar proposta</Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Premium</CardTitle>
          <CardDescription className="text-lg">Avançado</CardDescription>
          <div className="text-2xl font-bold mt-4">R$ 90.000/ano</div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Tudo do Standard</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> 2 visitas para manutenção corretiva</li>
            <li className="flex items-center"><Check className="mr-2 text-green-500" size={16} /> Auditorias trimestrais</li>
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
