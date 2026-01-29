import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  highlighted?: boolean;
}

export function ServiceCard({ title, description, features, price, highlighted = false }: ServiceCardProps) {
  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-lg ${highlighted ? 'border-primary border-2 shadow-gold' : ''}`}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-serif">{title}</CardTitle>
        {price && (
          <div className="text-lg font-semibold text-primary mt-2">{price}</div>
        )}
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground button-text-white" size="lg">
          Get a Quote
        </Button>
      </CardFooter>
    </Card>
  );
}
