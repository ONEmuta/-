import React, { useState } from 'react';
import { galleryPhotos } from '@/lib/data';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-surface mt-12 rounded-xl shadow-lg animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      <div className="container max-w-screen-xl px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Our Moments & Creations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-md border border-border/50"
              onClick={() => openLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
            <img src={selectedImage || ''} alt="Enlarged view" className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;
