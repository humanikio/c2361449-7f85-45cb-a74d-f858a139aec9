import { Check, Phone, Mail, Globe } from 'lucide-react';

export function PackageCard() {
  const packageIncludes = [
    '4 hours of service',
    '1 TABC certified bartender for up to 65 people',
    'Travel up to 30 miles',
    'Alcohol shopping list',
    'Basic mixers and garnishes',
    '1 signature cocktail',
    'Plastic cups, napkins, straws, ice, coolers',
    'Set up and break down 1 hour each',
    'Basic table bar and table cloth',
    'Insurance'
  ];

  const serviceAddOns = [
    'Specialty mixers',
    'Specialty garnishes',
    'Champagne pour',
    'Water station',
    'Table wine service',
    'Second bar setup',
    'Extra bartender',
    'Additional hour'
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Package Includes */}
        <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <div className="mb-6">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                  Our Package
                </span>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                Package Includes:
              </h3>
            </div>

            <div className="space-y-3 mb-8">
              {packageIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground/80 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:503-317-9794" className="text-foreground hover:text-primary transition-colors">
                    503-317-9794
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@thenearestbaratx.com" className="text-foreground hover:text-primary transition-colors">
                    info@thenearestbaratx.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <a href="https://thenearestbaratx.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    thenearestbaratx.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Add-Ons */}
        <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
          <div className="mb-6">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                Enhance Your Experience
              </span>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
              Service Add-Ons
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Customize your package with these premium enhancements to make your event even more special
            </p>
          </div>

          <div className="space-y-3">
            {serviceAddOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-lg bg-muted/30 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
              >
                <span className="text-foreground font-medium">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
