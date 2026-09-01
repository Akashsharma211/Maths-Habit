'use client';

import { Brain, Target, Sparkles } from 'lucide-react';

export default function WhyStandsOutSection() {
  const features = [
    {
      icon: <Brain size={70} color="#14B8A6" />,
      bgClass: 'bg-blob-purple',
      caption: "Reasoning: Building deep Cambridge IGCSE conceptual understanding without blind formula rote learning"
    },
    {
      icon: <Target size={70} color="#F59E0B" />,
      bgClass: 'bg-blob-mint',
      caption: "Problem Solving: 3-Tier IGCSE practice sheets from foundation concepts to Paper 2 & Paper 4 exam mastery"
    },
    {
      icon: <Sparkles size={70} color="#0F766E" />,
      bgClass: 'bg-blob-cyan',
      caption: "Application: Real-world speed shortcuts for Cambridge IGCSE A* grades, 100% exam accuracy & top global ranks"
    }
  ];

  return (
    <section className="why-stands-out-section">
      <div className="container">
        
        <h2 className="section-headline-center" style={{ margin: 0 }}>
          <span className="highlight-teal">Why Maths Habit Stands</span> Out?
        </h2>

        <div className="why-features-grid">
          {features.map((f, i) => (
            <div key={i} className="why-feature-card">
              <div className={`why-illustration-wrap ${f.bgClass}`}>
                {f.icon}
              </div>
              <p className="why-caption">{f.caption}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
