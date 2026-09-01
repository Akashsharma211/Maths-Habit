'use client';

import { Monitor, Brain, Headphones, FileText, LineChart, Users } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Monitor size={26} />,
      gradient: 'icon-gradient-1',
      title: 'Interactive Live Classes & HD Recordings',
      desc: 'Engage in real-time Q&A during class. Missed a lecture? Access unlimited HD recordings anytime with indexed timestamps.'
    },
    {
      icon: <Brain size={26} />,
      gradient: 'icon-gradient-2',
      title: 'Visual & Conceptual Learning',
      desc: 'No blind memorization! Complex topics in Cambridge IGCSE Math (Circle Theorems, Trigonometry, Vectors & Calculus) are taught with intuitive visual proofs.'
    },
    {
      icon: <Headphones size={26} />,
      gradient: 'icon-gradient-3',
      title: 'Instant 1-on-1 Doubt Resolution',
      desc: 'Dedicated daily 30-minute post-class doubt desks plus an active Cambridge past paper WhatsApp helpline monitored personally by Anu Mam.'
    },
    {
      icon: <FileText size={26} />,
      gradient: 'icon-gradient-4',
      title: 'Handcrafted IGCSE Revision Materials',
      desc: 'Concise formula mind maps, Paper 2/4 topical past paper booklets (0580 & 0606), and Cambridge examiner mark-scheme guides.'
    },
    {
      icon: <LineChart size={26} />,
      gradient: 'icon-gradient-5',
      title: 'Weekly IGCSE Mock Tests & Analytics',
      desc: 'Rigorous timed mock tests graded strictly against Cambridge examiner rubrics with deep strength & weakness insights.'
    },
    {
      icon: <Users size={26} />,
      gradient: 'icon-gradient-6',
      title: 'Parent-Teacher Transparency',
      desc: 'Monthly 1-on-1 virtual PTMs to discuss attendance, IGCSE test score trends, and targeted A* improvement plans.'
    }
  ];

  return (
    <section class="section features-section" id="features">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Why Anu Mam Classes?</span>
          <h2 class="section-title">Designed for <span class="text-gradient">Maximum Retention & Top Ranks</span></h2>
          <p class="section-subtitle">Everything your child needs to transition from struggling to scoring top marks.</p>
        </div>

        <div class="grid grid-3 features-grid">
          {features.map((item, idx) => (
            <div key={idx} class="feature-card">
              <div class={`feature-icon-wrapper ${item.gradient}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
