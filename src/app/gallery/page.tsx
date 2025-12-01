'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: '/generated/hero-mobile-bar.png',
    alt: 'Premium mobile bar setup',
    category: 'wedding',
    title: 'Elegant Wedding Bar'
  },
  {
    src: '/generated/wedding-event.png',
    alt: 'Hill Country wedding',
    category: 'wedding',
    title: 'Hill Country Ranch Wedding'
  },
  {
    src: '/generated/corporate-event.png',
    alt: 'Corporate event',
    category: 'corporate',
    title: 'Downtown Austin Corporate Event'
  },
  {
    src: '/generated/private-celebration.png',
    alt: 'Private celebration',
    category: 'private',
    title: 'Anniversary Celebration'
  },
  {
    src: '/generated/signature-cocktails.png',
    alt: 'Signature cocktails',
    category: 'cocktails',
    title: 'Signature Craft Cocktails'
  },
  {
    src: '/generated/francesca-bartender.png',
    alt: 'Bartender crafting cocktails',
    category: 'cocktails',
    title: 'Artisan Cocktail Creation'
  }
];

type Category = 'all' | 'wedding' | 'corporate' | 'private' | 'cocktails';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-muted/30 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Event <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of beautiful events, stunning mobile bar setups, and artfully crafted cocktails. Each image tells a story of exceptional service and unforgettable celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'All Events', value: 'all' as Category },
              { label: 'Weddings', value: 'wedding' as Category },
              { label: 'Corporate', value: 'corporate' as Category },
              { label: 'Private Parties', value: 'private' as Category },
              { label: 'Cocktails', value: 'cocktails' as Category }
            ].map((filter) => (
              <Button
                key={filter.value}
                variant={selectedCategory === filter.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(filter.value)}
                className={selectedCategory === filter.value ? 'bg-primary text-primary-foreground' : ''}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setLightboxImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-serif text-xl font-semibold title-on-dark">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6 text-foreground/90">
              "Francesca's mobile bar was the highlight of our wedding. Every detail was perfect, from the elegant setup to the incredible lavender gin fizz that became our signature drink."
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">Sarah & Michael Thompson</div>
              <div className="text-muted-foreground">Hill Country Ranch Wedding</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Events Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Weddings</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Corporate Events</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white title-on-dark">
            Create Your Own Memorable Event
          </h2>
          <p className="text-xl text-secondary-foreground/80 subtitle-on-dark mb-8 max-w-2xl mx-auto">
            Let's design a beautiful bar experience that your guests will never forget
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6"
            asChild
          >
            <a href="#contact">Start Planning Your Event</a>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
