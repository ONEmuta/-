import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ongoingEvents } from '@/lib/data';

const EducationEvents: React.FC = () => {
  return (
    <section className="py-16 bg-background mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <div className="container max-w-screen-xl px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Ongoing Education & Events
        </h2>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {ongoingEvents.map((event) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full flex flex-col overflow-hidden rounded-xl shadow-lg border-border bg-surface transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-foreground leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      Registration Period: <span className="font-medium text-primary">{event.period}</span>
                    </p>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
                      <Link to={event.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 hidden md:flex bg-background border-border hover:bg-accent hover:text-accent-foreground" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 hidden md:flex bg-background border-border hover:bg-accent hover:text-accent-foreground" />
        </Carousel>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <Link to="/education-events">View All Events & Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationEvents;
