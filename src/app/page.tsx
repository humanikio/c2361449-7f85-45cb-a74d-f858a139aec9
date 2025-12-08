import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Sparkles, Award, Heart, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-mobile-bar.png"
            alt="Premium mobile bar setup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white title-on-dark mb-6 animate-fade-in">
              Elevate Your Celebration with
              <span className="text-primary block mt-2">Artisan Cocktail Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 subtitle-on-dark mb-8 leading-relaxed">
              Premium mobile bartending service bringing professional mixology and custom signature drinks directly to your event
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                asChild
              >
                <Link href="#contact">Book Your Event</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Events Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitney's Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/generated/whitney-bartender.png"
                alt="Whitney Torres - Master Mixologist"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">Meet Whitney</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Master Mixologist with a Passion for Perfection
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  With 8 years of experience crafting signature cocktails across Austin and Denver, I founded The Nearest Bar to bring the artistry and precision of high-end mixology directly to your celebration.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Every event is unique, and I believe your beverage service should reflect that. From custom cocktail menus designed around your event's theme to fully equipped mobile bar setups, I'm committed to creating a memorable bar experience that your guests will be talking about long after the last glass is raised.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Whether it's an intimate anniversary celebration or a grand wedding reception, I bring the same level of dedication, creativity, and professionalism that has made The Nearest Bar the preferred choice for discerning hosts across Texas and Colorado.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Certified Mixologist</div>
                    <div className="text-sm text-muted-foreground">Professional Training</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Fully Insured</div>
                    <div className="text-sm text-muted-foreground">Peace of Mind</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Signature Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From full mobile bar setups to custom cocktail design, we offer comprehensive beverage services for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Premium Mobile Bar Experience"
              description="Complete mobile bar setup with all supplies and equipment"
              price="$850"
              features={[
                'Fully equipped mobile bar',
                '1 signature cocktail',
                'Professional bartender (4 hrs)',
                'All glassware & bar tools',
                'Setup & breakdown included'
              ]}
              highlighted
            />

            <ServiceCard
              title="Beer & Wine Service"
              description="Elevated beverage service for beer and wine only"
              price="$500"
              features={[
                'Professional bartender',
                'Beer & wine service only',
                'Ice & coolers provided',
                'Glassware included',
                '4 hour service'
              ]}
            />

            <ServiceCard
              title="Bartender Only"
              description="Professional bartender for your existing bar setup"
              price="$400"
              features={[
                'Experienced mixologist',
                'Professional bar service',
                '4 hour minimum',
                'Bar tools included',
                'No supplies provided'
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Jason C.',
                event: 'Birthday Party',
                quote: 'Whitney absolutely made my birthday party unforgettable! She showed up with amazing energy, crafted delicious drinks, and kept the good vibes flowing all night long. My guests are still talking about how fun she was behind the bar! If you want your event to be a hit, book Whitney — she\'s the best!',
                rating: 5
              },
              {
                name: 'Charles L.',
                event: 'Housewarming Party',
                quote: 'Whitney crushed it at my housewarming party! From the custom cocktails to the smooth service, she had every guest hyped and happy. She brought the exact energy the night needed — fun, professional, and seriously talented behind the bar. People are still asking me for her info because she turned a simple housewarming into a full-on celebration. If you want your party to go from good to legendary, you need Whitney behind the bar. 10/10 — would book again in a heartbeat!',
                rating: 5
              },
              {
                name: 'Sarah & Michael',
                event: 'Hill Country Wedding',
                quote: 'Whitney transformed our wedding reception with her stunning mobile bar and incredible signature cocktails. Our guests are still raving about the lavender gin fizz!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-md border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cocktails */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Signature Creations
            </h2>
            <p className="text-lg text-muted-foreground">
              Each cocktail is crafted with premium ingredients and artistic presentation
            </p>
          </div>

          <div className="relative h-[500px] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/generated/signature-cocktails.png"
              alt="Signature cocktails"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Custom Designed</h3>
              <p className="text-muted-foreground">Tailored to your event theme and preferences</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Premium Ingredients</h3>
              <p className="text-muted-foreground">Only the finest spirits and fresh ingredients</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Artful Presentation</h3>
              <p className="text-muted-foreground">Beautiful garnishes and elegant glassware</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white title-on-dark">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-xl text-secondary-foreground/80 subtitle-on-dark mb-8 max-w-2xl mx-auto">
            Let's create an unforgettable beverage experience for your celebration. Get your free custom quote today.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6"
            asChild
          >
            <Link href="#contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}
