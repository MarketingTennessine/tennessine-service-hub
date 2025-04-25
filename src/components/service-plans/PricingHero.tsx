
import React from 'react';

interface PricingHeroProps {
  // If any props are needed, they should be added here
}

const PricingHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#d76512] to-[#f5a20a] text-white py-16">
      <div className="container-tennessine">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Compare os Planos de Serviço da Tennessine
        </h1>
        <p className="text-lg mb-8 text-white/90 text-center max-w-3xl mx-auto">
          Escolha a solução ideal para o seu laboratório ou operação com planos desenvolvidos para garantir 
          performance, segurança e suporte técnico especializado.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
