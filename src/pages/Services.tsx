
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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesTestimonials />
      <ServicesGallery />
      <ServicesPlans />
      <ServicesContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Services;
