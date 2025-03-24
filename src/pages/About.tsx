import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 pb-20">
        <AboutSection showHero={true} />
        
        <div className="section-container mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  Our mission is to provide exceptional building, renovation, and repair services that exceed client expectations. 
                  We believe in honest pricing, quality materials, and superior craftsmanship.
                </p>
                <p className="text-gray-700">
                  From start to finish, we work closely with our clients to ensure their vision is realized, 
                  delivering beautiful, functional, and durable construction solutions for any space.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Why Choose Us</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Over 10 years of industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Fully licensed and insured professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>High-quality materials and modern techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Satisfaction guaranteed on all projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
