
import React from 'react';
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-6">Compare nossos planos e escolha a solução ideal para o seu laboratório ou operação</h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">Planos desenvolvidos para garantir performance, segurança e suporte técnico especializado em cada etapa do seu processo.</p>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell className="py-4 px-6 font-bold">Categoria</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold">Starter</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold bg-[#FFF6F0]">Standard</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold">Premium</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="py-4 px-6">Atendimento Técnico</TableCell>
                <TableCell className="py-4 px-6 text-center">Suporte remoto essencial</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Atendimento remoto e presencial com prioridade</TableCell>
                <TableCell className="py-4 px-6 text-center">Suporte completo personalizado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Manutenção e Serviços</TableCell>
                <TableCell className="py-4 px-6 text-center">Manutenção preventiva básica</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Manutenção preventiva e corretiva</TableCell>
                <TableCell className="py-4 px-6 text-center">Soluções integradas de manutenção e otimização</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Capacitação e Treinamento</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento operacional básico</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Treinamento operacional + consultorias técnicas</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento completo customizado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Relatórios e Documentação</TableCell>
                <TableCell className="py-4 px-6 text-center">Relatórios padrões de atendimento</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Relatórios operacionais detalhados</TableCell>
                <TableCell className="py-4 px-6 text-center">Relatórios customizados e auditorias</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Benefícios Comerciais</TableCell>
                <TableCell className="py-4 px-6 text-center">Descontos em peças</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Garantia estendida + descontos adicionais</TableCell>
                <TableCell className="py-4 px-6 text-center">Condições comerciais exclusivas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Investimento Estimado</TableCell>
                <TableCell className="py-4 px-6 text-center">A partir de R$ 45 mil/ano</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">A partir de R$ 65 mil/ano</TableCell>
                <TableCell className="py-4 px-6 text-center">Personalizado conforme necessidade</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Indicação</TableCell>
                <TableCell className="py-4 px-6 text-center">Operações de baixa complexidade</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Operações contínuas e estruturadas</TableCell>
                <TableCell className="py-4 px-6 text-center">Ambientes críticos ou de alta performance</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-center text-gray-500 mt-6">As características dos planos podem ser adaptadas conforme a necessidade de cada projeto. Solicite uma proposta personalizada para mais detalhes.</p>
      </div>
    </section>
  );
};

export default ComparisonTable;
