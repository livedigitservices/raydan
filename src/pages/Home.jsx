import React from 'react';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import WhyRaydan from '../components/home/WhyRaydan';
import ProcessTimeline from '../components/home/ProcessTimeline';
import QualityAssurance from '../components/home/QualityAssurance';
import MaterialsShowcase from '../components/home/MaterialsShowcase';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import AwardsSection from '../components/home/AwardsSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home({ onOpenConsultation }) {
  return (
    <main className="overflow-hidden">
      <Hero onOpenConsultation={onOpenConsultation} />
      <IntroSection />
      <StatsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyRaydan />
      <ProcessTimeline />
      <QualityAssurance />
      <MaterialsShowcase />
      <TestimonialsSlider />
      <AwardsSection />
      <FAQSection />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
