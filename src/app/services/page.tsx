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

      {/* Featured Package $850 */}
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
              Everything you need for an exceptional mobile bar experience, all in one comprehensive package
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
              price="Price starts at $850"
              description="Complete setup with all supplies"
              features={[
                'Fully equipped mobile bar',
                '1 signature cocktail',
                'TABC certified bartender (4 hrs)',
                'Bar tools and cups',
                'Setup and breakdown',
                'Travel up to 30 miles',
                'Basic mixers and garnishes',
                'Insurance included'
              ]}
              highlighted
            />

            <ServiceCard
              title="Beer and Wine Service"
              description="Elevated beverage service"
              features={[
                'TABC certified bartender',
                'Beer and wine service only',
                'Ice and coolers provided',
                'Cups included',
                '4 hour service',
                'Setup and breakdown',
                'No full bar required'
              ]}
            />

            <ServiceCard
              title="Bartender Only"
              description="Professional service for your bar"
              features={[
                'TABC certified bartender',
                'Professional bar service',
                '4 hour service',
                'Bar tools included',
                'No supplies provided',
                'Guest interaction'
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
                  'TABC certified bartender with 7 years experience',
                  'Custom cocktail menu design and consultation',
                  'Premium spirits, fresh ingredients, and garnishes',
                  'All necessary bar equipment and cups',
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
                  'Recipe cards and menu displays for guests',
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
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
                  Do you provide alcohol?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, I don't provide alcohol. Just everything else: shakers, mixers, cups, bar tools, setup, and professional bartending service. You bring the liquor, and I'll bring everything needed to create an amazing bar experience!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Are you insured?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, I'm insured with general and liquor liability insurance for your peace of mind.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  Is gratuity included in the pricing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Gratuity is not included in the price. An added 20% will be added for every bartender.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  How far do you travel?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  I travel up to 30 miles at no additional charge. If it's over 30 miles, we can discuss options based on your location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  How do I book your services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Bookings can be made through email, phone, or by submitting a quote request on this website. I'll get back to you promptly to discuss your event details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  What if I don't see a package that fits my needs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Every event is unique! If you don't see something that fits your needs, please contact me to discuss custom options and extra details. I'm happy to work with you to create a package that's perfect for your celebration.
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 button-text-white"
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
