import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const ServicePlans = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#F5791F] to-[#E65A00] text-white py-16">
        <div className="container-tennessine">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare os Planos de Serviço da Tennessine
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Conheça em detalhes nossos planos de serviço e escolha a solução que melhor atende às necessidades da sua operação.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F2F2F]">Tabela de Comparação Técnica</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 py-4 px-6 text-left">Recurso</TableHead>
                  <TableHead className="w-1/4 py-4 px-6 text-center">
                    <span className="block text-lg font-bold">Starter</span>
                  </TableHead>
                  <TableHead className="w-1/4 py-4 px-6 text-center bg-[#FFF6F0]">
                    <span className="block text-lg font-bold text-[#F5791F]">Standard</span>
                  </TableHead>
                  <TableHead className="w-1/4 py-4 px-6 text-center">
                    <span className="block text-lg font-bold">Premium</span>
                  </TableHead>
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
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Suporte remoto</TableCell>
                  <TableCell className="py-4 px-6 text-center">3</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">6</TableCell>
                  <TableCell className="py-4 px-6 text-center">9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Documentação de serviço (Relatórios, laudos, etc)</TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Prioridade em chamados de assistência</TableCell>
                  <TableCell className="py-4 px-6 text-center">Resposta em até 3 dias úteis</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Resposta em até 2 dias úteis</TableCell>
                  <TableCell className="py-4 px-6 text-center">Resposta em até 1 dia útil</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Visitas para manutenção corretiva</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
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
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Consultoria para otimização de equipamentos</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Método de pagamento</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 7 DDL</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Até 15 DDL</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 30 DDL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Visita Anual de Manutenção Geral</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Descontos em Peças/Upgrades</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 2,5%</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-[#FFF6F0]">Até 2,5% pe��as / 2,5% upgrades</TableCell>
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

      {/* Pricing Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F2F2F]">Informações Comerciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Starter */}
            <Card className="border-t-4 border-[#E5E5E5]">
              <CardHeader>
                <CardTitle className="text-xl text-center text-[#2F2F2F]">Starter</CardTitle>
                <CardDescription className="text-center">Básico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">R$ 45.000</span>
                  <span className="text-[#555555]">/ano</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>Suporte remoto ilimitado</span></li>
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>Documentação completa</span></li>
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>Treinamento operacional básico</span></li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#F5791F] hover:bg-[#C86714] text-white">
                  Solicitar proposta
                </Button>
              </CardFooter>
            </Card>
            {/* Plano Standard */}
            <Card className="border-t-4 border-[#F5791F] scale-105 shadow-lg">
              <div className="absolute top-0 right-0 bg-[#F5791F] text-white text-xs px-2 py-1 rounded-bl-lg">Recomendado</div>
              <CardHeader>
                <CardTitle className="text-xl text-center text-[#F5791F]">Standard</CardTitle>
                <CardDescription className="text-center">Recomendado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">R$ 65.500</span>
                  <span className="text-[#555555]">/ano</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>Tudo do Starter</span></li>
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>1 visita para manutenção corretiva</span></li>
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>2 consultorias técnicas remotas</span></li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#F5791F] hover:bg-[#C86714] text-white">
                  Solicitar proposta
                </Button>
              </CardFooter>
            </Card>
            {/* Plano Premium */}
            <Card className="border-t-4 border-[#2F2F2F]">
              <CardHeader>
                <CardTitle className="text-xl text-center text-[#2F2F2F]">Premium</CardTitle>
                <CardDescription className="text-center">Avançado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">R$ 90.000</span>
                  <span className="text-[#555555]">/ano</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>Tudo do Standard</span></li>
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>2 visitas para manutenção corretiva</span></li>
                  <li className="flex items-start gap-2"><Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" /><span>Auditorias trimestrais</span></li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#F5791F] hover:bg-[#C86714] text-white">
                  Solicitar proposta
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center text-sm text-[#555555]">
            <p>Valores estimados anuais, sujeitos a variação conforme linha de equipamento.</p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container-tennessine max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2F2F2F]">Termos e Condições</h2>
          <div className="bg-[#F8F8F8] rounded-lg p-8 shadow-sm mb-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Condições Gerais</h3>
              <ul className="space-y-2">
                <li>Este plano cobre apenas os itens listados. Quaisquer serviços adicionais serão cobrados separadamente.</li>
                <li>O cliente é responsável por garantir o acesso aos equipamentos no momento da manutenção.</li>
                <li>O pagamento deve ser efetuado conforme o logística adquirida.</li>
                <li>O contrato pode ser rescindido com aviso prévio de 45 dias por qualquer uma das partes.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Descontos</h3>
              <p>Porcentagem de desconto sujeito à limitação de valor teto a depender do componente/linha.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Documentação de Serviço</h3>
              <p>Apenas para serviços realizados presencialmente, principalmente para laudos de qualificação e afins.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Treinamento Operacional e de Aplicação</h3>
              <p>Carga horária sujeita a variação de acordo com a linha/equipamento adquirido(a).</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visitas para manutenção corretiva</h3>
              <p>Visitas corretivas não englobam emergências, salvo exceções com cláusula em contrato vigente.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visita de Manutenção Anual</h3>
              <p>
                Caso haja necessidade de substituição de partes que apresentem desgaste ou defeito no sistema, será feita consulta prévia do valor agregado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F5791F] to-[#E65A00] text-white">
        <div className="container-tennessine text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para escolher seu plano?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa equipe para uma análise personalizada das necessidades da sua organização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F5791F] hover:bg-[#C86714] text-white font-medium flex items-center gap-2">
              Solicitar proposta personalizada <ArrowRight size={18} />
            </Button>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-green-600 text-white px-8 py-3 hover:bg-green-700 transition-colors text-sm font-medium">
              Falar via WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="mailto:contato@tennessine.com.br"
          className="flex items-center justify-center w-12 h-12 bg-[#2F2F2F] rounded-full shadow-lg hover:bg-black transition-colors"
        >
          <Mail size={20} className="text-white" />
        </a>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.5025 3.49765C18.2462 1.24093 15.2462 0 12.0525 0C5.4637 0 0.105031 5.35909 0.105031 11.9485C0.105031 14.0611 0.650635 16.1241 1.68394 17.9403L0 24L6.20141 22.3461C7.95115 23.2845 9.9837 23.7756 12.0525 23.7756C18.6413 23.7756 24 18.4165 24 11.8268C23.8787 8.63473 22.7594 5.75438 20.5025 3.49765ZM12.0525 21.7835C10.2637 21.7835 8.47487 21.2923 6.92513 20.3103L6.5637 20.0669L2.84106 21.0599L3.83434 17.4596L3.59064 17.0985C2.48674 15.4841 1.91779 13.6168 1.91779 11.7186C1.91779 6.35909 6.4843 1.87696 12.0525 1.87696C14.7331 1.87696 17.2715 2.9818 19.1631 4.87416C21.0547 6.76651 22.1586 9.30654 22.1586 11.9876C22.1586 17.347 17.5906 21.7835 12.0525 21.7835ZM17.5113 14.4305C17.2275 14.3088 15.7594 13.5839 15.4755 13.5013C15.1917 13.4187 14.9869 13.3774 14.7821 13.6581C14.5774 13.9388 14.0084 14.5739 13.8431 14.7783C13.6777 14.9827 13.513 15.0033 13.2292 14.8816C11.1637 13.8493 9.79064 13.0418 8.41779 10.7369C8.0525 10.1429 8.60387 10.1842 9.11603 9.15947C9.23935 8.9551 9.19947 8.77123 9.1201 8.60785C9.04072 8.44448 8.48936 6.97482 8.24565 6.40734C8.00195 5.85985 7.75825 5.94186 7.59294 5.94186C7.42763 5.94186 7.22283 5.92099 7.01802 5.92099C6.81321 5.92099 6.48936 6.00299 6.20552 6.28369C5.92168 6.56438 5.15658 7.28932 5.15658 8.75898C5.15658 10.2286 6.25301 11.6579 6.3968 11.8623C6.54059 12.0667 8.4677 15.1668 11.5476 16.4536C13.513 17.2215 14.2982 17.3022 15.2715 17.1594C15.8624 17.0776 17.0319 16.4536 17.2756 15.8041C17.5193 15.1547 17.5193 14.6071 17.4399 14.4715C17.3606 14.3359 17.1558 14.2747 16.872 14.1517L17.5113 14.4305Z" fill="white"/>
          </svg>
        </a>
      </div>
      
      {/* Cinza escuro no rodapé */}
      <footer className="bg-[#2F2F2F] text-white py-12">
        <div className="container-tennessine">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tennessine</h3>
              <p className="text-gray-300 mb-4">
                Soluções que garantem a máxima eficiência e segurança em cada projeto.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#F5791F] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#F5791F] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#F5791F] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-[#F5791F] transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link to="/services/plans" className="text-gray-300 hover:text-[#F5791F] transition-colors">
                    Planos
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#F5791F] transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-[#F5791F] transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-gray-300 mb-2">
                <span className="font-medium">Endereço:</span> Av. Exemplo, 1234, São Paulo, SP
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-medium">Email:</span> contato@tennessine.com.br
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Telefone:</span> (11) 5555-5555
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tennessine Instrumentação Analítica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicePlans;
