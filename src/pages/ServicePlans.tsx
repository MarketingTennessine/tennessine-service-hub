
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, FileText, Phone, Mail } from "lucide-react";
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2F2F2F] to-[#444444] text-white py-16">
        <div className="container-tennessine">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare os Planos de Serviço da Tennessine
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Conheça em detalhes nossos planos de serviço e escolha a solução que melhor atende às necessidades da sua operação.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Tabela de Comparação Técnica</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 py-4 px-6 text-left">Recursos</TableHead>
                  <TableHead className="w-1/4 py-4 px-6 text-center">
                    <span className="block text-lg font-bold">Starter</span>
                    <span className="block text-[#555555] text-sm">Básico</span>
                  </TableHead>
                  <TableHead className="w-1/4 py-4 px-6 text-center bg-gray-50">
                    <span className="block text-lg font-bold text-[#F5791F]">Standard</span>
                    <span className="block text-[#555555] text-sm">Recomendado</span>
                  </TableHead>
                  <TableHead className="w-1/4 py-4 px-6 text-center">
                    <span className="block text-lg font-bold">Premium</span>
                    <span className="block text-[#555555] text-sm">Avançado</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-4 px-6">Suporte remoto</TableCell>
                  <TableCell className="py-4 px-6 text-center">Ilimitado</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50">Ilimitado</TableCell>
                  <TableCell className="py-4 px-6 text-center">Ilimitado</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Documentação (relatórios)</TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Manutenção corretiva</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50">1 visita</TableCell>
                  <TableCell className="py-4 px-6 text-center">2 visitas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Treinamento</TableCell>
                  <TableCell className="py-4 px-6 text-center">Operacional</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50">+ 2 consultorias remotas</TableCell>
                  <TableCell className="py-4 px-6 text-center">Completo</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Auditorias</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center">Trimestral</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Consultoria</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50">Inclui</TableCell>
                  <TableCell className="py-4 px-6 text-center">Inclui</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Manutenção anual</TableCell>
                  <TableCell className="py-4 px-6 text-center"><X size={20} className="text-red-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                  <TableCell className="py-4 px-6 text-center"><Check size={20} className="text-green-500 mx-auto" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Prazo de pagamento</TableCell>
                  <TableCell className="py-4 px-6 text-center">7 DDL</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50">15 DDL</TableCell>
                  <TableCell className="py-4 px-6 text-center">30 DDL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6">Desconto em peças/upgrades</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 5%</TableCell>
                  <TableCell className="py-4 px-6 text-center bg-gray-50">Até 7,5%</TableCell>
                  <TableCell className="py-4 px-6 text-center">Até 10%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-12">Informações Comerciais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Starter */}
            <Card className="border-t-4 border-gray-300">
              <CardHeader>
                <CardTitle className="text-xl text-center">Starter</CardTitle>
                <CardDescription className="text-center">Básico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">R$ 45.000</span>
                  <span className="text-[#555555]">/ano</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Suporte remoto ilimitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Documentação completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Treinamento operacional básico</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2F2F2F] hover:bg-black text-white">
                  Solicitar proposta
                </Button>
              </CardFooter>
            </Card>
            
            {/* Plano Standard */}
            <Card className="border-t-4 border-[#F5791F] transform scale-105 shadow-lg">
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
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Tudo do Starter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 visita para manutenção corretiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>2 consultorias técnicas remotas</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#F5791F] hover:bg-[#E65A00] text-white">
                  Solicitar proposta
                </Button>
              </CardFooter>
            </Card>
            
            {/* Plano Premium */}
            <Card className="border-t-4 border-[#2F2F2F]">
              <CardHeader>
                <CardTitle className="text-xl text-center">Premium</CardTitle>
                <CardDescription className="text-center">Avançado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">R$ 90.000</span>
                  <span className="text-[#555555]">/ano</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Tudo do Standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>2 visitas para manutenção corretiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Auditorias trimestrais</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2F2F2F] hover:bg-black text-white">
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
          <h2 className="text-3xl font-bold text-center mb-12">Termos e Condições</h2>
          
          <div className="bg-[#F8F8F8] rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Cobertura dos Serviços</h3>
            <p className="mb-4">Os serviços contratados abrangem apenas os itens explicitamente listados em cada plano. Qualquer serviço adicional estará sujeito a cobranças extras conforme tabela vigente.</p>
          </div>
          
          <div className="bg-[#F8F8F8] rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Acesso Técnico</h3>
            <p className="mb-4">O cliente deve garantir acesso adequado aos equipamentos, incluindo permissões de segurança e liberação de acesso às instalações durante as visitas técnicas.</p>
          </div>
          
          <div className="bg-[#F8F8F8] rounded-lg p-8 shadow-sm mb-8">
            <h3 className="text-xl font-bold mb-4">Cancelamento</h3>
            <p className="mb-4">A rescisão antecipada de contratos está sujeita a multa. A notificação de não renovação deve ser enviada com pelo menos 45 dias de antecedência do término do contrato vigente.</p>
          </div>
          
          <div className="bg-[#F8F8F8] rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Políticas de Manutenção e Treinamento</h3>
            <ul className="space-y-2">
              <li>• Peças de reposição são cobradas separadamente, com descontos conforme o plano contratado.</li>
              <li>• Upgrades de software e hardware não estão inclusos em nenhum plano e são orçados separadamente.</li>
              <li>• Treinamentos têm carga horária definida: Básico (4h), Avançado (8h) e Customizado (conforme necessidade).</li>
              <li>• O número de visitas técnicas é limitado conforme cada plano.</li>
            </ul>
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
            <Button size="lg" className="bg-white text-[#F5791F] hover:bg-gray-100 font-medium flex items-center gap-2">
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

      <Footer />
    </div>
  );
};

export default ServicePlans;
