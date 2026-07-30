'use client';

import { Sparkles, ShieldCheck, HeartHandshake, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenDemo }) {
  return (
    <section className="hero-banner-section">
      <div className="container">
        
        {/* Personalized Mint/Teal Hero Banner Card */}
        <div className="hero-mint-banner">
          <div className="banner-left-content">
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFFFFF', padding: '0.4rem 1rem', borderRadius: '999px', border: '1px solid #CCF0EC', marginBottom: '1.25rem', boxShadow: '0 2px 8px rgba(20,184,166,0.1)' }}>
              <Sparkles size={16} color="#14B8A6" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F766E', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Ex-Modern School & Amity Senior Faculty
              </span>
            </div>

            <h1 className="banner-title-large" style={{ fontSize: '2.6rem', lineHeight: 1.15, marginBottom: '0.85rem' }}>
              Master Maths with <span className="highlight-teal">Zero Fear</span> & <span className="highlight-gold">100% Concept Clarity</span>
            </h1>

            <p className="banner-sub-text" style={{ fontSize: '1.1rem', color: '#374151', fontWeight: 600, maxWidth: '620px', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Empowering <strong>Classes 6th to 10th (CBSE & IGCSE)</strong> to comprehend, process, and attempt 100% of exam papers with total confidence.
            </p>

            {/* 3 Teaching Excellence Badges */}
            <div className="banner-rewards-row" style={{ gap: '0.85rem' }}>
              <div className="reward-pill">
                <ShieldCheck className="reward-icon" color="#14B8A6" size={20} />
                <div>
                  <span className="reward-title">Pedagogy</span>
                  <span className="reward-val">0-Fear Concept Learning</span>
                </div>
              </div>

              <div className="reward-pill">
                <CheckCircle2 className="reward-icon" color="#F59E0B" size={20} />
                <div>
                  <span className="reward-title">Assessment</span>
                  <span className="reward-val">100% Exam Attempt Rate</span>
                </div>
              </div>

              <div className="reward-pill">
                <HeartHandshake className="reward-icon" color="#0F766E" size={20} />
                <div>
                  <span className="reward-title">Attention</span>
                  <span className="reward-val">Personal 1-on-1 Mentorship</span>
                </div>
              </div>
            </div>

          </div>

          <div className="banner-right-wrapper">
            <div className="for-class-badge">
              For Classes <strong>6th to 10th</strong> (CBSE & IGCSE)
            </div>

            <div className="banner-images-group">
              <img 
                src="/assets/anu_teacher.png" 
                alt="Anu Mam Mathematics Mentor" 
                className="banner-student-img"
              />
            </div>

            <button className="banner-register-btn" onClick={() => onOpenDemo('Book Free Trial Class with Anu Mam')}>
              Book Free Trial Class <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Headline Banner */}
        <h2 className="section-headline-center" style={{ margin: '3rem 0 2rem' }}>
          <span className="highlight-teal">Maths Habit:</span> Transforming Math Fear into <span className="highlight-gold">Lifetime Confidence</span> for Classes 6th to 10th!
        </h2>

      </div>
    </section>
  );
}
