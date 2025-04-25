import React from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section className="py-16">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-6">Compare nossos planos e escolha a solução ideal para o seu laboratório ou operação</h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">Planos desenvolvidos para garantir performance, segurança e suporte técnico especializado em cada etapa do seu processo.</p>
        
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-[#d76512] to-[#f5a20a]">
                <TableCell className="py-6 px-6 font-bold text-white">Categoria</TableCell>
                <TableCell className="py-6 px-6 text-center font-bold text-white">Starter</TableCell>
                <TableCell className="py-6 px-6 text-center font-bold text-white">Standard</TableCell>
                <TableCell className="py-6 px-6 text-center font-bold text-white">Premium</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Atendimento Técnico</TableCell>
                <TableCell className="py-4 px-6 text-center">Suporte remoto essencial</TableCell>
                <TableCell className="py-4 px-6 text-center">Atendimento remoto e presencial com prioridade</TableCell>
                <TableCell className="py-4 px-6 text-center">Suporte completo personalizado</TableCell>
              </TableRow>
              <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Manutenção e Serviços</TableCell>
                <TableCell className="py-4 px-6 text-center">Manutenção preventiva básica</TableCell>
                <TableCell className="py-4 px-6 text-center">Manutenção preventiva e corretiva</TableCell>
                <TableCell className="py-4 px-6 text-center">Soluções integradas de manutenção e otimização</TableCell>
              </TableRow>
              <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Capacitação e Treinamento</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento operacional básico</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento operacional + consultorias técnicas</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento completo customizado</TableCell>
              </TableRow>
              <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Relatórios e Documentação</TableCell>
                <TableCell className="py-4 px-6 text-center">Relatórios padrões de atendimento</TableCell>
                <TableCell className="py-4 px-6 text-center">Relatórios operacionais detalhados</TableCell>
                <TableCell className="py-4 px-6 text-center">Relatórios customizados e auditorias</TableCell>
              </TableRow>
              <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Benefícios Comerciais</TableCell>
                <TableCell className="py-4 px-6 text-center">Descontos em peças</TableCell>
                <TableCell className="py-4 px-6 text-center">Garantia estendida + descontos adicionais</TableCell>
                <TableCell className="py-4 px-6 text-center">Condições comerciais exclusivas</TableCell>
              </TableRow>
               <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Investimento Estimado</TableCell>
                <TableCell className="py-4 px-6 text-center">A partir de R$ 45 mil/ano</TableCell>
                <TableCell className="py-4 px-6 text-center">A partir de R$ 65 mil/ano</TableCell>
                <TableCell className="py-4 px-6 text-center">Personalizado conforme necessidade</TableCell>
              </TableRow>
              <TableRow className="hover:bg-orange-50 transition-colors">
                <TableCell className="py-4 px-6 font-medium">Indicação</TableCell>
                <TableCell className="py-4 px-6 text-center">Operações de baixa complexidade</TableCell>
                <TableCell className="py-4 px-6 text-center">Operações contínuas e estruturadas</TableCell>
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
