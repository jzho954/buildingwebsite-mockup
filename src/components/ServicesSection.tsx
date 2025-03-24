import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Hammer, Wrench } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imagePath?: string;
  detailDescription?: string;
}

export const services: Service[] = [
  {
    id: "new-builds",
    title: "New Builds",
    description: "Create your dream home from the ground up. We specialize in high-quality residential and commercial construction that meets Auckland's unique requirements.",
    icon: <Home className="w-10 h-10 text-brand-blue" />,
    imagePath: "/lovable-uploads/builder3.jpg",
    detailDescription: "Our new build service covers all aspects of construction, from initial design consultation to final handover. We work with trusted architects and designers to create homes that perfectly suit your lifestyle and budget. Our team handles everything from foundation work to interior finishing, ensuring a seamless building process. We pride ourselves on quality craftsmanship, using premium materials and maintaining strict adherence to New Zealand building codes and standards."
  },
  {
    id: "renovations",
    title: "Renovations",
    description: "Transform and modernize your existing property. From kitchen and bathroom renovations to full home makeovers, we bring new life to Auckland properties.",
    icon: <Hammer className="w-10 h-10 text-brand-blue" />,
    imagePath: "/lovable-uploads/builder4.jpg",
    detailDescription: "Our renovation services are designed to enhance your property's functionality, aesthetic appeal, and value. Whether you're looking to update a single room or undertake a complete home transformation, our experienced team will guide you through every step. We specialize in kitchen and bathroom renovations, home extensions, open-plan conversions, and character property restorations. Our approach combines respect for your property's original features with modern design principles and building techniques."
  },
  {
    id: "repairs-maintenance",
    title: "Repairs & Maintenance",
    description: "Expert repair and maintenance services to protect your property investment. From weather damage repairs to preventative maintenance for Auckland homes and businesses.",
    icon: <Wrench className="w-10 h-10 text-brand-blue" />,
    imagePath: "/lovable-uploads/tiling3.jpg",
    detailDescription: "Our repairs and maintenance services help preserve your property's condition and value. We address everything from immediate issues like leaks and structural damage to scheduled maintenance that prevents costly problems. Our team provides weather-tightness solutions, structural repairs, decking maintenance, roof repairs, and general property upkeep. We also offer property inspection services to identify potential issues before they become major problems, saving you time and money in the long run."
  }
];

interface ServiceCardProps {
  service: Service;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  return (
    <ScrollAnimation animation="slide-up" delay={delay}>
      <Link to={`/services/${service.id}`} className="block h-full">
        <Card className="glass-card hover-scale h-full transition-all hover:shadow-lg">
          {service.imagePath && (
            <div className="h-48 overflow-hidden">
              <img 
                src={service.imagePath} 
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <CardHeader>
            <div className="flex justify-center items-center h-20 mb-4">
              {service.icon}
            </div>
            <CardTitle className="text-xl font-bold text-brand-blue">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 text-base">
              {service.description}
            </CardDescription>
            <div className="flex items-center mt-4 text-brand-blue font-medium">
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </ScrollAnimation>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
