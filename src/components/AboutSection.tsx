import React from 'react';
import ScrollAnimation from './ScrollAnimation';

interface AboutSectionProps {
  showHero?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ showHero = false }) => {
  return (
    <section id="about" className="bg-gray-50">
      {showHero && (
        /* Hero Section */
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/builder2.jpg" 
              alt="Auckland Building team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Building Journey</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Bringing exceptional craftsmanship to Auckland homes and businesses since 2013
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="py-20 section-container">
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollAnimation animation="fade-in-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 10 years of experience transforming Auckland homes and businesses, our team of expert builders brings craftsmanship and attention to detail to every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in Auckland, we understand local styles and requirements, specializing in creating beautiful, durable building solutions for Kiwi properties.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From traditional villas in Ponsonby to modern apartments in the CBD, we work closely with our clients to deliver exceptional results that stand the test of time.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-right">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/builder.jpg" 
                alt="Auckland Builder at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
