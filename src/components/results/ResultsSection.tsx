import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { ResultsMetrics } from './ResultsMetrics';
import { CaseStudies } from './CaseStudies';
import { Testimonials } from './Testimonials';
import { Button } from '../ui/Button';

export default function ResultsSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.15),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results, <GradientText>Real Impact</GradientText>
          </h2>
        </div>

        <ResultsMetrics />
        <CaseStudies />
        <Testimonials />
        
        <div className="text-center mt-16">
          <Button size="lg">
            Explore Solutions Tailored to Your Needs
          </Button>
        </div>
      </Container>
    </section>
  );
}