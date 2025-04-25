
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Atendimento Técnico",
      starter: "Suporte remoto essencial",
      standard: "Atendimento remoto e presencial com prioridade",
      premium: "Suporte completo personalizado"
    },
    {
      category: "Manutenção e Serviços",
      starter: "Manutenção preventiva básica",
      standard: "Manutenção preventiva e corretiva",
      premium: "Soluções integradas de manutenção e otimização"
    },
    {
      category: "Capacitação e Treinamento",
      starter: "Treinamento operacional básico",
      standard: "Treinamento operacional + consultorias técnicas",
      premium: "Treinamento completo customizado"
    },
    {
      category: "Relatórios e Documentação",
      starter: "Relatórios padrões de atendimento",
      standard: "Relatórios operacionais detalhados",
      premium: "Relatórios customizados e auditorias"
    },
    {
      category: "Benefícios Comerciais",
      starter: "Descontos em peças",
      standard: "Garantia estendida + descontos adicionais",
      premium: "Condições comerciais exclusivas"
    },
    {
      category: "Investimento Estimado",
      starter: "A partir de R$ 45 mil/ano",
      standard: "A partir de R$ 65 mil/ano",
      premium: "Personalizado conforme necessidade"
    },
    {
      category: "Indicação",
      starter: "Operações de baixa complexidade",
      standard: "Operações contínuas e estruturadas",
      premium: "Ambientes críticos ou de alta performance"
    }
  ];

  return (
    <div id="comparison-table" className="py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Compare nossos planos e escolha a solução ideal</h2>
      <p className="text-center text-gray-600 mb-10">
        Planos desenvolvidos para garantir performance, segurança e suporte técnico especializado em cada etapa do seu processo.
      </p>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Categoria</TableHead>
              <TableHead>Starter</TableHead>
              <TableHead>Standard</TableHead>
              <TableHead>Premium</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisons.map((row) => (
              <TableRow key={row.category}>
                <TableCell className="font-medium">{row.category}</TableCell>
                <TableCell>{row.starter}</TableCell>
                <TableCell>{row.standard}</TableCell>
                <TableCell>{row.premium}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <p className="text-center text-gray-500 mt-6">
        As características dos planos podem ser adaptadas conforme a necessidade de cada projeto. 
        Solicite uma proposta personalizada para mais detalhes.
      </p>
    </div>
  );
};

export default ComparisonTable;
