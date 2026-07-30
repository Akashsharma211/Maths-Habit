'use client';

export default function StatsSection() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5,000+', label: 'Students Guided' },
    { number: '450+', label: 'Selections in JEE/NEET' },
    { number: '99.4%', label: 'Highest Board Marks' },
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
