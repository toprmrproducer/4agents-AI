import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero';
import { CredibilitySection } from './components/credibility';
import { ResultsSection } from './components/results';
import RoadmapSection from './components/roadmap/RoadmapSection';
import { ClosingCTA } from './components/cta';
import { Footer } from './components/footer';
import { CursorTrail } from './components/effects/CursorTrail';
import { CursorIllumination } from './components/effects/CursorIllumination';
import './styles/fonts.css';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <CursorTrail />
      <CursorIllumination />
      <Header />
      <Hero />
      <CredibilitySection />
      <ResultsSection />
      <RoadmapSection />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

export default App;