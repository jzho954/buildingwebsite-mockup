import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

// More detailed reviews for the dedicated page
const detailedReviews = [
  
  {
    content: "I recently had Auckland Building renovate my bathroom and kitchen. The attention to detail was exceptional, and they worked diligently to ensure everything was perfect. The team was professional, cleaned up after themselves, and the finished result exceeded my expectations. Would definitely use them again!",
    author: "Sarah",
    location: "North Shore",
    rating: 5,
    project: "Bathroom & Kitchen Renovation",
    date: "March 2023"
  },
  {
    content: "We hired Auckland Building for our new home build and they've done an outstanding job with all our construction needs. From the beautiful feature wall in our entrance to the practical yet elegant bathroom design, everything was built with precision. They provided helpful suggestions that enhanced our original design ideas.",
    author: "Michael & Lisa",
    location: "East Auckland",
    rating: 4,
    project: "New Home Construction",
    date: "February 2023"
  },
  {
    content: "Great experience working with the Auckland Building team on our outdoor entertainment area. They suggested the perfect materials that look amazing but are also practical for our needs. Construction was smooth and they were accommodating when we made some last-minute changes.",
    author: "James",
    location: "South Auckland",
    rating: 5,
    project: "Outdoor Construction",
    date: "January 2023"
  },
  {
    content: "I recently had Auckland Building renovate my bathroom and kitchen. The attention to detail was exceptional, and they worked diligently to ensure everything was perfect. The team was professional, cleaned up after themselves, and the finished result exceeded my expectations. Would definitely use them again!",
    author: "Sarah",
    location: "North Shore",
    rating: 5,
    project: "Bathroom & Kitchen Renovation",
    date: "March 2023"
  },
  {
    content: "We hired Auckland Building for our new home build and they've done an outstanding job with all our construction needs. From the beautiful feature wall in our entrance to the practical yet elegant bathroom design, everything was built with precision. They provided helpful suggestions that enhanced our original design ideas.",
    author: "Michael & Lisa",
    location: "East Auckland",
    rating: 4,
    project: "New Home Construction",
    date: "February 2023"
  },
  {
    content: "Great experience working with the Auckland Building team on our outdoor entertainment area. They suggested the perfect materials that look amazing but are also practical for our needs. Construction was smooth and they were accommodating when we made some last-minute changes.",
    author: "James",
    location: "South Auckland",
    rating: 5,
    project: "Outdoor Construction",
    date: "January 2023"
  }
];

const ReviewCard = ({ review, index }: { review: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border border-gray-200 shadow-sm overflow-hidden bg-white rounded-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 italic mb-6">"{review.content}"</p>
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>Project: {review.project}</span>
            <span>{review.date}</span>
          </div>
        </CardContent>
        <CardFooter className="text-base text-gray-800 font-medium flex flex-col items-start">
          <span className="font-bold text-lg">{review.author}</span>
          <span>{review.location}</span>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Reviews = () => {
  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Client Reviews</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Read what our clients have to say about their experience working with Auckland Building. 
              We pride ourselves on customer satisfaction and quality craftsmanship.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {detailedReviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reviews;
