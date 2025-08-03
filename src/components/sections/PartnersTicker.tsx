import React from 'react';
import { partnerLogos } from '@/lib/data';

const PartnersTicker: React.FC = () => {
  return (
    <section className="py-12 bg-background mt-12 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <div className="container max-w-screen-xl px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Our Valued Partners
        </h2>
      </div>
      <div className="relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex animate-scroll-left whitespace-nowrap py-4">
          {/* Duplicate content to create seamless loop */}
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'brightness(0) invert(1)' }} /* Ensures grayscale and white for dark background */
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersTicker;
