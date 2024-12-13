import React from 'react';
import { Container } from '../ui/Container';
import { Hero3D } from './Hero3D';
import { HeroBackground } from './HeroBackground';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <HeroBackground />
      
      <Container className="relative pt-24">
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[500px] relative mb-12">
            <Hero3D />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            Your Business Needs{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue text-transparent bg-clip-text animate-gradient-x">
              AI
            </span>
            .
            <br />
            <span className="text-neon-pink">Or It Will Fail.</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12">
            We specialize in AI automation for marketing, sales, operations, and support. 
            Let us handle the repetitive tasks, so you can focus on growth.
          </p>
          
          <blockquote className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute -top-4 -left-4 w-12 h-12 text-4xl text-neon-pink opacity-50">"</div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 text-4xl text-neon-pink opacity-50">"</div>
            
            <div className="relative z-10 p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-neon-pink/20 shadow-[0_0_50px_-12px] shadow-neon-pink/20">
              <p className="text-3xl md:text-4xl font-extrabold font-serif italic tracking-wide leading-relaxed">
                <span className="bg-gradient-to-r from-white via-neon-pink to-white bg-clip-text text-transparent animate-gradient-x">
                  If you don't employ AI, your business will fail. Period. End of story.
                </span>
              </p>
              
              <footer className="mt-6 text-xl font-light tracking-wider">
                <span className="text-neon-pink">— Mark Cuban</span>
              </footer>
            </div>
          </blockquote>
        </div>
      </Container>
    </div>
  );
}