import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Check, Wine, Users, Briefcase, Heart } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-muted/30 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Premium Bartending <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From intimate gatherings to grand celebrations, we offer comprehensive mobile bartending solutions tailored to your vision. Every package includes professional service, premium ingredients, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Service Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your event or let us create a custom solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              title="Premium Mobile Bar"
              description="Complete setup for 50+ guests"
              price="$1,200"
              features={[
                'Fully equipped mobile bar',
                '3 signature cocktails',
                'Professional bartender (4 hrs)',
                'Premium glassware',
                'Setup & breakdown',
                'Bar decorations'
              ]}
              highlighted
            />

            <ServiceCard
              title="Signature Cocktails"
              description="Custom drink design"
              price="$800"
              features={[
                'Custom menu consultation',
                '3 unique cocktail recipes',
                'Premium ingredient sourcing',
                'Recipe cards for guests',
                'Professional preparation',
                'Beverage coordination'
              ]}
            />

            <ServiceCard
              title="Beer & Wine Service"
              description="Elevated beverage service"
              price="$800"
              features={[
                'Professional bartender',
                'Beer & wine service',
                'Ice & coolers provided',
                'Glassware included',
                '100 guests',
                '4 hour service'
              ]}
            />

            <ServiceCard
              title="Bartender Only"
              description="Professional service for your bar"
              price="$150/hr"
              features={[
                'Experienced mixologist',
                'Professional service',
                '2 hour minimum',
                'Cocktail expertise',
                'Guest interaction',
                'Bar management'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Perfect For Every Occasion
            </h2>
            <p className="text-lg text-muted-foreground">
              We bring professional bartending services to all types of celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/wedding-event.png"
                  alt="Wedding events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Weddings</h3>
                <p className="text-muted-foreground">
                  Elegant bar service and custom cocktails that match your wedding theme perfectly
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/corporate-event.png"
                  alt="Corporate events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Corporate Events</h3>
                <p className="text-muted-foreground">
                  Professional service for launches, conferences, and company celebrations
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/private-celebration.png"
                  alt="Private parties"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Private Parties</h3>
                <p className="text-muted-foreground">
                  Intimate gatherings, anniversaries, and milestone celebrations
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/generated/hero-mobile-bar.png"
                  alt="Special events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Wine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Special Events</h3>
                <p className="text-muted-foreground">
                  Holiday parties, fundraisers, and unique celebrations of all kinds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                What's Included
              </h2>
              <p className="text-lg text-muted-foreground">
                Every service comes with our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  'Professional certified mixologists with 8+ years experience',
                  'Custom cocktail menu design and consultation',
                  'Premium spirits, fresh ingredients, and garnishes',
                  'All necessary bar equipment and glassware',
                  'Complete setup and breakdown service',
                  'Liability insurance for peace of mind'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground/80 text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {[
                  'Mobile bar setup with elegant presentation',
                  'Custom decorations to match your event theme',
                  'Recipe cards and menu displays for guests',
                  'Professional coordination with your event team',
                  'Flexible service hours to fit your schedule',
                  'Exceptional guest service and interaction'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground/80 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Cocktails Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Signature Cocktail Design
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Each event deserves a unique beverage experience. We work closely with you to design custom cocktails that reflect your event's theme, colors, and personality.
                </p>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Lavender Honey Gin Fizz</h4>
                    <p className="text-sm text-muted-foreground">Perfect for garden weddings and spring celebrations</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Smoked Old Fashioned</h4>
                    <p className="text-sm text-muted-foreground">Sophisticated choice for corporate events and upscale gatherings</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-semibold mb-2">Custom Champagne Cocktails</h4>
                    <p className="text-sm text-muted-foreground">Elegant toasts and romantic celebrations</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/generated/signature-cocktails.png"
                  alt="Signature cocktails"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white title-on-dark">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary-foreground/80 subtitle-on-dark mb-8 max-w-2xl mx-auto">
            Let's discuss your event and create the perfect beverage experience
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6"
            asChild
          >
            <Link href="#contact">Request Your Quote</Link>
          </Button>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
