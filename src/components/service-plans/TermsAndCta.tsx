
import React from 'react';
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndCta = () => {
  return (
    <>
      <div className="mt-16 bg-gray-50 py-12">
        <div className="container-tennessine">
          <h2 className="text-3xl font-bold text-center mb-8">Termos e Condições</h2>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Condições Gerais</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Este plano cobre apenas os itens listados. Quaisquer serviços adicionais serão cobrados separadamente.</li>
                  <li>O cliente é responsável por garantir o acesso aos equipamentos no momento da manutenção.</li>
                  <li>O pagamento deve ser efetuado conforme o logística adquirida.</li>
                  <li>O contrato pode ser rescindido com aviso prévio de 45 dias por qualquer uma das partes.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Descontos</h3>
                <p className="text-gray-600">Porcentagem de desconto sujeito à limitação de valor teto a depender do componente/linha.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Documentação de Serviço</h3>
                <p className="text-gray-600">Apenas para serviços realizados presencialmente, principalmente para laudos de qualificação e afins.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Treinamento Operacional e de Aplicação</h3>
                <p className="text-gray-600">Carga horária sujeita a variação de acordo com a linha/equipamento adquirido(a).</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Visitas para manutenção corretiva</h3>
                <p className="text-gray-600">Visitas corretivas não englobam emergências, salvo exceções com cláusula em contrato vigente.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Visita de Manutenção Anual</h3>
                <p className="text-gray-600">Caso haja necessidade de substituição de partes que apresentem desgaste ou defeito no sistema, será feita consulta prévia do valor agregado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#d76512] to-[#f5a20a] py-16">
        <div className="container-tennessine text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para escolher seu plano?</h3>
          <p className="mb-8 max-w-2xl mx-auto">Entre em contato com nossa equipe para uma análise personalizada das necessidades da sua organização.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default"
              className="bg-gray-600 hover:bg-gray-700 text-white gap-2"
            >
              Solicitar proposta personalizada
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="default"
              className="bg-green-500 hover:bg-green-600 text-white gap-2"
            >
              Falar via WhatsApp
              <MessageSquare className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCta;
