import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ReviewCardProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  delay: number;
}

const reviews = [
  {
    "content": "The team at Auckland Building did an amazing job on my home renovation. The craftsmanship looks stunning, and the attention to detail was spot on. They finished on time and left the space spotless. Highly recommend!",
    "author": "Sarah",
    "location": "West Auckland",
    "rating": 5
  },
  {
    "content": "Auckland Building transformed our kitchen with a beautiful modern design. The work was top-notch, with no corners cut, and the end result is absolutely perfect. They were professional and easy to work with. Couldn't be happier!",
    "author": "James",
    "location": "West Auckland",
    "rating": 5
  },
  {
    "content": "The team did a fantastic job building our outdoor patio, even with tricky weather conditions. They handled everything from prep to finishing touches perfectly. Communication was great, and they adjusted timelines as needed. Really impressed with the quality!",
    "author": "Emma",
    "location": "Central Auckland",
    "rating": 5
  }
];

const ReviewCard: React.FC<ReviewCardProps> = ({ content, author, location, rating, delay }) => {
  return (
    <ScrollAnimation animation="fade-in" delay={delay}>
      <Card className="h-full border border-gray-200 shadow-sm overflow-hidden bg-white rounded-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 italic mb-6">"{content}"</p>
        </CardContent>
        <CardFooter className="text-base text-gray-800 font-medium flex flex-col items-start">
          <span className="font-bold text-lg">{author}</span>
          <span>{location}</span>
        </CardFooter>
      </Card>
    </ScrollAnimation>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="uppercase text-brand-blue font-semibold tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              content={review.content}
              author={review.author}
              location={review.location}
              rating={review.rating}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white hover:bg-brand-blue-light border-none">
            <Link to="/reviews">
              View All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
