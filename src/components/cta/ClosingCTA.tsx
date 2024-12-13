import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { LeadCaptureForm } from '../forms/LeadCaptureForm';

export default function ClosingCTA() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.2),transparent_70%)]" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business <GradientText>Today</GradientText>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Marketing</h3>
              <p className="text-gray-300">Automate your marketing and sales processes for 24/7 lead generation.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">Streamlined Operations</h3>
              <p className="text-gray-300">Cut costs and improve efficiency with intelligent automation.</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">24/7 Customer Support</h3>
              <p className="text-gray-300">AI-powered support that never sleeps, always ready to help.</p>
            </div>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-12">
            <p className="text-xl text-red-400">The future waits for no one. Start automating now.</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <LeadCaptureForm variant="full" />
          </div>
        </div>
      </Container>
    </section>
  );
}