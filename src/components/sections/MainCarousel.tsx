import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { carouselSlides } from '@/lib/data';
import Autoplay from 'embla-carousel-autoplay';

const MainCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="relative w-full overflow-hidden rounded-xl shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id} className="relative h-[400px] md:h-[600px] lg:h-[700px]">
              <img
                src={slide.image}
                alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                  {slide.headline}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
                <Button asChild size="lg" className="px-8 py-3 text-lg rounded-full shadow-xl hover:scale-105 transition-transform duration-300 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to={slide.link}>{slide.buttonText}</Link>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default MainCarousel;
