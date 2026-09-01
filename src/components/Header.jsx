'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  User, 
  Users, 
  Check,
  LogIn,
  Menu,
  X,
  BookOpen,
  Award,
  Sparkles,
  Phone
} from 'lucide-react';

export default function Header({ activeRole = 'student', onRoleChange }) {
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('IGCSE Grade 9 & 10 (Cambridge Extended Math)');

  const roleCapsuleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const grades = [
    'IGCSE Grade 9 (Cambridge 0580 Extended)',
    'IGCSE Grade 10 (Cambridge 0580 Target A*)',
    'IGCSE Additional Mathematics (Cambridge 0606)',
    'Edexcel International GCSE Mathematics (4MA1)',
    'Cambridge Lower Secondary Checkpoint (Grade 8)',
    'Cambridge Lower Secondary Foundation (Grades 6–7)'
  ];

  // Close dropdowns & mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleCapsuleRef.current && !roleCapsuleRef.current.contains(event.target)) {
        setStudentDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-hamburger-btn')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleRoleSelect = (role) => {
    if (role === 'student') {
      setStudentDropdownOpen((prev) => !prev);
      if (onRoleChange) onRoleChange('student', selectedGrade);
    } else {
      setStudentDropdownOpen(false);
      if (onRoleChange) onRoleChange('parent');
    }
  };

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setStudentDropdownOpen(false);
    if (onRoleChange) onRoleChange('student', grade);
  };

  return (
    <header className="floating-capsule-header-wrapper">
      <div className={`floating-capsule-bar ${activeRole === 'parent' ? 'parent-theme' : 'student-theme'}`}>
        
        {/* Left Side: Circular White Logo Badge + Brand Text */}
        <Link href="/" className="floating-brand-link">
          <div className="floating-logo-circle">
            <img 
              src="/assets/bike_logo.png" 
              alt="Maths Habit Logo" 
              className="floating-bike-img" 
            />
          </div>
          <span className="floating-brand-title">
            MATHS <span className={activeRole === 'parent' ? 'brand-gold-highlight' : 'brand-teal-highlight'}>HABIT</span>
          </span>
        </Link>

        {/* Center Desktop Menu Links */}
        <ul className="floating-nav-menu desktop-only-menu">
          <li className="floating-nav-item">
            <Link href="/#courses">Courses</Link>
          </li>

          <li className="floating-nav-item">
            <Link href="/#testimonials">Results</Link>
          </li>
          
          <li className="floating-nav-item">
            <Link href="/meet-anu">Meet Anu</Link>
          </li>

          <li className="floating-nav-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Right Side Role Capsule */}
        <div className="floating-right-capsule desktop-only-capsule" ref={roleCapsuleRef}>
          <button 
            className={`floating-role-btn ${activeRole === 'student' ? 'active-student' : ''}`}
            onClick={() => handleRoleSelect('student')}
            aria-label="Student Portal selector"
          >
            <User size={15} />
            <span>Student</span>
            <ChevronDown size={12} style={{ transform: studentDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
          </button>

          <button 
            className={`floating-role-btn ${activeRole === 'parent' ? 'active-parent' : ''}`}
            onClick={() => handleRoleSelect('parent')}
            aria-label="Parent Portal selector"
          >
            <Users size={15} />
            <span>Parent</span>
          </button>

          {/* Student Dropdown Menu */}
          {studentDropdownOpen && (
            <div className="role-dropdown-menu floating-role-dropdown">
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 700, padding: '0.2rem 0.85rem 0.4rem', textTransform: 'uppercase' }}>
                Select IGCSE Level / Grade
              </div>
              {grades.map((grade, idx) => (
                <div 
                  key={idx} 
                  className="role-dropdown-item"
                  onClick={() => handleGradeSelect(grade)}
                >
                  <span>{grade}</span>
                  {selectedGrade === grade && <Check size={14} color="#14B8A6" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Direct Portal Login Button */}
        <Link 
          href={`/login?role=${activeRole}`}
          className={`floating-login-link-btn desktop-only-login ${activeRole === 'parent' ? 'login-btn-parent' : 'login-btn-student'}`}
          title="Sign in to Portal"
        >
          <LogIn size={14} />
          <span>Login</span>
        </Link>

        {/* Mobile Right Controls: Quick Login & Hamburger Toggle */}
        <div className="mobile-header-actions">
          <Link 
            href={`/login?role=${activeRole}`}
            className="mobile-quick-login-icon"
            aria-label="Sign in"
          >
            <LogIn size={17} />
          </Link>

          <button 
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" ref={mobileMenuRef}>
          
          {/* Mobile Role Switcher */}
          <div className="mobile-role-toggle-bar">
            <button 
              className={`mobile-role-tab ${activeRole === 'student' ? 'active-student' : ''}`}
              onClick={() => {
                if (onRoleChange) onRoleChange('student', selectedGrade);
              }}
            >
              <User size={15} />
              <span>Student View</span>
            </button>

            <button 
              className={`mobile-role-tab ${activeRole === 'parent' ? 'active-parent' : ''}`}
              onClick={() => {
                if (onRoleChange) onRoleChange('parent');
              }}
            >
              <Users size={15} />
              <span>Parent View</span>
            </button>
          </div>

          {/* Navigation Links List */}
          <ul className="mobile-nav-links-list">
            <li>
              <Link 
                href="/#courses" 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link-item"
              >
                <BookOpen size={18} className="mob-icon" />
                <span>IGCSE Courses & Batches</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/#testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link-item"
              >
                <Award size={18} className="mob-icon" />
                <span>Results & Top Grades</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/meet-anu" 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link-item"
              >
                <Sparkles size={18} className="mob-icon" />
                <span>Meet Anu Mam (Story & Bio)</span>
              </Link>
            </li>

            <li>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link-item"
              >
                <Phone size={18} className="mob-icon" />
                <span>Contact & Book Demo</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Action Buttons Row */}
          <div className="mobile-nav-bottom-actions">
            <Link 
              href={`/login?role=${activeRole}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-drawer-btn-login"
            >
              <LogIn size={16} />
              <span>{activeRole === 'parent' ? 'Parent Portal Login' : 'Student Portal Login'}</span>
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-drawer-btn-demo"
            >
              <span>Book Free Demo Class →</span>
            </Link>
          </div>

        </div>
      )}

    </header>
  );
}
