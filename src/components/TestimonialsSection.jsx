'use client';

import { Star, User } from 'lucide-react';

export default function TestimonialsSection() {
  const toppers = [
    { badge: 'AIR 45', name: 'Rohan Sharma', exam: 'JEE Advanced 2025', score: 'Physics: 98/100', highlight: false },
    { badge: '99.4%', name: 'Ananya Verma', exam: 'Class 10 CBSE Board', score: 'Science: 100/100', highlight: true, isGold: true },
    { badge: '685 / 720', name: 'Siddharth Patel', exam: 'NEET UG 2025', score: 'Chemistry: 175/180', highlight: false },
  ];

  const testimonials = [
    {
      name: 'Priya Sundaram',
      role: 'Class 12 Student • CBSE Board',
      text: '"Before joining Anu Mam\'s Physics batch, I used to panic looking at numerical problems. Her visual methods and step-by-step tricks changed everything. Scored 96 in Class 12 Boards!"'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent of Aarav (Class 9)',
      text: '"As a parent, I was worried about my son\'s weak fundamentals in Class 9 Science. Anu Mam\'s personal care, regular updates, and friendly teaching transformed his confidence completely."'
    },
    {
      name: 'Meera Deshmukh',
      role: 'NEET 2025 Aspirant',
      text: '"The 24/7 doubt resolution is genuine! Even late in the evening before exams, Anu Mam replied to my doubts on WhatsApp with voice notes. Cleared NEET on my first attempt!"'
    }
  ];

  return (
    <section class="section testimonials-section" id="testimonials">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Student Success Stories</span>
          <h2 class="section-title">What Our <span class="text-gradient">Students & Parents Say</span></h2>
          <p class="section-subtitle">Real results from real students who turned their academic journey around with Anu Mam.</p>
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
