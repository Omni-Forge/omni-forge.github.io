import React from 'react';
import {
  Shield,
  Server,
  Users,
  Hand
} from 'lucide-react';
import CallToAction from '@/components/blocks/cta';
import Workflow from '@/components/blocks/workflow';
import Features from '@/components/blocks/features';
import Hero from '@/components/blocks/hero';
import TechOverview from '@/components/blocks/tech';
import HandsFree from '@/components/blocks/handsfree';
import Stack from '@/components/blocks/stack';
import Ghstats from '@/components/blocks/ghstats';
import Network from '@/components/blocks/network';

export default function LandingPage() {
  return (
    <div style={{ marginTop: '-60px' }}>
      <Hero />

      <TechOverview />
      <Ghstats />
      <Features />
      <Workflow />
      <HandsFree />
      <Stack />
      <CallToAction />
    </div>
  );
}