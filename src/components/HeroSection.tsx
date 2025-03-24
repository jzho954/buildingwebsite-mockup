import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TextRotate } from '@/components/ui/text-rotate';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/builder2.jpg')",
          backgroundPosition: "center center",
          filter: "brightness(0.7)"
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-20">
        {/* Hero Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your{' '}
            <span className="text-brand-blue">
              <TextRotate
                texts={[
                  "Home",
                  "Property",
                  "Living Space",
                  "Business"
                ]}
                mainClassName="inline-block overflow-hidden"
                staggerDuration={0.03}
                staggerFrom="first"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Auckland Building delivers premium construction, renovation and repair solutions 
            across Auckland, creating beautiful, functional spaces since 2010.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#quote" 
            className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Get a Free Quote
          </a>
          <Link 
            to="/services" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white max-w-5xl mx-auto">
          <motion.div 
            className="stats-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-5xl font-bold text-brand-blue mb-2">10+</p>
            <p className="text-lg">Years Experience</p>
          </motion.div>
          
          <motion.div 
            className="stats-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-5xl font-bold text-brand-blue mb-2">300+</p>
            <p className="text-lg">Projects Completed</p>
          </motion.div>
          
          <motion.div 
            className="stats-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-5xl font-bold text-brand-blue mb-2">Auckland</p>
            <p className="text-lg">Service Area</p>
          </motion.div>
          
          <motion.div 
            className="stats-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-5xl font-bold text-brand-blue mb-2">100%</p>
            <p className="text-lg">Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
