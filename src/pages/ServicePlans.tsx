
import React from 'react';
import { Table, TableRow, TableCell, TableHeader, TableBody } from "@/components/ui/table";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicePlans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-[#F5791F] to-[#E65A00] text-white py-16">
        <div className="container-tennessine">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Planos de Serviço Tennessine
          </h1>
          <p className="text-lg mb-8 text-white/90 text-center max-w-3xl mx-auto">
            Compare nossos planos e escolha o que melhor atende às necessidades do seu laboratório.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">Comparativo de Planos</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell className="py-4 px-6 font-bold">Recursos</TableCell>
                  <TableCell className="py-4 px-6 text-center font-bold">Starter</TableCell>
                  <TableCell className="py-4 px-6 text-center font-bold bg-[#FFF6F0]">Standard</TableCell>
                  <TableCell className="py-4 px-6 text-center font-bold">Premium</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-4 px-6">Suporte Remoto</TableCell>
                  <TableCell className="py-4 px-6 text-center">✓</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">✓</TableCell>
                  <TableCell className="py-4 px-6 text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Acesso à Knowledge Base</TableCell>
                  <TableCell className="py-4 px-6 text-center">✓</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">✓</TableCell>
                  <TableCell className="py-4 px-6 text-center">✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Manutenção Preventiva Anual</TableCell>
                  <TableCell className="py-4 px-6 text-center">✗</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">1 visita</TableCell>
                  <TableCell className="py-4 px-6 text-center">2 visitas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Manutenções Corretivas</TableCell>
                  <TableCell className="py-4 px-6 text-center">Sob demanda</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">2 por ano</TableCell>
                  <TableCell className="py-4 px-6 text-center">Ilimitadas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Tempo de Resposta</TableCell>
                  <TableCell className="py-4 px-6 text-center">72h</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">48h</TableCell>
                  <TableCell className="py-4 px-6 text-center">24h</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Descontos em Peças/Upgrades</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 2,5%</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Até 2,5% peças / 2,5% upgrades</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 5% peças / 5% upgrades</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Capacitação de Equipe</TableCell>
                  <TableCell className="py-4 px-6 text-center">Basic</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Advanced</TableCell>
                  <TableCell className="py-4 px-6 text-center">Premium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Preço Anual</TableCell>
                  <TableCell className="py-4 px-6 text-center">A partir de R$2.500</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">A partir de R$5.000</TableCell>
                  <TableCell className="py-4 px-6 text-center">A partir de R$10.000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Pronto para escolher seu plano?</h3>
            <div className="flex justify-center">
              <a 
                href="https://tennessine.com.br/?route=checkout/cotacao_servicos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Solicitar proposta personalizada
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePlans;
