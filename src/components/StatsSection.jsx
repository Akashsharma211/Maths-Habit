'use client';

export default function StatsSection() {
  const stats = [
    { number: '15+', label: 'Years Cambridge IGCSE Mentorship' },
    { number: '5,000+', label: 'Global IGCSE Students Guided' },
    { number: '98%+', label: 'A* & Grade 9/8 Distinction Rate' },
    { number: '100%', label: 'Cambridge Past Paper Coverage' },
  ];

  return (
    <section class="stats-bar-section">
      <div class="container">
        <div class="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} class="stat-card">
              <div class="stat-number">{stat.number}</div>
              <div class="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
