'use client';

import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Building2, 
  Quote, 
  CheckCircle2, 
  Smile, 
  Target, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export default function WhoIsAnu({ onOpenDemo }) {
  const qualifications = [
    { title: 'B.Sc. in Mathematics', institution: 'Kurukshetra University', year: 'Maths Honors' },
    { title: 'B.Ed (Bachelor of Education)', institution: 'C.C.S. University, Meerut', year: 'Pedagogy & Teaching Excellence' },
    { title: 'MBA (Retail Management)', institution: 'Pearl Academy, N. Delhi', year: 'Analytical Management' },
    { title: '10+2 PCM (Physics, Chem, Math)', institution: 'U.P. Board', year: 'Science Stream' }
  ];

  const experienceHistory = [
    {
      role: 'Senior Maths Educator (Online)',
      school: 'Maths Habit Online Mentorship (April 2020 – Present)',
      details: 'Guiding Grades 6–10th (CBSE & IGCSE) with personal 1-on-1 attention, extensive practice sheets, and disciplined exam preparation.'
    },
    {
      role: 'Assistant Mathematics Teacher',
      school: 'Modern School, Barakhamba Road, N. Delhi',
      details: 'Served extensively teaching Mathematics for Grades 7th to 10th at one of India\'s most prestigious institutions.'
    },
    {
      role: 'Full-Time Mathematics Faculty',
      school: 'Raghubir Singh Junior Modern School (RSJMS), Humayun Road',
      details: 'Delivered core mathematics curriculum across 4 sections for Grades 3rd to 5th.'
    },
    {
      role: 'Class Teacher & Maths Guide',
      school: 'Amity International School, Pushp Vihar, N. Delhi',
      details: 'Guided 3 sections for Grade 4 as class teacher and mathematics subject specialist.'
    }
  ];

  const ngoWork = [
    { name: 'Madhav Kunj', location: 'Meerut', task: 'Free Math Education for Children' },
    { name: 'Dulari Devi Foundation', location: 'Jangpura Ext., N. Delhi', task: 'Remedial Math Tutoring' },
    { name: 'Women Welfare Association', location: 'Sunder Nagar, N. Delhi', task: 'Educational Empowerment' }
  ];

  return (
    <section className="section who-is-anu-section" id="who-is-anu" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="container">
        
        {/* Header Tag */}
        <div className="section-header text-center">
          <span className="section-tag" style={{ background: '#E6F7F5', color: '#0F766E', borderColor: '#A7E6DC' }}>
            Meet Your Educator & Mentor
          </span>
          <h2 className="section-title" style={{ fontSize: '3rem', fontWeight: 900 }}>
            Meet <span className="highlight-teal">Anu Mam</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '780px' }}>
            B.Sc. (Maths) • B.Ed • MBA | Ex-Faculty at <strong>Modern School (Barakhamba Road)</strong> & <strong>Amity International</strong> | 15+ Years Empowering Classes 6th to 10th (CBSE & IGCSE)
          </p>
        </div>

        {/* Bio Hero Grid */}
        <div className="grid grid-2 bio-grid align-center" style={{ marginBottom: '4rem' }}>
          <div className="bio-visual">
            <div className="bio-card-frame" style={{ border: '2px solid #E6F7F5', boxShadow: '0 20px 40px rgba(20, 184, 166, 0.12)' }}>
              <img src="/assets/anu_teacher.png" alt="Anu Mam Educator Profile" className="bio-img" />
              <div className="bio-quote-overlay" style={{ background: 'linear-gradient(to top, rgba(15, 118, 110, 0.95), transparent)', color: '#FFFFFF' }}>
                <Quote className="quote-icon" size={32} style={{ color: '#F59E0B' }} />
                <p style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                  &quot;My students enjoy doing maths. The fear factor vanishes completely when students are guided well for concepts, formulas, comprehending, and processing questions in the right manner.&quot;
                </p>
                <span className="quote-author" style={{ color: '#FEF3C7', fontWeight: 800 }}>— Anu Mam</span>
              </div>
            </div>
          </div>

          <div className="bio-content">
            <h3 className="bio-heading" style={{ fontSize: '2.1rem', color: '#1F2937', lineHeight: 1.25 }}>
              Replacing <span style={{ color: '#D92323', textDecoration: 'line-through' }}>Math Fear</span> with <span style={{ color: '#14B8A6' }}>Lifetime Confidence</span>
            </h3>
            
            <p className="bio-text" style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7 }}>
              With over <strong>15 years of prestigious teaching experience</strong> across Delhi&apos;s top schools like <strong>Modern School (Barakhamba Road)</strong> and <strong>Amity International School</strong>, Anu Mam has pioneered a unique <em>&quot;No-Fear&quot; Mathematics Pedagogy</em>.
            </p>

            <p className="bio-text" style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7 }}>
              Rather than enforcing rigid textbook formulas, Anu Mam connects mathematical concepts with dots of everyday real-life examples. Students learn to process questions independently, handle complex calculations effortlessly, and approach 100% of their exam paper with total confidence.
            </p>

            {/* Quick Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.75rem' }}>
              <div style={{ background: '#FFFFFF', padding: '1rem 1.25rem', borderRadius: '14px', border: '1px solid #E6F7F5' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#14B8A6' }}>100%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Paper Attempt Capability</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '1rem 1.25rem', borderRadius: '14px', border: '1px solid #FEF3C7' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F59E0B' }}>Zero Fear</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Fun & Confident Learning</div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Teaching Pillars (Extracted from Note 1) */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 className="pillars-title text-center" style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>
            Anu Mam&apos;s <span className="highlight-teal">3 Core Teaching Pillars</span>
          </h3>

          <div className="grid grid-3">
            <div style={{ background: '#FFFFFF', padding: '2.25rem', borderRadius: '20px', border: '1px solid #E6F7F5', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '54px', height: '54px', background: '#E6F7F5', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Lightbulb size={28} color="#14B8A6" />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1F2937' }}>Everyday Concept Connection</h4>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Concepts are taught in simple, intuitive ways using everyday real-life examples. No rigid memorization — students discover how math powers the world around them.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.25rem', borderRadius: '20px', border: '1px solid #FEF3C7', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '54px', height: '54px', background: '#FEF3C7', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={28} color="#F59E0B" />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1F2937' }}>Extensive Practice Sheets</h4>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Hand-crafted situation sheets prepare students for speed, complex calculations, and high-level application, eliminating exam anxiety before assessment day.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.25rem', borderRadius: '20px', border: '1px solid #E0F2FE', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '54px', height: '54px', background: '#E0F2FE', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Smile size={28} color="#0284C7" />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1F2937' }}>Flexible Thinking Encouraged</h4>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Rigid single-method approaches do not exist. When a student correctly applies a concept using their own way of solving, they are always celebrated and promoted to think independently.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Qualifications & School History Grid */}
        <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '5rem' }}>
          
          {/* Academic Degrees */}
          <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '46px', height: '46px', background: '#E6F7F5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={26} color="#14B8A6" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#1F2937' }}>Academic Qualifications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {qualifications.map((q, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', padding: '1rem', background: '#FAF9F6', borderRadius: '12px' }}>
                  <Award size={22} color="#F59E0B" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#1F2937' }}>{q.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#0F766E', fontWeight: 600 }}>{q.institution}</p>
                    <span style={{ fontSize: '0.78rem', color: '#6B7280' }}>{q.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* School Teaching Legacy */}
          <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '46px', height: '46px', background: '#FEF3C7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building2 size={26} color="#F59E0B" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#1F2937' }}>Teaching Career History</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experienceHistory.map((exp, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', padding: '1rem', background: '#FAF9F6', borderRadius: '12px' }}>
                  <CheckCircle2 size={22} color="#14B8A6" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#1F2937' }}>{exp.role}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#14B8A6', fontWeight: 700 }}>{exp.school}</p>
                    <p style={{ fontSize: '0.825rem', color: '#4B5563', marginTop: '0.25rem' }}>{exp.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Giving Back to Society (NGO Work - Extracted from Note 3) */}
        <div style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)', borderRadius: '24px', padding: '3.5rem 3rem', color: '#FFFFFF', boxShadow: '0 15px 40px rgba(20, 184, 166, 0.25)' }}>
          <div className="text-center" style={{ marginBottom: '2.5rem' }}>
            <span style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#FEF3C7', padding: '0.4rem 1.1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Social Impact & Service
            </span>
            <h3 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginTop: '0.85rem' }}>
              &quot;Giving Back to Society&quot; — Community NGO Work
            </h3>
            <p style={{ color: '#E6F7F5', maxWidth: '680px', margin: '0.5rem auto 0', fontSize: '1.05rem' }}>
              Anu Mam actively dedicates time educating children in mathematics across non-profit NGO organizations to ensure equal learning opportunities for all.
            </p>
          </div>

          <div className="grid grid-3">
            {ngoWork.map((ngo, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '16px', padding: '1.75rem', backdropFilter: 'blur(8px)' }}>
                <Heart size={28} color="#FEF3C7" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.25rem' }}>{ngo.name}</h4>
                <div style={{ fontSize: '0.85rem', color: '#FEF3C7', fontWeight: 700, marginBottom: '0.6rem' }}>{ngo.location}</div>
                <p style={{ fontSize: '0.9rem', color: '#E6F7F5' }}>{ngo.task}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <button 
              className="banner-register-btn" 
              onClick={() => onOpenDemo('Book Demo Session with Anu Mam')}
              style={{ background: '#F59E0B', color: '#FFFFFF', border: 'none' }}
            >
              Book 1-on-1 Trial Class with Anu Mam
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
