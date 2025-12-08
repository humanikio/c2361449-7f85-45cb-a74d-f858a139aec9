import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { PackageCard } from '@/components/PackageCard';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Check, Wine, Users, Briefcase, Heart, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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

      {/* Featured Package - $850 */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                Most Popular
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Signature Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for an exceptional mobile bar experience - all in one comprehensive package
            </p>
          </div>

          <PackageCard />
        </div>
      </section>

      {/* Additional Service Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Additional Service Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your experience with these complementary service packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              title="Premium Mobile Bar Experience"
              description="Complete setup with all supplies"
              price="$850"
              features={[
                'Fully equipped mobile bar',
                '1 signature cocktail',
                'Professional bartender (4 hrs)',
                'Bar tools & glassware',
                'Setup & breakdown',
                'Travel up to 30 miles',
                'Basic mixers & garnishes',
                'Insurance included'
              ]}
              highlighted
            />

            <ServiceCard
              title="Beer & Wine Service"
              description="Elevated beverage service"
              price="$500"
              features={[
                'Professional bartender',
                'Beer & wine service only',
                'Ice & coolers provided',
                'Glassware included',
                '4 hour service',
                'Setup & breakdown',
                'No full bar required'
              ]}
            />

            <ServiceCard
              title="Bartender Only"
              description="Professional service for your bar"
              price="$400"
              features={[
                'Experienced mixologist',
                'Professional bar service',
                '4 hour service',
                'Bar tools included',
                'No supplies provided',
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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  What is included in the 4-hour service minimum?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All packages include a 4-hour service minimum. This includes setup time (1 hour), active bar service (4 hours), and breakdown time (1 hour). If your event requires less than 4 hours of bar service, the price remains the same as the 4-hour minimum.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Is gratuity included in the pricing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A 20% gratuity is automatically included in all service packages. If tip jars are not permitted at your venue, the host is responsible for ensuring gratuity is provided to the bartender.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Do you provide alcohol?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our services are for dry hire events only - we do not provide or sell alcohol. We provide a detailed shopping list for you to purchase the alcohol, and we handle all the bartending and service. This keeps costs transparent and allows you to choose your preferred brands and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  What is your cancellation and refund policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All bookings are non-refundable regardless of weather conditions or other circumstances. We recommend purchasing event insurance to protect your investment. Once you book with us, we reserve that date exclusively for you and turn away other potential clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  What does the venue need to provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The venue must provide trash cans for proper waste disposal throughout the event. We handle setup, service, and breakdown, but having adequate trash receptacles on-site is essential for maintaining a clean bar area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We recommend booking at least 6-8 weeks in advance, especially for weekend events and peak season (May-October). However, we do our best to accommodate last-minute requests when our schedule allows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Do you travel outside of Austin?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Our standard package includes travel up to 30 miles from Austin. For events beyond 30 miles, we can discuss additional travel fees based on the distance and location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Are you insured?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we carry full liability insurance for all events. We can provide a certificate of insurance to your venue upon request. All our bartenders are TABC certified as required by Texas law.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
