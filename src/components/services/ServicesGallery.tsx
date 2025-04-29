import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const galleryImages = [{
  src: "/lovable-uploads/781e0e4c-cc97-4e67-8085-de72c65c4cc5.png",
  alt: "Equipamento de laboratório IS20 com computador"
}, {
  src: "/lovable-uploads/b69698c7-eb96-4bf3-9411-c3a951d81500.png",
  alt: "Equipe técnica com equipamento de laboratório"
}, {
  src: "/lovable-uploads/f582b519-6ebe-4692-a771-cd58424d543f.png",
  alt: "Sistema analítico avançado com equipe"
}, {
  src: "/lovable-uploads/89c70a3b-bb51-43db-80fe-b6f4a6c9e349.png",
  alt: "Equipamento de análise Falcon com interface"
}, {
  src: "/lovable-uploads/b45f8ceb-4729-4dd1-b77c-0df3b5b7a816.png",
  alt: "Equipe técnica com equipamento analítico"
}];
const ServicesGallery = () => {
  return <section className="py-16 bg-[#FAFAFA]" id="gallery">
      <div className="container-tennessine">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#000]">Galeria de Serviços</h2>
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((img, i) => <CarouselItem key={img.src} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 aspect-video">
                        <img src={img.src} alt={img.alt} className="object-cover w-full h-full" draggable={false} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="bg-[#ff820e] text-white" />
            <CarouselNext className="bg-[#ff820e] text-white" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default ServicesGallery;