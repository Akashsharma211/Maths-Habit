'use client';

import { useState } from 'react';
import { ArrowUpRight, BookOpen, Award, Users, Sparkles } from 'lucide-react';

export default function CoursesSection({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('IGCSE_EXTENDED');

  const courseData = {
    IGCSE_EXTENDED: [
      {
        id: 1,
        code: 'Cambridge 0580 / 0980',
        title: 'IGCSE Extended Mathematics',
        description: 'Comprehensive Paper 2 & 4 preparation, step-by-step situation sheets, and Cambridge examiner mark-scheme mastery.',
        level: 'Grades 9 & 10 • Extended Tier'
      },
      {
        id: 2,
        code: 'Cambridge 0580 Core',
        title: 'Cambridge IGCSE Core Mathematics',
        description: 'Zero-fear conceptual foundations, core algebraic clarity, and structured homework feedback for guaranteed grade improvement.',
        level: 'Grades 9 & 10 • Core Foundation'
      },
      {
        id: 3,
        code: '10-Yr Past Papers',
        title: '10-Year IGCSE Past Paper Sprint',
        description: 'Intensive topical exam question drills, speed calculation shortcuts, and complete timed mock paper assessments.',
        level: 'Target: A* & Grade 9 Speed'
      }
    ],
    IGCSE_ADDITIONAL: [
      {
        id: 4,
        code: 'Cambridge 0606',
        title: 'Cambridge IGCSE Additional Math',
        description: 'Deep dive into calculus, trigonometry, kinematics, vectors, and advanced proofs for high-scoring students.',
        level: 'Grades 9 & 10 • Advanced Tier'
      },
      {
        id: 5,
        code: 'Edexcel 4MA1 / 4PM1',
        title: 'Edexcel International GCSE Math',
        description: 'Higher Tier & Pure Math specification coverage, customized problem sets, and individual doubt resolution.',
        level: 'Higher Tier & Pure Math'
      },
      {
        id: 6,
        code: 'Distinction Club',
        title: 'IGCSE Fast-Track Distinction Club',
        description: 'Challenging multi-step synthesis word problems, high-order thinking questions, and top 1% global rank prep.',
        level: 'Top 1% Global Distinction'
      }
    ],
    CAMBRIDGE_CHECKPOINT: [
      {
        id: 7,
        code: 'Checkpoint Stage 9',
        title: 'Lower Secondary Checkpoint (Grade 8)',
        description: 'Complete bridge syllabus and Cambridge Progression test preparation for a seamless transition into IGCSE.',
        level: 'Grade 8 • Pre-IGCSE Bridge'
      },
      {
        id: 8,
        code: 'Checkpoint Stage 8',
        title: 'Cambridge Lower Secondary (Grade 7)',
        description: 'Algebra, geometric reasoning, and proportional thinking taught with intuitive real-world examples.',
        level: 'Grade 7 • Core Concept Batch'
      },
      {
        id: 9,
        code: 'Checkpoint Stage 7',
        title: 'Cambridge Primary to Secondary (Grade 6)',
        description: 'Mental math agility, 0-fear mathematical logic, and small interactive batches capped for individual care.',
        level: 'Grade 6 • Foundation Builder'
      }
    ]
  };

  const currentCourses = courseData[activeCategory] || courseData['IGCSE_EXTENDED'];

  return (
    <section className="section courses-section-motion" id="courses">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Targeted IGCSE Pathways</span>
          </span>
          <h2 className="section-title">
            Cambridge & Edexcel <span className="highlight-teal">IGCSE Batches</span>
          </h2>
          <p className="section-subtitle">
            Structured live interactive programs meticulously designed for 100% concept mastery, past paper confidence, and A* results.
          </p>
        </div>

        {/* Segmented Filter Tabs */}
        <div className="segmented-tabs-container">
          <div className="segmented-tabs">
            <button 
              className={`seg-tab ${activeCategory === 'IGCSE_EXTENDED' ? 'active' : ''}`}
              onClick={() => setActiveCategory('IGCSE_EXTENDED')}
            >
              <BookOpen size={16} />
              <span>IGCSE Extended & Core (0580)</span>
            </button>
            <button 
              className={`seg-tab ${activeCategory === 'IGCSE_ADDITIONAL' ? 'active' : ''}`}
              onClick={() => setActiveCategory('IGCSE_ADDITIONAL')}
            >
              <Award size={16} />
              <span>IGCSE Additional Math (0606) & Edexcel</span>
            </button>
            <button 
              className={`seg-tab ${activeCategory === 'CAMBRIDGE_CHECKPOINT' ? 'active' : ''}`}
              onClick={() => setActiveCategory('CAMBRIDGE_CHECKPOINT')}
            >
              <Users size={16} />
              <span>Cambridge Checkpoint (Grades 6–8)</span>
            </button>
          </div>
        </div>

        {/* Minimal Clickable Course Cards Grid */}
        <div className="minimal-courses-grid">
          {currentCourses.map(course => (
            <div 
              key={course.id} 
              className="minimal-course-card"
              role="button"
              tabIndex={0}
              onClick={() => onOpenDemo(`${course.title} (${course.code})`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenDemo(`${course.title} (${course.code})`);
                }
              }}
            >
              
              {/* Card Top Row: Badge & Arrow */}
              <div className="minimal-card-header">
                <span className="minimal-badge">{course.code}</span>
                <div className="minimal-arrow-wrap">
                  <ArrowUpRight size={18} className="minimal-arrow-icon" />
                </div>
              </div>

              {/* Card Content */}
              <div className="minimal-card-content">
                <h3 className="minimal-card-title">{course.title}</h3>
                <p className="minimal-card-desc">{course.description}</p>
              </div>

              {/* Card Bottom Meta */}
              <div className="minimal-card-footer">
                <span className="minimal-level-tag">{course.level}</span>
                <span className="minimal-live-indicator">
                  <span className="minimal-live-dot" />
                  Live Interactive
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
