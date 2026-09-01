import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Award, GraduationCap } from 'lucide-react';

export default function HeroSection({ activeRole = 'student', onOpenDemo, onRoleChange }) {
  const isParent = activeRole === 'parent';

  return (
    <section className="motion-premium-hero">
      
      {/* Background Math Graph Grid & Pattern */}
      <div className="hero-grid-bg" />
      
      {/* Floating Motion-Style Vector Doodles */}
      <div className="hero-doodles-container">
        {/* Flight Trail & Paper Plane */}
        <svg className="doodle-svg doodle-plane" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 65 C 40 30, 90 75, 120 25" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
          <polygon points="120,25 105,28 112,40" fill="#64748B"/>
          <path d="M120 25 L80 45 L90 35 Z" fill="#CBD5E1"/>
        </svg>

        {/* Atom Model Outline */}
        <svg className="doodle-svg doodle-atom-svg" viewBox="0 0 100 100" fill="none" stroke="#94A3B8" strokeWidth="1.5">
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(-30 50 50)" />
          <circle cx="50" cy="50" r="6" fill={isParent ? '#F59E0B' : '#14B8A6'} />
        </svg>

        {/* 3D Wireframe Cube */}
        <svg className="doodle-svg doodle-cube-svg" viewBox="0 0 80 80" fill="none" stroke="#94A3B8" strokeWidth="1.5">
          <path d="M20 15 L50 15 L50 45 L20 45 Z" />
          <path d="M35 30 L65 30 L65 60 L35 60 Z" />
          <line x1="20" y1="15" x2="35" y2="30" />
          <line x1="50" y1="15" x2="65" y2="30" />
          <line x1="50" y1="45" x2="65" y2="60" />
          <line x1="20" y1="45" x2="35" y2="60" />
        </svg>

        {/* Magnifying Glass Outline */}
        <svg className="doodle-svg doodle-glass-svg" viewBox="0 0 60 60" fill="none" stroke="#94A3B8" strokeWidth="1.8">
          <circle cx="24" cy="24" r="18" />
          <line x1="37" y1="37" x2="52" y2="52" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container hero-motion-content">
        
        {/* Left Side Organic Swoop Shape Container */}
        <div key={activeRole} className={`hero-left-swoop-card ${isParent ? 'parent-swoop' : ''}`}>
          
          {/* Top Portal Badge & Switch Perspective Link */}
          <div className="hero-top-badge-row">
            <div className={`hero-portal-chip ${isParent ? 'parent-chip' : 'student-chip'}`}>
              {isParent ? <Users size={15} /> : <GraduationCap size={15} />}
              <span>{isParent ? 'Parent Portal Mode' : 'Student Portal Mode'}</span>
            </div>

            <button 
              type="button" 
              className="hero-switch-link"
              onClick={() => onRoleChange && onRoleChange(isParent ? 'student' : 'parent', 'IGCSE Grades 9–10 (Extended Math 0580)')}
            >
              <span>Switch to {isParent ? 'Student View' : 'Parent View'}</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Main Title Block */}
          <h1 className="hero-title-text">
            <span className="name-bold">Anu Mam,</span>{' '}
            <span className="title-desc">
              {isParent ? 'a Guide, a Mentor and an' : 'an Educationist, a Mentor and an'}
            </span>
            <div className={`hero-3d-pill-badge ${isParent ? 'parent-badge-3d' : ''}`}>
              {isParent ? 'IGCSE ACADEMIC PARTNER' : 'IGCSE MATHS SPECIALIST'}
            </div>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline-sub">
            {isParent ? (
              <>Partnering with parents for <strong>guaranteed IGCSE A* grades</strong>, transparent weekly reports & complete Cambridge past paper mastery!</>
            ) : (
              <>Transforming <strong>IGCSE Math Fear into A* Lifetime Confidence</strong> & 100% past paper question mastery!</>
            )}
          </p>

          {/* Action CTA Button */}
          <div className="hero-cta-action-area">
            <Link 
              href={`/login?role=${isParent ? 'parent' : 'student'}`}
              className={`hero-primary-cta-btn ${isParent ? 'parent-primary-btn' : 'student-primary-btn'}`}
              style={{ textDecoration: 'none' }}
            >
              <span>{isParent ? 'Log in as Parent' : 'Log in as a Student'}</span>
              <div className="btn-arrow-circle">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>

        </div>

        {/* Right Side Mentor Image & Motion Branding Backdrop */}
        <div className="hero-right-portrait-wrapper">
          
          {/* Motion Style Angle Backdrop Polygon */}
          <div className={`hero-portrait-backdrop ${isParent ? 'parent-backdrop' : ''}`} />

          <div className="hero-mentor-image-box">
            <img 
              src="/assets/anu_teacher.png" 
              alt="Anu Mam Cambridge IGCSE Mentor" 
              className="hero-mentor-portrait"
            />

            {/* Floating Trust Badge */}
            {isParent ? (
              <div className="hero-floating-trust-tag parent-tag">
                <Award size={18} color="#D97706" />
                <div>
                  <strong>100% IGCSE Parent Satisfaction</strong>
                  <span>Weekly Cambridge Progress Reports</span>
                </div>
              </div>
            ) : (
              <div className="hero-floating-trust-tag student-tag">
                <Sparkles size={18} color="#14B8A6" />
                <div>
                  <strong>15+ Yrs Cambridge IGCSE Specialist</strong>
                  <span>0-Fear 0580 & 0606 Concept Clarity</span>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
