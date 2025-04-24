
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingHero from "../components/service-plans/PricingHero";
import ComparisonTable from "../components/service-plans/ComparisonTable";
import PricingCards from "../components/service-plans/PricingCards";
import TermsAndCta from "../components/service-plans/TermsAndCta";

const ServicePlans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PricingHero />
      <section className="py-16 bg-white">
        <div className="container-tennessine">
          <ComparisonTable />
          <h2 className="text-3xl font-bold text-center mt-16 mb-12">Informações Comerciais</h2>
          <PricingCards />
          <p className="text-center text-gray-500 mt-6">Valores estimados anuais, sujeitos a variação conforme linha de equipamento.</p>
          <TermsAndCta />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePlans;
