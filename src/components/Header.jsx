'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronUp, 
  User, 
  Users, 
  Check, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  PieChart, 
  Layers, 
  FileCheck2, 
  Target, 
  History, 
  Calendar, 
  FilePlus2 
} from 'lucide-react';

export default function Header({ onRoleChange }) {
  const [activeRole, setActiveRole] = useState('student');
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [studyToolsOpen, setStudyToolsOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('Class 9-10 (CBSE / IGCSE)');

  const grades = [
    'Class 6th (CBSE / IGCSE)',
    'Class 7th (CBSE / IGCSE)',
    'Class 8th (CBSE / IGCSE)',
    'Class 9th (CBSE / IGCSE)',
    'Class 10th Board Target (CBSE / IGCSE)'
  ];

  const handleRoleSelect = (role) => {
    setActiveRole(role);
    if (role === 'student') {
      setStudentDropdownOpen(!studentDropdownOpen);
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
    <header className="motion-navbar">
      <div className="container motion-nav-container">
        
        {/* Bicycle PNG Logo + Brand Typography */}
        <Link href="/" className="motion-brand">
          <img 
            src="/assets/bike_logo.png" 
            alt="Maths Habit Bicycle Logo" 
            className="brand-bike-icon-img" 
          />
          <div className="brand-text-block">
            <span className="brand-title-main">
              MATHS <span className="brand-title-accent">HABIT</span>
            </span>
            <span className="brand-tagline-sub">
              REASONING • PROBLEM SOLVING • APPLICATION
            </span>
          </div>
        </Link>

        {/* Student / Parent Capsule Toggle */}
        <div className="role-toggle-capsule">
          <button 
            className={`role-toggle-btn ${activeRole === 'student' ? 'active' : ''}`}
            onClick={() => handleRoleSelect('student')}
          >
            <User className="role-icon" size={16} />
            <span>Student</span>
            <ChevronDown size={14} style={{ transform: studentDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
          </button>

          <button 
            className={`role-toggle-btn ${activeRole === 'parent' ? 'active' : ''}`}
            onClick={() => handleRoleSelect('parent')}
          >
            <Users className="role-icon" size={16} />
            <span>Parent</span>
          </button>

          {/* Student Dropdown Menu */}
          {studentDropdownOpen && (
            <div className="role-dropdown-menu">
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 700, padding: '0.2rem 0.85rem 0.4rem', textTransform: 'uppercase' }}>
                Select Class (CBSE & IGCSE)
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

        {/* Navigation Links */}
        <ul className="motion-nav-menu">
          <li className="motion-nav-item">
            <Link href="/#courses">Online Courses</Link>
          </li>

          {/* Study Tools Mega Dropdown */}
          <li 
            className="motion-nav-item" 
            style={{ position: 'relative' }}
            onMouseEnter={() => setStudyToolsOpen(true)}
            onMouseLeave={() => setStudyToolsOpen(false)}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: studyToolsOpen ? 'var(--brand-teal-dark)' : 'inherit' }}>
              Study tools {studyToolsOpen ? <ChevronUp size={14} color="var(--brand-teal)" /> : <ChevronDown size={14} />}
            </span>

            {studyToolsOpen && (
              <div className="mega-dropdown-menu">
                <div className="mega-menu-grid">
                  <Link href="/#courses" className="mega-menu-item">
                    <BookOpen className="mega-item-icon" size={20} />
                    <span>CBSE & IGCSE Revision Notes</span>
                  </Link>
                  <Link href="/#courses" className="mega-menu-item">
                    <HelpCircle className="mega-item-icon" size={20} />
                    <span>Exam Questions</span>
                  </Link>

                  <Link href="/#courses" className="mega-menu-item">
                    <Sparkles className="mega-item-icon" size={20} />
                    <span>Smart Mark</span>
                  </Link>
                  <Link href="/#courses" className="mega-menu-item">
                    <PieChart className="mega-item-icon" size={20} />
                    <span>Strengths & Weaknesses</span>
                    <span className="badge-new-red">New</span>
                  </Link>

                  <Link href="/#courses" className="mega-menu-item">
                    <Layers className="mega-item-icon" size={20} />
                    <span>Flashcards</span>
                  </Link>
                  <Link href="/#courses" className="mega-menu-item">
                    <FileCheck2 className="mega-item-icon" size={20} />
                    <span>Mock Exams</span>
                  </Link>

                  <Link href="/#courses" className="mega-menu-item">
                    <Target className="mega-item-icon" size={20} />
                    <span>Target Test</span>
                  </Link>
                  <Link href="/#courses" className="mega-menu-item">
                    <History className="mega-item-icon" size={20} />
                    <span>Past Papers</span>
                  </Link>

                  <Link href="/#courses" className="mega-menu-item">
                    <Calendar className="mega-item-icon" size={20} />
                    <span>Study Planner</span>
                  </Link>
                </div>

                <div className="mega-menu-divider">
                  <div className="mega-menu-subhead">Made for teachers & parents</div>
                  <Link href="/#courses" className="mega-menu-item">
                    <FilePlus2 className="mega-item-icon" size={20} />
                    <span>Test Builder</span>
                    <span className="badge-new-red">New</span>
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li className="motion-nav-item">
            <Link href="/#testimonials">Results</Link>
          </li>
          
          {/* Meet Anu Dedicated Route Link */}
          <li className="motion-nav-item">
            <Link href="/meet-anu">Meet Anu</Link>
          </li>

          <li className="motion-nav-item">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

      </div>
    </header>
  );
}
