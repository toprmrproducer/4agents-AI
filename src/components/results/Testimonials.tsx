import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "4agents.ai transformed our customer service operations. The AI solutions they implemented reduced response times by 80%.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The ROI we've seen from their lead automation tools has been incredible. Our conversion rates doubled in just three months.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Their expertise in AI integration is unmatched. They didn't just provide a solution; they transformed our entire workflow.",
    author: "Emily Rodriguez",
    role: "CTO, InnovateNow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 mb-6">{testimonial.quote}</p>
          <div className="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-400"
            />
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}