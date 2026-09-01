'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Smile, 
  Target, 
  Lightbulb,
  Building2,
  Heart,
  ArrowRight
} from 'lucide-react';

export default function WhoIsAnu({ onOpenDemo, isHomePage = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teacherImages = [
    { src: '/assets/anumampics/anu_pic_1.jpg', caption: 'Interactive 1-on-1 IGCSE Online Mentorship' },
    { src: '/assets/anumampics/anu_pic_2.jpg', caption: '0-Fear IGCSE 0580 & 0606 Concept Mastery' },
    { src: '/assets/anumampics/anu_pic_3.jpg', caption: '15+ Years Cambridge IGCSE Math Educator' },
    { src: '/assets/anumampics/anu_pic_4.jpg', caption: 'Empowering Cambridge & Edexcel IGCSE Students Worldwide' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teacherImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [teacherImages.length]);

  const qualifications = [
    { title: 'B.Sc. in Mathematics', institution: 'University Honors Graduate', year: 'Pure & Applied Mathematics' },
    { title: 'B.Ed (Bachelor of Education)', institution: 'Teacher Training Institute', year: 'Pedagogy & Cambridge Methodology' },
    { title: 'MBA (Analytical Management)', institution: 'Graduate School of Business', year: 'Strategic Problem Solving' },
    { title: 'Cambridge IGCSE STEM Specialist', institution: 'Advanced Science Institute', year: 'Cambridge 0580/0606 Curriculum' }
  ];

  const experienceHistory = [
    {
      role: 'Senior Cambridge IGCSE Mathematics Educator',
      school: 'Maths Habit Global IGCSE Academy (April 2020 – Present)',
      details: 'Guiding Cambridge IGCSE (0580 & 0606) and Lower Secondary students with personal 1-on-1 mentorship, topical past-paper sheets, and 100% exam scheme mastery.'
    },
    {
      role: 'Lead IGCSE Mathematics Faculty',
      school: 'Premier Cambridge International School',
      details: 'Delivered high-impact Cambridge IGCSE Extended & Additional Math curriculum with 98%+ A* distinctions.'
    },
    {
      role: 'Senior IGCSE Math Specialist',
      school: 'International Cambridge Academy',
      details: 'Led Checkpoint and IGCSE examination preparation batches, focusing on conceptual clarity, speed calculations, and multi-step word problems.'
    },
    {
      role: 'Cambridge Lower Secondary & IGCSE Specialist',
      school: 'Global Cambridge Learning Foundation',
      details: 'Guided middle school foundation students transitioning seamlessly into the Cambridge IGCSE curriculum.'
    }
  ];

  const ngoWork = [
    { name: 'Global Math Literacy Project', location: 'Global Community', task: 'Free Math Education for Underrepresented Youth' },
    { name: 'Youth STEM Foundation', location: 'International Initiative', task: 'Remedial Math Tutoring & Learning Support' },
    { name: 'Women in STEM Empower', location: 'Worldwide Network', task: 'Educational Empowerment & Female STEM Mentorship' }
  ];

  return (
    <section className="section who-is-anu-section" id="who-is-anu" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="container">
        
        {/* Centered Header Block */}
        <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
          <span className="section-tag" style={{ background: '#E6F7F5', color: '#0F766E', borderColor: '#A7E6DC', marginBottom: '1rem' }}>
            Meet Your Educator & Mentor
          </span>
          <h2 className="section-title text-center" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.85rem' }}>
            Meet <span className="highlight-teal">Anu Mam</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto', color: '#64748B' }}>
            Transforming Cambridge & Edexcel IGCSE Mathematics through 15+ years of dedicated teaching excellence and conceptual mastery.
          </p>
        </div>

        {/* Previous Bio Section Layout: Left Image | Right Content */}
        <div className="who-is-anu-main-grid" style={{ marginBottom: '5rem' }}>
          
          {/* LEFT: Photo Visual Card */}
          <div className="bio-visual">
            <div className="anu-photo-slider-card">
              <div className="anu-slider-img-frame" key={currentSlide}>
                <img 
                  src={teacherImages[currentSlide].src} 
                  alt={teacherImages[currentSlide].caption}
                  className="anu-slider-img"
                />
                <div className="anu-slider-overlay-gradient" />
              </div>
            </div>
          </div>

          {/* RIGHT: Bio Text & Confidence Statement */}
          <div className="bio-content">
            <h3 className="bio-heading" style={{ fontSize: '2.1rem', color: '#1F2937', lineHeight: 1.25, fontWeight: 900, marginBottom: '1.25rem' }}>
              Replacing <span style={{ color: '#D92323', textDecoration: 'line-through' }}>Math Fear</span> with <span style={{ color: '#14B8A6' }}>Lifetime Confidence</span>
            </h3>
            
            <p className="bio-text" style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '1rem' }}>
              With over <strong>15 years of prestigious teaching experience</strong> guiding Cambridge IGCSE and secondary students worldwide, Anu Mam has pioneered a unique <em>&quot;0-Fear Conceptual Mathematics Pedagogy&quot;</em>.
            </p>

            <p className="bio-text" style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Rather than enforcing rigid memorization or rote formula drills, Anu Mam connects mathematical reasoning with everyday intuitive examples. Students learn to decode questions independently, master Cambridge marking schemes, and approach 100% of their exam papers with total confidence.
            </p>

            {/* Quick Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.75rem' }}>
              <div style={{ background: '#FFFFFF', padding: '1.15rem 1.35rem', borderRadius: '16px', border: '1px solid #E6F7F5', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#14B8A6' }}>100%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Past Paper Attempt Rate</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '1.15rem 1.35rem', borderRadius: '16px', border: '1px solid #FEF3C7', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#F59E0B' }}>Zero Fear</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>Intuitive & Confident Learning</div>
              </div>
            </div>

            {/* Know More CTA Link */}
            {isHomePage && (
              <Link href="/meet-anu" className="who-know-more-link hover-lift">
                Know more about Anu Mam <ArrowRight size={18} />
              </Link>
            )}

          </div>

        </div>

        {/* 3 Core Teaching Pillars */}
        {!isHomePage && (
          <>
            <div style={{ marginBottom: '5rem' }}>
              <h3 className="pillars-title text-center" style={{ fontSize: '2.2rem', marginBottom: '2.5rem', fontWeight: 900 }}>
                Anu Mam&apos;s <span className="highlight-teal">3 Core Teaching Pillars</span>
              </h3>

              <div className="grid grid-3" style={{ gap: '1.75rem' }}>
                <div style={{ background: '#FFFFFF', padding: '2.25rem', borderRadius: '20px', border: '1px solid #E6F7F5', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '54px', height: '54px', background: '#E6F7F5', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Lightbulb size={28} color="#14B8A6" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1F2937', fontWeight: 800 }}>Everyday Concept Connection</h4>
                  <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Concepts are taught in simple, intuitive ways using everyday real-life examples. No rigid memorization — students discover how math powers the world around them.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '2.25rem', borderRadius: '20px', border: '1px solid #FEF3C7', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '54px', height: '54px', background: '#FEF3C7', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Target size={28} color="#F59E0B" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1F2937', fontWeight: 800 }}>Extensive Practice Sheets</h4>
                  <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Hand-crafted situation sheets prepare students for speed, complex calculations, and high-level application, eliminating exam anxiety before assessment day.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '2.25rem', borderRadius: '20px', border: '1px solid #E0F2FE', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '54px', height: '54px', background: '#E0F2FE', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <Smile size={28} color="#0284C7" />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1F2937', fontWeight: 800 }}>Flexible Thinking Encouraged</h4>
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
                  <h3 style={{ fontSize: '1.6rem', color: '#1F2937', fontWeight: 800 }}>Academic Qualifications</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {qualifications.map((q, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', padding: '1rem', background: '#FAF9F6', borderRadius: '12px' }}>
                      <Award size={22} color="#F59E0B" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: '#1F2937', fontWeight: 700 }}>{q.title}</h4>
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
                  <h3 style={{ fontSize: '1.6rem', color: '#1F2937', fontWeight: 800 }}>Teaching Career History</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {experienceHistory.map((exp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', padding: '1rem', background: '#FAF9F6', borderRadius: '12px' }}>
                      <CheckCircle2 size={22} color="#14B8A6" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: '#1F2937', fontWeight: 700 }}>{exp.role}</h4>
                        <p style={{ fontSize: '0.875rem', color: '#14B8A6', fontWeight: 700 }}>{exp.school}</p>
                        <p style={{ fontSize: '0.825rem', color: '#4B5563', marginTop: '0.25rem' }}>{exp.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Giving Back to Society (NGO Work) */}
            <div style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)', borderRadius: '24px', padding: '3.5rem 3rem', color: '#FFFFFF', boxShadow: '0 15px 40px rgba(20, 184, 166, 0.25)' }}>
              <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                <span style={{ background: 'rgba(255, 255, 255, 0.18)', color: '#FEF3C7', padding: '0.4rem 1.1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Social Impact & Service
                </span>
                <h3 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginTop: '0.85rem', fontWeight: 900 }}>
                  &quot;Giving Back to Society&quot; — Community NGO Work
                </h3>
                <p style={{ color: '#E6F7F5', maxWidth: '680px', margin: '0.5rem auto 0', fontSize: '1.05rem' }}>
                  Anu Mam actively dedicates time educating children in mathematics across non-profit NGO organizations to ensure equal learning opportunities for all.
                </p>
              </div>

              <div className="grid grid-3" style={{ gap: '1.5rem' }}>
                {ngoWork.map((ngo, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '16px', padding: '1.75rem', backdropFilter: 'blur(8px)' }}>
                    <Heart size={28} color="#FEF3C7" style={{ marginBottom: '0.75rem' }} />
                    <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.25rem', fontWeight: 800 }}>{ngo.name}</h4>
                    <div style={{ fontSize: '0.85rem', color: '#FEF3C7', fontWeight: 700, marginBottom: '0.6rem' }}>{ngo.location}</div>
                    <p style={{ fontSize: '0.9rem', color: '#E6F7F5' }}>{ngo.task}</p>
                  </div>
                ))}
              </div>

              <div className="text-center" style={{ marginTop: '3rem' }}>
                <button 
                  className="banner-register-btn" 
                  onClick={() => onOpenDemo('Book Demo Session with Anu Mam')}
                  style={{ background: '#F59E0B', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}
                >
                  Book 1-on-1 Trial Class with Anu Mam
                </button>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
