import React from 'react';
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ServicePlans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-[#F5791F] to-[#E65A00] text-white py-16">
        <div className="container-tennessine">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Compare os Planos de Serviço da Tennessine
          </h1>
          <p className="text-lg mb-8 text-white/90 text-center max-w-3xl mx-auto">
            Conheça em detalhes nossos planos de serviço e escolha a solução que melhor atende às necessidades da sua operação.
          </p>
        </div>
      </section>

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

          <h2 className="text-3xl font-bold text-center mt-16 mb-12">Informações Comerciais</h2>
          
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

          <p className="text-center text-gray-500 mt-6">Valores estimados anuais, sujeitos a variação conforme linha de equipamento.</p>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Termos e Condições</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container-tennessine">
              <div>
                <h3 className="text-xl font-bold mb-4">Condições Gerais</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Este plano cobre apenas os itens listados. Quaisquer serviços adicionais serão cobrados separadamente.</li>
                  <li>O cliente é responsável por garantir o acesso aos equipamentos no momento da manutenção.</li>
                  <li>O pagamento deve ser efetuado conforme o logística adquirida.</li>
                  <li>O contrato pode ser rescindido com aviso prévio de 45 dias por qualquer uma das partes.</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Descontos</h3>
                <p>Porcentagem de desconto sujeito à limitação de valor teto a depender do componente/linha.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Documentação de Serviço</h3>
                <p>Apenas para serviços realizados presencialmente, principalmente para laudos de qualificação e afins.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Treinamento Operacional e de Aplicação</h3>
                <p>Carga horária sujeita a variação de acordo com a linha/equipamento adquirido(a).</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Visitas para manutenção corretiva</h3>
                <p>Visitas corretivas não englobam emergências, salvo exceções com cláusula em contrato vigente.</p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Visita de Manutenção Anual</h3>
                <p>Caso haja necessidade de substituição de partes que apresentem desgaste ou defeito no sistema, será feita consulta prévia do valor agregado.</p>
              </div>
            </div>

            <div className="mt-16 text-center container-tennessine">
              <h3 className="text-2xl font-bold mb-4">Pronto para escolher seu plano?</h3>
              <p className="mb-8">Entre em contato com nossa equipe para uma análise personalizada das necessidades da sua organização.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://tennessine.com.br/contato" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
                >
                  Solicitar proposta personalizada
                </a>
                <a 
                  href="https://wa.me/5521998960117"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Falar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePlans;
