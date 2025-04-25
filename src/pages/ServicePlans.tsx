
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
          <h2 className="text-3xl font-bold text-center mt-16 mb-10">Informações Comerciais</h2>
          <PricingCards />
          <p className="text-center text-gray-500 mt-6">Valores estimados anuais, sujeitos a variação conforme linha de equipamento e necessidades específicas.</p>
          <TermsAndCta />
        </div>
      </section>
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5521998960117"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.5025 3.49765C18.2462 1.24093 15.2462 0 12.0525 0C5.4637 0 0.105031 5.35909 0.105031 11.9485C0.105031 14.0611 0.650635 16.1241 1.68394 17.9403L0 24L6.20141 22.3461C7.95115 23.2845 9.9837 23.7756 12.0525 23.7756C18.6413 23.7756 24 18.4165 24 11.8268C23.8787 8.63473 22.7594 5.75438 20.5025 3.49765ZM12.0525 21.7835C10.2637 21.7835 8.47487 21.2923 6.92513 20.3103L6.5637 20.0669L2.84106 21.0599L3.83434 17.4596L3.59064 17.0985C2.48674 15.4841 1.91779 13.6168 1.91779 11.7186C1.91779 6.35909 6.4843 1.87696 12.0525 1.87696C14.7331 1.87696 17.2715 2.9818 19.1631 4.87416C21.0547 6.76651 22.1586 9.30654 22.1586 11.9876C22.1586 17.347 17.5906 21.7835 12.0525 21.7835ZM17.5113 14.4305C17.2275 14.3088 15.7594 13.5839 15.4755 13.5013C15.1917 13.4187 14.9869 13.3774 14.7821 13.6581C14.5774 13.9388 14.0084 14.5739 13.8431 14.7783C13.6777 14.9827 13.513 15.0033 13.2292 14.8816C11.1637 13.8493 9.79064 13.0418 8.41779 10.7369C8.0525 10.1429 8.60387 10.1842 9.11603 9.15947C9.23935 8.9551 9.19947 8.77123 9.1201 8.60785C9.04072 8.44448 8.48936 6.97482 8.24565 6.40734C8.00195 5.85985 7.75825 5.94186 7.59294 5.94186C7.42763 5.94186 7.22283 5.92099 7.01802 5.92099C6.81321 5.92099 6.48936 6.00299 6.20552 6.28369C5.92168 6.56438 5.15658 7.28932 5.15658 8.75898C5.15658 10.2286 6.25301 11.6579 6.3968 11.8623C6.54059 12.0667 8.4677 15.1668 11.5476 16.4536C13.513 17.2215 14.2982 17.3022 15.2715 17.1594C15.8624 17.0776 17.0319 16.4536 17.2756 15.8041C17.5193 15.1547 17.5193 14.6071 17.4399 14.4715C17.3606 14.3359 17.1558 14.2747 16.872 14.1517L17.5113 14.4305Z" fill="white"/>
          </svg>
        </a>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicePlans;
