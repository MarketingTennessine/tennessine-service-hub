import React from 'react';
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-12">Tabela de Comparação Técnica</h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell className="py-4 px-6 font-bold">Recurso</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold">Starter</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold bg-[#FFF6F0]">Standard</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold">Premium</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="py-4 px-6">Assistência Remota</TableCell>
                <TableCell className="py-4 px-6 text-center">Ilimitado</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Ilimitado</TableCell>
                <TableCell className="py-4 px-6 text-center">Ilimitado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Suporte inicial por telefone e email</TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check className="mx-auto" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Suporte remoto</TableCell>
                <TableCell className="py-4 px-6 text-center">3</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">6</TableCell>
                <TableCell className="py-4 px-6 text-center">9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Documentação de serviço (Relatórios, laudos, etc)</TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check className="mx-auto" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Prioridade em chamados de assistência</TableCell>
                <TableCell className="py-4 px-6 text-center">Resposta em até 3 dias úteis</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Resposta em até 2 dias úteis</TableCell>
                <TableCell className="py-4 px-6 text-center">Resposta em até 1 dia útil</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Visitas para manutenção corretiva</TableCell>
                <TableCell className="py-4 px-6 text-center"><X className="mx-auto text-red-500" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">1</TableCell>
                <TableCell className="py-4 px-6 text-center">2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Itens de Reposição</TableCell>
                <TableCell className="py-4 px-6 text-center">Desconto em peças de reposição</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Desconto em peças + 3 meses de garantia no serviço</TableCell>
                <TableCell className="py-4 px-6 text-center">Desconto em peças + 6 meses de garantia no serviço</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Treinamento Operacional e Aplicação</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento Operacional</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Treinamento Operacional e até 2 consultorias remotas de aplicação</TableCell>
                <TableCell className="py-4 px-6 text-center">Treinamento Operacional e um treinamento de aplicação completo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Auditorias de desempenho trimestrais</TableCell>
                <TableCell className="py-4 px-6 text-center"><X className="mx-auto text-red-500" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><X className="mx-auto text-red-500" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Consultoria para otimização de equipamentos</TableCell>
                <TableCell className="py-4 px-6 text-center"><X className="mx-auto text-red-500" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><X className="mx-auto text-red-500" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Método de pagamento</TableCell>
                <TableCell className="py-4 px-6 text-center">Até 7 DDL</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Até 15 DDL</TableCell>
                <TableCell className="py-4 px-6 text-center">Até 30 DDL</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Visita Anual de Manutenção Geral</TableCell>
                <TableCell className="py-4 px-6 text-center"><X className="mx-auto text-red-500" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check className="mx-auto" size={20} /></TableCell>
                <TableCell className="py-4 px-6 text-center"><Check className="mx-auto" size={20} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6">Descontos em Peças/Upgrades</TableCell>
                <TableCell className="py-4 px-6 text-center">Até 2,5%</TableCell>
                <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Até 2,5% peças / 2,5% upgrades</TableCell>
                <TableCell className="py-4 px-6 text-center">Até 5% peças / 5% upgrades</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-4 px-6 font-bold">Total em Reais (R$)</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold">45.000</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold bg-[#FFF6F0]">65.500</TableCell>
                <TableCell className="py-4 px-6 text-center font-bold">90.000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
