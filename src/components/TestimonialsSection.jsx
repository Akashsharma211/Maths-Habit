'use client';

import { Star, User } from 'lucide-react';

export default function TestimonialsSection() {
  const toppers = [
    { badge: 'A* (99%)', name: 'Sophia Chen', exam: 'Cambridge IGCSE Extended (0580)', score: 'Mathematics: 100/100 Paper 4', highlight: true, isGold: true },
    { badge: 'Grade 9 / A*', name: 'Lucas Miller', exam: 'IGCSE Additional Math (0606)', score: 'Calculus & Vectors: Distinction', highlight: false },
    { badge: 'A* (98%)', name: 'Chloe Tremblay', exam: 'Edexcel International GCSE (4MA1)', score: 'Higher Tier Math: 98/100', highlight: false },
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'IGCSE Grade 10 Student • Singapore',
      text: '"Before joining Anu Mam\'s Cambridge IGCSE Extended math batch, I used to panic looking at Paper 4 circle theorem and function questions. Her visual methods and marking scheme tricks changed everything. Scored A*!"'
    },
    {
      name: 'David Thompson',
      role: 'Parent of Alex (IGCSE Grade 9, Dubai, UAE)',
      text: '"As a parent, I was worried about my son\'s transition into Cambridge IGCSE Math. Anu Mam\'s personal care, regular weekly IGCSE progress reports, and structured practice worksheets transformed his confidence completely."'
    },
    {
      name: 'Elena Rostova',
      role: 'IGCSE Grade 10 Student • London, UK',
      text: '"The 1-on-1 Cambridge past paper doubt resolution is genuine! Even late before exams, Anu Mam clarified tricky past paper questions with voice notes and step-by-step video solutions. Achieved A* in 0580 & 0606!"'
    }
  ];

  return (
    <section class="section testimonials-section" id="testimonials">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Student Success Stories</span>
          <h2 class="section-title">What Our <span class="text-gradient">IGCSE Students & Parents Say</span></h2>
          <p class="section-subtitle">Real results from students worldwide who conquered Cambridge & Edexcel IGCSE Mathematics with Anu Mam.</p>
        </div>

        <div class="toppers-banner">
          {toppers.map((t, i) => (
            <div key={i} class={`topper-card ${t.highlight ? 'highlight-topper' : ''}`}>
              <div class={`topper-badge ${t.isGold ? 'gold-badge' : ''}`}>{t.badge}</div>
              <div class="topper-avatar"><User size={24} /></div>
              <h4>{t.name}</h4>
              <span class="topper-exam">{t.exam}</span>
              <p class="topper-score">{t.score}</p>
            </div>
          ))}
        </div>

        <div class="grid grid-3 testimonials-grid">
          {testimonials.map((test, i) => (
            <div key={i} class="testimonial-card">
              <div class="rating-stars">
                {[...Array(5)].map((_, starIdx) => (
                  <Star key={starIdx} size={15} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p class="testimonial-text">{test.text}</p>
              <div class="testimonial-author">
                <div class="author-info">
                  <h5>{test.name}</h5>
                  <span>{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
