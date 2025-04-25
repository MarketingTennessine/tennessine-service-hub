
import { MessageSquare } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "O suporte da Tennessine garantiu a continuidade da nossa operação com rapidez e qualidade incomparáveis.",
    author: "Carla M.",
    company: "Laboratório XYZ",
  },
  {
    content: "Graças à equipe técnica da Tennessine, nosso laboratório opera com muito mais eficiência e confiabilidade.",
    author: "Roberto S.",
    company: "Instituto de Pesquisas ABC",
  },
  {
    content: "A capacitação técnica fornecida pela Tennessine foi fundamental para otimizar nossos processos analíticos.",
    author: "Patricia L.",
    company: "Centro de Análises Químicas",
  },
  {
    content: "O plano Premium superou nossas expectativas, especialmente no suporte contínuo e assistência técnica.",
    author: "Marcelo D.",
    company: "Indústria Farmacêutica",
  },
];

const ServicesTestimonials = () => {
  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">O Que Nossos Clientes Dizem</h2>
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-white border border-gray-200 rounded-xl shadow-md h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <MessageSquare className="text-[#F5791F] mb-4 h-8 w-8" />
                        <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                        <div className="mt-auto">
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          <p className="text-gray-500 text-sm">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-[#d76512]" />
            <CarouselNext className="text-[#d76512]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;
