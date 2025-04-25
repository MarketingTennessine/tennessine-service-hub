
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import ServicesTestimonials from "../components/services/ServicesTestimonials";
import ServicesGallery from "../components/services/ServicesGallery";
import ServicesPlans from "../components/services/ServicesPlans";
import ServicesContactForm from "../components/services/ServicesContactForm";

const Services = () => {
  const scrollToComparison = () => {
    const element = document.getElementById('comparison-table');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesTestimonials />
      <ServicesGallery />
      <ServicesPlans scrollToComparison={scrollToComparison} />
      <ServicesContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Services;
